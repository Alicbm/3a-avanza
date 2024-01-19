/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], 
  theme: {
    extend: {
      colors: {
        'white': '#f8f8ff',
        'blue': '#1561f0',
        'hoverBlue': '#0c50ce',
        'darkBlue': '#090b20',
        'hoverDarkBlue': '#080a1c',
        'black': '#060513',
        'gray': '#959595',
        'hoverGray': '#3c3c3c'
      }
    },
    fontFamily: {
      title: ['Fredoka', 'sans-serif'],
      text: ['Open Sans', 'sans-serif']
    },
    fontSize: {
      sm: '12px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '26px',
      '5xl': '28px'
    }
  },
  plugins: [],
}

// font-family: 'Fredoka', sans-serif;
// font-family: 'Open Sans', sans-serif;
