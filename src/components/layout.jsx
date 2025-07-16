import PropTypes from "prop-types"
import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gray-100">
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
