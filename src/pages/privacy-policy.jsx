import React from "react"
import Clamp from "../components/clamp"
import Layout from "../components/layout"
import Seo from "../components/seo"
import content from "../data/html/privacy_policy.html"

export default function PrivacyPolicy() {
  return (
    <Layout>
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

export const Head = () => (
  <Seo title="Privacy Policy" />
)
