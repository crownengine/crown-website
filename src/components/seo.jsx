import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Seo({ description, lang, meta, title, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          x_handle
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content={site.siteMetadata.x_handle} />
      <meta name="twitter:title" content={title} />
      {children}
    </>
  )
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
