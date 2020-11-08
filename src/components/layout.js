/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Container } from "react-bootstrap"
import styles from "./layout.module.css"

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
      <Header siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
      <Container fluid className={styles.container}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
