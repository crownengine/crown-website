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

  const [currentFrequency] = React.useState(initialFreq)
  const [currentAmount] = React.useState(initialAmt)

  return (
    <Layout>
      <div className="pb-80 md:pb-0 bg-gradient-to-b from-deepest to-dark">
        <Clamp>
          <section className="px-4 py-24">
            <div className="grid md:grid-cols-6 gap-6 mb-40">
              <div className="col-span-6 md:col-span-3 flex flex-col gap-6">
                <h1 className="donation-title text-display font-bold">
                  Help Crown grow Stronger and Faster
                </h1>
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
                  <DonationBox frequency={currentFrequency} initialAmount={currentAmount} />
                </div>
              </div>
            </div>
          </section>
        </Clamp>
      </div>

      <div className="bg-gradient-to-b from-deepest to-dark py-0">
        <Clamp>
          <section className="p-8 text-inverse">
            <StatsBanner animate />
          </section>
        </Clamp>
      </div>

      <div className="bg-surface py-10 pt-20 text-center text-muted">
        <Clamp>
          {/* Credits Header */}
          <section className="mb-6">
            <h2 className="text-display font-bold capitalize">Credits</h2>
          </section>

          {/* Diamond */}
          <section className="hidden py-20 text-center">
            <h3 className="tier-diamond mb-8 text-title font-bold capitalize">Diamond</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {["Take", "The", "Lead"].map((name, i) => (
                <div
                  key={i}
                  className="widget flex h-28 w-52 items-center justify-center text-lead font-semibold text-ink"
                >
                  {name}
                </div>
              ))}
            </div>
          </section>

          {/* Platinum */}
          <section className="hidden py-10 text-center">
            <h3 className="tier-platinum mb-8 text-title font-bold capitalize">Platinum</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {["Make", "The", "First", "Gift"].map((name, i) => (
                <div
                  key={i}
                  className="widget flex h-20 w-40 items-center justify-center text-lead font-semibold text-ink"
                >
                  {name}
                </div>
              ))}
            </div>
          </section>

          {/* Titanium */}
          <section className="hidden py-10 text-center">
            <h3 className="tier-titanium mb-6 text-title font-bold capitalize">Titanium</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-ink text-lead">
              {["Kick", "It", "Off"].map((name, i) => (
                <span key={i} className="underline">
                  {name}
                </span>
              ))}
            </div>
          </section>

          {/* Gold */}
          <section className="hidden py-10 text-center">
            <h3 className="tier-gold mb-6 text-title font-bold capitalize">Gold</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-ink text-lead font-semibold">
              {["Start", "The", "Giving"].map((name, i) => (
                <span key={i} className="px-4">
                  {name}
                </span>
              ))}
            </div>
          </section>

          {/* Silver */}
          <section className="py-10 pb-10 text-center">
            <h3 className="tier-silver mb-4 text-title font-bold capitalize">Silver</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-muted">
              {["Gallonigher"].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </section>

          {/* Founding Supporter */}
          <section className="pt-4 pb-20 text-center">
            <h3 className="tier-founder mb-4 text-title font-bold capitalize tracking-wide">
              Founding Supporter
            </h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-muted">
              {["OscarLeif", "Gallonigher", "Simon DaRocha"].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Donations"
    description="Join the Development Fund - help keeping game development free."
  />
)
