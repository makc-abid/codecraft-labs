/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        dark: "#0A0A0A",
        accent: "#FFD700"
      }
    },
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"]
    }
  },
  plugins: []
}
