/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#d9c9a8',
        parchment2: '#cbb98f',
        ink: '#161311',
        gold: '#e6d3a3',
        cream: '#f3e8cf',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        poster: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
