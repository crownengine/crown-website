import { Link } from "gatsby"
import React from "react"
import { FaHeart } from "react-icons/fa6"

const DonateButton = () => {
  return (
    <Link className="button button-primary button-compact button-donate" to="/fund">
      <FaHeart className="mr-2 inline" aria-hidden="true" />
      Donate
    </Link>
  )
}

export default DonateButton
