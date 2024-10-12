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
        sans: ['var(--font-sans)', 'Poppins', 'sans-serif'], // Agregando Poppins
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
      colors: {
        'custom-yellow': '#fde047', // Define el color con un nombre personalizado
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
        'custom-green-dark': '#00bb2d',
        'custom-green-light': '#44A08D',
        'custom-blue-dark': '#3355ff',
        'custom-blue-light': '#283E51',
        'custom-yellow':  '#eab308',
        'custom-yello':'#78350f',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
