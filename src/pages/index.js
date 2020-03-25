import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
// import Modal from "../components/modalExample"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    {/* <Modal /> */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
