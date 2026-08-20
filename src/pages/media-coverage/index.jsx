import React from "react"
import Clamp from "../../components/clamp"
import Layout from "../../components/layout"
import MediaCoverageList from "../../components/media-coverage-list"
import Seo from "../../components/seo"

export default function MediaCoverageIndex() {
  return (
    <Layout>
      <Clamp>
        <section className="mt-12 mb-16 px-4">
          <h1 className="mb-6 text-title font-bold text-ink">Media Coverage</h1>
          <MediaCoverageList />
        </section>
      </Clamp>

      {/* Padding */}
      <section className="py-36" />
    </Layout>
  )
}

export const Head = () => <Seo title="Crown - Media Coverage" />
