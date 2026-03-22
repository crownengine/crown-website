import { graphql, useStaticQuery } from "gatsby"
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
    <div className="bg-bannerImage bg-left-top bg-cover mb-16">
      <div className="bg-blackOverlay">
        <Clamp>
          <section className="py-32 px-4">
            <h1 className="text-6xl mt-24 mb-4 font-bold text-gray-100">
              {data.site.siteMetadata.subtitle}
            </h1>
            <p className="text-2xl mb-4 text-gray-100 max-w-4xl">
              {data.site.siteMetadata.description}
            </p>
            <div className="text-2xl">
              <DownloadButton></DownloadButton>
            </div>
          </section>
        </Clamp>
      </div>
    </div>
  )
}
