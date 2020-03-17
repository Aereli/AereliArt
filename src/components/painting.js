import React from "react"
// import { StaticQuery } from "gatsby"
// import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"

// import Img from "gatsby-image"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Painting = ({ data }) => (
  <section>
    <p>this is some text from the painting page</p>
    <Img fluid={data.allFile.edges.childImageSharp.fluid} alt="test2" />
  </section>
)

Painting.propTypes = {
  data: PropTypes.object.isRequired,
}

export const paintingQuery = graphql`
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
              # base64
              # tracedSVG
              # srcWebp
              # srcSetWebp
              # originalImg
              # originalName
              # presentationWidth
              # presentationHeight
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Painting
