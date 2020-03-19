import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Lithography = () => {
  const data = useStaticQuery(graphql`
    query {
      lithoImage: file(relativePath: { eq: "litho-plate.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.lithoImage.childImageSharp.fluid} />
}

export default Lithography
