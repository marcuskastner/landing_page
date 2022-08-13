/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GlobalStyles } from "twin.macro"
import "./styles/layout.css"
import SEO from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <div>{children}</div>
    </>
  )
}

export default Layout
