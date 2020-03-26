import React from "react"
import { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import "../styles/paintings.css"
import Img from "gatsby-image"

export default props => {
  const [enlarge, setEnlarge] = useState(true)

  const handleClick = e => {
    // const id = e.currentTarget.value("id")
    console.log(props)
    setEnlarge(!enlarge)
  }
  return (
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
          <div
            className={enlarge ? "paintings-container" : "enlarge-painting"}
            onClick={e => handleClick(e)}
            // id={console.log(`the unique id is ${data.allFile.edges.node}`)}
            id={data.allFile.edges.map(edge => edge.node.id)}
          >
            {data.allFile.edges.map(edge => (
              <Img
                className={enlarge ? "paintings-container" : "enlarge-painting"}
                onClick={e => handleClick(e)}
                fluid={edge.node.childImageSharp.fluid}
                // id={console.log(`the unique id is ${edge.node.id}`)}
                id={edge.node.id}
                // onClick={console.log(edge.node.id)}
              />
            ))}
          </div>
        )}
      />
    </section>
  )
}
