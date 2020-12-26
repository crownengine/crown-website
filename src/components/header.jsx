import React from "react"
import { Link } from "gatsby"

function Header({ siteTitle, pageInfo }) {
  function menuClick() {}

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-4">
        <div className="lg:order-2 w-auto lg:text-center">
          <Link
            className="text-xl text-indigo-600 font-semibold font-heading"
            to="/"
          >
            The Crown Foundation
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
        {/* <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            href="#"
          >
            Products
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            href="#"
          >
            Team
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600"
            href="#faq"
          >
            FAQ
          </a>
        </div> */}
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/releases/latest"
          >
            Download
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/"
          >
            GitHub
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600"
            rel="noreferrer"
            target="_blank"
            href="mailto:foundation@crownengine.org"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
