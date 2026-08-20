import React from "react"
import PropTypes from "prop-types"

const articles = [
  {
    outlet: "Engines Database",
    title: "This Week in Game Engines #39",
    author: "Henrique L. Alves",
    date: "August 19, 2026",
    url: "https://enginesdatabase.com/blog/this-week-in-game-engines-39/",
    screenshot: "/media-coverage/engines-database.png",
  },
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

function MediaCoverageCard({ article, titleAs: Title }) {
  return (
    <article className="widget group flex h-full flex-col overflow-hidden">
      <a
        className="block overflow-hidden bg-deepest"
        href={article.url}
        rel="noreferrer"
        target="_blank"
        aria-label={article.title}
      >
        <img
          className="aspect-video w-full transform-gpu object-cover opacity-90 transition duration-200 ease-out group-hover:scale-[1.04] group-hover:opacity-100 motion-reduce:group-hover:scale-100"
          src={article.screenshot}
          alt={`${article.outlet} article screenshot`}
        />
      </a>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-caption font-semibold mb-4 flex items-center gap-2">
          <span className="uppercase text-brand">{article.outlet}</span>
          <span className="text-inverse-muted" aria-hidden="true">
            |
          </span>
          <span className="text-muted">{article.date}</span>
        </p>
        <Title className="text-lead font-semibold text-ink mb-3 leading-tight">
          <a className="hover:text-brand-hover" href={article.url} rel="noreferrer" target="_blank">
            {article.title}
          </a>
        </Title>
        <div className="mt-auto text-small text-muted">
          <p>By {article.author}</p>
        </div>
      </div>
    </article>
  )
}

MediaCoverageCard.propTypes = {
  article: PropTypes.object.isRequired,
  titleAs: PropTypes.elementType.isRequired,
}

export default function MediaCoverageList({ limit = Infinity, titleAs = "h2" }) {
  return (
    <div className="text-left text-muted">
      <div className="grid gap-5 md:grid-cols-3">
        {articles.slice(0, limit).map(article => (
          <MediaCoverageCard key={article.url} article={article} titleAs={titleAs} />
        ))}
      </div>
    </div>
  )
}

MediaCoverageList.propTypes = {
  limit: PropTypes.number,
  titleAs: PropTypes.elementType,
}
