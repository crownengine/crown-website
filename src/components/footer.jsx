import React from "react"

const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between p-4">
    <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
      © {new Date().getFullYear()} The Crown Foundation
    </div>
    <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
      <div className="mx-auto lg:mx-0 lg:ml-auto">
        {/* <a
          className="inline-block mt-0 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Products
        </a>
        <a
          className="inline-block mt-0 ml-8 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Team
        </a>
        <a
          className="inline-block mt-0 ml-8 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Customers
        </a> */}
      </div>
      <div className="flex justify-center space-x-6 mt-4 lg:mt-0 lg:ml-8">
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:foundation@crownengine.org"
        >
          <i className="fas fa-lg fa-envelope text-indigo-600"></i>
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
