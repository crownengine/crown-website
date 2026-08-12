import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useLocation } from '@reach/router';

export default function Seo({ description, lang = "en", meta, title, image, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          x_handle
          image
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const metaImage = site.siteMetadata.siteUrl + (image || site.siteMetadata.image)
  const canonicalUrl = `${site.siteMetadata.siteUrl}${useLocation().pathname}`
  const faviconIcoUrl = `${site.siteMetadata.siteUrl}/favicon.ico`
  const faviconPngUrl = `${site.siteMetadata.siteUrl}/favicon.png`
  const faviconSvgUrl = `${site.siteMetadata.siteUrl}/favicon.svg`

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <link rel="icon" href={faviconIcoUrl} />
      <link rel="icon" type="image/png" sizes="96x96" href={faviconPngUrl} />
      <link rel="icon" type="image/svg+xml" href={faviconSvgUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImage} />
      <meta name="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content={site.siteMetadata.x_handle} />
      <meta name="twitter:title" content={title} />
      <meta name="fediverse:creator" content="@crownengine@mastodon.gamedev.place" />
      <link rel="me" href="https://mastodon.gamedev.place/@crownengine" />
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
