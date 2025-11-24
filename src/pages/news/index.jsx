import React from "react"
import { graphql } from "gatsby"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NewsList from "../../components/news-list.jsx"

// See: https://www.gatsbyjs.com/docs/adding-a-list-of-markdown-blog-posts/
export default function NewsIndex({ data }) {
  return (
    <Layout>
      <Clamp>
        <section className="mt-12 mb-16 px-4">
          <h1 className="text-2xl font-bold mb-6 text-gray-600">News</h1>
          <NewsList edges={data.allMdx.edges}/>
        </section>
      </Clamp>
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
            image {
              childImageSharp {
                gatsbyImageData(width: 1280, placeholder: DOMINANT_COLOR)
              }
            }
          }
          excerpt(pruneLength: 80)
        }
      }
    }
  }
`

export const Head = () => (
  <Seo title="Crown - Latest News" />
)
