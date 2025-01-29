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
        }
      }
    }
  `)

  return (
    <div className="bg-bannerImage bg-left-top bg-cover">
      <div className="bg-blackOverlay">
        <Clamp>
          <section className="py-32 px-4">
            <h1 className="text-6xl mt-24 mb-6 font-bold text-gray-200">
              {data.site.siteMetadata.subtitle}
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              Crown is a complete and cross-platform game engine
              <br />
              designed for flexibility, performance and fast-iterations.
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
