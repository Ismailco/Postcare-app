/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      light: '#e9edf0',
      dark: '#bbb',
      primary: '#333399',
      secondary: '#46b2e0',
      accent: {
        100: 'fa3e6f',
        200: 'febc6a',
      },
    },
  },
  plugins: [],
};
