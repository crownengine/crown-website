import { graphql, Link, useStaticQuery } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import React, { useEffect, useState } from "react"

export default function Footer() {
  const [theme, setTheme] = useState("light")

  function _isThemeKeyValid(value) {
    if (value === null) return true
    return typeof value === "string" && (value === "light" || value === "dark")
  }

  useEffect(() => {
    let themeValue = localStorage.getItem("theme")
    if (!_isThemeKeyValid(themeValue)) themeValue = "light"
    if (
      themeValue === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      themeValue = "dark"
    }

    setTheme(themeValue)
  }, [])

  function toggleTheme() {
    if (theme === null || theme === "dark") {
      setTheme("light")
      document.querySelector("html").classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      setTheme("dark")
      document.querySelector("html").classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            org_title
            tcf_mail_address
          }
        }
      }
    `
  )

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 px-6 lg:px-8 py-8 text-sm">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:px-8">
        <div>
          <h1 className="font-semibold uppercase mt-0 text-sm text-left">
            Crown
          </h1>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dbartolini/crown/releases/latest"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                onClick={_e => {
                  trackCustomEvent({
                    category: "Download Button",
                    action: "Click",
                  })
                }}
              >
                Download
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dbartolini/crown/"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://dbartolini.github.io/crown/html/latest/"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
              >
                Manual
              </a>
              <Link
                className="lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                to="/crown-license"
              >
                License
              </Link>
            </div>
          </nav>
        </div>
        {/* <div>
          <h1 className="font-semibold uppercase mt-0 text-sm text-left">Organization</h1>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
              >
                Foundation
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
              >
                Support
              </a>
            </div>
          </nav>
        </div> */}
        <div>
          <h1 className="font-semibold uppercase mt-0 text-sm text-left">
            Website
          </h1>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2">
              <Link
                className="lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                to="/website-about"
              >
                About
              </Link>
              <Link
                className="lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                to="/cookie-policy"
              >
                Cookie Policy
              </Link>
            </div>
          </nav>
        </div>
        <div>
          <h1 className="font-semibold uppercase mt-0 text-sm text-left">
            Follow Crown
          </h1>
          <nav className="mt-4">
            <div className="flex space-x-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dbartolini/crown/"
                title="GitHub"
              >
                <i className="fab fa-github fa-2x text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"></i>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/CeXVWCT/"
                title="Discord"
              >
                <i className="fab fa-discord fa-2x text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"></i>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://trello.com/b/h88kbJNm/crown/"
                title="Trello"
              >
                <i className="fab fa-trello fa-2x text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center mt-4">
        <div className="flex flex-row mt-4 place-items-center space-x-3">
          &copy;{new Date().getFullYear()} {data.site.siteMetadata.org_title}
          <Link
            className="lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50 ml-4"
            to="/website-about"
          >
            <img
              alt="Creative Commons License"
              width="80"
              height="15"
              src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
            />
          </Link>
          <button
            type="button"
            className={`fas ${
              theme === "dark" ? "fa-moon" : "fa-sun"
            } fa-lg text-indigo-600 dark:text-indigo-200`}
            title="Switch theme"
            onClick={toggleTheme}
          >
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
