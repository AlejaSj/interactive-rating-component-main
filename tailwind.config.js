/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue:' hsl(216, 12%, 8%)'
      },
      fontFamily:{
        overpass:["Overpass", "sans-serif"]
      }
    }
  },
  plugins: [],
}

