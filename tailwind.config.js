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
        xxsm: '400px',
        additional_helper_breakpoint: '428px',
        xsm: '640px',
        sm: '790px',
        md: '894px',
        lg: '1078px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
