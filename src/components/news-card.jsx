import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function NewsCard({ title, excerpt, date, image }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">      {/* image at the top */}
      <div className="w-full h-64 overflow-hidden">
        <GatsbyImage image={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title and Date */}
      <div className="p-4 flex-1 flex flex-col justify-end">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {excerpt && (
          <p className="text-sm text-gray-700 mb-2 line-clamp-3">{excerpt}</p>
          )}
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </article>
  );
}
