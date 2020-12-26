import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section class="py-8 px-4 text-center">
      <div class="max-w-auto md:max-w-lg mx-auto">
        <img class="mb-8" src="placeholders-2-0/pictures/error.svg" alt="" />
        <h2 class="text-5xl mb-2 font-semibold font-heading">Page not found</h2>
        <p class="mb-6 text-gray-400">
          You just hit a route that doesn't exist.
        </p>
        <div>
          <a class="px-4 text-indigo-600 hover:underline" href="#">
            Link1
          </a>
          <a class="px-4 text-indigo-600 hover:underline" href="#">
            Link1
          </a>
          <a class="px-4 text-indigo-600 hover:underline" href="#">
            Link1
          </a>
          <a class="px-4 text-indigo-600 hover:underline" href="#">
            Link1
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
