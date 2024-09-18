import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      extend: {
        keyframes: {
          "shine-pulse": {
            "0%": {
              "background-position": "0% 0%",
            },
            "50%": {
              "background-position": "100% 100%",
            },
            to: {
              "background-position": "0% 0%",
            },
          },
        },
      },
    
      
      colors: {
        'custom-yellow': '#fde047', // Define el color con un nombre personalizado
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
