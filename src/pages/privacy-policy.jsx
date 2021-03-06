import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../data/html/privacy_policy.html"

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div
        className="lexdo mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </Layout>
  )
}
