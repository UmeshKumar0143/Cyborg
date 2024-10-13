/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
          padding: "1rem",
          center: true,
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
}