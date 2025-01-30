
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1f1925",
      },
      screens:{
        'sm':'540px',
        'md':'720px',
        'lg':'960px',
        'xl':'1140px',
        '2xl': '1320px'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

