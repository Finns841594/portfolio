/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'rose-quartz': '#F7CAC9',
        serenity: '#92A8D1',
        Rosewater: '#f2d5cf',
        Flamingo: '#eebebe',
        Pink: '#f4b8e4',
        Mauve: '#ca9ee6',
        Red: '#e78284',
        Maroon: '#ea999c',
        Peach: '#ef9f76',
        Yellow: '#e5c890',
        Green: '#a6d189',
        Teal: '#81c8be',
        Sky: '#99d1db',
        Sapphire: '#85c1dc',
        Blue: '#8caaee',
        Lavender: '#babbf1',
        Text: '#c6d0f5',
        Subtext1: '#b5bfe2',
        Subtext0: '#a5adce',
        Overlay2: '#949cbb',
        Overlay1: '#838ba7',
        Overlay0: '#737994',
        Surface2: '#626880',
        Surface1: '#51576d',
        Surface0: '#414559',
        Base: '#303446',
        Mantle: '#292c3c',
        Crust: '#232634',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
        224: '56rem',
        256: '64rem',
      },
    },
  },
  plugins: [nextui()],
}
