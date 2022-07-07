import { Link } from "gatsby"
import React from "react"
import Clamp from "./clamp"

export default function Header() {
  function menuClick() {
    const dropdowns = document.querySelectorAll(".navbar-menu")
    dropdowns.forEach(dropdown => dropdown.classList.toggle("hidden"))
  }

  return (
    <Clamp>
      <nav className="flex flex-wrap items-center justify-between py-4">
        <div className="sm:order-2">
          <Link className="header-logo h-12 sm:w-36 w-24" to="/"></Link>
        </div>
        <div className="block sm:hidden">
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
        <div className="navbar-menu hidden sm:order-3 sm:block w-full sm:w-2/3 sm:text-right text-center">
          <a
            className="block sm:inline-block mt-4 sm:mt-0 sm:mr-10 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/crownengine/crown/releases/latest"
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
            className="block sm:inline-block mt-4 sm:mt-0 sm:mr-10 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50"
            rel="noreferrer"
            target="_blank"
            href="https://crownengine.github.io/crown/html/latest/"
          >
            Manual
          </a>
          <a
            className="block sm:inline-block mt-4 sm:mt-0 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/crownengine/crown/"
          >
            Source
          </a>
        </div>
      </nav>
    </Clamp>
  )
}
