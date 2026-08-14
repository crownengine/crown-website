import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Clamp from "./clamp"
import DownloadButton from "../components/download-button"

export default function Cta() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          subtitle
          description
        }
      }
    }
  `)

  return (
    <div className="relative mb-16 overflow-hidden bg-deepest">
      <StaticImage
        className="!absolute inset-0 h-full w-full"
        imgClassName="object-cover"
        src="../images/index/crown-editor.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        placeholder="dominantColor"
        quality={90}
        formats={["auto", "webp"]}
      />
      <Clamp>
        <section className="relative py-32 px-4">
          <h1 className="mt-24 text-display font-bold leading-none text-inverse">
            {data.site.siteMetadata.subtitle}
          </h1>
          <p className="mb-6 max-w-4xl text-title text-inverse">
            {data.site.siteMetadata.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <DownloadButton>Download Crown</DownloadButton>
            <Link className="button button-inverse" to="/news/crown-0-64">
              See Highlights
            </Link>
          </div>
        </section>
      </Clamp>
    </div>
  )
}
