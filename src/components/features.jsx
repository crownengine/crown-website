import React from "react"
import Clamp from "./clamp"

export default function Features() {
  return (
    <Clamp>
      <section className="py-32 px-4 sm:text-left text-center">
        <div className="flex flex-wrap -mx-4 -mb-6">
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-file-lines fa-2x text-indigo-600 dark:text-indigo-200"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Data-driven</h3>
            <p className="text-gray-700 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
              All aspects of the game are defined via text-based configuration files,
              which are compiled into native, efficient, platform-specific BLOBs before
              shipping.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-fighter-jet fa-2x text-indigo-600 dark:text-indigo-200"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Sub-second iteration times</h3>
            <p className="text-gray-700 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
              Every game asset is reloadable at run-time, including gameplay code and shaders.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-square-binary fa-2x text-indigo-600 dark:text-indigo-200"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Data-oriented</h3>
            <p className="text-gray-700 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
              Data in memory is organized to achieve the maximum performance possible on
              every supported platform.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-user-edit fa-2x text-indigo-600 dark:text-indigo-200"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Batteries Included</h3>
            <p className="text-gray-700 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
              Complete cross-platform Editor with resource importers, scene editor, console with Lua
              REPL, deployers and much more.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-brands fa-osi fa-2x text-indigo-600 dark:text-indigo-200"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Free and Open Source</h3>
            <p className="text-gray-700 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
              Crown is a public, collaborative project, owned by its contributors.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <i className="fas fa-cubes fa-2x text-indigo-600 dark:text-indigo-200"></i>
            <h3 className="text-2xl my-3 font-bold text-gray-700">Multi-platform</h3>
            <p className="text-gray-700 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
              Develop on your favorite desktop platform and ship to Android, HTML5, Linux or Windows.
            </p>
          </div>
        </div>
      </section>
    </Clamp>
  )
}
