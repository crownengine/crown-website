import { graphql, Link, useStaticQuery } from "gatsby"
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

    if (themeValue) setTheme(themeValue)
  }, [])

  function toggleTheme() {
    if (theme === null || theme === "light") {
      setTheme("dark")
      document.querySelector("html").classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      document.querySelector("html").classList.remove("dark")
      localStorage.setItem("theme", "light")
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
    <footer className="container center mx-auto lg:w-5/11">
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-semibold uppercase mt-0 text-sm sm:text-left text-center">
            Crown
          </h1>
          <nav className="mt-4">
            {/* Crown */}
            <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
              <a
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
                rel="noreferrer"
                target="_blank"
                href="https://crownengine.github.io/crown/html/latest/"
              >
                Manual
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/crownengine/crown/"
              >
                Source
              </a>
              <Link
                className=""
                to="/crown-license"
              >
                License
              </Link>
            </div>
          </nav>
        </div>
        {/* <div>
          <h1 className="font-semibold uppercase mt-0 text-sm sm:text-left text-center">Organization</h1>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2 sm:text-left text-center">
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

        {/* About */}
        <div className="flex-1">
          <h1 className="font-semibold uppercase mt-0 text-sm sm:text-left text-center">
            Website
          </h1>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
              <Link
                to="/website-about"
              >
                About
              </Link>
              <Link
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
              >
                Cookie Policy
              </Link>
            </div>
          </nav>
        </div>

        {/* Follow Crown */}
        <div className="flex-1">
          <h1 className="font-semibold uppercase mt-0 text-sm sm:text-left text-center">
            Follow Crown
          </h1>
          <nav className="mt-4">
          <div className="flex flex-col space-y-2 sm:text-left text-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/crownengine/crown/"
                title="GitHub"
              >
                <i className="fab fa-github mr-2"></i>
                GitHub
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/invite/CeXVWCT"
                title="Discord"
              >
                <i className="fab fa-discord mr-2"></i>
                Discord
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com/crown_engine"
                title="Twitter"
              >
                <i className="fab fa-twitter mr-2"></i>
                Twitter
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://trello.com/b/h88kbJNm/crown/"
                title="Trello"
              >
                <i className="fab fa-trello mr-2"></i>
                Trello
              </a>
              {/* Uncomment when content will be available.
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCmvDFWrznsSzStSvwqWaJJQ"
                title="YouTube"
              >
                <i className="fab fa-youtube mr-2"></i>
                YouTube
              </a>
*/}
            </div>
          </nav>
        </div>
      </div>

      {/* Footer */}
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
