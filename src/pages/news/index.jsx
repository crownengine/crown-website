import React from "react"
import { graphql, Link } from "gatsby"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import MediaCoverageList from "../../components/media-coverage-list"
import Seo from "../../components/seo"
import NewsList from "../../components/news-list.jsx"

// See: https://www.gatsbyjs.com/docs/adding-a-list-of-markdown-blog-posts/
export default function NewsIndex({ data }) {
  return (
    <Layout>
      <div className="bg-deepest">
        <Clamp>
          <section className="px-4 pb-16 pt-12" aria-labelledby="news-heading">
            <h1 className="mb-6 text-title font-bold text-inverse">
              <Link id="news-heading" className="hover:text-brand-light" to="/news/all">
                News
              </Link>
            </h1>
            <NewsList
              edges={data.allMdx.edges}
              limit={1}
              listClassName="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
              itemClassName="col-span-full"
              sectionClassName="mb-12"
            />
            <NewsList
              edges={data.allMdx.edges}
              start={1}
              limit={3}
              listClassName="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-12"
              itemClassName=""
            />
          </section>
        </Clamp>
      </div>

      <Clamp>
        <section className="mb-16 mt-12 px-4" aria-labelledby="media-coverage-heading">
          <h2 className="mb-6 text-title font-bold text-ink">
            <Link
              id="media-coverage-heading"
              className="hover:text-brand-hover"
              to="/media-coverage"
            >
              Media Coverage
            </Link>
          </h2>
          <MediaCoverageList limit={3} titleAs="h3" />
        </section>
      </Clamp>
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

export const Head = () => <Seo title="Crown - Latest News" />
