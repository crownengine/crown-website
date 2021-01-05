import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children, pageInfo }) {
  return (
    <>
      <div className="container center mx-auto flex flex-col h-screen justify-between">
        <Header pageInfo={pageInfo} />
        <main className="mb-auto lg:mx-48">{children}</main>
        <Footer />
      </div>
    </>
  )
}
