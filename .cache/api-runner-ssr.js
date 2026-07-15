var plugins = [{
      name: 'gatsby-plugin-google-gtag',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby-plugin-google-gtag/gatsby-ssr.js'),
      options: {"plugins":[],"trackingIds":["G-7NCC7XKQ7H"],"gtagConfig":{"anonymize_ip":true},"pluginConfig":{"head":true,"respectDNT":true,"exclude":[],"origin":"https://www.googletagmanager.com","delayOnRouteUpdate":0}},
    },{
      name: 'gatsby-plugin-canonical-urls',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr.js'),
      options: {"plugins":[],"siteUrl":"https://www.crownengine.org","stripQueryString":true},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMdx(sort: { frontmatter: { date: DESC }}) {\n                  edges {\n                    node {\n                      id\n                      frontmatter {\n                        slug\n                        title\n                        date\n                      }\n                      excerpt\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"Crown's News RSS Feed"}]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"output":"/","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby-plugin-offline/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[],"quality":90},
    },{
      name: 'partytown',
      plugin: require('/home/runner/work/crown-website/crown-website/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
