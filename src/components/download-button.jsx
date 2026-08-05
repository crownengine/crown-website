import { Link } from "gatsby"
import React from "react"

const defaultColorClasses = "text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700"

const DownloadButton = ({
  children = "Download Crown",
  colorClassName = defaultColorClasses,
  className = "",
  ...props
}) => {
  return (
    <Link
      className={`inline-block py-2 px-8 font-semibold rounded shadow ${colorClassName} ${className}`.trim()}
      to="/download"
      {...props}
    >
      {children}
    </Link>
  )
}

export default DownloadButton
