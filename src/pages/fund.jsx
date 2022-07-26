import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Clamp from "../components/clamp"

export default function Fund() {
  return (
    <Layout>
      <Seo title="Donations" />
      <Clamp>
      <section className="py-16 px-4">
        <h2 className="text-5xl mb-12 font-semibold text-gray-700">
          Donations
        </h2>

        {/* GitHub Sponsors */}
        <div className="flex flex-col gap-6">
        {/*
          <div className="rounded-lg shadow-lg p-6 bg-github-pink text-gray-700">
            <h2 className="text-3xl mb-2 font-semibold underline">
              <a href="https://github.com/sponsors/crownengine?preview=true">
                GitHub Sponsors
              </a>
            </h2>
            <p className="mb-6">
              GitHub Sponsors is the easiest way to support us if your already have a GitHub account.
            </p>
            <a
              className="
                  block
                  sm:inline-block
                     mt-4
                  sm:mt-0

                       hover:text-white
                  dark:hover:bg-indigo-400
                       text-white
                  dark:text-black

                        bg-indigo-600
                   dark:bg-indigo-500
                  hover:bg-indigo-700

                  rounded
                  shadow
                  px-4
                  py-2
                "
              href="https://github.com/sponsors/crownengine?preview=true"
            >
              Join Crown's GitHub Sponsors
            </a>
          </div>
        */}

          {/* PayPal */}
          <div className="flex-1 rounded-lg shadow-lg p-6 bg-paypal-blue text-gray-200">
            <h2 className="text-3xl mb-2 font-semibold">
              PayPal
            </h2>
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1 mb-6">
                <p>
                  The Crown Foundation accepts donations via PayPal.
                  <br/>
                  Pay with debit or credit cards.
                </p>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row gap-6 place-items-center">
                  <div className="flex-1 mt-auto mb-auto">
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value="2D9YQLJNH39V6" />
                      <input type="image" src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                      <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="rounded-lg shadow-lg p-6 bg-gray-500 text-gray-200">
            <h2 className="text-3xl mb-2 font-semibold">
              Bank Transfer
            </h2>
            <h3 className="mb-6">
              You can send payments directly to our bank account. Check your
              bank's commission fees before donating if you live outside the
              European Union.
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 p-6 rounded shadow-lg bg-gray-300 text-gray-700">
                <p className="pb-4">
                  <strong>The Crown Foundation</strong>
                  <br/>
                  Contrada Cegli da Sole, 4, 63847
                  <br/>
                  Monte Vidon Combatte, Italy
                  <br/>
                </p>
                <p>
                  Tax Number: 90068000448
                  <br/>
                  IBAN: IT34O0306909606100000177665
                  <br/>
                  BIC/SWITF: BCITITMM
                </p>
              </div>
              <div className="flex-1 p-6 rounded shadow-lg bg-gray-300 text-gray-700">
                <p>
                  <strong>Bank: Intesa Sanpaolo</strong>
                  <br/>
                  Via Spinozzi, 15, 63074
                  <br/>
                  San Benedetto Del Tronto AP, Italy
                  <br/>
                </p>
              </div>
            </div>
          </div>

          {/* Benevity */}
          <div className="flex-1 rounded-lg shadow-lg p-6 bg-blue-400">
            <h2 className="text-3xl mb-2 font-semibold">
              Benevity
            </h2>
            <h3 className="mb-6">
              Benevity is especially recommended if your employer matches donations!
            </h3>
            <a href="https://causes.benevity.org/causes/380-5650161165040_e6e4" className="underline">
              Benevity Website
            </a>
          </div>

        </div>
      </section>
      </Clamp>
    </Layout>
  )
}
