import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./lexdo.module.css"

export default function PrivacyPolicy() {
  return (
    <Layout pageInfo={{ pageName: "privacy_policy" }}>
      <SEO title="Privacy Policy" />
      <div
        className="mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{
          __html: require("../html/privacy_policy.html"),
        }}
      ></div>
    </Layout>
  )
}
