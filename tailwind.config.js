export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tiny5: ["Tiny5", "serif"],
        jersey10: ["'Jersey 10'", "sans serif"],
        funnel: ["'Funnel Sans'", "sans serif"]
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/typography")
  ],
}

