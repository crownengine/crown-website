import React from "react"
import Cta from "../components/cta"
import Features from "../components/features"
import Layout from "../components/layout"
import NewsList from "../components/news-list"
import Clamp from "../components/clamp.jsx"
import Seo from "../components/seo"
import { graphql, Link } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout>
      <Cta />
      <Clamp>
        <section className="mb-16 px-4">
          <h1 className="">
            <Link
              className="block text-2xl font-bold mb-6 text-gray-600"
              to="/news"
            >
              Latest News
            </Link>
          </h1>
          {/* Latest news card.*/}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flow-root lg:items-stretch">
            <div className="lg:col-span-3">
              <NewsList
                edges={data.allMdx.edges}
                start={0}
                limit={1}
                variant="regular"
                listClassName=""
                itemClassName=""
              />
            </div>

            {/* Older news cards. */}
            <div className="lg:col-span-2">
              <NewsList
                edges={data.allMdx.edges}
                start={1}
                limit={3}
                variant="row"
                listClassName="flex flex-col gap-4 md:h-full"
                itemClassName="md:flex-1"
              />
            </div>
          </div>
        </section>
      </Clamp>
      <Features />
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
        description_short
      }
    }
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

export const Head = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description_short
  const fulltitle = title + " - " + description
  return <Seo title={fulltitle}/>
}
