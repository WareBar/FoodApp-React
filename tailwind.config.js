/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'roboto' will be the class name: font-roboto
        mada: ['Mada', 'sans-serif'], 
        // Add other fonts here if needed
        // montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}