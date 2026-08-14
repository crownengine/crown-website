import React from "react"

const DocumentationButton = ({
  href,
  children = "Read the Documentation",
  className = "",
  ...props
}) => {
  return (
    <a
      className={`button button-primary mb-2 ${className}`.trim()}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}

export default DocumentationButton
