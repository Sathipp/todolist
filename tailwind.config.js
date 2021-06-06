const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#DDF3FF',
          DEFAULT: '#2F9BC9',
        },
        gray: {
          light: '#F2F2F2',
          DEFAULT: '#E5E5E5',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
