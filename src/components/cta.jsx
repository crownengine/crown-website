import { graphql, useStaticQuery } from "gatsby"
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
        <p className="text-gray-400 leading-relaxed">
          Crown is a general purpose data-driven game engine, written from
          scratch in orthodox C++ with a minimalistic and data-oriented design
          philosophy in mind.
        </p>
        <p className="mb-8 text-gray-400 leading-relaxed">
          It is loosely inspired by Bitsquid (now Stingray) engine and its
          design principles; the current Lua API is similar to that of Bitsquid
          but this engine is not meant to be its clone nor to be API compatible
          with it.
        </p>
        <div>
          <a
            className="inline-block py-4 px-8 mb-2 leading-none text-white bg-pochinki-800 hover:bg-pochinki-700 font-semibold rounded shadow"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/releases/latest"
          >
            Download Crown {crown_version}
          </a>
        </div>
        <div>
          <a
            className="text-pochinki-800 hover:underline"
            rel="noreferrer"
            target="_blank"
            href="https://dbartolini.github.io/crown/html/latest/"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
