/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
      },
      backgroundColor: {
        "main-primary-green": "#27ae60",
        "main-primary-orange": "#f38609"
      },
      colors:{
        "text-primary-green":"#27ae60"
      }
    },
  },
  plugins: [],
}
