import React from "react";

export default function HeroImage({
  title = "Headline",
  subtitle = "Subtitle",
  src = "/play/physics.jpg",
  alt = "An image",
  heightClass = "h-96",
}) {
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute inset-0 flex items-end justify-start p-6 md:p-12">
        <div className="max-w-2xl text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-white drop-shadow">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm md:text-lg text-white/90">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
