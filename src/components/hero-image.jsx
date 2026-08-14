import React from "react"

export default function HeroImage({
  title = "Headline",
  subtitle = "Subtitle",
  src = "/play/physics.jpg",
  alt = "An image",
  heightClass = "h-96",
}) {
  return (
    <section className={`group relative w-full ${heightClass} overflow-hidden rounded-widget`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full transform-gpu object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-deepest/60 to-transparent"
      />

      <div className="absolute inset-0 flex items-end justify-start p-6 md:p-12">
        <div className="max-w-2xl text-left">
          <h2 className="text-title font-bold leading-tight text-inverse">{title}</h2>
          {subtitle && <p className="mt-2 text-lead text-inverse/90">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
