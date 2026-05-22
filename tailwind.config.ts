import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080b12',
        graphite: '#111827',
        platinum: '#e8edf5',
        signal: '#8be9fd',
        violet: '#a78bfa',
        mint: '#8ef3c5',
        amberline: '#f5c76b'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['SFMono-Regular', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'monospace']
      },
      boxShadow: {
        glow: '0 0 60px rgba(139, 233, 253, 0.18)',
        card: '0 24px 80px rgba(0, 0, 0, 0.28)'
      },
      backgroundImage: {
        'neural-grid':
          'linear-gradient(rgba(139, 233, 253, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 233, 253, 0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
