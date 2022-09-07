import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Clamp from "../components/clamp"

export default function Support() {
  return (
    <Layout>
      <Seo title="Support" />
      <Clamp>
      <section className="py-16 px-4">
        <h2 className="text-5xl mb-12 font-semibold text-gray-700">
          Support
        </h2>

        <div className="grid grid-rows-3 2xl:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-lg p-6">
            <h2 className="text-3xl mb-2 font-semibold text-gray-700">
              Documentation
            </h2>
            <p className="mb-2 text-gray-700">
              Crown's manual is available online.
            </p>
            <ul className="list-disc list-inside pl-6">
              <li>
                <a className="text-indigo-500" href="https://docs.crownengine.org/html/latest">
                  <u>User Manual</u>
                </a>
              </li>
              <li>
                <a className="text-indigo-500" href="https://docs.crownengine.org/html/latest/lua_api.html">
                  <u>Lua API reference</u>
                </a>
              </li>
              <li>
                <a className="text-indigo-500" href="https://docs.crownengine.org/html/latest/hackers">
                  <u>Developers manual</u>
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <h2 className="text-3xl mb-2 font-semibold text-gray-700">
              Community
            </h2>
            <p className="mb-2 text-gray-700">
              Join the Crown community chat and discussion board to get development support.
            </p>
            <ul className="list-disc list-inside pl-6">
              <li>
                <a className="text-indigo-500" href="https://discord.gg/invite/CeXVWCT">
                  <u>Discord</u>
                </a>
              </li>
              <li>
                <a className="text-indigo-500" href="https://github.com/crownengine/crown/discussions">
                  <u>GitHub Discussions</u>
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <h2 className="text-3xl mb-2 font-semibold text-gray-700">
              Report an issue
            </h2>
            <p className="mb-2 text-gray-700">
              If you found a bug or have a suggestion, head over to Crown's Issue Tracker and tell us about it.
            </p>
            <ul className="list-disc list-inside pl-6">
              <li>
                <a className="text-indigo-500" href="https://github.com/crownengine/crown/issues">
                  <u>GitHub Issue Tracker</u>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </Clamp>
    </Layout>
  )
}
