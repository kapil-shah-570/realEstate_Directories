/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(15px)', opacity: '0.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        scroll: 'scroll 2s infinite'
      }
    }
  },
  plugins: [],
}







/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}