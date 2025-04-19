import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import content from "../data/html/cookie_policy.html"
import Clamp from "../components/clamp"

export default function CookiePolicy() {
  return (
    <Layout pageInfo={{ pageName: "cookie-policy" }}>
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
  <Seo title="Cookie Policy" />
)
