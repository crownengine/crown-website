import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout>
      <Seo title="The Crown Foundation" />
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <Clamp>
          <section className="py-24 px-4 text-left text-gray-300">
            <h1 className="text-6xl mb-6 font-bold">The Crown Foundation</h1>
            <p className="text-2xl mb-24 text-gray-300">
              We create, distribute and promote{" "}
              <a
                className="text-gray-200 underline"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/crownengine/crown"
              >
                Crown
              </a>
              .
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-6 font-semibold">The Organization</h2>
                  <p className="mb-6 text-gray-700">
                    The Crown Foundation (2020) is a non-profit organization dedicated to building a
                    free and open-source technology that advances the world of game development and
                    real-time multimedia applications.
                  </p>
                  <p className="mb-6 text-gray-700">
                    By supporting us, you are not just funding a game engine — you are fueling
                    innovation, accessibility, and the next generation of game developers.
                  </p>
                </div>

                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-6 font-semibold">Donations</h2>
                  <p className="mb-6 text-gray-700">Your donations go towards:</p>
                  <ul className="list-disk list-inside mb-6 text-gray-700">
                    <li>
                      <b>Core Contributors</b>: Helping us grow the team with competitive salaries for
                      full-time developers.
                    </li>
                    <li>
                      <b>Infrastructure</b>: Covering the costs of servers, tools, and other essential
                      overheads.
                    </li>
                    <li>
                      <b>Outreach & Education</b>: Creating tutorials, organizing events, and supporting
                      educational initiatives for budding game engine developers.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-4 font-semibold">Join the Foundation</h2>
                  <p className="mb-6 text-gray-700">
                    Want to get more involved? Members of The Crown Foundation can participate in
                    our internal discussions and have a voice in deciding the Foundation’s
                    direction. We believe in a transparent and democratic process, and we welcome
                    new voices!
                  </p>
                  <p className="mb-6 text-gray-700">
                    Email us at{" "}
                    <a className="text-indigo-500" href="mailto:foundation@crownengine.org">
                      <u>foundation@crownengine.org</u>
                    </a>{" "}
                    to learn more.
                  </p>
                </div>

              </div>
              <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                <h2 className="text-4xl mb-6 font-semibold">Board Members</h2>
                <p className="mb-8 text-gray-700">
                  <ul>
                    <li>Daniele Bartolini (Founder and president)</li>
                    <li>Michele Rossi (Founder and vice-president)</li>
                    <li>Alessio Bianchetti (Founder)</li>
                    <li>Simone Gazzoli (Founder)</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}
