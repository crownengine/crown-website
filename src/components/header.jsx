import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Header() {
  function menuClick() {
    const dropdowns = document.querySelectorAll(".navbar-menu")
    dropdowns.forEach(dropdown => dropdown.classList.toggle("hidden"))
  }

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-4">
        <div className="lg:order-2 w-auto lg:text-center">
          <Link className="text-xl text-indigo-600 font-semibold" to="/">
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"
            onClick={menuClick}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-700"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/releases/latest"
          >
            Download
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-700"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/"
          >
            Source
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-700"
            rel="noreferrer"
            target="_blank"
            href="https://dbartolini.github.io/crown/html/latest/"
          >
            Manual
          </a>
        </div>
      </nav>
    </header>
  )
}
