import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DonationBox from "../components/donation-box"
import StatsBanner from "../components/stats-banner"

export default function Fund() {
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const initialFreq = searchParams?.get("frequency") === "monthly" ? "monthly" : "one-time";
  const amtParam = searchParams?.get("amount");
  const initialAmt = amtParam && !isNaN(parseInt(amtParam)) ? parseInt(amtParam) : 25;

  const [currentFrequency, setCurrentFrequency] = React.useState(initialFreq);
  const [currentAmount, setCurrentAmount] = React.useState(initialAmt);

  const handleTierClick = (amount, frequency = "monthly") => {
    // → instead of touching the URL, just update our state:
    setCurrentFrequency(frequency);
    setCurrentAmount(amount);

    // Scroll to the donation box
    const el = document.getElementById("donation-box");
    if (el)
      el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
                  Donations support Core Contributors working on Features, Maintenance and Improvements &#x1F970;
                </p>
              </div>

              <div className="col-span-6 md:col-span-3 flex flex-col gap-6 relative" id="donation-box">
                <div className="absolute top-0 left-0 w-full">
                  <DonationBox
                    frequency={currentFrequency}
                    initialAmount={currentAmount}
                  />
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

      <div className="py-10 pt-20 bg-white text-gray-600 text-center">
        <Clamp>
          {/* Credits Header */}
          <section>
            <h3 className="text-5xl font-extrabold capitalize">
              Credits
            </h3>
          </section>

          {/* Diamond */}
          <section className="py-20 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 mb-8 capitalize">
              Diamond
            </h3>
            <div className="flex flex-wrap justify-center gap-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {["Take", "The", "Lead"].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleTierClick(250, "monthly")}
                  title="Join the elite sparkle squad"
                  className="w-52 h-28 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-800 text-xl font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-transform"
                >
                  {name}
                </button>
              ))}
            </div>
          </section>

          {/* Platinum */}
          <section className="py-10 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 mb-8 capitalize">
              Platinum
            </h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {["Make", "The", "First", "Gift"].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleTierClick(100, "monthly")}
                  title="Board the platinum ship"
                  className="w-40 h-20 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-800 text-xl font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-transform"
                >
                  {name}
                </button>
              ))}
            </div>
          </section>

          {/* Titanium */}
          <section className="py-10 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-600 to-slate-500 mb-6 capitalize">
              Titanium
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-900 text-2xl">
              {["Kick", "It", "Off"].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleTierClick(50, "monthly")}
                  title="Titanium-level toughness achieved"
                  className="underline hover:text-gray-600 transition"
                >
                  {name}
                </button>
              ))}
            </div>
          </section>

          {/* Gold */}
          <section className="py-10 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 mb-6 capitalize">
              Gold
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-800 text-xl font-medium">
              {["Start", "The", "Giving"].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleTierClick(25, "monthly")}
                  title="Feel the golden glow"
                  className="px-4 hover:text-yellow-600 transition"
                >
                  {name}
                </button>
              ))}
            </div>
          </section>

          {/* Silver */}
          <section className="py-10 pb-20 text-center">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 mb-4 capitalize">
              Silver
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-gray-600">
              {["Set", "The", "Example", "Today"].map((name, i) => (
                <button
                  key={i}
                  onClick={() => handleTierClick(10, "monthly")}
                  title="It all starts with silver"
                  className="hover:text-gray-800 transition"
                >
                  {name}
                </button>
              ))}
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Donations" />
)
