import { Link } from "gatsby"
import React, { useState } from "react"
import Clamp from "./clamp"
import DonateButton from "../components/donate-button"
import { useStaticQuery, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa6"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <Clamp>
      <nav
        className="relative flex flex-wrap items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <div className="px-4">
          <Link
            className="header-logo h-10 w-24 lg:w-36"
            to="/"
            aria-label="Crown Engine home"
          ></Link>
        </div>

        <div className="block lg:hidden px-4">
          <button
            className="button button-secondary button-compact navbar-burger my-2"
            onClick={() => setIsOpen(open => !open)}
            aria-label="Menu"
            aria-controls="primary-navigation"
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

        {/* Main menu */}
        <div
          id="primary-navigation"
          className={`${isOpen ? "block" : "hidden"} absolute left-0 top-full z-50 w-full bg-canvas px-4 text-ink lg:static lg:z-auto lg:block lg:w-auto lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row">
            {menu_items.map((item, index) => {
              if (item.label === "Donate") {
                return (
                  <li
                    key={index}
                    className="border-b border-line hover:text-brand-hover lg:border-b-0"
                  >
                    <Link
                      className="block py-4 pl-2 pr-2 lg:hidden"
                      activeClassName="font-semibold text-brand"
                      partiallyActive={true}
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaHeart className="mr-2 inline" aria-hidden="true" />
                      {item.label}
                    </Link>
                    <div className="hidden py-2 pl-2 pr-2 lg:block">
                      <DonateButton />
                    </div>
                  </li>
                )
              }

              const is_external = !item.link.startsWith("/")

              return (
                <li
                  key={index}
                  className="border-b border-line hover:text-brand-hover lg:border-b-0"
                >
                  {is_external ? (
                    <a
                      className="block py-4 pl-2 pr-2"
                      rel="noreferrer"
                      target="_blank"
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="block py-4 pl-2 pr-2"
                      activeClassName="font-semibold text-brand"
                      partiallyActive={true}
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
      </nav>
    </Clamp>
  )
}
