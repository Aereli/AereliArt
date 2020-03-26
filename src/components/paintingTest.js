import React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/paintings.css"
import Img from "gatsby-image"
import Modal from "react-modal"

const Painting2 = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = eventId => {
    console.log(eventId)
    setModalOpen(true)
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
        <button id={edge.node.id} onClick={() => handleClick(edge.node.id)}>
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
        <p>{eventId}</p>
      </Modal>
    </div>
  )
}

export default Painting2
