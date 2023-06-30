/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        26: '100px',
        50: '200px',
      },
      screens: {
        sm: '640px',
        md: '894px',
        lg: '1078px',
      },
    },
  },
  plugins: [],
};
