import { graphql } from "gatsby"
import { basename } from "path"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function MDTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout pageInfo={{ pageName: basename(frontmatter.slug).base }}>
      <SEO title={frontmatter.title} />
      <div
        className="markdown mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
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
