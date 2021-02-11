import { Link } from "gatsby"
import React from "react"

export default function Header() {
  function menuClick() {
    const dropdowns = document.querySelectorAll(".navbar-menu")
    dropdowns.forEach(dropdown => dropdown.classList.toggle("hidden"))
  }

  return (
    <header>
      <nav className="flex flex-wrap items-start justify-between p-4">
        <div className="lg:order-2">
          <Link className="header-logo h-20 lg:w-44 w-36" to="/"></Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="navbar-burger flex items-center py-2 px-3 text-indigo-500 dark:text-indigo-200  rounded border border-indigo-500"
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
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/releases/latest"
            onClick={_e => {
              window.gtag("event", "click", {
                category: "Download Button",
                action: "Click",
              })
            }}
          >
            Download
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/"
          >
            Source
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50"
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
