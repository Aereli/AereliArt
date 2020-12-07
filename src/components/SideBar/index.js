import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.module.scss"

const Header = () => (
  <div>
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Link to="/">
          A<span>e</span>reli
        </Link>
      </h1>
      <ul className={styles.sideLinks}>
        <li>
          <Link to="/works">Work</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
