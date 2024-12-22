import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Clamp from "./clamp"

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
              <Link
                className="inline-block py-4 px-8 mb-2 leading-none text-gray-200 hover:text-white dark:text-black bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded shadow"
                to="/download"
              >
                Download Crown
              </Link>
            </div>
          </section>
        </Clamp>
      </div>
    </div>
  )
}
