/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <div class="container mx-auto px-4">
        <Header siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
