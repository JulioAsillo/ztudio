/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

// ============================================================
//  BRANDBOOK ztudio
//  Paleta:  #0b0b0b negro - #2a2a2a gris - #f6f6f6 blanco - #6cbc88 verde
//  Fuentes: Alfa Slab One (display) - Montserrat (familia)
// ============================================================

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0b0b0b',
          gray: '#2a2a2a',
          white: '#f6f6f6',
          green: '#6cbc88',
        },
        background: '#0b0b0b',
        surface: '#0b0b0b',
        'surface-dim': '#0b0b0b',
        'surface-bright': '#2a2a2a',
        'surface-container-lowest': '#000000',
        'surface-container-low': '#141414',
        'surface-container': '#1a1a1a',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#2a2a2a',
        'surface-variant': '#2a2a2a',
        'inverse-surface': '#f6f6f6',
        'inverse-on-surface': '#0b0b0b',
        'on-surface': '#f6f6f6',
        'on-background': '#f6f6f6',
        primary: '#f6f6f6',
        'on-surface-variant': '#a3aaa4',
        outline: '#5a5f5b',
        'outline-variant': '#2f2f2f',
        'primary-container': '#6cbc88',
        'primary-fixed': '#6cbc88',
        'primary-fixed-dim': '#5aa876',
        'surface-tint': '#6cbc88',
        'inverse-primary': '#6cbc88',
        'on-primary': '#0b0b0b',
        'on-primary-container': '#0b0b0b',
        'on-primary-fixed': '#0b0b0b',
        'on-primary-fixed-variant': '#0b0b0b',
        secondary: '#c8c6c5',
        'secondary-container': '#2a2a2a',
        'on-secondary': '#0b0b0b',
        'on-secondary-container': '#f6f6f6',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        tertiary: '#f6f6f6',
        'tertiary-container': '#2a2a2a',
        'on-tertiary': '#0b0b0b',
        'on-tertiary-container': '#f6f6f6',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        gutter: '24px',
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        unit: '8px',
      },
      maxWidth: {
        'container-max': '1440px',
      },
      fontFamily: {
        'display-xl': ['"Alfa Slab One"', 'serif'],
        'headline-lg': ['"Alfa Slab One"', 'serif'],
        'headline-lg-mobile': ['"Alfa Slab One"', 'serif'],
        'headline-md': ['Montserrat', 'sans-serif'],
        'body-md': ['Montserrat', 'sans-serif'],
        'body-lg': ['Montserrat', 'sans-serif'],
        'label-sm': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '88px', letterSpacing: '-0.02em', fontWeight: '400' }],
        'headline-lg': ['48px', { lineHeight: '54px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-lg-mobile': ['32px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-md': ['30px', { lineHeight: '38px', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      screens:{
        '3x1': '1920px',
      }
    },
  },
  plugins: [forms, containerQueries],
};
