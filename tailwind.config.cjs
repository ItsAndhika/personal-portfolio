/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01051e'
        // 'primary': '#232526',
        // 'secondary': '#414345',
      }
    },
  },
  plugins: [],
}
