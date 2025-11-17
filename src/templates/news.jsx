import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Clamp from "../components/clamp"
import Seo from "../components/seo"
import MDXComponents from "../components/mdx";
import { getSrc } from "gatsby-plugin-image"

export default function NewsTemplate({ data: { mdx }, children, pageContext }) {
  const prevNews = pageContext.prev ? { url: `${pageContext.prev.frontmatter.slug}`, title: pageContext.prev.frontmatter.title } : null
  const nextNews = pageContext.next ? { url: `${pageContext.next.frontmatter.slug}`, title: pageContext.next.frontmatter.title } : null

  return (
    <Layout>
      <Clamp>
        {/* Header */}
        <section className="px-40 pt-16 text-left text-gray-600">
          <span className="text-1xl text-gray-500 mb-4">{mdx.frontmatter.date}</span>
          <h1 className="text-5xl font-bold mb-12">{mdx.frontmatter.title}</h1>
        </section>

        {/* Content */}
        <section className="px-40 text-left mb-8 text-gray-800">
          <MDXProvider components={MDXComponents}>
            {children}
          </MDXProvider>
        </section>

        {/* Prev/next news*/}
        <section className="flex px-40 text-gray-800">
         {prevNews && (
            <Link className="flex justify-start w-full inline-block py-4 px-8 font-semibold leading-none text-gray-600 hover:text-white hover:bg-indigo-700 rounded"
              to={prevNews.url}
            >
               <span>&lt; {prevNews.title}</span>
            </Link>
         )}
         {nextNews && (
            <Link className="flex justify-end w-full inline-block py-4 px-8 font-semibold leading-none text-gray-600 hover:text-white hover:bg-indigo-700 rounded"
              to={nextNews.url}
            >
               <span>{nextNews.title} &gt;</span>
            </Link>
         )}
        </section>
      </Clamp>

      {/* Padding */}
      <section className="py-32"></section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
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
  const image = getSrc(data.mdx.frontmatter.image);
  return <Seo title={title} description={excerpt} image={image}/>
}
