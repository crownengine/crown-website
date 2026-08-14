import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React, { useEffect, useState } from "react"
import { FaAndroid, FaApple, FaCode, FaLinux, FaWindows } from "react-icons/fa6"
import Layout from "../../components/layout"
import Clamp from "../../components/clamp"
import Seo from "../../components/seo"
import Releases from "../../data/download/releases.json"

const platformIcons = {
  Android: FaAndroid,
  Linux: FaLinux,
  "MacOS X": FaApple,
  Windows: FaWindows,
}

function PlatformIcon({ os }) {
  const Icon = platformIcons[os]
  return Icon ? <Icon aria-hidden="true" /> : null
}

function releaseNewsPath(version) {
  const [major, minor] = version.replace(/^v/, "").split(".")
  return `/news/crown-${major}-${minor}`
}

export default function Download() {
  const [crown_version, setCrownVersion] = useState(Releases.tag_name)
  const [crown_download_url, setCrownDownloadUrl] = useState()
  const [crown_package_type, setCrownPackageType] = useState()
  const [crown_download_size, setCrownDownloadSize] = useState()
  const [crown_release, setCrownRelease] = useState()

  /* https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js */
  function getUserOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      os = null

    if (macosPlatforms.indexOf(platform) !== -1) os = "osx"
    else if (iosPlatforms.indexOf(platform) !== -1) os = "ios"
    else if (windowsPlatforms.indexOf(platform) !== -1) os = "windows"
    else if (/Android/.test(userAgent)) os = "android"
    else if (!os && /Linux/.test(platform)) os = "linux"

    return os
  }

  function getOSName(os) {
    if (os === "android") return "Android"
    else if (os === "linux") return "Linux"
    else if (os === "osx") return "MacOS X"
    else if (os === "windows") return "Windows"
    else return "Unknown OS"
  }

  function getArchName(arch) {
    if (arch === "arm") return "ARM"
    else if (arch === "arm64") return "ARM64"
    else if (arch === "x64") return "x64"
    else return arch
  }

  function getPackageType(package_name) {
    const ext =
      package_name.substring(package_name.lastIndexOf(".") + 1, package_name.length) || package_name

    if (ext === "gz") return "Tarball"
    else if (ext === "zip") return "ZIP"
    else if (ext === "exe") return "Installer"
    else return "Binary"
  }

  function getPackageOS(package_name) {
    const tags = package_name.split("-")
    return getOSName(tags[2])
  }

  function getPackageArch(package_name) {
    const tags = package_name.split("-")
    var arch_and_extensions = tags[3]
    var arch = arch_and_extensions.substring(0, tags[3].indexOf("."))
    return getArchName(arch)
  }

  function listSeparator() {
    return <div className="flex-1 border-b border-line"></div>
  }

  function thanksPath(download_url) {
    return `/download/thanks?url=${encodeURIComponent(download_url)}`
  }

  function downloadEntries() {
    var lastOS = ""
    var urlSizeList = Releases.assets.map(function (data) {
      var separator = lastOS !== "" && lastOS !== getPackageOS(data.name)
      lastOS = getPackageOS(data.name)
      var valid = lastOS !== "Unknown OS"

      return {
        valid: valid,
        os: valid ? getPackageOS(data.name) : "",
        arch: valid ? getPackageArch(data.name) : "",
        url: data.browser_download_url,
        size: data.size,
        separator: separator,
        order: 0,
      }
    })

    urlSizeList.push({
      valid: true,
      os: "Linux",
      arch: "x64",
      url: "https://aur.archlinux.org/packages/crown-bin",
      size: 0,
      separator: false,
      alt: "AUR",
      order: 1,
    })

    urlSizeList.sort(function (a, b) {
      if (a.os < b.os) {
        return -1
      }
      if (a.os > b.os) {
        return 1
      }

      if (a.order < b.order) {
        return -1
      }
      if (a.order > b.order) {
        return 1
      }

      return 0
    })

    return urlSizeList.map((data, index) => {
      return (
        <>
          {data.valid && data.separator && listSeparator()}
          {data.valid && data.alt === "AUR" && (
            <OutboundLink rel="noreferrer" target="_blank" href={data.url}>
              <div className="flex flex-row px-4 py-2 text-left transition-colors hover:text-brand-hover">
                <div className="mr-2 flex-none w-6 h-6 text-muted">
                  <PlatformIcon os={data.os} />
                </div>
                <div className="flex-1">
                  {data.os} <span className="text-muted">{data.arch}</span>
                </div>
                <div className="flex-1 text-right">
                  {data.alt != null && data.alt}
                  {data.alt == null &&
                    Math.floor(data.size / 1024 / 1024) + " MiB, " + getPackageType(data.url)}
                </div>
              </div>
            </OutboundLink>
          )}
          {data.valid && data.alt !== "AUR" && (
            <Link to={thanksPath(data.url)}>
              <div className="flex flex-row px-4 py-2 text-left transition-colors hover:text-brand-hover">
                <div className="mr-2 flex-none w-6 h-6 text-muted">
                  <PlatformIcon os={data.os} />
                </div>
                <div className="flex-1">
                  {data.os} <span className="text-muted">{data.arch}</span>
                </div>
                <div className="flex-1 text-right">
                  {data.alt != null && data.alt}
                  {data.alt == null &&
                    Math.floor(data.size / 1024 / 1024) + " MiB, " + getPackageType(data.url)}
                </div>
              </div>
            </Link>
          )}
        </>
      )
    })
  }

  useEffect(() => {
    function setDownloadDetails(github_assets) {
      // Get details for Windows version by default because market share.
      var os = getUserOS()
      if (os !== "linux" && os !== "windows") os = "windows"

      for (const asset of github_assets) {
        if (asset.name.indexOf(os) !== -1) {
          const url = asset.browser_download_url
          setCrownDownloadUrl(url)
          setCrownPackageType(getPackageType(url))
          const megs = Math.floor(asset.size / 1024 / 1024)
          setCrownDownloadSize(megs.toString() + " MiB")
          setCrownRelease(getOSName(os))
        }
      }
    }

    setCrownVersion(Releases.tag_name)
    setDownloadDetails(Releases.assets)
  }, [])

  return (
    <Layout>
      <div className="bg-gradient-to-b from-deepest to-dark">
        <Clamp>
          <section className="py-24 px-4 text-center">
            <div className="w-full max-w-2xl mx-auto mb-32">
              <h1 className="mb-24 mt-2 text-center text-display font-bold text-ink">
                Let Your Game Begin
              </h1>

              <div className="text-lead">
                {crown_download_url ? (
                  <Link className="button button-primary mb-2" to={thanksPath(crown_download_url)}>
                    Download Crown {crown_version}
                  </Link>
                ) : (
                  <span className="button mb-2 cursor-not-allowed bg-cool-horizon-950 text-cool-horizon-500">
                    Download Crown {crown_version}
                  </span>
                )}
              </div>

              <div className="mb-10">
                <div className="flex space-x-2 justify-center text-lead">
                  <span className="text-inverse">
                    {crown_release} {crown_package_type}
                  </span>
                  <span className="text-inverse">•</span>
                  <span className="text-inverse">{crown_download_size}</span>
                  <span className="text-inverse">•</span>
                  <span>
                    <Link
                      className="text-inverse underline font-bold"
                      to={releaseNewsPath(crown_version)}
                    >
                      What's New?
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* All Versions */}
            <div className="widget container mx-auto mb-4 flex w-10/12 flex-col space-y-2 px-4 py-4 font-bold text-inverse sm:w-9/12 md:w-8/12 xl:w-6/12">
              <h2 className="text-lead text-center mb-4 leading-tight font-semibold text-inverse">
                Other Platforms and Versions
              </h2>
              {downloadEntries()}
              {listSeparator()}
              {
                <OutboundLink rel="noreferrer" target="_blank" href={Releases.tarball_url}>
                  <div className="flex flex-row px-4 py-2 text-left transition-colors hover:text-brand-hover">
                    <div className="mr-2 flex-none w-6 h-6 text-muted">
                      <FaCode aria-hidden="true" />
                    </div>
                    <div className="flex-1 text-left">Source Code</div>
                    <div className="flex-1 text-right">{getPackageType("gz")}</div>
                  </div>
                </OutboundLink>
              }
              {
                <OutboundLink rel="noreferrer" target="_blank" href={Releases.zipball_url}>
                  <div className="flex flex-row px-4 py-2 text-left transition-colors hover:text-brand-hover">
                    <div className="mr-2 flex-none w-6 h-6 text-muted">
                      <FaCode aria-hidden="true" />
                    </div>
                    <div className="flex-1 text-left">Source Code</div>
                    <div className="flex-1 text-right">{getPackageType("zip")}</div>
                  </div>
                </OutboundLink>
              }
            </div>

            <p className="text-body text-center mb-24 leading-tight font-semibold text-inverse">
              Looking for{" "}
              <a
                className="text-inverse underline font-bold"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/crownengine/crown/releases"
              >
                previous versions
              </a>
              ?
            </p>
          </section>
        </Clamp>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Download"
    description="No account, no internet required. Get a copy, unzip it and start building games."
  />
)
