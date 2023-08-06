/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      dark_blue: 'hsl(249, 10%, 26%)',
      grayish_blue: 'hsl(246, 25%, 77%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700'
    },
    screens: {
      desktop: '700px'
    }
  },
  plugins: [
  ],
}
