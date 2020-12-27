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
    <footer className="flex flex-wrap items-center justify-between p-4">
      <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
        © {new Date().getFullYear()} {data.site.siteMetadata.org_title}
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div className="mx-auto lg:mx-0 lg:ml-auto"></div>
        <div className="flex justify-center space-x-6 mt-4 lg:mt-0 lg:ml-8">
          <Link
            className="lg:mt-0 text-blue-900 hover:text-pochinki-800"
            to="/privacy_policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="lg:mt-0 text-blue-900 hover:text-pochinki-800"
            to="/terms_of_service"
          >
            Terms of Service
          </Link>
          <a
            rel="noreferrer"
            target="_blank"
            href={`mailto:${data.site.siteMetadata.tcf_mail_address}`}
          >
            <i className="fas fa-lg fa-envelope text-pochinki-800"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
