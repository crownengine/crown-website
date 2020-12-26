import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" />
      <section class="py-12 px-4 text-center">
        <div class="w-full max-w-2xl mx-auto">
          <span class="text-sm font-semibold">CROWN ENGINE</span>
          <h2 class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
            The Flexible Game Engine
          </h2>
          <p class="mb-8 text-gray-400 leading-relaxed">
            Crown is a general purpose data-driven game engine, written from
            scratch in orthodox C++ with a minimalistic and data-oriented design
            philosophy in mind. It is loosely inspired by Bitsquid (now
            Stingray) engine and its design principles; the current Lua API is
            similar to that of Bitsquid but this engine is not meant to be its
            clone nor to be API compatible with it.
          </p>
          <div>
            <a
              class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              href="https://github.com/dbartolini/crown/releases/latest"
            >
              Download
            </a>
            <a
              class="text-indigo-600 hover:underline"
              href="https://dbartolini.github.io/crown/html/latest/"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4 -mb-6">
          <div class="lg:w-1/3 px-4 mb-6">
           <i className="fas fa-scroll fa-2x text-indigo-600"></i>
            <h3 class="text-xl my-3 font-semibold font-heading">
              Data-driven design
            </h3>
            <p class="text-gray-400 leading-relaxed">
              Every aspect of the game is controlled through configuration
              files. Text files are human-readable for easy inspection and play
              nicely with version control systems. Before shipping,
              configuration files are compiled to fast and compact
              platform-specific binary blobs.
            </p>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-microchip fa-2x text-indigo-600"></i>
            <h3 class="text-xl my-3 font-semibold font-heading">
              Data-oriented design
            </h3>
            <p class="text-gray-400 leading-relaxed">
              Data in memory is organized to achive maximum performance possible
              on every platform. We all have supercomputers in our pocket that
              are never used to its fullest.
            </p>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-fighter-jet fa-2x text-indigo-600"></i>
            <h3 class="text-xl my-3 font-semibold font-heading">
              Fast-iteration times
            </h3>
            <p class="text-gray-400 leading-relaxed">
              Every game asset is hot-reloadable, code included. Evaluate
              modifications and adjustments on-the-fly without having to reboot
              the game every time.
            </p>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-user-edit fa-2x text-indigo-600"></i>
            <h3 class="text-xl my-3 font-semibold font-heading">
              Cross-platform editor
            </h3>
            <p class="text-gray-400 leading-relaxed">
              It runs and looks equally well both on Linux and Windows. Designed
              to be as fail-safe as possible to never lose your work if crashes
              should occur.
            </p>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-feather fa-2x text-indigo-600"></i>
            <h3 class="text-xl my-3 font-semibold font-heading">
              Lightweight codebase
            </h3>
            <p class="text-gray-400 leading-relaxed">
              Engine plus tools amounts to less than 100K LOC. Written in simple
              'C-style' C++. It is easy for anyone to understand and make
              modifications.
            </p>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-code-branch fa-2x text-indigo-600"></i>
            <h3 class="text-xl my-3 font-semibold font-heading">
              Free and Open Source
            </h3>
            <p class="text-gray-400 leading-relaxed">
              All the code is released under the very permissive MIT license and
              can be downloaded via GitHub by anyone.
            </p>
          </div>
        </div>
      </section>
      <section id="faq" class="py-12 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl text-center mb-6 font-semibold font-heading">
            Frequently Asked Questions
          </h2>
          <div class="p-4 mb-2 border-b">
            <button class="flex w-full text-left mb-4">
              <span class="flex-grow font-semibold">
                How does Dunder Mifflin paper differ from other products?
              </span>
              <svg
                class="text-indigo-600 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <p class="mt-1">
              Paper produced with love, devotion, passion - is not the same
              paper. Our supplies are extra strong, and you’re going to need the
              paper-tear up-master to destroy just one sheet. It’s also suited
              for every available printer.
            </p>
          </div>
          <div class="p-4 mb-2 border-b">
            <button class="flex w-full text-left mb-4">
              <span class="flex-grow font-semibold">
                Why choose Dunder Mifflin instead of some huge paper producer?
              </span>
              <svg
                class="text-indigo-600 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <p class="hidden mt-1">
              You know that feeling when you are waiting on the phone for hours
              to contact your supplier? Sometimes they even have a waiting time
              music prepared for that. In Dunder Mifflin, you can get help
              immediately, and each of our customers receives an individual
              assistant. For us, companies are people - not numbers, so we take
              care of each of them.
            </p>
          </div>
          <div class="p-4 mb-2 border-b">
            <button class="flex w-full text-left mb-4">
              <span class="flex-grow font-semibold">
                When I will receive the products?
              </span>
              <svg
                class="text-indigo-600 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <p class="hidden mt-1">
              If you buy one of our business plans, you will receive the
              supplies every first Monday of the month. However, you can also
              purchase paper separately. Our employees will make sure that you
              will receive the products in the next business days.
            </p>
          </div>
          <div class="p-4 mb-2 border-b">
            <button class="flex w-full text-left mb-4">
              <span class="flex-grow font-semibold">
                How long does it take to finalize the deal?
              </span>
              <svg
                class="text-indigo-600 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <p class="hidden mt-1">
              The whole process depends on your decision. If you sign the
              contract immediately, we can start official cooperation in the
              next two business days.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "feature" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
