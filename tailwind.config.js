/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Define our custom color palette
        'primary': {
          '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd',
          '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8',
          '800': '#1e40af', '900': '#1e3a8a', '950': '#172554'
        },
        'dark': {
          '900': '#09090B', // Main dark background
          '800': '#18181B', // Lighter dark for cards
          '700': '#27272A', // Even lighter for borders/hover
        },
      },
      // Adding keyframe animations for entry effects
      keyframes: {
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
      },
      animation: {
          'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}