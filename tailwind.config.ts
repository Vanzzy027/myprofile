import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          coral:    "rgb(var(--color-coral) / <alpha-value>)",
          forest:   "#102C26",
          slate:    "#404461",
          deep:     "#023020",
          sage:     "#364737",
          sienna:   "#6D483F",
          ocean:    "#2E5A87",
        },
      },
      textColor: {
        "on-coral": "rgb(var(--color-on-coral) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  // Built-in daisyUI themes are disabled; brand themes live in src/index.css as CSS variables.
  plugins: [daisyui({ themes: false })],
};
