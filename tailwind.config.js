/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      bg: '#00031D',
      main: '#0E154F',
      secondary: '#ACB5F9',
      border: '#444C8B',
      'main-disabled': 'rgba(173, 182, 250, 0.4)',
      'secondary-disabled': 'rgba(174, 183, 249, 0.4)',
      placeholder: '#444C8B',
      button: '#379F27',
      white: '#fff',
      myred: 'red',
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
});
