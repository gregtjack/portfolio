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
        'ship': ["Shippori Antique B1"],
        'mono': ["'Roboto Mono'"],
        'nunito': ["'Nunito', regular"],
        'ital': ["'Nunito', italic"]
      },
      colors: {
        //'accent': '#106aff',
        'accent': '#2573d9',
        'accent-dark': '#4754c9',
      }
    },
    
  },
  plugins: [],
}
