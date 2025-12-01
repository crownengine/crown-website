import React, { useEffect } from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DonationBox from "../../components/donation-box"
import StatsBanner from "../../components/stats-banner"

export default function Thanks({location}) {
  const download_url = location.state?.crown_download_url || window.location.href;

  useEffect(() => {
    if (download_url == window.location.href)
      return;

    const timer = setTimeout(() => {
      window.location.href = download_url;
    }, 400);

    return () => clearTimeout(timer);
  }, [download_url]);

  return (
    <Layout>
      <div className="pb-80 md:pb-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <Clamp>
          <section className="py-0 md:py-24 px-4 text-center">
            <div className="w-full max-w-2xl mx-auto">
              <p className="mt-28 text-lg text-gray-300">
                Your download will start soon. If it didn't, click here to start it <a className="underline" href={download_url}>manually</a>.
              </p>
            </div>
          </section>
        </Clamp>
        <Clamp>
          <section className="py-2 px-4 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text">
            <div className="grid md:grid-cols-6 gap-6 mb-40">
              <div className="col-span-6 md:col-span-3 flex flex-col gap-6">
                <h2 className="text-6xl font-bold text-transparent">
                  Help Crown grow Stronger and Faster
                </h2>
                <p className="text-2xl text-gray-300">
                  Donations support Core Contributors working on Features, Maintenance and Improvements &#x1F970;
                </p>
              </div>

              <div className="col-span-6 md:col-span-3 flex flex-col gap-6 relative" id="donation-box">
                <div className="absolute top-0 left-0 w-full">
                  <DonationBox/>
                </div>
              </div>
            </div>
          </section>
        </Clamp>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-0">
        <Clamp>
        <section className="p-8 text-white">
          <StatsBanner/>
        </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Thanks" />
)
