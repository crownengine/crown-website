import { Link } from "gatsby"
import React from "react"
import Clamp from "./clamp"
import DonateButton from "../components/donate-button"
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {
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
      <nav className="flex flex-wrap items-center justify-between py-2">
        {/* Logo */}
        <div className="px-4">
          <Link className="header-logo h-10 w-24 lg:w-36" to="/"></Link>
        </div>

        <div className="block lg:hidden px-4">
          <button
            className="navbar-burger flex items-center py-2 px-4 text-indigo-500 dark:text-indigo-200rounded border border-indigo-500"
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
        <div className="navbar-menu hidden w-full lg:block lg:w-auto px-4 text-blue-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-50">
          <ul className="flex flex-col lg:flex-row">
            {menu_items.map(item => {
              if (item.label === "Donate") {
                return (
                  <li><DonateButton/></li>
                )
              }

              const is_external = !item.link.startsWith("/")

              return (
                <li>
                  {is_external ? (
                    <a
                      className="block py-2 pr-4 pl-3"
                      activeClassName="border-b-2 border-indigo-600"
                      rel="noreferrer"
                      target="_blank"
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="block py-2 pr-4 pl-3"
                      activeClassName="border-b-2 border-indigo-600"
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
