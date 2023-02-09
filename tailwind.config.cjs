/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vlight-grey': 'hsl(0, 0%, 98%)',
        
      },
    },
  },
  plugins: [],
}
