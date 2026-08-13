import React from "react"
import Cta from "../components/cta"
import Features from "../components/features"
import Layout from "../components/layout"
import NewsList from "../components/news-list"
import Clamp from "../components/clamp.jsx"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { FaSquareRss } from "react-icons/fa6"

export default function Home({ data }) {
  return (
    <Layout>
      <Cta />
      <Clamp>
        <section className="mb-16 px-4" aria-labelledby="latest-news">
          <h2 className="mb-6 flex text-[42px] font-bold text-gray-600">
            <Link id="latest-news" className="block" to="/news">
              Latest News
            </Link>
            <a
              className="ml-2 flex items-center text-3xl hover:text-indigo-800"
              rel="noreferrer"
              target="_blank"
              href="https://www.crownengine.org/rss.xml"
              title="News RSS feed"
            >
              <FaSquareRss aria-label="News RSS feed" />
            </a>
          </h2>
          {/* Latest news card.*/}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flow-root lg:items-stretch">
            <div className="lg:col-span-3">
              <NewsList
                edges={data.allMdx.edges}
                start={0}
                limit={1}
                variant="regular"
                excerptClassName="text-base"
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
                excerptClassName="text-base"
                listClassName="flex flex-col gap-4 md:h-full"
                itemClassName="md:flex-1"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 px-4" aria-labelledby="crown-foundation">
          <div className="flex flex-col gap-6 rounded-lg bg-gray-200 px-6 py-14 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h2 id="crown-foundation" className="text-[42px] font-bold text-gray-700">
                The Crown Foundation
              </h2>
              <p className="mt-2 max-w-4xl text-lg text-gray-700">
                We develop Crown Engine, publish ready-to-use releases, and maintain free resources
                that help people build awesome games.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  className="inline-block whitespace-nowrap rounded bg-indigo-600 px-6 py-3 text-center font-semibold text-white shadow transition hover:bg-indigo-700"
                  to="/about"
                >
                  About the Foundation
                </Link>
                <Link
                  className="inline-block whitespace-nowrap rounded border border-indigo-600 px-6 py-3 text-center font-semibold text-indigo-700 transition hover:bg-indigo-100 hover:text-indigo-900"
                  to="/fund"
                >
                  Help our Mission
                </Link>
              </div>
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
                gatsbyImageData(quality: 80, width: 960, placeholder: DOMINANT_COLOR)
              }
            }
          }
          excerpt(pruneLength: 120)
        }
      }
    }
  }
`

export const Head = () => {
  return <Seo title="A Game Engine Focused on What Matters" />
}
