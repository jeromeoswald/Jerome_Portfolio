/** @type {import('tailwindcss').Config} */

// All theme colours are CSS variables defined in src/index.css (:root = light, .dark = dark).
// To re-brand the site, change the RGB triplets there — every component picks them up.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        'surface-2': token('surface-2'),
        line: token('line'),
        ink: token('ink'),
        muted: token('muted'),
        accent: {
          DEFAULT: token('accent'), // accent used for text / icons (contrast-safe per theme)
          from: token('accent-from'), // gradient start
          to: token('accent-to'), // gradient end
          soft: token('accent-soft'), // tinted backgrounds
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Fluid type scale — scales smoothly between ~320px and ~1440px viewports
      fontSize: {
        'fluid-xs': ['clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)', { lineHeight: '1.5' }],
        'fluid-sm': ['clamp(0.875rem, 0.85rem + 0.12vw, 0.9375rem)', { lineHeight: '1.6' }],
        'fluid-base': ['clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)', { lineHeight: '1.7' }],
        'fluid-lg': ['clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)', { lineHeight: '1.6' }],
        'fluid-xl': ['clamp(1.25rem, 1.12rem + 0.6vw, 1.5rem)', { lineHeight: '1.35' }],
        'fluid-2xl': ['clamp(1.75rem, 1.4rem + 1.6vw, 2.75rem)', { lineHeight: '1.15' }],
        'fluid-display': ['clamp(2.1rem, 1.5rem + 3.2vw, 4.25rem)', { lineHeight: '1.05' }],
      },
      maxWidth: { content: '72rem' },
      boxShadow: {
        soft: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -8px rgb(15 23 42 / 0.12)',
        lift: '0 2px 4px rgb(15 23 42 / 0.06), 0 22px 40px -16px rgb(15 23 42 / 0.28)',
        glow: '0 10px 30px -10px rgb(var(--accent-from) / 0.55)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, rgb(var(--accent-from)) 0%, rgb(var(--accent-to)) 100%)',
        // For surfaces carrying white text (buttons) — contrast-safe
        'button-gradient': 'linear-gradient(135deg, rgb(var(--btn-from)) 0%, rgb(var(--btn-to)) 100%)',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        ping: { '75%, 100%': { transform: 'scale(1.6)', opacity: '0' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
        'soft-ping': 'ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
