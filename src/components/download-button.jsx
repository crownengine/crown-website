import { Link } from "gatsby"
import React from "react";

const DownloadButton = () => {
  return (
    <Link
      className="inline-block py-4 px-8 mb-2 font-semibold leading-none text-gray-200 hover:text-white dark:text-black bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded shadow"
      to="/download"
    >
      Download Crown
    </Link>
  );
};

export default DownloadButton;

