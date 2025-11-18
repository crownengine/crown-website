import React from "react"
import { Link, graphql } from "gatsby"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NewsCard from "../../components/news-card.jsx"
import { getImage } from "gatsby-plugin-image"

// See: https://www.gatsbyjs.com/docs/adding-a-list-of-markdown-blog-posts/
export default function NewsIndex({ data: { allMdx: { edges } }}) {
  const News = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, index) =>
      <div key={index} className="flex-1 min-w-[300px]">
        <Link to={edge.node.frontmatter.slug}>
          <NewsCard
            image={getImage(edge.node.frontmatter.image?.childImageSharp?.gatsbyImageData)}
            title={edge.node.frontmatter.title}
            excerpt={edge.node.excerpt}
            date={edge.node.frontmatter.date}
          />
        </Link>
      </div>
    )

  return (
    <Layout>
      <Clamp>
        {/* News list */}
        <section className="py-16 px-4 text-left text-gray-600">
          <div className="flex flex-wrap gap-4">
            {News}
          </div>
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
