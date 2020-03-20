import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={
      {
        // background: `rebeccapurple`,
        // marginBottom: `1.45rem`,
      }
    }
  >
    <div
      style={{
        // margin: `0 auto`,
        marginLeft: `15%`,
        maxWidth: 960,
        padding: `2.5vh 2.5vh`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            display: `flex`,
            justifyContent: `flex-start`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
