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
    <div className="mt-auto bg-gray-300 px-6 lg:px-8 py-20 text-sm">
      <Clamp>
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/4">
            <h1 className="font-semibold uppercase pb-1 text-sm">Download</h1>
            <nav className="mb-2">
              {/* Download */}
              <div className="flex flex-col space-y-2 lg:mt-0 text-indigo-600">
                <Link className="hover:text-indigo-800" to="/download">
                  Latest Crown
                </Link>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/crownengine/crown/"
                >
                  Source Code
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org/html/latest/changelog.html"
                >
                  Changelog
                </a>
                <Link className="hover:text-indigo-800" to="/crown-license">
                  License
                </Link>
              </div>
            </nav>
          </div>
          {/* <div>
          <h1 className="font-semibold uppercase pb-1 text-sm">Organization</h1>
          <nav className="mb-2">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Foundation
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Support
              </a>
            </div>
          </nav>
        </div> */}

          {/* About */}
          <div className="w-1/2 md:w-1/4">
            <h1 className="font-semibold uppercase pb-1 text-sm">About</h1>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-indigo-600">
                <Link className="hover:text-indigo-800" to="/about">
                  The Crown Foundation
                </Link>
                <Link className="hover:text-indigo-800" to="/about/credits">
                  Credits
                </Link>
                <Link className="hover:text-indigo-800" to="/website-about">
                  Website
                </Link>
                <Link className="hover:text-indigo-800" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="hover:text-indigo-800" to="/cookie-policy">
                  Cookie Policy
                </Link>
              </div>
            </nav>
          </div>

          {/* Support */}
          <div className="w-1/2 md:w-1/4">
            <h1 className="font-semibold uppercase pb-1 text-sm">Support</h1>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-indigo-600">
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org"
                >
                  User Manual
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org/html/latest/hackers/index.html"
                >
                  Developer Manual
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/invite/CeXVWCT"
                >
                  Community
                </a>
              </div>
            </nav>
          </div>

          {/* Follow Crown */}
          <div className="w-1/2 md:w-1/4">
            <h1 className="font-semibold uppercase pb-1 text-sm">Follow Crown</h1>
            <nav className="mb-2">
              <div className="flex flex-row text-lg text-indigo-600">
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/crownengine/crown/"
                  title="Crown Official GitHub page"
                >
                  <i className="fab fa-github mr-3" aria-label="GitHub"></i>
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/invite/CeXVWCT"
                  title="Join Crown on Discord"
                >
                  <i className="fab fa-discord mr-3" aria-label="Discord"></i>
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.twitter.com/crown_engine"
                  title="Follow Crown on X"
                >
                  <i className="fab fa-x-twitter mr-3" aria-label="X"></i>
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://bsky.app/profile/crownengine.org"
                  title="Follow Crown on Bluesky"
                >
                  <i className="fab fa-bluesky mr-3" aria-label="Bluesky"></i>
                </a>
                <a
                  className="hover:text-indigo-800"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/crownengine"
                  title="Follow Crown on LinkedIn"
                >
                  <i className="fab fa-linkedin mr-3" aria-label="LinkedIn"></i>
                </a>
                {/* Uncomment when content will be available.
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCmvDFWrznsSzStSvwqWaJJQ"
                title="YouTube"
              >
                <i className="fab fa-youtube mr-2" aria-label="YouTube"></i>
              </a>
              */}
              </div>
            </nav>
            {/* Donate */}
            <h1 className="mt-4 font-semibold uppercase pb-1 text-sm">Support Crown</h1>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-indigo-600 hover:text-indigo-700">
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
              className="lg:mt-0 text-indigo-600 hover:text-indigo-700 ml-4"
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
