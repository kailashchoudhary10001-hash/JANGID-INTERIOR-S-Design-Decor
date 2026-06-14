import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          50: '#faf7f2',
          100: '#f5ede3',
          200: '#ead5c1',
          300: '#e0b8a1',
          400: '#d4967d',
          500: '#c97a5e',
          600: '#b8654f',
          700: '#96523f',
          800: '#7a4435',
          900: '#63372c',
        },
        warm: {
          cream: '#fef9f3',
          beige: '#f3ebe0',
          taupe: '#8b7d6b',
          gold: '#d4af37',
        },
        slate: {
          dark: '#1a1612',
          gray: '#3d3a35',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3d3a35',
            a: {
              color: '#c97a5e',
              '&:hover': {
                color: '#b8654f',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
