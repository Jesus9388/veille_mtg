/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',},
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%, 75%': { transform: 'rotate(-90deg)'},
          '50%': { transform: 'rotate(90deg)' },
        },
      },
    },
  },
  plugins: [],
}