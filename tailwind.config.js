/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'little-days': ['"Little Days"', 'sans-serif'], 'Gruppo': ['"Gruppo"', 'sans-serif'],// Custom font with fallback
      },

    },
  },
  plugins: [],
}