import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

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
    <footer className="bg-gray-50 px-6 lg:px-8 py-8">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8">
        <div>
          <h5 className="text-md font-semibold uppercase">Crown</h5>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dbartolini/crown/releases/latest"
                className="text-blue-900 hover:text-pochinki-800"
              >
                Download
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dbartolini/crown/"
                className="text-blue-900 hover:text-pochinki-800"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://dbartolini.github.io/crown/html/latest/"
                className="text-blue-900 hover:text-pochinki-800"
              >
                Manual
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-blue-900 hover:text-pochinki-800"
              >
                License
              </a>
            </div>
          </nav>
        </div>
        <div>
          <h5 className="text-md font-semibold uppercase">Organization</h5>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-blue-900 hover:text-pochinki-800 "
              >
                Foundation
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-blue-900 hover:text-pochinki-800"
              >
                Support
              </a>
            </div>
          </nav>
        </div>
        <div>
          <h5 className="text-md font-semibold uppercase">Website</h5>
          <nav className="mt-4">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-blue-900 hover:text-pochinki-800"
              >
                About
              </a>
              <Link
                className="lg:mt-0 text-blue-900 hover:text-pochinki-800"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="lg:mt-0 text-blue-900 hover:text-pochinki-800"
                to="/cookie-policy"
              >
                Cookie Policy
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center mt-16">
        <div className="flex items-center space-x-2">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/"
          >
            <i className="fab fa-github fa-2x text-pochinki-800 hover:text-pochinki-700"></i>
          </a>
        </div>
        <div className="flex flex-row text-sm mt-4">
          &copy;{new Date().getFullYear()} {data.site.siteMetadata.org_title}
          <a
            className="ml-4"
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            <img
              alt="Creative Commons License"
              src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
