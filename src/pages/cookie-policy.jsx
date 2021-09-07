import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import content from "../data/html/cookie_policy.html"

export default function CookiePolicy() {
  return (
    <Layout pageInfo={{ pageName: "cookie-policy" }}>
      <Seo title="Cookie Policy" />
      <div
        className="lexdo mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </Layout>
  )
}
