import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./markdown.module.css"

export default function MDTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pageInfo={{ pageName: "privacy-policy" }}>
      <SEO title={frontmatter.title} />
      <div
        className="mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
