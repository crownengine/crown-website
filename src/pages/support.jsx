import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Support() {
  return (
    <Layout>
      <Seo title="Support" />
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <Clamp>
          <section className="py-24 px-4">
            <h2 className="text-6xl mb-24 font-bold text-gray-300">Support & Development</h2>

            <div className="grid grid-rows-3 2xl:grid-cols-3 gap-6">
              <div className="rounded-lg shadow-lg p-6 text-lg bg-gray-200">
                <h2 className="text-4xl mb-2 font-semibold text-gray-700">Documentation</h2>
                <p className="mb-2 text-gray-700">Crown's manual is available online.</p>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    <a className="text-indigo-500" href="https://docs.crownengine.org/html/latest/introduction.html">
                      <u>User Manual</u>
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
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://docs.crownengine.org/html/latest/hackers"
                    >
                      <u>Developer Manual</u>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg shadow-lg p-6 text-lg bg-gray-200">
                <h2 className="text-4xl mb-2 font-semibold text-gray-700">Community</h2>
                <p className="mb-2 text-gray-700">
                  Join the Crown community chat to get development support.
                </p>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    <a className="text-indigo-500" href="https://discord.gg/invite/CeXVWCT">
                      <u>Discord</u>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg shadow-lg p-6 text-lg bg-gray-200">
                <h2 className="text-4xl mb-2 font-semibold text-gray-700">Report an issue</h2>
                <p className="mb-2 text-gray-700">
                  If you found a bug or have a suggestion, head over to Crown's Issue Tracker and
                  tell us about it.
                </p>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    <a
                      className="text-indigo-500"
                      href="https://github.com/crownengine/crown/issues"
                    >
                      <u>GitHub Issue Tracker</u>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}
