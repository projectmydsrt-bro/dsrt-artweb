/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#0EA5E9',
        background: '#0F172A',
        surface: '#1E1B4B',
        glow: '#22D3EE',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(124,58,237,0.4)',
      }
    }
  },
  plugins: []
}
