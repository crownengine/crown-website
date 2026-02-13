module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "paypal-blue": "#003087",
        "github-pink": "#db61a2",
      },
      width: {
        "5/11": "45.4545454%",
      },
      backgroundImage: {
        bannerImage: "url('../images/index/crown-editor.jpeg')",
        blackOverlay: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8))",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
