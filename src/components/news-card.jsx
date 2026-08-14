import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function NewsCard({
  title,
  excerpt,
  excerptClassName = "text-small",
  date,
  image,
  variant = "regular",
}) {
  if (variant === "regular" || variant === "featured") {
    const featured = variant === "featured"

    return (
      <article className="widget group flex h-full flex-col overflow-hidden">
        {/* image at the top */}
        <div
          className={
            featured
              ? "h-64 w-full overflow-hidden lg:relative lg:h-auto lg:min-h-0 lg:flex-1"
              : "h-64 w-full overflow-hidden"
          }
        >
          {image && (
            <GatsbyImage
              image={image}
              alt={title}
              className={`${featured ? "lg:!absolute lg:inset-0" : ""} h-full w-full transform-gpu object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100`}
            />
          )}
        </div>

        {/* Title and Date */}
        <div
          className={
            featured ? "flex flex-col justify-end p-4" : "flex flex-1 flex-col justify-end p-4"
          }
        >
          <h3 className="text-lead font-semibold mb-2">{title}</h3>
          {excerpt && <p className={`${excerptClassName} text-ink mb-2 line-clamp-3`}>{excerpt}</p>}
          <p className="text-small text-muted">{date}</p>
        </div>
      </article>
    )
  }

  if (variant === "overlay") {
    return (
      <article className="widget group relative h-40 overflow-hidden sm:h-44 lg:h-auto">
        <div
          className="hidden w-full lg:block"
          style={{ aspectRatio: image ? image.width / image.height : 16 / 9 }}
          aria-hidden="true"
        />

        {image ? (
          <GatsbyImage
            image={image}
            alt={title}
            className="!absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="absolute inset-0 bg-panel" />
        )}

        <h3 className="absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] rounded-widget bg-button-white/85 px-2 py-1 text-small font-semibold leading-tight text-cool-horizon-950 line-clamp-2">
          {title}
        </h3>
      </article>
    )
  }

  return (
    <article className="widget group flex h-full overflow-hidden">
      <div className="w-1/3 overflow-hidden">
        {image ? (
          <GatsbyImage
            image={image}
            alt={title}
            className="h-full w-full transform-gpu object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="w-full h-full bg-canvas" />
        )}
      </div>

      <div className="p-3 flex-1 flex flex-col justify-center">
        <h3 className="text-body font-semibold leading-tight mb-1 line-clamp-2">{title}</h3>
        {excerpt && <p className={`${excerptClassName} text-ink mb-1 line-clamp-2`}>{excerpt}</p>}
        <p className="text-caption text-muted mt-auto">{date}</p>
      </div>
    </article>
  )
}
