/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        sizeup: {
           '0%': {
             transform: 'scale(1)'
           },
           '100%': {
            transform: 'scale(1.25)'
           }
         },
       },
       animation: {
        sizeup: 'sizeup 1s linear 1'
       }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
      scrollbar: ['rounded']
  }
}
