module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'paypal-blue': '#003087',
        'github-pink': '#db61a2',
      },
      width: {
        '5/11': '45.4545454%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
