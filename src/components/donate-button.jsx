import { Link } from "gatsby"
import React from "react"

const DonateButton = () => {
  return (
    <Link
      className="
        inline-block
        group relative isolate block overflow-hidden rounded
        bg-indigo-600 px-4 py-2
        text-white shadow
        transition-colors duration-300
        hover:bg-indigo-700 hover:text-white
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-400
        focus-visible:ring-offset-2
      "
      to="/fund"
    >
      <span
        className="
          inline-block
          pointer-events-none absolute inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent via-white/35 to-transparent
          transition-transform duration-0 ease-out
          group-hover:translate-x-full
          group-hover:duration-700
          group-focus-visible:translate-x-full
          group-focus-visible:duration-700
          motion-reduce:transition-none
        "
      />

      <i className="fa fa-heart mr-2" />
      Donate
    </Link>
  )
}

export default DonateButton
