import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Clamp from "../../components/clamp"
import Seo from "../../components/seo"
import Releases from "../../data/download/releases.json"

export default function Download() {
  const [crown_version, setCrownVersion] = useState()
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
    const ext = package_name.substring(package_name.lastIndexOf(".") + 1
      , package_name.length)
      || package_name

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
    return <div className="flex-1 border-b-2 border-b-gray-600"></div>;
  }

  function downloadEntries() {
    var lastOS = ""
    var urlSizeList = Releases.assets.map(function(data) {
      var separator = lastOS !== "" && lastOS !== getPackageOS(data.name)
      lastOS = getPackageOS(data.name)
      var valid = lastOS !== "Unknown OS";

      return {
        valid: valid,
        os: valid ? getPackageOS(data.name) : "",
        arch: valid ? getPackageArch(data.name) : "",
        url: data.browser_download_url,
        size: data.size,
        separator: separator,
        order: 0
      };
    });

    urlSizeList.push({
      valid: true,
      os: "Linux",
      arch: "x64",
      url: "https://aur.archlinux.org/packages/crown",
      size: 0,
      separator: false,
      alt: "AUR",
      order: 1
    });

    urlSizeList.sort(function(a, b) {
        if (a.os < b.os) {
          return -1;
        }
        if (a.os > b.os) {
          return 1;
        }

        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }

        return 0;
      });

    return urlSizeList.map((data, index) => {
      return (
        <>
          {data.valid && data.separator && listSeparator()}
          {data.valid && data.alt === "AUR" &&
            <OutboundLink
              rel="noreferrer"
              target="_blank"
              href={data.url}
            >
              <div className="px-4 py-2 flex flex-row text-left bg-gray-800 hover:bg-gray-700 rounded-sm">
                <div className="mr-2 flex-none w-6 h-6 text-gray-500">
                  <i className={"fab fa-" + data.os.toLowerCase()}></i>
                </div>
                <div className="flex-1">
                  {data.os} <span className="text-gray-600">{data.arch}</span>
                </div>
                <div className="flex-1 text-right">
                  {data.alt != null && data.alt}
                  {data.alt == null && Math.floor(data.size / 1024 / 1024) + " MiB, " + getPackageType(data.url)}
                </div>
              </div>
            </OutboundLink>
          }
          {data.valid && data.alt !== "AUR" &&
            <Link
              to="/download/thanks"
              state={{crown_download_url: data.url}}
            >
              <div className="px-4 py-2 flex flex-row text-left bg-gray-800 hover:bg-gray-700 rounded-sm">
                <div className="mr-2 flex-none w-6 h-6 text-gray-500">
                  <i className={"fab fa-" + data.os.toLowerCase()}></i>
                </div>
                <div className="flex-1">
                  {data.os} <span className="text-gray-600">{data.arch}</span>
                </div>
                <div className="flex-1 text-right">
                  {data.alt != null && data.alt}
                  {data.alt == null && Math.floor(data.size / 1024 / 1024) + " MiB, " + getPackageType(data.url)}
                </div>
              </div>
            </Link>
          }
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
      <Seo title="Download" />
      <div className="bg-gradient-to-b from-green-800 to-gray-800">
      <Clamp>
      <section className="py-24 px-4 text-center">
        <div className="w-full max-w-2xl mx-auto mb-32">
          <h1 className="text-6xl text-center mt-2 mb-24 font-bold text-gray-300">
            Let Your Game Begin
          </h1>

          <div className="text-2xl">
            <Link
              className="inline-block py-4 px-8 mb-2 leading-none text-gray-200 hover:text-white dark:text-black bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded shadow"
              to="/download/thanks"
              state={{crown_download_url}}
            >
              Download Crown {crown_version}
            </Link>
          </div>

          <div className="mb-10">
            <ul className="flex space-x-2 justify-center text-lg">
              <li className="text-gray-200">
                {crown_release} {crown_package_type}
              </li>
              <li className="text-gray-200">•</li>
              <li className="text-gray-200">
                {crown_download_size}
              </li>
              <li className="text-gray-200">•</li>
              <li>
                <a
                  className="text-gray-200 underline font-bold"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.crownengine.org/html/latest/changelog.html"
                >
                  What's New?
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* All Versions */}
        <div className="container mx-auto mb-4 px-4 py-4 w-10/12 sm:w-9/12 md:w-8/12 xl:w-6/12 bg-gray-800 rounded-lg shadow-lg flex flex-col space-y-2 text-gray-200 font-bold">
          <h2 className="text-xl text-center mb-4 leading-tight font-semibold text-gray-200">
            Other Platforms and Versions
          </h2>
          { downloadEntries() }
          { listSeparator() }
          {
            <OutboundLink
              rel="noreferrer"
              target="_blank"
              href={Releases.tarball_url}
            >
              <div className="px-4 py-2 flex flex-row text-left bg-gray-800 hover:bg-gray-700 rounded-sm">
                <div className="mr-2 flex-none w-6 h-6 text-gray-500">
                  <i className="mr-2 fas fa-code"></i>
                </div>
                <div className="flex-1 text-left">
                  Source Code
                </div>
                <div className="flex-1 text-right">
                  {getPackageType("gz")}
                </div>
              </div>
            </OutboundLink>
          }
          {
            <OutboundLink
              rel="noreferrer"
              target="_blank"
              href={Releases.zipball_url}
            >
              <div className="px-4 py-2 flex flex-row text-left bg-gray-800 hover:bg-gray-700 rounded-sm">
                <div className="mr-2 flex-none w-6 h-6 text-gray-500">
                  <i className="mr-2 fas fa-code"></i>
                </div>
                <div className="flex-1 text-left">
                  Source Code
                </div>
                <div className="flex-1 text-right">
                  {getPackageType("zip")}
                </div>
              </div>
            </OutboundLink>
          }
      </div>

      <p className="text-m text-center mb-24 leading-tight font-semibold text-gray-200">
        Looking for <a
            className="text-gray-200 underline font-bold"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/crownengine/crown/releases"
          >
            previous versions
          </a>?
      </p>

      </section>
      </Clamp>
      </div>
    </Layout>
  )
}
