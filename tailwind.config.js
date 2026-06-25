/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#07090d',
          900: '#0b0e14',
          850: '#0f131b',
          800: '#11151c',
          700: '#171c26',
          600: '#202733',
          500: '#2b3340',
          400: '#3d4757',
          300: '#5b6678',
          200: '#8b95a5',
          100: '#c4cbd6',
          50: '#eef1f5',
        },
        signal: {
          DEFAULT: '#f5a623',
          dim: '#a8731c',
          bright: '#ffc55c',
        },
        link: {
          DEFAULT: '#2dd4bf',
          dim: '#1f9c8c',
        },
        danger: '#f15a5a',
        ok: '#33d17a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245,166,35,0.25), 0 0 24px -4px rgba(245,166,35,0.35)',
      },
      animation: {
        blink: 'blink 1.4s steps(2,start) infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
