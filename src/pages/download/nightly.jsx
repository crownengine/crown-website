import { OutboundLink } from "gatsby-plugin-google-gtag"
import React, { useEffect, useState } from "react"
import { FaAndroid, FaApple, FaCode, FaLinux, FaWindows } from "react-icons/fa6"
import Clamp from "../../components/clamp"
import DonationBox from "../../components/donation-box"
import DownloadMenu from "../../components/download-menu"
import FadeIn from "../../components/fade-in"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const nightly_files = require.context("../../data/download", false, /^\.\/unstable-.+\.json$/)
const releases = nightly_files
  .keys()
  .sort()
  .map(filename => ({ filename, ...nightly_files(filename) }))

const downloads = releases.flatMap(release =>
  release.assets
    .filter(asset => asset.os && asset.architecture && !asset.name.endsWith(".sha256"))
    .map(asset => ({ ...asset, branch: release.branch, filename: release.filename })),
)
const operating_systems = [...new Set(downloads.map(asset => asset.os))].sort()
const os_names = {
  android: "Android",
  html5: "Web",
  linux: "Linux",
  osx: "macOS",
  windows: "Windows",
}
const os_icons = {
  android: FaAndroid,
  html5: FaCode,
  linux: FaLinux,
  osx: FaApple,
  windows: FaWindows,
}

export default function Nightly() {
  const [selected_os, setSelectedOS] = useState(operating_systems[0])

  useEffect(() => {
    const platform = window.navigator.platform
    let os

    if (/Android/i.test(window.navigator.userAgent)) os = "android"
    else if (/Win/i.test(platform)) os = "windows"
    else if (/Mac/i.test(platform)) os = "osx"
    else if (/Linux/i.test(platform)) os = "linux"

    if (operating_systems.includes(os)) setSelectedOS(os)
  }, [])

  function onTabKeyDown(event, index) {
    let next_index

    if (event.key === "ArrowRight") next_index = (index + 1) % operating_systems.length
    else if (event.key === "ArrowLeft")
      next_index = (index + operating_systems.length - 1) % operating_systems.length
    else if (event.key === "Home") next_index = 0
    else if (event.key === "End") next_index = operating_systems.length - 1
    else return

    event.preventDefault()
    const os = operating_systems[next_index]
    setSelectedOS(os)
    document.getElementById(`nightly-tab-${os}`).focus()
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-deepest to-dark">
        <DownloadMenu />
        <Clamp>
          <section className="py-24 px-4 text-inverse">
            <div className="max-w-4xl mx-auto">
              <p className="mb-6 text-body text-inverse-muted">
                The following builds are unstable. Use them at your own risk.
              </p>

              <div className="widget overflow-hidden">
                {downloads.length === 0 ? (
                  <p className="p-4 sm:p-6 text-lead text-inverse-muted">
                    No nightly builds available.
                  </p>
                ) : (
                  <>
                    <div
                      role="tablist"
                      aria-label="Operating system"
                      className="flex overflow-x-auto border-b border-line px-4"
                    >
                      {operating_systems.map((os, index) => {
                        const Icon = os_icons[os]

                        return (
                          <button
                            key={os}
                            type="button"
                            role="tab"
                            id={`nightly-tab-${os}`}
                            aria-controls={`nightly-panel-${os}`}
                            aria-selected={selected_os === os}
                            tabIndex={selected_os === os ? 0 : -1}
                            className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-small font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cool-horizon-300 ${selected_os === os ? "border-brand-light text-brand-light" : "border-transparent text-inverse-muted hover:text-inverse"}`}
                            onClick={() => setSelectedOS(os)}
                            onKeyDown={event => onTabKeyDown(event, index)}
                          >
                            {Icon && <Icon aria-hidden="true" />}
                            {os_names[os] || os}
                          </button>
                        )
                      })}
                    </div>

                    {operating_systems.map(os => (
                      <div
                        key={os}
                        role="tabpanel"
                        id={`nightly-panel-${os}`}
                        aria-labelledby={`nightly-tab-${os}`}
                        hidden={selected_os !== os}
                        tabIndex={0}
                        className="overflow-x-auto"
                      >
                        <table className="w-full whitespace-nowrap text-left text-small">
                          <caption className="sr-only">
                            {os_names[os] || os} nightly downloads
                          </caption>
                          <thead className="border-b border-line text-inverse-muted">
                            <tr>
                              <th scope="col" className="px-4 py-2 font-semibold">
                                Version
                              </th>
                              <th scope="col" className="px-4 py-2 font-semibold">
                                Branch
                              </th>
                              <th scope="col" className="px-4 py-2 font-semibold">
                                Commit
                              </th>
                              <th scope="col" className="px-4 py-2 font-semibold">
                                Architecture
                              </th>
                              <th scope="col" className="px-4 py-2 font-semibold text-right">
                                Size
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-line">
                            {downloads
                              .filter(asset => asset.os === os)
                              .map(asset => (
                                <tr key={`${asset.filename}:${asset.name}`}>
                                  <td className="px-4 py-2">
                                    <OutboundLink
                                      className="font-semibold underline hover:text-brand-hover"
                                      href={asset.browser_download_url}
                                      title={asset.name}
                                    >
                                      Crown {asset.version}
                                    </OutboundLink>
                                  </td>
                                  <td className="px-4 py-2">{asset.branch}</td>
                                  <td className="px-4 py-2">
                                    <OutboundLink
                                      className="font-mono underline hover:text-brand-hover"
                                      href={`https://github.com/crownengine/crown/commit/${asset.commit}`}
                                      aria-label={`View commit ${asset.commit}`}
                                    >
                                      {asset.commit.slice(0, 7)}
                                    </OutboundLink>
                                  </td>
                                  <td className="px-4 py-2">{asset.architecture}</td>
                                  <td className="px-4 py-2 text-right">
                                    {Math.floor(asset.size / 1024 / 1024)} MiB
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <section
                className="widget news-donation-glow grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-8 my-48"
                aria-labelledby="support-crown"
              >
                <div className="flex flex-col justify-center gap-6">
                  <FadeIn direction="from-left">
                    <h2
                      id="support-crown"
                      className="text-title leading-tight font-normal editorial-rose"
                    >
                      Want to <span className="font-bold">Help?</span>
                    </h2>
                  </FadeIn>
                  <FadeIn direction="from-left">
                    <p className="text-lead text-inverse leading-relaxed">
                      Crown exists because contributors spend real time designing features, writing
                      code, testing changes and fixing bugs. Donations help support the people doing
                      that work.
                    </p>
                  </FadeIn>
                </div>
                <div className="text-body">
                  <DonationBox className="bg-panel" />
                </div>
              </section>
            </div>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Nightly Builds" description="Download the latest nightly builds of Crown Engine.">
    <meta name="robots" content="noindex" />
  </Seo>
)
