/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/src/screens**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0C3C68',
      },
    },
  },
  plugins: [],
}

