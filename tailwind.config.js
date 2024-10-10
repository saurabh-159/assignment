/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'], // Add Dancing Script
        gilroy: ['Gilroy', 'sans-serif'], // Add Gilroy font
      },
    },
  },
  plugins: [],
}
