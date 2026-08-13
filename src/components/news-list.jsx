import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import NewsCard from "./news-card.jsx"

export default function NewsList({
  edges,
  nodes,
  limit = Infinity,
  start = 0,
  Card = NewsCard,
  variant = "regular",
  excerptClassName,
  itemClassName = "flex-1 min-w-[300px]",
  listClassName = "flex flex-wrap gap-4",
}) {
  const allItems = (nodes || edges?.map(e => e.node) || []).filter(
    node => !!node?.frontmatter?.date,
  )

  const items = allItems.slice(start, start + limit)

  if (!items.length) return null

  return (
    <section className="text-left text-gray-600">
      <div className={listClassName}>
        {items.map(node => {
          const fm = node.frontmatter || {}
          const key = node.id || fm.slug || fm.title

          return (
            <div key={key} className={`${itemClassName}`}>
              <Link to={fm.slug} aria-label={fm.title}>
                <Card
                  image={getImage(fm.image?.childImageSharp?.gatsbyImageData)}
                  title={fm.title}
                  excerpt={node.excerpt}
                  excerptClassName={excerptClassName}
                  date={fm.date}
                  variant={variant}
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
  start: PropTypes.number,
  Card: PropTypes.elementType,
  variant: PropTypes.string,
  excerptClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  listClassName: PropTypes.string,
}
