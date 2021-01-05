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

  const markDownTemplate = require.resolve(`./src/templates/markdown.jsx`)

  const result = await graphql(`
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

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: markDownTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
