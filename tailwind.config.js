/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        "light-color": "#f7f9fb",
        "red-color": "#ef1b31",
      },
    },
  },
  plugins: [],
};
