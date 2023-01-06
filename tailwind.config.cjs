 // tailwind.config.js
 module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors: {
      primary: '#111a21',
      secondary: '#F2F9FF',
      neutral: '#2C2E2D'
    },
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
