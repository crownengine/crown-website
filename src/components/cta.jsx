import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Clamp from "./clamp"

export default function Cta() {
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
    <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover py-16">
    <Clamp>
    <section className="py-12 px-4 text-center">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-5xl mt-2 mb-2 leading-tight font-semibold text-gray-200">
          {data.site.siteMetadata.subtitle}
        </h1>
        <p className="mb-10 text-xl text-gray-200 leading-relaxed">
          Crown is a general purpose and data-driven game engine, written in
          orthodox C++ with a minimalistic and data-oriented design philosophy
          in mind.{" "}
          <a
            className="text-gray-200 font-bold hover:underline"
            rel="noreferrer"
            target="_blank"
            href="https://crownengine.github.io/crown/html/latest/introduction.html"
          >
            Learn more...
          </a>
        </p>

        <div className="text-2xl">
          <Link
            className="inline-block py-4 px-8 mb-2 leading-none text-gray-200 hover:text-white dark:text-black bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded shadow"
            to="/download"
          >
            Download Crown
          </Link>
        </div>

        <div className="mb-10">
          <ul className="flex space-x-2 justify-center text-lg">
            <li>
              <a
                className="text-gray-200 hover:underline font-bold"
                rel="noreferrer"
                target="_blank"
                href="https://crownengine.github.io/crown/html/latest/changelog.html"
              >
                What's New?
              </a>
            </li>
          </ul>
        </div>

        <div className="flex place-content-center mb-10">
          <iframe title="ghbtns-stars" src="https://ghbtns.com/github-btn.html?user=crownengine&repo=crown&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
          <iframe title="ghbtns-forks" src="https://ghbtns.com/github-btn.html?user=crownengine&repo=crown&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>

      </div>
    </section>
    </Clamp>
    </div>
  )
}
