const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Rubik', regular"],
        'bold': ["'Rubik', medium"]
      },
      colors: {
        'accent': '#596aff',
        'accent-dark': '#4754c9'
      }
    },
    
  },
  plugins: [],
}
