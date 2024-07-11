/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A101E",
        secondary: "#FEC544",
        'yellow-400': '#FFD77F',
        'orange-400': '#FFB347',
      },
    },
  },
  plugins: [],
}

