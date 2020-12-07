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

  console.log(query.file)
  return (
    <div className={styles.container}>
      {/* <h1> this the hero</h1> */}
      <div className={styles.image}>
        <Img fluid={query.file.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Hero
