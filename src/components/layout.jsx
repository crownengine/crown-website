import PropTypes from "prop-types"
import React from "react"
import { Head } from "gatsby"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <div className="dark:text-white bg-gray-100 dark:bg-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
