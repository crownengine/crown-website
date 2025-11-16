import React from "react"
import { Link, graphql } from "gatsby"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

// See: https://www.gatsbyjs.com/docs/adding-a-list-of-markdown-blog-posts/
export default function NewsIndex({ data: { allMdx: { edges } }}) {
  const News = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge =>
      <p className="font-bold">
        <Link to={edge.node.frontmatter.slug}>
          {edge.node.frontmatter.title} — {edge.node.frontmatter.date}
        </Link>
      </p>
    )

  return (
    <Layout>
      <Clamp>
        {/* News list */}
        <section className="py-16 px-4 text-left text-gray-600">
          <h1 className="text-6xl mb-6 font-bold">News</h1>
          {News}
        </section>
      </Clamp>
      {/* Padding */}
      <section className="py-48"></section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export const Head = () => (
  <Seo title="Crown Engine News" />
)

