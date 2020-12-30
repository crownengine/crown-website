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
