export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
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

