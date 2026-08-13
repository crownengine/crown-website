import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useLocation } from "@reach/router"

export default function Seo({ description, lang = "en", meta, title, image, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          org_title
          org_description
          org_tax_id
          tcf_mail_address
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
  const documentTitle = title.includes(site.siteMetadata.title)
    ? title
    : `${title} — ${site.siteMetadata.title}`
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.siteMetadata.siteUrl}/#organization`,
    name: site.siteMetadata.org_title,
    legalName: site.siteMetadata.org_title,
    url: site.siteMetadata.siteUrl,
    logo: `${site.siteMetadata.siteUrl}/favicon.png`,
    description: site.siteMetadata.org_description,
    email: site.siteMetadata.tcf_mail_address,
    taxID: site.siteMetadata.org_tax_id,
    sameAs: [
      "https://github.com/crownengine",
      "https://www.linkedin.com/company/crownengine",
      "https://mastodon.gamedev.place/@crownengine",
      "https://bsky.app/profile/crownengine.org",
    ],
  }

  return (
    <>
      <html lang={lang} />
      <title>{documentTitle}</title>
      <link rel="icon" href={faviconIcoUrl} />
      <link rel="icon" type="image/png" sizes="96x96" href={faviconPngUrl} />
      <link rel="icon" type="image/svg+xml" href={faviconSvgUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:title" content={documentTitle} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImage} />
      <meta name="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content={site.siteMetadata.x_handle} />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="fediverse:creator" content="@crownengine@mastodon.gamedev.place" />
      <link rel="me" href="https://mastodon.gamedev.place/@crownengine" />
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
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
