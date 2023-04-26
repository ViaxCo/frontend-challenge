/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],

  theme: {
    screens: {
      sm: '480px',
      md: '720px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
    },

    extend: {
      colors: {
        wildSand: '#F5F5F5',
      },
    },
  },

  plugins: [],
};
