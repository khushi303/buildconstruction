/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'BgHeader': "url('./assets/images/png/bg-header.png')",
        'BgContact':"url('./assets/images/png/bgcontact.png')",
      },
      backgroundPosition: {
        'BgSize': "100% 100%"
      }
    },
  },
  plugins: [],
}

