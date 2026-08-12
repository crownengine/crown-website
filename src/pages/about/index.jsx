import React from "react"
import { Link } from "gatsby"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutMenu from "../../components/about-menu.jsx"
import StatsBanner from "../../components/stats-banner"

export default function About() {
  const handleJoinUsClick = () => {
    const email = "foundation@crownengine.org"
    const subject = encodeURIComponent("Admission Request")
    const body = encodeURIComponent(
      `
      Hey, I want to join The Crown Foundation!\n
      Full Name:
      Date of Birth (dd/mm/yyyy):
      Place of Birth:
      City:
      Email:`.trim(),
    )

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <Layout>
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <AboutMenu />

        <Clamp>
          <article className="px-4 py-24 text-left text-gray-300">
            <header className="max-w-5xl">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
                The Crown Foundation
              </h1>
              <p className="max-w-4xl text-2xl leading-10 text-gray-200">
                Our mission is to develop and sustain free, open-source technologies that make game
                development and real-time multimedia creation more accessible.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  className="rounded bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
                  to="/download"
                >
                  Download Crown
                </Link>
                <Link
                  className="rounded border border-gray-400 px-6 py-3 font-semibold text-gray-100 transition hover:border-white hover:bg-white/10"
                  to="/support"
                >
                  Contribute
                </Link>
                <Link
                  className="rounded border border-gray-400 px-6 py-3 font-semibold text-gray-100 transition hover:border-white hover:bg-white/10"
                  to="/fund"
                >
                  Donate
                </Link>
              </div>
            </header>

            <section className="mt-24 grid gap-8 lg:grid-cols-5" aria-labelledby="our-mission">
              <div className="rounded-2xl bg-gray-950/80 p-7 ring-1 ring-white/10 sm:p-8 lg:col-span-3">
                <h2 id="our-mission" className="text-4xl font-semibold text-white sm:text-5xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Professional game development tools should be freely available to everyone. The
                  Foundation develops Crown Engine as a public, collaborative project and releases
                  it under a permissive open-source license. No account or payment is required to
                  download Crown, inspect its source code, read its documentation, or use it to
                  build your project.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  We serve developers, artists, learners, independent teams, and organizations that
                  need a capable game engine they can use, study, modify, and share. Our work
                  focuses on practical tools, clear learning resources, open development, and
                  direct public access to each release.
                </p>
              </div>

              <aside className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 lg:col-span-2">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Organization Details
                </h2>
                <dl className="mt-6 space-y-5 text-base">
                  <div>
                    <dt className="font-semibold text-gray-100">Legal name</dt>
                    <dd className="mt-1 text-gray-300">The Crown Foundation</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Status</dt>
                    <dd className="mt-1 text-gray-300">Nonprofit organization - registered in Italy</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Tax Code/VAT No.</dt>
                    <dd className="mt-1 text-gray-300">90068000448</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Contact</dt>
                    <dd className="mt-1">
                      <a
                        className="text-indigo-300 underline decoration-indigo-400/60 underline-offset-4 hover:text-indigo-200"
                        href="mailto:foundation@crownengine.org"
                      >
                        foundation@crownengine.org
                      </a>
                    </dd>
                  </div>
                </dl>
              </aside>
            </section>

            <section className="mt-24" aria-labelledby="activities">
              <div className="max-w-3xl">
                <h2 id="activities" className="text-4xl font-semibold text-white sm:text-5xl">
                  What the Foundation Does
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Our day-to-day activities turn the mission into software and resources people can
                  use freely.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <section className="rounded-2xl bg-gray-200 p-7 text-gray-700 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Develop Crown Engine
                  </h3>
                  <p className="mt-4 leading-7">
                    We design, implement, test, and maintain the engine, editor, asset pipeline, and
                    deployment tools used to create interactive gaming experiences.
                  </p>
                </section>
                <section className="rounded-2xl bg-gray-200 p-7 text-gray-700 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Publish Free Releases
                  </h3>
                  <p className="mt-4 leading-7">
                    We provide ready-to-use binary downloads and source code for supported
                    platforms, with no registration, subscription, or license charge.
                  </p>
                </section>
                <section className="rounded-2xl bg-gray-200 p-7 text-gray-700 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Maintain Open Knowledge
                  </h3>
                  <p className="mt-4 leading-7">
                    We write and update the manual, examples, release notes, and public development
                    plans.
                  </p>
                </section>
                <section className="rounded-2xl bg-gray-200 p-7 text-gray-700 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Support Participation
                  </h3>
                  <p className="mt-4 leading-7">
                    We run public development and issue tracking, welcome code and translation
                    contributions, and help users through community channels.
                  </p>
                </section>
              </div>
            </section>

            <section className="mt-24 rounded-2xl bg-gray-950/70 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="mb-10 text-3xl font-semibold text-white sm:text-4xl">
                Crown's Public Reach
              </h2>
              <StatsBanner />
            </section>

            <section className="mt-24 grid gap-8 lg:grid-cols-2" aria-labelledby="donations">
              <div className="rounded-2xl bg-gray-200 p-8 text-gray-700 shadow-lg">
                <h2
                  id="donations"
                  className="text-3xl font-semibold text-gray-900 sm:text-4xl"
                >
                  How Donations Support the Mission
                </h2>
                <p className="mt-5 leading-7">
                  Crown Engine and its public resources are completely free. Donations help the
                  Foundation sustain that work by funding core contributors, development and
                  testing hardware, web infrastructure, banking services, and other essential
                  operating costs.
                </p>
                <Link
                  className="mt-7 inline-block rounded bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
                  to="/fund"
                >
                  Join the Development Fund
                </Link>
              </div>

              <div className="rounded-2xl bg-gray-200 p-8 text-gray-700 shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                  Join the Foundation
                </h2>
                <p className="mt-5 leading-7">
                  Foundation members can participate in internal discussions and help decide the
                  organization's direction through a transparent, democratic process. New voices are
                  welcome.
                </p>
                <button
                  type="button"
                  onClick={handleJoinUsClick}
                  className="mt-7 inline-block rounded bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
                >
                  Request Membership
                </button>
              </div>
            </section>
          </article>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="The Crown Foundation"
    description="We develop free, open-source technologies that advance the fields of game development."
  />
)
