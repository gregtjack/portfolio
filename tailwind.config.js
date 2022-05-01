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
        'accent': '#3b52ff',
        'accent-dark': '#1e32c7',
      }
    },
    
  },
  plugins: []
}
