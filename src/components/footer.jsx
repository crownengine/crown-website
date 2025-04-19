import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Clamp from "./clamp"
import DonateButton from "../components/donate-button"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          org_title
          tcf_mail_address
        }
      }
    }
  `)

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
                <Link className="" to="/download">
                  Latest Crown
                </Link>
                <a rel="noreferrer" target="_blank" href="https://github.com/crownengine/crown/">
                  Source Code
                </a>
                <a rel="noreferrer" target="_blank" href="https://docs.crownengine.org/html/latest/changelog.html">
                  Changelog
                </a>
                <Link className="" to="/crown-license">
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
            <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">About</h1>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
                <Link to="/about">The Crown Foundation</Link>
                <Link to="/website-about">Website</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/cookie-policy">Cookie Policy</Link>
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
                  href="https://docs.crownengine.org"
                >
                  User Manual
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org/html/latest/hackers/index.html"
                >
                  Developer Manual
                </a>
                <a rel="noreferrer" target="_blank" href="https://discord.gg/invite/CeXVWCT">
                  Community
                </a>
              </div>
            </nav>
          </div>

          {/* Follow Crown */}
          <div className="flex-1">
            <h1 className="font-semibold uppercase pb-1 text-sm sm:text-left text-center">
              Follow Crown
            </h1>
            <nav className="mb-2">
              <div className="flex flex-row sm:text-left text-lg text-center text-indigo-600">
                <a className="hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/crownengine/crown/"
                  title="Crown Official GitHub page"
                >
                  <i className="fab fa-github mr-3"></i>
                </a>
                <a className="hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/invite/CeXVWCT"
                  title="Join Crown on Discord"
                >
                  <i className="fab fa-discord mr-3"></i>
                </a>
                <a className="hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.twitter.com/crown_engine"
                  title="Follow Crown on X"
                >
                  <i className="fab fa-x-twitter mr-3"></i>
                </a>
                <a className="hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50"
                  rel="noreferrer"
                  target="_blank"
                  href="https://bsky.app/profile/crownengine.org"
                  title="Follow Crown on Bluesky"
                >
                  <i className="fab fa-bluesky mr-3"></i>
                </a>
                {/* Uncomment when content will be available.
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCmvDFWrznsSzStSvwqWaJJQ"
                title="YouTube"
              >
                <i className="fab fa-youtube mr-2"></i>
              </a>
*/}
              </div>
            </nav>
            {/* Donate */}
            <h1 className="mt-4 font-semibold uppercase pb-1 text-sm sm:text-left text-center">
              Support Crown
            </h1>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 sm:text-left text-center lg:mt-0 text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-50">
                <DonateButton></DonateButton>
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
