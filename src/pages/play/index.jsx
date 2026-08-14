import React from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroImage from "../../components/hero-image.jsx"

export default function Play() {
  return (
    <Layout>
      <div className="bg-dark">
        <Clamp>
          <section className="px-4 py-24 text-left">
            <h1 className="mb-6 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-display font-bold text-transparent">
              Take a Bite of The Tech
            </h1>
            <p className="text-lead mb-24 text-inverse-muted">
              Play a selection of interactive demos in-browser.
            </p>

            <a href="https://play.crownengine.org/physics" data-nosnippet>
              <HeroImage
                {...{
                  src: "/play/physics.jpg",
                  title: "Physics",
                  subtitle:
                    "First/third-person controls, kinematic platforms, slopes, stairs, triggers, raycasts and more.",
                  heightClass: "h-96",
                }}
              />
            </a>
            <p className="mb-32" />
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Play"
    description="Play a selection of interactive demos without leaving the browser."
  />
)
