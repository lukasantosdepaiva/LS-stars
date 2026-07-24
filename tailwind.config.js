/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#050505', // dark background
        brand: '#2563EB', // technological blue
        accent: '#FACC15', // gold accent
      },
    },
  },
  plugins: [],
};
