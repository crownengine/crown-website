import React from "react"
import CTA from "../components/cta"
import Features from "../components/features"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" />
      <CTA />
      <Features />
      {/* <FAQ /> */}
    </Layout>
  )
}
