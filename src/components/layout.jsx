import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import favicon from "../images/crown-logo-kit/crown-black-socket.svg"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
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
