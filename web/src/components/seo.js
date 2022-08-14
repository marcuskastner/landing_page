import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

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

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default SEO
