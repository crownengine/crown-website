module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // https://coolors.co/150a08-311e0e-7f5f3b-b69f7f-cdb08e
        pochinki: {
          50: "#f9f5f0",
          100: "#f4ebe2",
          200: "#eee2d3",
          300: "#e8d8c5",
          400: "#e2ceb6",
          500: "#ddc5a7",
          600: "#d2b48c",
          700: "#cca97b",
          800: "#ba8c4f",
          900: "#a2773f",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
