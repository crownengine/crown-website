import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Support() {
  return (
    <Layout>
      <div className="bg-dark">
        <Clamp>
          <section className="px-4 py-24">
            <header className="max-w-4xl">
              <h1 className="text-display font-bold tracking-normal text-inverse sm:text-display">
                Learn, Get Help, and Contribute
              </h1>
            </header>

            <div className="mt-20 grid gap-6 lg:grid-cols-3">
              <article className="widget p-7 text-lead text-ink">
                <h2 className="text-title font-semibold text-ink">Learn Crown</h2>
                <p className="mt-4 leading-relaxed">
                  Crown's manual is freely available online and continuously updated.
                </p>
                <ul className="mt-6 space-y-3">
                  <li>
                    <a
                      className="font-semibold text-brand underline underline-offset-4"
                      href="https://docs.crownengine.org/html/latest/introduction.html"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold text-brand underline underline-offset-4"
                      href="https://docs.crownengine.org/html/latest/getting_started/basic_concepts.html"
                    >
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold text-brand underline underline-offset-4"
                      href="https://docs.crownengine.org/html/latest/lua_api.html"
                    >
                      Lua API Reference
                    </a>
                  </li>
                </ul>
              </article>

              <article className="widget p-7 text-lead text-ink">
                <h2 className="text-title font-semibold text-ink">Get Community Help</h2>
                <p className="mt-4 leading-relaxed">
                  Ask questions, discuss projects, and meet other Crown users and contributors in
                  the public community channels.
                </p>
                <a
                  className="button button-primary mt-6"
                  href="https://discord.gg/invite/CeXVWCT"
                  rel="noreferrer"
                  target="_blank"
                >
                  Join Discord
                </a>
              </article>

              <article className="widget p-7 text-lead text-ink">
                <h2 className="text-title font-semibold text-ink">Contribute</h2>
                <p className="mt-4 leading-relaxed">
                  Crown is built in public. You can improve code, documentation, translations,
                  tests, examples, or issue reports. The developer manual explains how to build the
                  engine and prepare a contribution.
                </p>
                <ul className="mt-6 space-y-3">
                  <li>
                    <a
                      className="font-semibold text-brand underline underline-offset-4"
                      href="https://docs.crownengine.org/html/latest/hackers/contributing.html"
                    >
                      Contribution Guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold text-brand underline underline-offset-4"
                      href="https://docs.crownengine.org/html/latest/hackers/building.html"
                    >
                      Build Instructions
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold text-brand underline underline-offset-4"
                      href="https://github.com/crownengine/crown/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Crown on GitHub
                    </a>
                  </li>
                </ul>
              </article>
            </div>

            <div className="widget mt-6 p-7 text-lead text-ink">
              <h2 className="text-title font-semibold text-ink">Report an Issue</h2>
              <p className="mt-4 max-w-4xl leading-relaxed">
                Bug reports and clear suggestions help everyone who uses Crown. Check the existing
                issues first, then open a report with the version, platform, expected behavior, and
                steps needed to reproduce the problem.
              </p>
              <a
                className="button button-primary mt-6"
                href="https://github.com/crownengine/crown/issues"
                rel="noreferrer"
                target="_blank"
              >
                Open the Issue Tracker
              </a>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Crown Support and Contribution Guide"
    description="Crown's manual is freely available online and continuously updated."
  />
)
