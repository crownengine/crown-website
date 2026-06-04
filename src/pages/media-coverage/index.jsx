import React from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const articles = [
  {
    outlet: "Phoronix",
    title: "Crown Engine 0.63 Restores Its OpenGL Renderer For Legacy Hardware Support",
    author: "Michael Larabel",
    date: "June 4, 2026",
    url: "https://www.phoronix.com/news/Crown-Engine-0.63",
    screenshot: "/media-coverage/phoronix-crown-engine-0.60.png",
  },
  {
    outlet: "Phoronix",
    title: "Open-Source Crown Game Engine v0.60 Released",
    author: "Michael Larabel",
    date: "December 31, 2025",
    url: "https://www.phoronix.com/news/Crown-Engine-0.60",
    screenshot: "/media-coverage/phoronix-crown-engine-0.60.png",
  },
]

function MediaCoverageCard({ article }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-200">
      <a
        className="block bg-gray-900"
        href={article.url}
        rel="noreferrer"
        target="_blank"
        aria-label={article.title}
      >
        <img
          className="w-full aspect-video object-cover opacity-90 hover:opacity-100 transition-opacity"
          src={article.screenshot}
          alt={`${article.outlet} article screenshot`}
        />
      </a>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-xs font-semibold mb-4 flex items-center gap-2">
          <span className="uppercase text-indigo-600">{article.outlet}</span>
          <span className="text-gray-300" aria-hidden="true">
            |
          </span>
          <span className="text-gray-500">{article.date}</span>
        </p>
        <h2 className="text-xl font-semibold text-gray-700 mb-3 leading-snug">
          <a className="hover:text-indigo-700" href={article.url} rel="noreferrer" target="_blank">
            {article.title}
          </a>
        </h2>
        <div className="mt-auto text-sm text-gray-500">
          <p>By {article.author}</p>
        </div>
      </div>
    </article>
  )
}

export default function MediaCoverageIndex() {
  return (
    <Layout>
      <Clamp>
        <section className="mt-12 mb-16 px-4">
          <h1 className="text-2xl font-bold mb-6 text-gray-600">Media Coverage</h1>
          <div className="text-left text-gray-600">
            <div className="grid gap-5 md:grid-cols-2 lg:max-w-[75%]">
              {articles.map(article => (
                <MediaCoverageCard key={article.url} article={article} />
              ))}
            </div>
          </div>
        </section>
      </Clamp>

      {/* Padding */}
      <section className="py-36" />
    </Layout>
  )
}

export const Head = () => <Seo title="Crown - Media Coverage" />
