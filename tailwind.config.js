/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/Hero/bg.png')",
      },
      fontFamily: {
        din: ['DIN Condensed Bold'],
        gillSans: ['GillSans']
      },
    },
  },
  plugins: [],
}

