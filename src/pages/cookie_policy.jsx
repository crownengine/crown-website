import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./lexdo.module.css"

export default function CookiePolicy() {
  return (
    <Layout pageInfo={{ pageName: "cookie_policy" }}>
      <SEO title="Cookie Policy" />
      <div
        className="mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{
          __html: require("../html/cookie_policy.html"),
        }}
      ></div>
    </Layout>
  )
}
