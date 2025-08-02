import PropTypes from "prop-types"
import React from "react"

export default function Clamp({ children }) {
  return <div className="container center mx-auto 4xl:w-5/11 3xl:w-2/3 md:w-5/6">{children}</div>
}

Clamp.propTypes = {
  children: PropTypes.node.isRequired,
}
