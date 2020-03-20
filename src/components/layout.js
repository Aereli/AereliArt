/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 1260,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display: `flex`,
            flexDirection: `column`,
            width: `100vw`,
            textAlign: `center`,
            margin: `1.5rem`,
          }}
        >
          © {new Date().getFullYear()}, I'm also a developer, built with
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            style={{
              textDecoration: `none`,
            }}
          >
            {" "}
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
