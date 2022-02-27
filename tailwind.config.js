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
        'sans': ["'Inter', regular"],
        'bold': ["'Inter', bold"],
        'mono': ["'Roboto Mono'"]
      },
      colors: {
        'accent': '#106aff',
        'accent-dark': '#4754c9'
      }
    },
    
  },
  plugins: [],
}
