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
    extend: {
      colors: {
        'theme-primary': '#0d6759',
        'theme-secondary' : '#0b2e59',
        'theme-green': '#7ab317',
        'theme-light-green': '#a0c55f',
        'theme-purple': '#2a044a',
        'theme-neutral': '#FAFAFA'
      }
    },
    fontSize: {
      h1: ['40px', '48px'],
      h2: ['32px', '38px'],
      h3: ['28px', '34px'],
      nav: ['18px', '20px'],
      p: ['16px', '22px']
    }
  },
  plugins: [],
}

