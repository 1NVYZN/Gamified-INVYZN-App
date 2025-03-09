/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a86ff",
        secondary: "#8338ec",
        accent: "#ff006e",
        success: "#06d6a0",
        warning: "#ffbe0b",
        background: "#0d1117",
        surface: "#161b22",
        text: "#f0f6fc"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
