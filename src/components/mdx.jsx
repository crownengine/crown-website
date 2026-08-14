import React from "react"

// See: https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

function wrap(Tag, baseClasses) {
  return function Component({ className = "", children, ...props }) {
    return (
      <Tag className={`${baseClasses} ${className}`.trim()} {...props}>
        {children}
      </Tag>
    )
  }
}

export const h1 = wrap("h1", "text-display font-bold mt-8 mb-6")
export const h2 = wrap("h2", "text-title font-bold mt-8 mb-6")
export const h3 = wrap("h3", "text-lead font-semibold mt-6 mb-3")
export const h4 = wrap("h4", "text-body font-semibold mt-4 mb-2")

export const p = wrap("p", "leading-relaxed mb-10 mt-10")
export const a = wrap("a", "text-brand-light underline hover:text-inverse")
export const img = wrap("img", "rounded-widget my-4")

export const ul = wrap("ul", "list-disc pl-6 mb-4")
export const ol = wrap("ol", "list-decimal pl-6 mb-4")
export const li = wrap("li", "mb-1")

export const blockquote = wrap("blockquote", "border-l-4 pl-4 italic bg-dark p-2 rounded-widget")

export const pre = function Pre({ className = "", ...props }) {
  return (
    <pre
      className={`overflow-x-auto p-4 rounded-widget mb-4 bg-dark text-inverse ${className}`}
      {...props}
    />
  )
}

export const code = function Code({ className = "", ...props }) {
  return (
    <code
      className={`px-1 py-0.5 rounded-widget bg-dark text-inverse text-small ${className}`}
      {...props}
    />
  )
}

const MDXComponents = {
  h1,
  h2,
  h3,
  h4,
  p,
  a,
  img,
  ul,
  ol,
  li,
  blockquote,
  pre,
  code,
}

export default MDXComponents
