import { Link } from "gatsby"
import React from "react"
import Clamp from "./clamp"
import DonateButton from "../components/donate-button"
import { useStaticQuery, graphql } from "gatsby"

export default function AboutMenu() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menu {
            label
            link
          }
        }
      }
    }
  `)

  const menu_items = data.site.siteMetadata.menu

  function menuClick() {
    const dropdowns = document.querySelectorAll(".navbar-menu")
    dropdowns.forEach(dropdown => dropdown.classList.toggle("hidden"))
  }

  return (
    <Clamp>
      <nav className="flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="px-4">
          <Link className="header-logo h-10 w-24 lg:w-36" to="/"></Link>
        </div>

        <div className="block lg:hidden px-4">
          <button
            className="navbar-burger flex items-center py-2 px-4 text-indigo-500 border border-indigo-500"
            onClick={menuClick}
            aria-label="Menu"
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

        {/* Main menu */}
        <div className="navbar-menu hidden w-full lg:block lg:w-auto px-4 text-gray-900">
          <ul className="flex flex-col lg:flex-row">
            {menu_items.map(item => {
              if (item.label === "Donate") {
                return (
                  <li className="py-2 pl-2 pr-2"><DonateButton/></li>
                )
              }

              const is_external = !item.link.startsWith("/")

              return (
                <li className="hover:text-indigo-600">
                  {is_external ? (
                    <a
                      className="block py-4 pl-2 pr-2"
                      activeClassName="border-b-4 border-indigo-600"
                      partiallyActive="true"
                      rel="noreferrer"
                      target="_blank"
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="block py-4 pl-2 pr-2"
                      activeClassName="border-b-4 border-indigo-600"
                      partiallyActive="true"
                      to={item.link}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </Clamp>
  )
}
