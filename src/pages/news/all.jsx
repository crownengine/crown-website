import React from "react"
import { graphql } from "gatsby"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NewsList from "../../components/news-list.jsx"

export default function AllNews({ data }) {
  return (
    <Layout>
      <div className="bg-deepest">
        <Clamp>
          <section className="px-4 pb-16 pt-12">
            <h1 className="mb-6 text-title font-bold text-inverse">News</h1>
            <NewsList
              edges={data.allMdx.edges}
              listClassName="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-12"
              itemClassName="first:col-span-full"
            />
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

export const Head = () => <Seo title="Crown - All News" />
