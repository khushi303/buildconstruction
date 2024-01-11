/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'BgHeader': "url('./assets/images/webp/bg-header.webp')",
        'BgContact':"url('./assets/images/webp/bgcontact.webp')",
      },
      backgroundPosition: {
        'BgSize': "100% 100%"
      }
    },
  },
  plugins: [],
}

