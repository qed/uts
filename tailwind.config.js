
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        uts: {
          navy: '#002B5C',
          'navy-light': '#003D73',
          teal: '#00A3AD',
          'teal-light': '#E6F7F8',
          offwhite: '#F5F7FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.15em',
      }
    },
  },
  plugins: [],
}
