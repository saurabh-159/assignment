/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'], // Add the custom font here
      },
    },
  },
  plugins: [],
}
