const colors = ['#4441f0', '#bf2bf0', '#17ebaf', '#1092e8', '#e61e1e', '#71e61e', '#e6cb1e', '#d96fd2', '#ed8e40']

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
        'accent': colors[3],
        'accent-dark': '#1e7ce8',
      }
    },
    
  },
  plugins: []
}
