import React from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroImage from "../../components/hero-image.jsx"

export default function Play() {
  return (
    <Layout>
      <div className="bg-[url('../images/index/luna-background.svg')] bg-left-top bg-cover">
        <Clamp>
          <section className="py-24 px-4 text-left text-red-600">
            <h1 className="text-6xl mb-6 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              Take a Bite of The Tech
            </h1>
            <p className="text-2xl mb-24 text-gray-300">
              Play a selection of interactive demos in-browser.
            </p>

            <a href="https://play.crownengine.org/physics">
              <HeroImage {...{ src: "/play/physics.jpg", title: "Physics", subtitle: "First-person character mover, fast dynamic objects, kinematic platforms, triggers and raycasts.", heightClass: "h-96" }} />
            </a>
            <p className="mb-32"/>

          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Play" description="Play a selection of interactive demos in-browser."/>
)
