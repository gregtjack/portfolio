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
        'sans': ["'DM Sans', regular"],
        'bold': ["'DM Sans', bold"]
      },
      colors: {
        'accent': '#596aff',
        'accent-dark': '#4754c9'
      }
    },
    
  },
  plugins: [],
}
