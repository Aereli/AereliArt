import React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/paintings.css"
import Img from "gatsby-image"
import Modal from "react-modal"
Modal.setAppElement("*")

const Painting2 = () => {
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
        <button
          id={edge.node.id}
          onClick={() => handleClick(edge.node.childImageSharp.fluid)}
        >
          <Img fluid={edge.node.childImageSharp.fluid} />
        </button>
      ))}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: { backgroundColor: `grey` },
        }}
      >
        <h1>this is inside the modal</h1>
        <Img fluid={image} />
      </Modal>
    </div>
  )
}

export default Painting2
