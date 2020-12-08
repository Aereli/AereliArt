import React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./styles.module.scss"
import Img from "gatsby-image"
import Modal from "react-modal"
Modal.setAppElement("*")

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [image, setImage] = useState(null)

  const handleClick = event => {
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
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: `80%`,
      hieght: `80%`,
    },
  }

  return (
    <div className={styles.container}>
      {query.allFile.edges.map(edge => (
        <div
          role="button"
          tabIndex={0}
          className={styles.singlePainting}
          key={edge.node.id}
          onClick={() => handleClick(edge.node.childImageSharp.fluid)}
          onKeyDown={() => handleClick(edge.node.childImageSharp.fluid)}
        >
          <Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.name} />
        </div>
      ))}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
      >
        <button
          className={styles.modalButton}
          onClick={() => setModalOpen(false)}
        >
          X
        </button>
        <Img fluid={image} key={image} />
      </Modal>
    </div>
  )
}

export default Gallery
