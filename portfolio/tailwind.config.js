/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tourney: ['Tourney', 'sans-serif'],
        rubik: ['Rubik Mono One', 'monospace'],
      },
      backgroundImage: {
        'universe': "url('assets/background.webp')",
      }
    },
  },
  plugins: [],
}