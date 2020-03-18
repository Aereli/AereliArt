import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Painting from "../components/painting"
import paintings from "../styles/paintings.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Home</Link>
    <Painting />
  </Layout>
)

export default SecondPage
