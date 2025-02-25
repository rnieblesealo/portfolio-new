export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tiny5: ["Tiny5", "serif"],
      },
      colors: {
        red: "#ec273f",
        blue: "#3388de",
        pink: "#fa6e79",
        black: "#10121c",
        yellow: "#f3a833",
        green: "#26854c"
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}

