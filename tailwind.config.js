export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tiny5: ["Tiny5", "serif"]
      },
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}

