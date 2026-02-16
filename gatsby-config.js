/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://www.crownengine.org`,
    title: `Crown Engine`,
    subtitle: `The Flexible Game Engine`,
    description: `A complete and cross-platform game engine designed for flexibility, performance, and fast-iterations.`,
    description_short: `Flexible, performant and fast-iterations focused game engine.`,
    image: `/placeholder.png`,
    org_title: `The Crown Foundation`,
    x_handle: `@crown_engine`,
    tcf_mail_address: `foundation@crownengine.org`,
    stats: [
      {
        label: "Downloads",
        value: 6700,
        suffix: "+",
        link: "/download",
      },
      {
        label: "Major Releases",
        value: 24,
        suffix: "",
        link: "/download",
      },
      {
        label: "Community Members",
        value: 130,
        suffix: "+",
        link: "https://discord.gg/invite/CeXVWCT",
      },
      {
        label: "Platforms Supported",
        value: 4,
        suffix: "",
        link: "https://docs.crownengine.org/html/latest/introduction.html",
      },
    ],
    menu: [
      {
        label: `Download`,
        link: `/download`,
      },
      {
        label: `Play`,
        link: `/play`,
      },
      {
        label: `News`,
        link: `/news`,
      },
      {
        label: `Support`,
        link: `/support`,
      },
      {
        label: `About`,
        link: `/about`,
      },
      {
        label: `Donate`,
        link: `/fund`,
      },
    ],
    about_menu: [
      {
        label: `The Crown Foundation`,
        link: `/about`,
      },
      {
        label: `Credits`,
        link: `/about/credits`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `data`, `markdown`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `html`,
        path: path.join(__dirname, `src`, `data`, `html`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: path.join(__dirname, `src`, `news`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-7NCC7XKQ7H"],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.crownengine.org`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                })
              })
            },
            query: `
              {
                allMdx(sort: { frontmatter: { date: DESC }}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        slug
                        title
                        date
                      }
                      excerpt
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Crown's News RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-image`,
      options: {
        quality: 90,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              withWebp: { quality: 90 },
            },
          },
        ],
      },
    },
  ],
}
