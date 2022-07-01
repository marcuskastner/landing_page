import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/organism/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
