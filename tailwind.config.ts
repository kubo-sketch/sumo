import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pitch-black': '#000000',
        'neon-cyan': '#00FFFF',
        'crimson-red': '#FF0000',
        'dark-metal': '#111111',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        mono: ['var(--font-share-tech-mono)'],
      },
      animation: {
        'pulse-fast': 'pulse 0.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rgb-shake': 'rgb-shake 0.2s infinite',
      },
      keyframes: {
        'rgb-shake': {
          '0%': { textShadow: '2px 0 #FF0000, -2px 0 #00FFFF', transform: 'translate(1px, 1px)' },
          '25%': { textShadow: '-2px 0 #FF0000, 2px 0 #00FFFF', transform: 'translate(-1px, -1px)' },
          '50%': { textShadow: '2px 0 #FF0000, -2px 0 #00FFFF', transform: 'translate(-1px, 1px)' },
          '75%': { textShadow: '-2px 0 #FF0000, 2px 0 #00FFFF', transform: 'translate(1px, -1px)' },
          '100%': { textShadow: '2px 0 #FF0000, -2px 0 #00FFFF', transform: 'translate(0, 0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
