import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Painting from "../components/painting"
import Painting from "../components/paintings"
import "../styles/page-2.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <div className="left-side">
        <Link className="home-link" to="/">
          Home
        </Link>
      </div>
      <div className="right-side">
        {/* <Painting /> */}
        <Painting />
      </div>
    </div>
  </Layout>
)

export default SecondPage
