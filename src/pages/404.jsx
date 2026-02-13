import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Clamp from "../components/clamp"

export default function NotFoundPage() {
  return (
    <Layout>
      <Clamp>
        <section className="py-8 px-4 text-center">
          <div className="max-w-auto md:max-w-lg mx-auto">
            <img className="mb-8" src="placeholders-2-0/pictures/error.svg" alt="" />
            <h2 className="text-5xl mb-2 font-semibold">Page not found</h2>
            <p className="mb-6 text-gray-500">You just hit a route that doesn't exist.</p>
            <div>
              <Link className="px-4 text-indigo-600 hover:underline" to="/">
                Home
              </Link>
            </div>
          </div>
        </section>
      </Clamp>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not found" />
