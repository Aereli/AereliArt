import React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/paintings.css"
import Img from "gatsby-image"
import Modal from "react-modal"
Modal.setAppElement("*")

const Painting = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [image, setImage] = useState(null)

  const handleClick = event => {
    // console.log(event)
    setModalOpen(true)
    setImage(event)
  }

  const query = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "paintings" }
        }
      ) {
        edges {
          node {
            id
            name
            birthTime
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="paintings-container">
      {query.allFile.edges.map(edge => (
        <div
          className="individual-painting"
          key={edge.node.id}
          onClick={() => handleClick(edge.node.childImageSharp.fluid)}
        >
          <Img fluid={edge.node.childImageSharp.fluid} />
        </div>
      ))}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: { backgroundColor: `black` },
        }}
      >
        <button className="modal-button" onClick={() => setModalOpen(false)}>
          X
        </button>
        <Img fluid={image} key={image} />
      </Modal>
    </div>
  )
}

export default Painting2
