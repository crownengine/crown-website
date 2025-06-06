import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DonationBox from "../components/donation-box"

export default function Fund() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <Clamp>
          <section className="py-24 px-4 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text">
            <div className="grid md:grid-cols-6 gap-6 mb-40">

              <div className="col-span-6 md:col-span-3 flex flex-col gap-6">
                <h2 className="text-6xl font-bold text-transparent">
                  Help Crown grow Stronger and Faster
                </h2>
                <p className="text-2xl text-gray-300">
                  Donations support Core Contributors working on Features, Maintenance and Improvements &#x1F970;
                </p>
              </div>

              <div className="col-span-6 md:col-span-3 flex flex-col gap-6 relative">
                <DonationBox />
              </div>
            </div>
          </section>
          <div className="pb-64"></div>
          <div className="pb-64"></div>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Donations" />
)
