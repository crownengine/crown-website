import { Link } from "gatsby"
import React, { useState } from "react"
import Clamp from "./clamp"
import { useStaticQuery, graphql } from "gatsby"

export default function AboutMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about_menu {
            label
            link
          }
        }
      }
    }
  `)

  const menu_items = data.site.siteMetadata.about_menu

  return (
    <nav
      className="flex flex-wrap items-center justify-between bg-dark"
      aria-label="Foundation navigation"
    >
      <div className="block lg:hidden px-4">
        <button
          className="button button-secondary button-compact navbar-burger my-2"
          onClick={() => setIsOpen(open => !open)}
          aria-label="Menu"
          aria-controls="foundation-navigation"
          aria-expanded={isOpen}
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

      <Clamp>
        {/* Main menu */}
        <div
          id="foundation-navigation"
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto px-4 text-inverse`}
        >
          <ul className="flex flex-col lg:flex-row">
            {menu_items.map((item, index) => {
              const is_external = !item.link.startsWith("/")

              return (
                <li key={index} className="hover:text-brand-hover">
                  {is_external ? (
                    <a
                      className="block py-2 pr-4 pl-3"
                      rel="noreferrer"
                      target="_blank"
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="block py-2 pr-4 pl-3"
                      activeClassName="font-semibold text-brand-light"
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </Clamp>
    </nav>
  )
}
