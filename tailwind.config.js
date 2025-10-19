/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dsrt: {
          500: '#7C3AED',
          accent: '#06b6d4'
        },
        surface: '#0f1016'
      },
      boxShadow: {
        'dsrt-glow': '0 10px 50px rgba(124,58,237,0.18)'
      }
    }
  },
  plugins: []
};
