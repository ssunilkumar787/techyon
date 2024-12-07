/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#2A3547',
          800: '#1E293B',
        },
      },
    },
  },
  plugins: [],
};