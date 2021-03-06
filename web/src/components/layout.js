/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GlobalStyles } from "twin.macro"
import Nav from "./organism/Nav"
import "./styles/layout.css"
import Footer from "./organism/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <div className="main_container">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
