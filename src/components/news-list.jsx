import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import NewsCard from "./news-card.jsx"

export default function NewsList({ edges, nodes, limit = Infinity, Card = NewsCard, itemClassName = "" }) {
  // Normalize to `nodes` array (each item is a single node)
  const items = (nodes || edges?.map(e => e.node) || [])
    .filter(node => !!node?.frontmatter?.date)
    .slice(0, limit)

  if (!items.length) return null

  return (
    <section className="text-left text-gray-600">
      <div className="flex flex-wrap gap-4">
        {items.map(node => {
          const fm = node.frontmatter || {}
          const key = node.id || fm.slug || fm.title

          return (
            <div key={key} className={`flex-1 min-w-[300px] ${itemClassName}`}>
              <Link to={fm.slug}>
                <Card
                  image={getImage(fm.image?.childImageSharp?.gatsbyImageData)}
                  title={fm.title}
                  excerpt={node.excerpt}
                  date={fm.date}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

NewsList.propTypes = {
  edges: PropTypes.array,
  nodes: PropTypes.array,
  limit: PropTypes.number,
  Card: PropTypes.elementType,
  itemClassName: PropTypes.string,
}
