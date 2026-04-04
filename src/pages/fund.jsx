import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DonationBox from "../components/donation-box"
import StatsBanner from "../components/stats-banner"

export default function Fund() {
  const searchParams =
    typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null
  const initialFreq = searchParams?.get("frequency") === "monthly" ? "monthly" : "one-time"
  const amtParam = searchParams?.get("amount")
  const initialAmt = amtParam && !isNaN(parseInt(amtParam)) ? parseInt(amtParam) : 25

  const [currentFrequency, setCurrentFrequency] = React.useState(initialFreq)
  const [currentAmount, setCurrentAmount] = React.useState(initialAmt)

  const handleTierClick = (amount, frequency = "monthly") => {
    // → instead of touching the URL, just update our state:
    setCurrentFrequency(frequency)
    setCurrentAmount(amount)

    // Scroll to the donation box
    const el = document.getElementById("donation-box")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Layout>
      <div className="pb-80 md:pb-0 bg-gradient-to-b from-gray-900 to-gray-700">
        <Clamp>
          <section className="py-24 px-4 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text">
            <div className="grid md:grid-cols-6 gap-6 mb-40">
              <div className="col-span-6 md:col-span-3 flex flex-col gap-6">
                <h2 className="text-6xl font-bold text-transparent">
                  Help Crown grow Stronger and Faster
                </h2>
                <p className="text-2xl text-gray-300">
                  Donations support Core Contributors working on Features, Maintenance and
                  Improvements &#x1F970;
                </p>
              </div>

              <div
                className="col-span-6 md:col-span-3 flex flex-col gap-6 relative"
                id="donation-box"
              >
                <div className="absolute top-0 left-0 w-full">
                  <DonationBox frequency={currentFrequency} initialAmount={currentAmount} />
                </div>
              </div>
            </div>
          </section>
        </Clamp>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-0">
        <Clamp>
          <section className="p-8 text-white">
            <StatsBanner />
          </section>
        </Clamp>
      </div>

      <div className="py-10 pt-20 bg-white text-gray-600 text-center">
        <Clamp>
          {/* Credits Header */}
          <section>
            <h3 className="text-5xl font-extrabold capitalize">Credits</h3>
          </section>

          {/* Diamond */}
          <section className="py-20 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 mb-8 capitalize">
              Diamond
            </h3>
          </section>

          {/* Platinum */}
          <section className="py-10 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 mb-8 capitalize">
              Platinum
            </h3>
          </section>

          {/* Titanium */}
          <section className="py-10 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-600 to-slate-500 mb-6 capitalize">
              Titanium
            </h3>
          </section>

          {/* Gold */}
          <section className="py-10 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 mb-6 capitalize">
              Gold
            </h3>
          </section>

          {/* Silver */}
          <section className="py-10 pb-20 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 mb-4 capitalize">
              Silver
            </h3>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Donations" description="Join the Development Fund - help keep the project moving." />
