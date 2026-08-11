import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Clamp from "../components/clamp"
import Seo from "../components/seo"
import MDXComponents from "../components/mdx"
import { getSrc } from "gatsby-plugin-image"

function ShowcaseParagraph({ className = "", ...props }) {
  return <p className={`leading-relaxed mb-5 text-xl ${className}`.trim()} {...props} />
}

function NewsHeading({ className = "", ...props }) {
  return <h2 className={`text-[42px] font-extrabold mt-8 mb-6 ${className}`.trim()} {...props} />
}

function NewsParagraph({ className = "", ...props }) {
  return <p className={`leading-relaxed mb-10 mt-10 text-xl ${className}`.trim()} {...props} />
}

const NewsMDXComponents = {
  ...MDXComponents,
  h2: NewsHeading,
  p: NewsParagraph,
}

const ShowcaseMDXComponents = {
  ...MDXComponents,
  p: ShowcaseParagraph,
}

export default function NewsTemplate({ data: { mdx }, children, pageContext }) {
  const isShowcase = mdx.frontmatter.showcase === true
  const prevNews = pageContext.prev
    ? { url: `${pageContext.prev.frontmatter.slug}`, title: pageContext.prev.frontmatter.title }
    : null
  const nextNews = pageContext.next
    ? { url: `${pageContext.next.frontmatter.slug}`, title: pageContext.next.frontmatter.title }
    : null

  return (
    <Layout>
      <div className="bg-gray-950">
        <Clamp>
          {/* Header */}
          <section className={isShowcase ? "px-4 pt-32 text-left text-gray-200" : "px-4 pt-16 text-left text-gray-200"}>
            <span className="text-1xl text-gray-400 mb-4">{mdx.frontmatter.date}</span>
            <h1 className={isShowcase ? "text-8xl font-extrabold mb-4" : "text-8xl font-bold mb-12"}>{mdx.frontmatter.title}</h1>
          </section>

          {/* Content */}
          <section className={isShowcase ? "px-4 text-left mb-8 text-lg text-gray-200" : "px-4 text-left mb-8 text-gray-200"}>
            <MDXProvider components={isShowcase ? ShowcaseMDXComponents : NewsMDXComponents}>{children}</MDXProvider>
          </section>

          {/* Prev/next news */}
          <section className="flex flex-col md:flex-row px-4 text-gray-200">
            {prevNews && (
              <Link
                className="flex flex-col md:flex-row w-full inline-block py-4 px-4 font-semibold leading-none text-gray-400 hover:text-white hover:bg-indigo-700 rounded"
                to={prevNews.url}
              >
                &lt; {prevNews.title}
              </Link>
            )}
            {nextNews && (
              <Link
                className="flex flex-col md:flex-row w-full text-end justify-end inline-block py-4 px-4 font-semibold leading-none text-gray-400 hover:text-white hover:bg-indigo-700 rounded"
                to={nextNews.url}
              >
                {nextNews.title} &gt;
              </Link>
            )}
          </section>
        </Clamp>

        {/* Padding */}
        <section className="py-32" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        showcase
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(width: 1280, placeholder: BLURRED)
          }
        }
      }
      excerpt(pruneLength: 280)
    }
  }
`

export const Head = ({ data }) => {
  const title = data.mdx.frontmatter.title
  const excerpt = data.mdx.excerpt
  const image = getSrc(data.mdx.frontmatter.image)
  return <Seo title={title} description={excerpt} image={image} />
}
