import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../styles/paintings.css"

import Img from "gatsby-image"

export default () => (
  <section>
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <div className="paintings-container">
          {data.allFile.edges.map(edge => (
            <Img
              className="paintings"
              fluid={edge.node.childImageSharp.fluid}
            />
          ))}
        </div>
      )}
    />
  </section>
)
