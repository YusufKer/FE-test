/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'mobile': '540px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

