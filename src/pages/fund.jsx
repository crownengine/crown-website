import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Clamp from "../components/clamp"

export default function Fund() {
  return (
    <Layout>
      <Seo title="Donations" />
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <Clamp>
      <section className="py-24 px-4 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text">
        <h2 className="text-6xl mb-6 font-bold text-transparent">
          Help Crown grow
          <br/>
          Stronger and Faster
        </h2>
        <p className="text-2xl mb-24 text-gray-300">
          Donations support Core Contributors at The Crown Foundation
          <br/>
          working on Features, Maintenance and Improvements &#x1F970;
        </p>

        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* GitHub Sponsors */}
            <div className="flex-1 rounded-lg shadow-lg p-6 bg-github-pink text-gray-800">
              <h2 className="text-3xl mb-2 font-semibold">
                <a href="https://github.com/sponsors/crownengine">
                  GitHub Sponsors
                </a>
              </h2>
              <p className="mb-6">
                This is the easiest way to support us if you already have a GitHub account.
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
                    w-full
                    text-center
                  "
                href="https://github.com/sponsors/crownengine"
              >
                Become a Sponsor!
              </a>
            </div>

            {/* PayPal */}
            <div className="flex-1 rounded-lg shadow-lg p-6 bg-paypal-blue text-gray-200">
              <h2 className="text-3xl mb-2 font-semibold">
                PayPal
              </h2>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 mb-6">
                  <p>
                    We happily accept donations via PayPal. Pay with debit or credit cards!
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
          </div>

          {/* Bank Transfer */}
          <div className="flex-1 rounded-lg shadow-lg p-6 bg-gray-500 text-gray-200">
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
                <strong>The Crown Foundation</strong>
                <p>
                  Tax Number: 90068000448
                  <br/>
                  IBAN: IT34O0306909606100000177665
                  <br/>
                  BIC/SWITF: BCITITMM
                </p>
              </div>
              <div className="flex-1 p-6 rounded shadow-lg bg-gray-300 text-gray-700">
                <strong>Bank: Intesa Sanpaolo</strong>
                <br/>
                Via Spinozzi, 15, 63074
                <br/>
                San Benedetto Del Tronto AP, Italy
                <br/>
              </div>
            </div>
          </div>

        </div>
      </section>
      </Clamp>
      </div>
    </Layout>
  )
}
