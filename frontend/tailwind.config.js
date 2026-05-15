/** @type {import('tailwindcss').Config} */

module.exports = {

  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {

    extend: {

      colors: {

        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },

        background: {
          light: '#f8fafc',
          dark: '#020617',
        },

        surface: {
          light: '#ffffff',
          dark: '#0f172a',
        },

      },

      boxShadow: {

        soft: '0 10px 30px rgba(0,0,0,0.08)',

      },

      borderRadius: {

        xl2: '1.25rem',

      },

      transitionDuration: {

        400: '400ms',

      },

    },

  },

  plugins: [],

};