/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      },
      animation: {
        blink: 'blink 30ms ease-in-out',
      }
    },
  },
  variants: {
    extend: {
      animation: ['active'],
    },
  },
  plugins: [],
}


