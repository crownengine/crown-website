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
      <div className="bg-dark">
        <AboutMenu />

        <Clamp>
          <section className="py-24 px-4 text-left text-inverse-muted">
            <h1 className="text-display mb-6 font-bold text-ink">Crown Credits</h1>
            <p className="text-lead mb-24 text-inverse-muted">
              Code contributors since Crown became public in 2012.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="widget flex-1 p-6 text-lead text-ink">
                  <h2 className="text-title mb-6 font-semibold">Current Release</h2>
                  {Latest.map((item, index) => {
                    return (
                      <p key={index} className="text-ink">
                        {item.author}, {item.commits} {item.commits === "1" ? "commit" : "commits"}{" "}
                        ({item.years})
                      </p>
                    )
                  })}
                </div>

                <div className="widget flex-1 p-6 text-lead text-ink">
                  <h2 className="text-title mb-6 font-semibold">All-time Contributors</h2>
                  {AllTime.map((item, index) => {
                    return (
                      <p key={index} className="text-ink">
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
