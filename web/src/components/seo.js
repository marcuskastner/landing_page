import React from "react"
import Helmet from "react-helmet"

function Seo({ site }) {
  if (typeof site === "undefined") site = { title: "MK" }
  const { title } = site

  return <Helmet title={title} />
}

export default Seo
