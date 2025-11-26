import React from "react"
import Clamp from "./clamp"
import DownloadButton from "../components/download-button"

export default function Features() {
  return (
    <Clamp>
      <section className="mt-32 mb-16 px-4 sm:text-left text-center">
        <h1 className="text-6xl font-extrabold mb-12 text-gray-600">
          Sensible Game Development
        </h1>
        <div className="flex flex-wrap -mx-4 -mb-6 justify-center">
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-user-edit fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Batteries Included</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              Complete Editor with importers, level editor, deployers, Lua REPL, and much more.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-fighter-jet fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Fast iteration times</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              Everything is hot-reloadable in less than a second, gameplay code included.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-cubes fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Multi-platform</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              Dev on your favorite desktop platform and ship to Android, HTML5, Linux or Windows.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-square-binary fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Performance-first</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              Runtime data is carefully arranged to reach maximum gameplay performance all the time.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-file-lines fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Simple and hackable</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              Projects are just text files that are compiled into optimized binaries before
              shipping.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-plug fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Plug-and-play</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              No setup, no account, no internet required. Get a copy, unzip it and start creating.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-brands fa-osi fa-2x text-indigo-600"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Free and Open Source</h3>
            <p className="text-gray-700 leading-relaxed sm:mx-0 mx-10">
              Crown is a public, collaborative project, owned by its contributors and free forever.
            </p>
          </div>
        </div>
      </section>
      <section className="flex mb-16 justify-center">
        <div>
          <DownloadButton></DownloadButton>
        </div>
      </section>
    </Clamp>
  )
}
