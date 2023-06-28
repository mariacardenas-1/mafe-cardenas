/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mafeGreen': '#a5d28d',
        'mafePink': '#ffad9c',
        'mafePurple': '#341050',
        'mafeGray': '#2b2b2b',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        'view': '1440px',
      },
      width: {
        'view': '1440px',
      },
      boxShadow: {
        layout: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
      },
      minHeight: {
        '30': '30px',
      },
      fontFamily: {
        dosis: ['var(--font-dosis)'],
        indie: ['var(--font-indie-flower)'],
        concert: ['var(--font-concert-one)'],
        bal: ['var(--font-balsamiq-sans)'],
      },
      margin: {
        'msetenta': '-70px',
      },
      fontSize: {
        '3': '1.3rem'
      }
    },
  },
  plugins: [],
}
