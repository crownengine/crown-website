import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Clamp from "../components/clamp"

export default function About() {
  return (
    <Layout>
      <Seo title="The Crown Foundation" />
      <Clamp>
      <section className="py-16 px-4 text-left text-gray-700">
        <h1 className="text-5xl mb-12 font-semibold">
          The Crown Foundation
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 rounded-lg shadow-lg p-6 text-gray-700">
              <h2 className="text-3xl mb-4 font-semibold">
                Organization
              </h2>
              <p className="mb-6 text-gray-700">
                The Crown Foundation (2020) is a non-profit organization committed to
                develop and promote a complete, free and open-source technology for
                creating videogames and other real-time multimedia applications.
              </p>
              <p className="mb-6 text-gray-700">
                We want to support the education of the next generation of game
                engine programmers through the use of good engineering practices
                in an inclusive and respectful community, favoring the formation
                and sustaining the growth of a diverse group of passionate and
                competent individuals capable of maintaining and advancing the
                open-source gamedev realm.
              </p>
            </div>

            <div className="flex-1 rounded-lg shadow-lg p-6 text-gray-700">
              <h2 className="text-3xl mb-4 font-semibold">
                Donations
              </h2>
              <p className="mb-6 text-gray-700">
                By donating to The Crown Foundation you are funding the
                development of <a className="text-indigo-500"
                href="https://github.com/crownengine/crown"><u>Crown Engine</u></a>, the
                writing of its <a className="text-indigo-500"
                href="https://crownengine.github.io/crown/html/latest"><u>manual</u></a>,
                the Foundation's overheads and the growth of the open-source
                software community as a whole.
              </p>
              <p className="mb-6 text-gray-700">
                We want to expand our core contributors base to help us test,
                document, fix bugs and add missing features to Crown, in an
                effort to release version 1.0.
              </p>
              <p className="mb-6 text-gray-700">
                With just a handful of generous
                monthly donations, we will be able to offer competitive salaries
                to a small team of full-time dedicated individuals to
                considerably speed up the development processes.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-row gap-6">
              <div className="flex-1 rounded-lg shadow-lg p-6 text-gray-700">
                <h2 className="text-3xl mb-4 font-semibold">
                  Board Members
                </h2>
                <p className="mb-6 text-gray-700">
                  <ul>
                    <li>Daniele Bartolini (Founder and president)</li>
                    <li>Michele Rossi (Founder and vice-president)</li>
                    <li>Alessio Bianchetti (Founder)</li>
                    <li>Simone Gazzoli (Founder)</li>
                  </ul>
                </p>
              </div>

              <div className="flex-1 rounded-lg shadow-lg p-6 text-gray-700">
                <h2 className="text-3xl mb-4 font-semibold">
                  Join the Foundation
                </h2>
                <p className="mb-6 text-gray-700">
                  Members of The Crown Foundation will have access to the
                  institutional meetings where they will be able to influence the
                  Foundation's future directions in a fully inclusive and democratic
                  environment.
                </p>
                <p className="mb-6 text-gray-700">
                  Drop us a <a className="text-indigo-500" href="mailto:foundation@crownengine.org"><u>line</u></a> asking to join!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Clamp>
    </Layout>
  )
}
