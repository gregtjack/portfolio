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
        'sans': ["'Noto Sans', regular"],
        'bold': ["'Noto Sans', bold"],
        'ital': ["'DM Sans', italic"],
        'varela': ["'Varela Round', regular"]
      },
      colors: {
        //'accent': '#106aff',
        //'accent': '#2573d9',
        'accent': '#009de0',
        'accent-dark': '#0085cc',
      }
    },
    
  },
  plugins: []
}
