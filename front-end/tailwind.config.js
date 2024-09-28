/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'protestStrike': ['Protest Strike', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif']
      },

    },
  },
  plugins: [],
}