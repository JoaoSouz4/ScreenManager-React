/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        up: 'up 0.8s ease forwards'
      },
      keyframes: {
        up: {
          '0%, 100%': { transform: 'translateY(4rem)'}
        }
      }
    },
    colors: {
      'gray': 'rgba(243, 243, 243, 1)',
      'gray2': '#0C1291',
      'black': '#18181b',
      'transparent': 'transparent',
      'primary': 'rgba(12, 18, 164, 1)',
      'pgradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #0C12A4 0%, #6B01D5 97.94%)',
      'phover': 'rgba(42, 99, 167, 1)',
      'plight': 'rgba(162, 195, 234, 90%)',
      'ghover': 'rgba(212, 212, 212, 1)',
      'white': '#fafafa',
      'yellow': 'rgb(253 224 71)'
    },
  },
  plugins: [],
}

