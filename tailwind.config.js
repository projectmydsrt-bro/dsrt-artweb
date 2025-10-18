/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cgm: {
          50: '#f5f8ff',
          100: '#eef6ff',
          200: '#cfeafe',
          300: '#9be7ff',
          400: '#3bd3ff',
          500: '#7C3AED',
          600: '#5b21b6',
          700: '#2b1458',
          800: '#161028',
          900: '#0b0813'
        },
        primary: '#7C3AED',
        secondary: '#0EA5E9',
        surface: '#1E1B4B',
        background: '#0F172A'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'cgm-soft': '0 6px 20px rgba(28, 25, 70, 0.14)',
        'cgm-glow': '0 8px 30px rgba(124, 58, 237, 0.18)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};
