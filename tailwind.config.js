/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5385D"
      }
    },
    screens: {
      xs: "320px",

      s: "375px",

      l: "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
  ],
};
