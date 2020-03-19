import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Lola = () => {
  const data = useStaticQuery(graphql`
    query {
      lolaImage: file(relativePath: { eq: "lola.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.lolaImage.childImageSharp.fluid} alt="lola" />
}

export default Lola
