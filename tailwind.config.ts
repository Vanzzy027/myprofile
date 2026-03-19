/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          coral:    "#FF8A5B",
          forest:   "#102C26",
          slate:    "#404461",
          deep:     "#023020",
          sage:     "#364737",
          sienna:   "#6D483F",
          ocean:    "#2E5A87",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary":         "#2E5A87",
          "primary-content": "#ffffff",
          "secondary":       "#FF8A5B",
          "secondary-content":"#ffffff",
          "accent":          "#364737",
          "neutral":         "#404461",
          "base-100":        "#f8f9fa",
          "base-200":        "#eef0f2",
          "base-300":        "#dde1e5",
          "base-content":    "#102C26",
          "info":            "#2E5A87",
          "success":         "#364737",
          "warning":         "#FF8A5B",
          "error":           "#6D483F",
        },
        dark: {
          "primary":         "#FF8A5B",
          "primary-content": "#102C26",
          "secondary":       "#2E5A87",
          "secondary-content":"#ffffff",
          "accent":          "#364737",
          "neutral":         "#404461",
          "base-100":        "#0d1f1b",
          "base-200":        "#102C26",
          "base-300":        "#023020",
          "base-content":    "#e8ede8",
          "info":            "#2E5A87",
          "success":         "#364737",
          "warning":         "#FF8A5B",
          "error":           "#6D483F",
        },
      },
    ],
    darkTheme: "dark",
  },
};