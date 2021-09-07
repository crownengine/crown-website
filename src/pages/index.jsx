import React from "react"
import Cta from "../components/cta"
import Features from "../components/features"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <Cta />
      <Features />
      {/* <FAQ /> */}
    </Layout>
  )
}
