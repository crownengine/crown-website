import React from "react"
import Footer from "./footer"
import Header from "./header"
import favicon from "../images/crown-logo-kit/square/512x512/apps/crown.png"
import Helmet from 'react-helmet'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <div className="dark:text-white">
        <div className="container center mx-auto lg:w-8/12 flex flex-col h-screen justify-between">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
