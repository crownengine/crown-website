import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            tcf_mail_address
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="py-8 px-4 text-center">
        <div className="max-w-auto md:max-w-lg mx-auto">
          <img
            className="mb-8"
            src="placeholders-2-0/pictures/error.svg"
            alt=""
          />
          <h2 className="text-5xl mb-2 font-semibold">Page not found</h2>
          <p className="mb-6 text-gray-400">
            You just hit a route that doesn't exist.
          </p>
          <div>
            <Link className="px-4 text-pochinki-800 hover:underline" to="/">
              Home
            </Link>
            <a
              className="px-4 text-pochinki-800 hover:underline"
              rel="noreferrer"
              target="_blank"
              href={`mailto:${data.site.siteMetadata.tcf_mail_address}`}
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
