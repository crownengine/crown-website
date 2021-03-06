import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export default Image = ({ fileName, alt, title, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
          }
          gatsbyImageData(formats: WEBP)
        }
      }
    }
  `)

  const image = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .gatsbyImageData

  return (
    <figure>
      <GatsbyImage image={image} alt={alt} title={title} style={style} />
    </figure>
  )
}
