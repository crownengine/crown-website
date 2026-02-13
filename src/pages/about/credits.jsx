import React from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutMenu from "../../components/about-menu.jsx"
import Latest from "../../data/about/credits/latest.json"
import AllTime from "../../data/about/credits/alltime.json"

export default function About() {
  return (
    <Layout>
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <AboutMenu />

        <Clamp>
          <section className="py-24 px-4 text-left text-gray-300">
            <h1 className="text-6xl mb-6 font-bold">Crown Credits</h1>
            <p className="text-2xl mb-24 text-gray-300">
              Code contributors since Crown became public in 2012.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-6 font-semibold">Current Release</h2>
                  {Latest.map((item, index) => {
                    return (
                      <p key={index} className="mb-6 text-gray-700">
                        {item.author}, {item.commits} {item.commits === "1" ? "commit" : "commits"}{" "}
                        ({item.years})
                      </p>
                    )
                  })}
                </div>

                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-6 font-semibold">All-time Contributors</h2>
                  {AllTime.map((item, index) => {
                    return (
                      <p key={index} className="text-gray-700">
                        {item.author}, {item.commits} {item.commits === "1" ? "commit" : "commits"}{" "}
                        ({item.years})
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Crown Engine Credits" />
