/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3471FF",
        light: {
          800: "#AFAFAF"
        },
        dark: {
          600: "#484848",
          700: "#343434",
          800: "#272727",
          900: "#1B1B1B",
        }
      }
    },
  },
  plugins: [],
};
