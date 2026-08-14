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
      <div className="bg-dark">
        <AboutMenu />

        <Clamp>
          <article className="px-4 py-24 text-left text-inverse-muted">
            <header className="max-w-5xl">
              <h1 className="mb-6 text-display font-bold tracking-normal text-inverse sm:text-display">
                The Crown Foundation
              </h1>
              <p className="max-w-4xl text-lead leading-relaxed text-inverse">
                We develop and sustain awesome, free, open-source technologies that make game
                development and real-time multimedia creation accessible to everyone.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link className="button button-primary" to="/download">
                  Download Crown
                </Link>
                <Link className="button button-inverse" to="/support">
                  Contribute
                </Link>
                <Link className="button button-inverse button-donate" to="/fund">
                  Donate
                </Link>
              </div>
            </header>

            <section className="mt-24 grid gap-8 lg:grid-cols-5" aria-labelledby="our-mission">
              <div className="widget p-7 sm:p-8 lg:col-span-3">
                <h2 id="our-mission" className="text-title font-semibold text-inverse">
                  Our Mission
                </h2>
                <p className="mt-6 text-lead leading-relaxed text-inverse-muted">
                  Professional game development tools should be freely available to everyone. The
                  Foundation develops Crown Engine as a public, collaborative project and releases
                  it under a permissive open-source license. No account or payment is required to
                  download Crown, inspect its source code, read its documentation, or use it to
                  build your project.
                </p>
                <p className="mt-4 text-lead leading-relaxed text-inverse-muted">
                  We serve developers, artists, learners, independent teams, and organizations that
                  need a capable game engine they can use, study, modify, and share. Our work
                  focuses on practical tools, clear learning resources, open development, and direct
                  public access to each release.
                </p>
              </div>

              <aside className="widget p-7 lg:col-span-2">
                <h2 className="text-lead font-semibold text-inverse sm:text-title">
                  Organization Details
                </h2>
                <dl className="mt-6 space-y-5 text-body">
                  <div>
                    <dt className="font-semibold text-inverse">Legal name</dt>
                    <dd className="mt-1 text-inverse-muted">The Crown Foundation</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-inverse">Status</dt>
                    <dd className="mt-1 text-inverse-muted">
                      Nonprofit organization - registered in Italy
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-inverse">Tax Code/VAT No.</dt>
                    <dd className="mt-1 text-inverse-muted">90068000448</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-inverse">Contact</dt>
                    <dd className="mt-1">
                      <a
                        className="text-brand-light underline decoration-line underline-offset-4 hover:text-brand-hover"
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
                <h2 id="activities" className="text-title font-semibold text-inverse">
                  What the Foundation Does
                </h2>
                <p className="mt-5 text-lead leading-relaxed text-inverse-muted">
                  Our day-to-day activities turn the mission into software and resources people can
                  use freely.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <section className="widget p-7 text-ink">
                  <h3 className="text-lead font-semibold text-ink">Develop Crown Engine</h3>
                  <p className="mt-4 leading-relaxed">
                    We design, implement, test, and maintain the engine, editor, asset pipeline, and
                    deployment tools used to create interactive gaming experiences.
                  </p>
                </section>
                <section className="widget p-7 text-ink">
                  <h3 className="text-lead font-semibold text-ink">Publish Free Releases</h3>
                  <p className="mt-4 leading-relaxed">
                    We provide ready-to-use binary downloads and source code for supported
                    platforms, with no registration, subscription, or license charge.
                  </p>
                </section>
                <section className="widget p-7 text-ink">
                  <h3 className="text-lead font-semibold text-ink">Maintain Open Knowledge</h3>
                  <p className="mt-4 leading-relaxed">
                    We write and update the manual, examples, release notes, and public development
                    plans.
                  </p>
                </section>
                <section className="widget p-7 text-ink">
                  <h3 className="text-lead font-semibold text-ink">Support Participation</h3>
                  <p className="mt-4 leading-relaxed">
                    We run public development and issue tracking, welcome code and translation
                    contributions, and help users through community channels.
                  </p>
                </section>
              </div>
            </section>

            <section className="widget mt-24 p-8 sm:p-10">
              <h2 className="mb-10 text-title font-semibold text-inverse sm:text-title">
                Crown's Public Reach
              </h2>
              <StatsBanner />
            </section>

            <section className="mt-24 grid gap-8 lg:grid-cols-2" aria-labelledby="donations">
              <div className="widget p-8 text-ink">
                <h2 id="donations" className="text-title font-semibold text-ink sm:text-title">
                  How Donations Support the Mission
                </h2>
                <p className="mt-5 leading-relaxed">
                  Crown Engine and its public resources are completely free. Donations help the
                  Foundation sustain that work by funding core contributors, development and testing
                  hardware, web infrastructure, banking services, and other essential operating
                  costs.
                </p>
                <Link className="button button-primary mt-7" to="/fund">
                  Join the Development Fund
                </Link>
              </div>

              <div className="widget p-8 text-ink">
                <h2 className="text-title font-semibold text-ink sm:text-title">
                  Join the Foundation
                </h2>
                <p className="mt-5 leading-relaxed">
                  Foundation members can participate in internal discussions and help decide the
                  organization's direction through a transparent, democratic process. New voices are
                  welcome.
                </p>
                <button
                  type="button"
                  onClick={handleJoinUsClick}
                  className="button button-primary mt-7"
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
