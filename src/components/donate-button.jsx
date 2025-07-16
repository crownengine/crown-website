import { Link } from "gatsby"
import React from "react";

const DonateButton = () => {
  return (
    <Link
      className="block py-2 pr-4 pl-3

             hover:text-white
             text-white

              bg-indigo-600
        hover:bg-indigo-700

        rounded
        shadow
        "
      to="/fund"
    >
      <i className="fa fa-heart mr-2"></i>Donate
    </Link>
  );
};

export default DonateButton;
