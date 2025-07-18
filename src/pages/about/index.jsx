import React from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutMenu from "../../components/about-menu.jsx"

export default function About() {
  const handleJoinUsClick = () => {
    const email = "foundation@crownengine.org";
    const subject = encodeURIComponent("Admission Request");
    const body = encodeURIComponent(`
      Hey, I want to join The Crown Foundation!\n
      Full Name:
      Date of Birth (dd/mm/yyyy):
      Place of Birth:
      City:
      Email:`.trim());

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <AboutMenu />

        <Clamp>
          <section className="py-24 px-4 text-left text-gray-300">
            <h1 className="text-6xl mb-6 font-bold">The Crown Foundation</h1>
            <p className="text-2xl mb-24 text-gray-300">
              We create, distribute and promote{" "}
              <a
                className="text-gray-200 underline"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/crownengine/crown"
              >
                Crown
              </a>
              .
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-6 font-semibold">The Organization</h2>
                  <p className="mb-6 text-gray-700">
                    The Crown Foundation (2020) is a non-profit organization dedicated to building a
                    free and open-source technology that advances the world of game development and
                    real-time multimedia applications.
                  </p>
                  <p className="mb-6 text-gray-700">
                    By supporting us, you are not just funding a game engine — you are fueling
                    innovation, accessibility, and the next generation of game developers.
                  </p>
                </div>

                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-6 font-semibold">Donations</h2>
                  <p className="mb-6 text-gray-700">Your donations go towards:</p>
                  <ul className="list-disk list-inside mb-6 text-gray-700">
                    <li>
                      <b>Core Contributors</b>: Helping us grow the team with competitive salaries for
                      full-time developers.
                    </li>
                    <li>
                      <b>Infrastructure</b>: Covering the costs of servers, tools, and other essential
                      overheads.
                    </li>
                    <li>
                      <b>Outreach & Education</b>: Creating tutorials, organizing events, and supporting
                      educational initiatives for budding game engine developers.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 rounded-lg shadow-lg p-6 text-lg text-gray-700 bg-gray-200">
                  <h2 className="text-4xl mb-4 font-semibold">Join the Foundation</h2>
                  <p className="mb-6 text-gray-700">
                    Want to get more involved? Members of The Crown Foundation can participate in
                    our internal discussions and have a voice in deciding the Foundation’s
                    direction. We believe in a transparent and democratic process, and we welcome
                    new voices!
                  </p>

                  <button
                    onClick={handleJoinUsClick}
                    className="inline-block py-4 px-8 mb-2 font-semibold leading-none text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow"
                  >
                    Join Us Now!
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="The Crown Foundation" />
)
