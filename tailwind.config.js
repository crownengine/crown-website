const silver = {
  50: "oklch(97.5% 0.002 240 / <alpha-value>)",
  100: "oklch(94% 0.003 240 / <alpha-value>)",
  200: "oklch(87% 0.004 240 / <alpha-value>)",
  300: "oklch(78% 0.005 240 / <alpha-value>)",
  400: "oklch(68% 0.006 240 / <alpha-value>)",
  500: "oklch(58% 0.007 240 / <alpha-value>)",
  600: "oklch(48% 0.007 240 / <alpha-value>)",
  700: "oklch(38% 0.006 240 / <alpha-value>)",
  800: "oklch(28% 0.005 240 / <alpha-value>)",
  900: "oklch(19% 0.004 240 / <alpha-value>)",
  950: "oklch(12% 0.003 240 / <alpha-value>)",
}

const coolHorizon = {
  50: "oklch(95.42% 0.019 252.88 / <alpha-value>)",
  100: "oklch(90.92% 0.039 254.29 / <alpha-value>)",
  200: "oklch(81.69% 0.082 255.45 / <alpha-value>)",
  300: "oklch(72.94% 0.124 255.43 / <alpha-value>)",
  400: "oklch(64.50% 0.168 256.43 / <alpha-value>)",
  500: "oklch(57.21% 0.204 258.29 / <alpha-value>)",
  600: "oklch(48.67% 0.172 258.23 / <alpha-value>)",
  700: "oklch(39.89% 0.135 257.72 / <alpha-value>)",
  800: "oklch(30.44% 0.098 257.40 / <alpha-value>)",
  900: "oklch(20.42% 0.054 254.68 / <alpha-value>)",
  950: "oklch(17.02% 0.042 251.12 / <alpha-value>)",
}

module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.mdx"],
  theme: {
    // Components use semantic roles drawn from the silver foundation and cool horizon accent scales.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "button-white": "#c4ccd8",
      "button-white-hover": "#e8edf5",
      silver,
      "cool-horizon": coolHorizon,
      canvas: silver[950],
      surface: silver[900],
      panel: silver[800],
      line: silver[800],
      ink: silver[50],
      muted: silver[300],
      inverse: silver[50],
      "inverse-muted": silver[300],
      dark: silver[950],
      deepest: silver[950],
      brand: coolHorizon[300],
      "brand-hover": coolHorizon[400],
      "brand-light": coolHorizon[300],
      "brand-surface": coolHorizon[800],
      "brand-surface-hover": coolHorizon[700],
      "brand-border": coolHorizon[700],
      focus: silver[500],
      // Functional feedback remains a semantic exception to the two UI scales.
      danger: "#f87171",
      warning: "#fbbf24",
      "warning-surface": silver[900],
    },
    // Six roles cover metadata, interface copy, body copy, leads, sections, and page titles.
    fontSize: {
      caption: ["0.75rem", { lineHeight: "1rem" }],
      small: ["0.875rem", { lineHeight: "1.25rem" }],
      body: ["1rem", { lineHeight: "1.5rem" }],
      lead: ["1.25rem", { lineHeight: "1.75rem" }],
      title: ["clamp(2rem, 5vw, 2.75rem)", { lineHeight: "1.15" }],
      display: ["clamp(3rem, 8vw, 4.5rem)", { lineHeight: "1" }],
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    // Interactive and container chrome uses widget. Full is reserved for diagram geometry.
    borderRadius: {
      widget: "0.5rem",
      full: "9999px",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      relaxed: "1.625",
    },
    letterSpacing: {
      normal: "0",
      wide: "0.08em",
    },
    extend: {
      width: {
        "5/11": "45.4545454%",
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
