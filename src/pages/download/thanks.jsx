import React, { useEffect, useState } from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DonationBox from "../../components/donation-box"
import StatsBanner from "../../components/stats-banner"

const RELEASES_URL = "https://github.com/crownengine/crown/releases"

export default function Thanks() {
  const [download_url, setDownloadUrl] = useState()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const next_download_url = params.get("url")

    window.history.replaceState(window.history.state, "", window.location.pathname)

    if (!next_download_url) return

    setDownloadUrl(next_download_url)

    const timer = setTimeout(() => {
      window.location.assign(next_download_url)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <div className="pb-80 md:pb-0 bg-gradient-to-b from-deepest to-dark">
        <Clamp>
          <section className="py-0 md:py-24 px-4 text-center">
            <div className="w-full max-w-2xl mx-auto">
              <p className="mt-28 text-lead text-inverse-muted">
                Your download will start soon. If it didn't, click here to start it{" "}
                <a className="underline" href={download_url || RELEASES_URL}>
                  manually
                </a>
                .
              </p>
            </div>
          </section>
        </Clamp>
        <Clamp>
          <section className="px-4 py-2">
            <div className="grid md:grid-cols-6 gap-6 mb-40">
              <div className="col-span-6 md:col-span-3 flex flex-col gap-6">
                <h2 className="text-display font-bold text-brand-light">
                  Help Crown grow Stronger and Faster
                </h2>
                <p className="text-lead text-inverse-muted">
                  Donations support Core Contributors working on Features, Maintenance and
                  Improvements &#x1F970;
                </p>
              </div>

              <div
                className="col-span-6 md:col-span-3 flex flex-col gap-6 relative"
                id="donation-box"
              >
                <div className="absolute top-0 left-0 w-full">
                  <DonationBox />
                </div>
              </div>
            </div>
          </section>
        </Clamp>
      </div>

      <div className="bg-gradient-to-b from-deepest to-dark py-0">
        <Clamp>
          <section className="p-8 text-inverse">
            <StatsBanner />
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Thanks">
    <meta name="robots" content="noindex" />
  </Seo>
)
