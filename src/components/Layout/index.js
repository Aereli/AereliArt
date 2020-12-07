import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/globals.scss"

import styles from "./styles.module.scss"
import SideBar from "../SideBar"

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
    <div className={styles.container}>
      <SideBar siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, built by
          <a
            href="https://www.oyanadel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Eric
          </a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
