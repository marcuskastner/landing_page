/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { GlobalStyles } from "twin.macro"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout
