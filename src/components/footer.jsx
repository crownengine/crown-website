import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { FaBluesky, FaDiscord, FaGithub, FaLinkedin, FaMastodon, FaXTwitter } from "react-icons/fa6"
import Clamp from "./clamp"
import DonateButton from "../components/donate-button"

const sectionHeadingClass = "mb-3 text-small font-semibold uppercase text-muted"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          org_title
          org_tax_id
        }
      }
    }
  `)

  return (
    <footer className="mt-auto bg-surface px-6 py-16 text-small lg:px-8">
      <Clamp>
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/4">
            <h2 className={sectionHeadingClass}>Download</h2>
            <nav className="mb-2">
              {/* Download */}
              <div className="flex flex-col space-y-2 lg:mt-0 text-ink">
                <Link className="hover:text-ink" to="/download">
                  Latest Crown
                </Link>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/crownengine/crown/"
                >
                  Source Code
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org/html/latest/changelog.html"
                >
                  Changelog
                </a>
                <Link className="hover:text-ink" to="/crown-license">
                  License
                </Link>
              </div>
            </nav>
          </div>
          {/* <div>
          <h2 className="font-semibold uppercase pb-1 text-small">Organization</h2>
          <nav className="mb-2">
            <div className="flex flex-col space-y-2">
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-ink hover:text-ink"
              >
                Foundation
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="#"
                className="text-ink hover:text-ink"
              >
                Support
              </a>
            </div>
          </nav>
        </div> */}

          {/* About */}
          <div className="w-1/2 md:w-1/4">
            <h2 className={sectionHeadingClass}>About</h2>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-ink">
                <Link className="hover:text-ink" to="/about">
                  Mission & Activities
                </Link>
                <Link className="hover:text-ink" to="/about/credits">
                  Credits
                </Link>
                <Link className="hover:text-ink" to="/roadmap">
                  Roadmap
                </Link>
                <Link className="hover:text-ink" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="hover:text-ink" to="/cookie-policy">
                  Cookie Policy
                </Link>
              </div>
            </nav>
          </div>

          {/* Support */}
          <div className="w-1/2 md:w-1/4">
            <h2 className={sectionHeadingClass}>Support</h2>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-ink">
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org"
                >
                  User Manual
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org/html/latest/hackers/contributing.html"
                >
                  Developer Manual
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/invite/CeXVWCT"
                >
                  Community
                </a>
              </div>
            </nav>

            <h2 className={`mt-4 ${sectionHeadingClass}`}>News</h2>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-ink">
                <Link className="hover:text-ink" to="/news">
                  Latest News
                </Link>
                <Link className="hover:text-ink" to="/media-coverage">
                  Media Coverage
                </Link>
              </div>
            </nav>
          </div>

          {/* Follow Crown */}
          <div className="w-1/2 md:w-1/4">
            <h2 className={sectionHeadingClass}>Follow Crown</h2>
            <nav className="mb-2">
              <div className="flex flex-row text-lead text-ink">
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/crownengine/crown/"
                  title="Crown Official GitHub page"
                >
                  <FaGithub className="mr-3" aria-label="GitHub" />
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/invite/CeXVWCT"
                  title="Join Crown on Discord"
                >
                  <FaDiscord className="mr-3" aria-label="Discord" />
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.twitter.com/crown_engine"
                  title="Follow Crown on X"
                >
                  <FaXTwitter className="mr-3" aria-label="X" />
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/crownengine"
                  title="Follow Crown on LinkedIn"
                >
                  <FaLinkedin className="mr-3" aria-label="LinkedIn" />
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://mastodon.gamedev.place/@crownengine"
                  title="Follow Crown on Mastodon"
                >
                  <FaMastodon className="mr-3" aria-label="Mastodon" />
                </a>
                <a
                  className="hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                  href="https://bsky.app/profile/crownengine.org"
                  title="Follow Crown on Bluesky"
                >
                  <FaBluesky className="mr-3" aria-label="Bluesky" />
                </a>
              </div>
            </nav>
            {/* Donate */}
            <h2 className={`mt-4 ${sectionHeadingClass}`}>Support Crown</h2>
            <nav className="mb-2">
              <div className="flex flex-col space-y-2 lg:mt-0 text-ink hover:text-ink">
                <DonateButton></DonateButton>
              </div>
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="mx-auto mt-8 flex max-w-screen-xl flex-col items-center border-t border-line pt-8">
          <div className="flex flex-wrap place-items-center justify-center gap-x-3 gap-y-2">
            <span>
              &copy;{new Date().getFullYear()} {data.site.siteMetadata.org_title}
            </span>
            <span aria-hidden="true">·</span>
            <span>Tax Code/VAT No. {data.site.siteMetadata.org_tax_id}</span>
            <span aria-hidden="true">·</span>
            <Link className="text-ink hover:text-ink" to="/website-about">
              Website
            </Link>
          </div>
        </div>
      </Clamp>
    </footer>
  )
}
