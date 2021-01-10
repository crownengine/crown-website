import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function CookiePolicy() {
  return (
    <Layout pageInfo={{ pageName: "cookie-policy" }}>
      <SEO title="Cookie Policy" />
      <div
        className="lexdo mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{
          __html: require("../data/html/cookie_policy.html"),
        }}
      ></div>
    </Layout>
  )
}
