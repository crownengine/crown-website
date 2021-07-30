import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React, { useEffect, useState } from "react"

export default function CTA() {
  const [crown_version, setCrownVersion] = useState()
  const [crown_download_url, setCrownDownloadUrl] = useState()
  const [crown_package_type, setCrownPackageType] = useState()
  const [crown_download_size, setCrownDownloadSize] = useState()
  const [crown_release, setCrownRelease] = useState()
  const [other_oses, setOtherOSes] = useState()

  /* https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js */
  function getUserOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1)
      os = 'osx';
    else if (iosPlatforms.indexOf(platform) !== -1)
      os = 'ios';
    else if (windowsPlatforms.indexOf(platform) !== -1)
      os = 'windows';
    else if (/Android/.test(userAgent))
      os = 'android';
    else if (!os && /Linux/.test(platform))
      os = 'linux';

    return os;
  }

  function getOSName(os) {
    if (os === 'linux')
      return 'Linux'
    else if (os === 'osx')
      return 'MacOS X';
    else if (os === 'windows')
      return 'Windows'
    else
      return 'Unknown OS'
  }

  function getPackageType(ext) {
    if (ext === 'gz')
      return "Tarball";
    else if (ext === "zip")
      return "ZIP";
    else if (ext === "exe")
      return "Installer";
    else
      return null;
  }

  function setDownloadDetails(github_assets) {
    // Get details for Windows version by default because market share.
    var os = getUserOS();
    if (os !== "linux" && os !== "windows")
      os = "windows";

    for (const asset of github_assets) {
      if (asset.name.indexOf(os) !== -1) {
        const url = asset.browser_download_url;
        setCrownDownloadUrl(url);
        const url_ext = url.substring(url.lastIndexOf('.')+1, url.length) || url;
        setCrownPackageType(getPackageType(url_ext));
        const megs = Math.floor(asset.size/1024/1024);
        setCrownDownloadSize(megs.toString() + "MiB");
        setCrownRelease(getOSName(os))

        if (os == "windows")
          setOtherOSes(getOSName("linux"))
        else
          setOtherOSes(getOSName("windows"))
        return;
      }
    }
  }

  useEffect(() => {
    fetch("https://api.github.com/repos/dbartolini/crown/releases/latest")
      .then(res => res.json())
      .then(
        result => {
          setCrownVersion(result.tag_name)
          setDownloadDetails(result.assets);
        },
        _error => {
          setCrownVersion(null)
        }
      )
  })

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subtitle
          }
        }
      }
    `
  )

  return (
    <section className="py-12 px-4 text-center">
      <div className="w-full max-w-2xl mx-auto">
        {/* <span className="text-sm font-semibold">CROWN ENGINE</span> */}
        <h2 className="text-5xl mt-2 mb-2 leading-tight font-semibold">
          {data.site.siteMetadata.subtitle}
        </h2>
        <p className="mb-10 text-lg text-gray-500 dark:text-gray-50 leading-relaxed">
          Crown is a general purpose and data-driven game engine, written in
          orthodox C++ with a minimalistic and data-oriented design philosophy
          in mind. <a
            className="text-indigo-600 hover:underline dark:text-indigo-200"
            rel="noreferrer"
            target="_blank"
            href="https://dbartolini.github.io/crown/html/latest/introduction.html">Learn more...</a>
        </p>
        <div className="text-2xl">
          <OutboundLink
            className="inline-block py-4 px-8 mb-2 leading-none text-white hover:text-white dark:text-black bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded shadow"
            rel="noreferrer"
            target="_blank"
            href={crown_download_url}
            onClick={_e => {
              window.gtag("event", "click", {
                category: "Download Button",
                action: "Click",
              })
            }}
          >
            Download Crown {crown_version}
          </OutboundLink>
        </div>
        <div className="mb-10">
          <ul className="flex space-x-2 justify-center text-lg">
            <li className="text-gray-500 dark:text-gray-300">{crown_release} {crown_package_type}</li>
            <li className="text-gray-500 dark:text-gray-300">•</li>
            <li className="text-gray-500 dark:text-gray-300">{crown_download_size}</li>
            <li className="text-gray-500 dark:text-gray-300">•</li>
            <li>
              <a
                className="text-indigo-600 hover:underline dark:text-indigo-200"
                rel="noreferrer"
                target="_blank"
                href="https://dbartolini.github.io/crown/html/latest/changelog.html"
              >
                What's New?
              </a>
            </li>
          </ul>
        </div>
        <div className="text-lg">
          <OutboundLink
            className="inline-block py-2 px-6 leading-none text-white bg-gray-600 dark:bg-gray-200 dark:text-black hover:bg-gray-700 dark:hover:bg-gray-50 hover:text-white rounded shadow"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dbartolini/crown/releases/latest"
          >
            {other_oses} and other versions
          </OutboundLink>
        </div>
      </div>
    </section>
  )
}
