import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaDownload, FaFileZipper, FaOsi, FaPlay } from "react-icons/fa6"
import DownloadButton from "./download-button"
import FadeIn from "./fade-in"

function Feature({ accentClassName, children, description, imageOnLeft = false, title }) {
  const text = (
    <div className="w-full md:w-1/2">
      <FadeIn direction={imageOnLeft ? "from-right" : "from-left"}>
        <h3 className={`mb-5 text-[48px] font-extrabold leading-tight ${accentClassName}`}>
          {title}
        </h3>
        <p className="text-xl leading-relaxed text-gray-200">{description}</p>
      </FadeIn>
    </div>
  )

  const image = (
    <FadeIn className="w-full md:w-1/2" direction={imageOnLeft ? "from-left" : "from-right"}>
      {children}
    </FadeIn>
  )

  return (
    <article className="flex flex-col items-center gap-8 md:flex-row">
      {imageOnLeft ? image : text}
      {imageOnLeft ? text : image}
    </article>
  )
}

const imageClassName =
  "w-full rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none"

export default function Features() {
  return (
    <section className="bg-gray-950 py-24">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-20">
        <div className="space-y-32 md:space-y-40">
          <Feature
            accentClassName="text-lime-400"
            title="Batteries Included"
            description="Complete Editor with importers, level editor, deployers, Lua REPL, and much more."
          >
            <StaticImage
              className={imageClassName}
              src="../images/index/features-batteries-included.png"
              alt="Editing a moonlit boat scene in Crown"
              loading="lazy"
              placeholder="dominantColor"
              quality={80}
              formats={["auto", "webp"]}
            />
          </Feature>

          <Feature
            accentClassName="text-amber-400"
            title="Fast iteration times"
            description="Everything is hot-reloadable in less than a second, gameplay code included."
            imageOnLeft
          >
            <StaticImage
              className={imageClassName}
              src="../news/crown-0-60-animation-editor.png"
              alt="Previewing an animation in the Crown Editor"
              loading="lazy"
              placeholder="dominantColor"
              quality={80}
              formats={["auto", "webp"]}
            />
          </Feature>

          <Feature
            accentClassName="text-blue-400"
            title="Multi-platform"
            description="Dev on your favorite desktop platform and ship to Android, HTML5, Linux or Windows."
          >
            <StaticImage
              className={imageClassName}
              src="../news/crown-0-64.png"
              alt="A Crown project running in the editor with development statistics"
              loading="lazy"
              placeholder="dominantColor"
              quality={80}
              formats={["auto", "webp"]}
            />
          </Feature>

          <Feature
            accentClassName="text-rose-400"
            title="Performance-first"
            description="Runtime data is carefully arranged to reach maximum gameplay performance all the time."
            imageOnLeft
          >
            <StaticImage
              className={imageClassName}
              src="../news/crown-0-62-culling.png"
              alt="A dense Crown scene used to demonstrate renderer performance"
              loading="lazy"
              placeholder="dominantColor"
              quality={80}
              formats={["auto", "webp"]}
            />
          </Feature>

          <Feature
            accentClassName="text-amber-400"
            title="Simple and hackable"
            description="Projects are just text files that are compiled into optimized binaries before shipping."
          >
            <StaticImage
              className={imageClassName}
              src="../news/crown-0-64-shadow-settings.png"
              alt="Text-based render settings in a Crown project"
              loading="lazy"
              placeholder="dominantColor"
              quality={80}
              formats={["auto", "webp"]}
            />
          </Feature>

          <Feature
            accentClassName="text-blue-400"
            title="Plug-and-play"
            description="No account, no internet required. Get a copy, unzip it and start building games."
            imageOnLeft
          >
            <div
              className="grid min-h-48 w-full grid-cols-[repeat(5,auto)] items-center justify-center gap-3 text-gray-200 sm:min-h-64 lg:gap-5"
              role="img"
              aria-label="Download, unzip and start Crown"
            >
              <FaDownload className="h-auto w-16 lg:w-24" aria-hidden="true" />
              <span className="text-4xl text-gray-600 lg:text-6xl" aria-hidden="true">
                →
              </span>
              <FaFileZipper className="h-auto w-16 lg:w-24" aria-hidden="true" />
              <span className="text-4xl text-gray-600 lg:text-6xl" aria-hidden="true">
                →
              </span>
              <FaPlay className="h-auto w-16 text-blue-400 lg:w-24" aria-hidden="true" />
            </div>
          </Feature>

          <Feature
            accentClassName="text-rose-400"
            title="Polyglot"
            description="Editors are available in four languages, with additional ones on the roadmap."
          >
            <StaticImage
              className={imageClassName}
              src="../news/crown-0-64-i18n.png"
              alt="Crown Editor menus in French, English, Italian and German"
              loading="lazy"
              placeholder="dominantColor"
              quality={80}
              formats={["auto", "webp"]}
            />
          </Feature>

          <Feature
            accentClassName="text-lime-400"
            title="Free and Open Source"
            description="Crown is a public, collaborative project, owned by its contributors and free forever."
            imageOnLeft
          >
            <FaOsi
              className="mx-auto h-48 w-48 text-gray-200 sm:h-64 sm:w-64"
              aria-label="Open Source Initiative"
            />
          </Feature>
        </div>

        <div className="mt-24 text-center">
          <DownloadButton />
        </div>
      </div>
    </section>
  )
}
