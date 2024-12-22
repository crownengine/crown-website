import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"
import content from "../data/html/privacy_policy.html"

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <Clamp>
        <div
          className="lexdo text-justify break-words px-4 py-16"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </Clamp>
    </Layout>
  )
}
