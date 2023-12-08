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
        'md': '800px',
        'lg': '1024px',
        '2xl': '1600px',
        '3xl': '2000px',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        nav: ['var(--font-monts)']
      },
      flexBasis: {
        '3/10': '25%',
        '2/10': '25%',
      },
      colors:{
        'darkColor': "#0A1128",
      }
    },
  },
  plugins: [require("daisyui")],
}
