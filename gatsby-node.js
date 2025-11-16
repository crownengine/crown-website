exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
          options: {
            preprocessor: (content, loaderContext) => {
              let result

              try {
                // remove <style> from raw html
                result = content.replace(/(<style[\w\W]+style>)/g, "")
              } catch (error) {
                loaderContext.emitError(error)

                return content
              }

              return result
            },
            minimize: true,
          },
        },
      ],
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Random markdown files.
  const markdowns = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (markdowns.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  markdowns.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/markdown.jsx`),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  // News.
  const newsTemplate = require.resolve(`./src/templates/news.jsx`)

  const news_query = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (news_query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const news = news_query.data.allMdx.edges

  news.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${newsTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        prev: index === news.length - 1 ? null : news[index + 1].node,
        next: index === 0 ? null : news[index - 1].node,
      },
    })
  })
}
