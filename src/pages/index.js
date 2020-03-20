import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Nav />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
