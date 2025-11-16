import React from "react";

// See: https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

function wrap(Tag, baseClasses) {
  return function Component({ className = "", children, ...props }) {
    return (
      <Tag className={`${baseClasses} ${className}`.trim()} {...props}>
        {children}
      </Tag>
    );
  };
}

export const h1 = wrap("h1", "text-4xl font-extrabold mt-8 mb-4");
export const h2 = wrap("h2", "text-3xl font-bold mt-6 mb-3");
export const h3 = wrap("h3", "text-2xl font-semibold mt-4 mb-2");

export const p = wrap("p", "leading-relaxed mb-4");
export const a = wrap("a", "text-blue-600 underline hover:text-blue-800");
export const img = wrap("img", "rounded-md shadow my-4");

export const ul = wrap("ul", "list-disc pl-6 mb-4");
export const ol = wrap("ol", "list-decimal pl-6 mb-4");
export const li = wrap("li", "mb-1");

export const blockquote = wrap(
  "blockquote",
  "border-l-4 pl-4 italic bg-gray-50 p-2 rounded"
);

export const pre = function Pre({ className = "", ...props }) {
  return (
    <pre
      className={`overflow-x-auto p-4 rounded-md mb-4 bg-gray-100 ${className}`}
      {...props}
    />
  );
};

export const code = function Code({ className = "", ...props }) {
  return (
    <code
      className={`px-1 py-0.5 rounded bg-gray-200 text-sm ${className}`}
      {...props}
    />
  );
};

export default {
  h1,
  h2,
  h3,
  p,
  a,
  img,
  ul,
  ol,
  li,
  blockquote,
  pre,
  code,
};

