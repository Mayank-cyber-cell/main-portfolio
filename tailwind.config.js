/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 4s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'slideInFromLeft': 'slideInFromLeft 0.8s ease-out',
        'slideInFromRight': 'slideInFromRight 0.8s ease-out',
        'slideInFromBottom': 'slideInFromBottom 0.8s ease-out',
        'slideInFromTop': 'slideInFromTop 0.5s ease-out',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      boxShadow: {
        '4xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.3)',
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
      }
    },
  },
  plugins: [],
};