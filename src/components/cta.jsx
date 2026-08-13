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
    <div className="relative mb-16 overflow-hidden bg-gray-950">
      <StaticImage
        className="!absolute inset-0 h-full w-full"
        imgClassName="object-cover"
        src="../images/index/crown-editor.jpeg"
        alt=""
        aria-hidden="true"
        loading="eager"
        placeholder="dominantColor"
        quality={75}
        formats={["auto", "webp", "avif"]}
      />
      <div className="absolute inset-0 bg-blackOverlay"></div>

      <Clamp>
        <section className="relative py-32 px-4">
          <h1 className="text-[5rem] mt-24 mb-4 font-extrabold text-gray-100">
            {data.site.siteMetadata.subtitle}
          </h1>
          <p className="text-2xl mb-4 text-gray-100 max-w-4xl">
            {data.site.siteMetadata.description}
          </p>
          <div className="flex flex-wrap gap-4 text-2xl">
            <DownloadButton>Download Crown</DownloadButton>
            <Link
              className="inline-block rounded border border-gray-300 px-8 py-2 font-semibold text-gray-100 transition hover:border-white hover:bg-white/10 hover:text-white"
              to="/news/crown-0-64"
            >
              Learn More
            </Link>
          </div>
        </section>
      </Clamp>
    </div>
  )
}
