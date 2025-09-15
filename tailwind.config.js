/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neural-cyan': '#00FFFF',
        'neural-magenta': '#FF00FF',
        'neural-green': '#00FF00',
        'neural-yellow': '#FFFF00',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-neural': 'pulse-neural 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(255,255,255,0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255,255,255,0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-neural': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
          },
          '50%': { 
            transform: 'scale(1.2)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
