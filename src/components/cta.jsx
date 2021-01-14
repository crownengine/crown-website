import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics"
import React, { useEffect, useState } from "react"

export default function CTA() {
  const [crown_version, setCrownVersion] = useState()

  useEffect(() => {
    fetch("https://api.github.com/repos/dbartolini/crown/releases/latest")
      .then(res => res.json())
      .then(
        result => {
          setCrownVersion(result.tag_name)
        },
        _error => {
          setCrownVersion(null)
        }
      )
  })

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subtitle
          }
        }
      }
    `
  )

  return (
    <section className="py-12 px-4 text-center">
      <div className="w-full max-w-2xl mx-auto">
        {/* <span className="text-sm font-semibold">CROWN ENGINE</span> */}
        <h2 className="text-5xl mt-2 mb-6 leading-tight font-semibold">
          {data.site.siteMetadata.subtitle}
        </h2>
        <p className="mb-4 text-lg text-gray-500 dark:text-gray-50 leading-relaxed">
          Crown is a general purpose and data-driven game engine, written in
          orthodox C++ with a minimalistic and data-oriented design philosophy
          in mind.
        </p>
        <p className="mb-8 text-lg text-gray-500 dark:text-gray-50 leading-relaxed">
          Crown isn't tied to a particular game type or genre but instead it
          offers a set of generic primitives and facilities to help you create a
          wide gamut of interactive 2D and 3D products.
        </p>
        <div>
          <OutboundLink
            className="inline-block py-4 px-8 mb-2 leading-none text-white hover:text-white dark:text-black bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-200 dark:hover:bg-indigo-50 font-semibold rounded shadow"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/releases/latest"
            onClick={_e => {
              trackCustomEvent({
                category: "Download Button",
                action: "Click",
              })
            }}
          >
            Download Crown {crown_version}
          </OutboundLink>
        </div>
        <div>
          <a
            className="text-indigo-600 hover:underline dark:text-indigo-200"
            rel="noreferrer"
            target="_blank"
            href="https://dbartolini.github.io/crown/html/latest/introduction.html"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
