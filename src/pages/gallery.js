import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({ data }) => (
  <Layout>
    <SEO title="Image Gallery" />
    <h1>Images</h1>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="test2" />
    <Img fixed={data.testImage.childImageSharp.fixed} alt="test" />
  </Layout>
)

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    testImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(width: 512) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Gallery
