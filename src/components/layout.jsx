/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children, pageInfo }) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header pageInfo={pageInfo} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout