import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function MDTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div
        className="markdown mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  )
}

MDTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
