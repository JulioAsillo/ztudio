/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

// ============================================================
//  BRANDBOOK ztudio
//  Paleta:  #0b0b0b negro - #2a2a2a gris - #f6f6f6 blanco - #6cbc88 verde
//  Fuentes: Alfa Slab One (display) - Montserrat (familia)
//
//  ESCALADO FLUIDO (2K/4K): los fontSize usan clamp(min, vw, max).
//  El valor 'vw' del medio controla cuanto crece al agrandar la pantalla.
//  Sube ese vw si quieres texto aun mas grande en monitores grandes.
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
        // Margen lateral fluido: 64px en desktop normal, crece hasta 160px en 4K
        'margin-desktop': 'clamp(64px, 6vw, 160px)',
        'margin-mobile': '20px',
        unit: '8px',
      },
      maxWidth: {
        // Contenedor mas ancho para aprovechar 2K/4K (antes 1440 = se veia chico)
        'container-max': '1760px',
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
        // min  | crecimiento (vw) | max
        'display-xl': ['clamp(44px, 7vw, 150px)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '400' }],
        'headline-lg': ['clamp(40px, 4.5vw, 96px)', { lineHeight: '1.08', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-lg-mobile': ['clamp(30px, 6vw, 44px)', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-md': ['clamp(24px, 2vw, 40px)', { lineHeight: '1.25', fontWeight: '700' }],
        'body-md': ['clamp(15px, 1vw, 19px)', { lineHeight: '1.55', fontWeight: '400' }],
        'body-lg': ['clamp(17px, 1.2vw, 24px)', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['clamp(11px, 0.8vw, 14px)', { lineHeight: '1.3', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [forms, containerQueries],
};