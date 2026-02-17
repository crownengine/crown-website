import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Support() {
  return (
    <Layout>
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <Clamp>
          <section className="py-24 px-4">
            <h2 className="text-6xl mb-24 font-bold text-gray-300">Support & Development</h2>

            <div className="grid grid-rows-1 2xl:grid-cols-2 gap-6">
              <div className="rounded-lg shadow-lg p-6 text-lg bg-gray-200">
                <h2 className="text-4xl mb-2 font-semibold text-gray-700">Documentation</h2>
                <p className="mb-2 text-gray-700">
                  Crown's manual is freely available online and continuously updated.
                </p>
                <p className="mb-2 font-medium text-gray-700">
                  <b>User Documentation</b>
                </p>
                <ul className="list-disc list-inside pl-6 mb-4">
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://docs.crownengine.org/html/latest/introduction.html"
                    >
                      <u>Introduction</u>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://docs.crownengine.org/html/latest/getting_started/index.html"
                    >
                      <u>Getting Started</u>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://docs.crownengine.org/html/latest/lua_api.html"
                    >
                      <u>Lua API reference</u>
                    </a>
                  </li>
                </ul>
                <p className="mb-2 font-medium text-gray-700">
                  <b>Engine Developers</b>
                </p>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://docs.crownengine.org/html/latest/hackers/"
                    >
                      <u>Engine Hackers</u>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://docs.crownengine.org/html/latest/hackers/building.html"
                    >
                      <u>Building</u>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg shadow-lg p-6 text-lg bg-gray-200">
                <h2 className="text-4xl mb-2 font-semibold text-gray-700">Community</h2>
                <p className="mb-2 text-gray-700">
                  If you have any questions or need help, join us on our Discord server. Don’t
                  forget to follow us for the latest news!
                </p>
                <p className="mb-2 font-medium text-gray-700">
                  <b>Support</b>
                </p>
                <ul className="list-disc list-inside pl-6 mb-4">
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://discord.gg/invite/CeXVWCT"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <u>Discord</u>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://github.com/crownengine/crown/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <u>GitHub Project</u>
                    </a>
                  </li>
                </ul>
                <p className="mb-2 font-medium text-gray-700">
                  <b>Social pages</b>
                </p>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://www.twitter.com/crown_engine"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <u>X</u>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://www.linkedin.com/company/crownengine"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <u>LinkedIn</u>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://bsky.app/profile/crownengine.org"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <u>Bluesky</u>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg shadow-lg p-6 text-lg bg-gray-200">
              <h2 className="text-4xl mb-2 font-semibold text-gray-700">Paid support</h2>
              <p className="mb-4 text-gray-700">
                This is a list of Crown core developers that are available for employment or
                consulting with Crown Engine related projects.
              </p>
              <div className="grid gap-4 2xl:grid-cols-1">
                <div className="rounded-lg shadow-md p-4 bg-gray-100 border border-gray-300">
                  <h3 className="text-2xl mb-2 font-semibold text-gray-700">Daniele Bartolini</h3>
                  <p className="text-gray-700 mb-4">
                    Based in Italy, he is available for contract work. He is the original creator
                    and project lead of Crown Engine, with deep knowledge of its architecture and
                    over 20 years of experience engineering interactive systems.
                  </p>
                  <p classname="text-gray-700">
                    He offers consulting, custom engine work, priority bug fixes, and gameplay
                    programming. Contact:
                    <a
                      className="text-indigo-500"
                      href="mailto:dbartolini@crownengine.org"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <u> dbartolini@crownengine.org</u>
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg shadow-lg p-6 text-lg bg-gray-200">
              <h2 className="text-4xl mb-2 font-semibold text-gray-700">Report an issue</h2>
              <p className="mb-2 text-gray-700">
                If you found a bug or have a suggestion, reach out on Discord or head over to
                Crown's Issue Tracker:
              </p>
              <ul className="list-disc list-inside pl-6">
                <li>
                  <a
                    className="text-indigo-500"
                    href="https://discord.gg/invite/CeXVWCT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <u>Discord</u>
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-500"
                    href="https://github.com/crownengine/crown/issues"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <u>GitHub Issue Tracker</u>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Support" />
