import React from "react"
import styles from "./styles.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shoes.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Img fluid={query.file.childImageSharp.fluid} alt="shoes" />
    </div>
  )
}

export default Hero
