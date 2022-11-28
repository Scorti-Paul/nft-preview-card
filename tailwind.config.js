/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screen: {
    sm: '375px',
    md: '768px',
    lg: '1440px'
  },
  theme: {
    colors: {
      softblue: 'hsl(215, 51%, 70%)',
      cyan: 'hsl(178, 100%, 50%)',
      verydarkbluemain: 'hsl(217, 54%, 11%)',
      verydarkbluecard: 'hsl(216, 50%, 16%)',
      verydarkblueline: 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)',
    },
    extend: {},
  },
  plugins: [],
}