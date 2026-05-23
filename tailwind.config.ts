import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        gold: '#dea92f',
        ink: '#111111',
        paper: '#f8f6f2',
        stone: '#d9d2c3'
      },
      boxShadow: {
        soft: '0 28px 80px rgba(17,17,17,0.08)',
        card: '0 18px 48px rgba(17,17,17,0.12)'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(222,169,47,0.18), transparent 36%), linear-gradient(180deg, #111111 0%, #111111 45%, #f8f6f2 100%)'
      },
      animation: {
        float: 'float 9s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
