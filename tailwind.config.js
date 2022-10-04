/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/javascript/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
