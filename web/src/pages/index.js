import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/organism/Hero"
import About from "../components/organism/About"
import Work from "../components/organism/Work"
import Nav from "../components/organism/Nav"
import "../components/styles/module.index.css"
import Contact from "../components/organism/Contact"

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Seo title="MK" />
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
    </Wrapper>
  </Layout>
)

export default IndexPage

const Wrapper = tw.div`max-w-[1400px] bg-[rgb(14,31,51,0.5)]`
