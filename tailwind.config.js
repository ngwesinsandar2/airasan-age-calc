/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "purple": "hsl(259, 100%, 65%)",
        "lightRed": "hsl(0, 100%, 67%)",
        "offWhite": "hsl(0, 0%, 94%)",
        "lightGrey": "hsl(0, 0%, 86%)",
        "smokeGrey": "hsl(0, 1%, 44%)",
        "offBlack": "hsl(0, 0%, 8%)",
      }
    },
  },
  plugins: [],
}

