/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vlight-grey': 'hsl(0, 0%, 98%)',        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
