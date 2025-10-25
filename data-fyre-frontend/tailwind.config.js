/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e54ed0',
        accent: '#ffffff',
        secondary: '#9f45b0',
        tertiary: '#44008b',
        dark: '#2d2d2d',
        'dark-base': '#1a1a1a',
        'glass-dark': 'rgba(45, 45, 45, 0.4)',
        'glass-light': 'rgba(45, 45, 45, 0.6)',
        light: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #e54ed0, 0 0 10px #e54ed0' },
          '100%': { boxShadow: '0 0 10px #e54ed0, 0 0 20px #e54ed0, 0 0 30px #e54ed0' },
        },
      },
    },
  },
  plugins: [],
}

