/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d9fe',
          300: '#a3bffd',
          400: '#779cfc',
          500: '#5579fa',
          600: '#3b56f0',
          700: '#2f44dd',
          800: '#1E3A8A', // Primary blue
          900: '#192870',
        },
        orange: {
          50: '#fff8f1',
          100: '#ffedd5',
          200: '#ffd9aa',
          300: '#ffbf7f',
          400: '#ffa54c',
          500: '#F97316', // Accent orange
          600: '#e65a00',
          700: '#bf4800',
          800: '#9a3c00',
          900: '#7e3200',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};