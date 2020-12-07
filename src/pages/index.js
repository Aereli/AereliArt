import React from "react"
import Layout from "../components/Layout/index.js"
import SEO from "../components/seo"
import Hero from "../components/Hero/index.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
