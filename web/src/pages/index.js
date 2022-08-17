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
import Footer from "../components/organism/Footer"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allSanityCard {
      edges {
        node {
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          github
          link
          tech
          title
          description
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data.allSanityCard)
  const card_data = data.allSanityCard.edges.map(cont => cont.node)
  return (
    <Layout>
      <Wrapper className="main_Container">
        <Seo title="MK" />
        <Nav />
        <Hero />
        <About />
        <Work card_data={card_data} />
        <Contact />
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

const Wrapper = tw.div`max-w-[1400px] absolute top-[-1px] left-0 w-full overflow-scroll`
