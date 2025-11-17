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
    title: `Crown`,
    subtitle: `The Flexible Game Engine`,
    description: `Crown is a complete and cross-platform game engine designed for flexibility, performance, and fast-iterations.`,
    org_title: `The Crown Foundation`,
    x_handle: `@crown_engine`,
    tcf_mail_address: `foundation@crownengine.org`,
    stats: [
      {
        label: "Downloads",
        value: 6000,
        suffix: "+",
        link: "/download",
      },
      {
        label: "Releases",
        value: 23,
        suffix: "",
        link: "/download",
      },
      {
        label: "Community Members",
        value: 120,
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
  ],
}
