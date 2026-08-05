import React from "react"

const DocumentationButton = ({ href, children = "Read the Documentation" }) => {
  return (
    <a
      className="inline-block py-4 px-8 mb-2 font-semibold leading-none text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow"
      href={href}
    >
      {children}
    </a>
  )
}

export default DocumentationButton
