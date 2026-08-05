import React from "react"

const defaultColorClasses = "text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700"

const DocumentationButton = ({
  href,
  children = "Read the Documentation",
  colorClassName = defaultColorClasses,
  className = "",
  ...props
}) => {
  return (
    <a
      className={`inline-block py-4 px-8 mb-2 font-semibold leading-none rounded shadow ${colorClassName} ${className}`.trim()}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}

export default DocumentationButton
