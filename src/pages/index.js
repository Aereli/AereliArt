import React from "react"
import Layout from "../components/Layout/index.js"
import SEO from "../components/seo"
import Hero from "../components/Hero/index.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: `center`, color: `white` }}>
      <p>Page under construction</p>
      <p>last update: 12/8/20</p>
    </div>
    <Hero />
  </Layout>
)

export default IndexPage
