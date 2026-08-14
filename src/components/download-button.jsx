import { Link } from "gatsby"
import React from "react"

const DownloadButton = ({
  children = "Download Crown",
  className = "",
  ...props
}) => {
  return (
    <Link
      className={`button button-primary ${className}`.trim()}
      to="/download"
      {...props}
    >
      {children}
    </Link>
  )
}

export default DownloadButton
