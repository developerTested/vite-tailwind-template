/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      zIndex: {
        '100': 100,
        '1030': 1030
      },
      width: {
        350: '21.875rem',
      },
      height: {
        350: '21.875rem',
      },
    },
  },
  plugins: [],
}