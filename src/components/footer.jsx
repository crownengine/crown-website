import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Clamp from "./clamp"

export default function Footer() {
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
    <div className="mt-auto bg-gray-300 dark:bg-gray-900 px-6 lg:px-8 py-8 text-sm">
    <Clamp>
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">
            Download
          </h1>
          <nav className="mb-2">
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
                Latest Crown
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/crownengine/crown/"
              >
                Source Code
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
          <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">Organization</h1>
          <nav className="mb-2">
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
          <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">
            About
          </h1>
          <nav className="mb-2">
            <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
              <Link
                to="/about"
              >
                The Crown Foundation
              </Link>
              <Link
                to="/website-about"
              >
                Website
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

        {/* Support */}
        <div className="flex-1">
          <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">
            Support
          </h1>
          <nav className="mb-2">
            <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://crownengine.github.io/crown/html/latest/"
            >
              User Manual
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://trello.com/b/h88kbJNm/crown/"
            >
              Community
            </a>
            </div>
          </nav>

        {/* Donate */}
          <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">
            Donate
          </h1>
          <nav className="mb-2">
            <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
              <Link
                to="/fund"
              >
                One-time Donations
              </Link>
            </div>
          </nav>
        </div>

        {/* Follow Crown */}
        <div className="flex-1">
          <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">
            Follow Crown
          </h1>
          <nav className="mb-2">
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
        </div>
      </div>
    </Clamp>
    </div>
  )
}
