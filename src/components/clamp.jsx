import PropTypes from "prop-types"
import React from "react"

export default function Clamp({ children }) {
  return <div className="container center mx-auto 2xl:w-5/11 xl:w-2/3 md:w-5/6">{children}</div>
}

Clamp.propTypes = {
  children: PropTypes.node.isRequired,
}
