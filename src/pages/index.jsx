import React from "react"
import Cta from "../components/cta"
import Features from "../components/features"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <Cta />
      <Features />
      {/* <FAQ /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description_short
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
