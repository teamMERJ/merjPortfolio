/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A101E",
        yellow: "#FEC544",
        primary: "#0A101E",
        secondary: "#FEC544",
        
      },
    },
  },
  plugins: [],
}

