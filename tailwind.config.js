/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bluebonnets': "url('/bluebonnets.jpg')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'italiana': ['Italiana', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
