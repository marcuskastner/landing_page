import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/organism/Hero"
import About from "../components/organism/About"
import Work from "../components/organism/Work"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
