import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
          }
        }
      }
    `
  )
  const title = site.siteMetadata.title
  const description = site.siteMetadata.description
  const image = site.siteMetadata.image
  const keywords = site.siteMetadata.keywords
  const author = site.siteMetadata.author

  console.log(site)

  return (
    <Helmet htmlAttributes={{ lang: `en` }} titleTemplate={`${title}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:site_name" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={image} />
    </Helmet>
  )
}

export default SEO
