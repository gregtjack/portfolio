module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'varela': ["'Varela Round', regular"]
      },
      colors: {
        'accent': '#0059de',
        'accent-dark': '#1240a3',
      }
    },
    
  },
  plugins: []
}
