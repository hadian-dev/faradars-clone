/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.75rem',
      },
      fontFamily: {
        shabnam: ['Shabnam', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
