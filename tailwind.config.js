/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        'sm': '440px',
        'ms': '570px',
        '3xl': '2000px'
      },
      fontFamily: {
        sans: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
}
