import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Clamp from "../components/clamp"
import Seo from "../components/seo"
import MDXComponents from "../components/mdx"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

function ShowcaseParagraph({ className = "", ...props }) {
  return <p className={`leading-relaxed mb-5 text-lead ${className}`.trim()} {...props} />
}

function NewsHeading({ className = "", ...props }) {
  return <h2 className={`text-title font-bold mt-8 mb-6 ${className}`.trim()} {...props} />
}

function NewsParagraph({ className = "", ...props }) {
  return <p className={`leading-relaxed mb-10 mt-10 text-lead ${className}`.trim()} {...props} />
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
  const titleImage = mdx.frontmatter.title_image === true
    ? getImage(mdx.frontmatter.image?.childImageSharp?.gatsbyImageData)
    : null
  const prevNews = pageContext.prev
    ? { url: `${pageContext.prev.frontmatter.slug}`, title: pageContext.prev.frontmatter.title }
    : null
  const nextNews = pageContext.next
    ? { url: `${pageContext.next.frontmatter.slug}`, title: pageContext.next.frontmatter.title }
    : null

  return (
    <Layout>
      <div className="bg-deepest">
        <Clamp>
          {/* Header */}
          <section className={titleImage
            ? "relative isolate flex min-h-[28rem] flex-col justify-end px-4 pb-12 pt-32 text-left text-inverse"
            : isShowcase
              ? "px-4 pt-32 text-left text-inverse"
              : "px-4 pt-16 text-left text-inverse"
          }>
            {titleImage && (
              <>
                <GatsbyImage image={titleImage} alt="" className="!absolute inset-y-0 left-1/2 -z-20 h-full w-screen -translate-x-1/2" />
                <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-gradient-to-t from-deepest via-deepest/30 to-deepest/50" />
              </>
            )}
            <span className="mb-4 text-small text-muted">{mdx.frontmatter.date}</span>
            <h1 className={titleImage
              ? "text-display font-bold"
              : isShowcase
                ? "text-display font-bold mb-4"
                : "text-display font-bold mb-12"
            }>{mdx.frontmatter.title}</h1>
          </section>

          {/* Content */}
          <section className={isShowcase ? "px-4 text-left mb-8 text-lead text-inverse" : "px-4 text-left mb-8 text-inverse"}>
            <MDXProvider components={isShowcase ? ShowcaseMDXComponents : NewsMDXComponents}>{children}</MDXProvider>
          </section>

          {/* Prev/next news */}
          <section className="flex flex-col md:flex-row px-4 text-inverse">
            {prevNews && (
              <Link
                className="button button-inverse w-full justify-start"
                to={prevNews.url}
              >
                &lt; {prevNews.title}
              </Link>
            )}
            {nextNews && (
              <Link
                className="button button-inverse w-full justify-end text-right"
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
        title_image
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
