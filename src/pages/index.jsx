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
          <h2 className="group mb-6 flex text-title font-bold text-ink">
            <Link id="latest-news" className="block" to="/news">
              Latest News
            </Link>
            <a
              className="pointer-events-none ml-2 flex items-center text-lead text-ink opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
              rel="noreferrer"
              target="_blank"
              href="https://www.crownengine.org/rss.xml"
              title="News RSS feed"
            >
              <FaSquareRss aria-label="News RSS feed" />
            </a>
          </h2>
          {/* Latest news card.*/}
          <div className="grid grid-cols-1 gap-6 flow-root lg:grid-cols-4 lg:items-stretch">
            <div className="lg:col-span-3 lg:h-full">
              <NewsList
                edges={data.allMdx.edges}
                start={0}
                limit={1}
                variant="regular"
                excerptClassName="text-body"
                sectionClassName="h-full"
                listClassName="h-full"
                itemClassName="h-full"
                linkClassName="block h-full"
              />
            </div>

            {/* Older news cards. */}
            <div className="lg:col-span-1 lg:h-full">
              <NewsList
                edges={data.allMdx.edges}
                start={1}
                limit={3}
                variant="overlay"
                sectionClassName="lg:h-full"
                listClassName="flex flex-col gap-4 lg:h-full"
                itemClassName="lg:flex-1"
                linkClassName="block h-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 px-4" aria-labelledby="crown-foundation">
          <div className="widget flex flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h2 id="crown-foundation" className="text-title font-bold text-ink">
                The Crown Foundation
              </h2>
              <p className="mt-2 max-w-4xl text-lead text-ink">
                We develop Crown Engine, publish ready-to-use releases, and maintain free resources
                that help people build awesome games.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Link className="button button-primary" to="/about">
                  About the Foundation
                </Link>
                <Link className="button button-secondary" to="/fund">
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
                gatsbyImageData(quality: 90, width: 960, placeholder: DOMINANT_COLOR)
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
