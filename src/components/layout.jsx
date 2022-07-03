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
      <div className="dark:text-white bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="container center mx-auto lg:w-5/11 flex flex-col">
            <main className="mb-auto">{children}</main>
          </div>
          <div className="mt-auto bg-gray-300 dark:bg-gray-900 px-6 lg:px-8 py-8 text-sm">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
