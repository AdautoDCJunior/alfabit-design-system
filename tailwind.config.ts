import type { Config } from 'tailwindcss'

const toRgba = (cssVariable: string) => {
  return `rgba(var(${cssVariable}), <alpha-value>)`
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: 'var(--screen-mobile)',
      table: 'var(--screen-table)',
      desktop: 'var(--screen-desktop)',
      tv: 'var(--screen-tv)'
    },
    spacing: {
      'none': 'var(--spacing-none)',
      '4xs': 'var(--spacing-4xs)',
      '2xs': 'var(--spacing-2xs)',
      'xs': 'var(--spacing-xs)',
      'sm': 'var(--spacing-sm)',
      'md': 'var(--spacing-md)',
      'lg': 'var(--spacing-lg)',
      'xl': 'var(--spacing-xl)',
      '2xl': 'var(--spacing-2xl)',
      '4xl': 'var(--spacing-4xl)',
    },
    extend: {
      colors: {
        primary: toRgba('--primary'),
        secondary: toRgba('--secondary'),
        tertiary: toRgba('--tertiary'),
        quaternary: toRgba('--quaternary'),
        hover: toRgba('--hover'),
        click: toRgba('--click'),
        icon: toRgba('--icon'),
        outline: toRgba('--outline'),
        divider: toRgba('--divider'),
      },
      backgroundColor:{
        light: toRgba('--bg-light'),
        dark: toRgba('--bg-dark'),
        disabled: toRgba('--bg-disabled'),
      },
      textColor: {
        gray: {
          primary: toRgba('text-primary'),
          secondary: toRgba('text-secondary'),
          tertiary: toRgba('text-tertiary'),
        },
        disabled: toRgba('text-disabled')
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)'
      },
      blur: {
        default: 'var(--blur)'
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)'
      }
    },
  },
  plugins: [],
}

export default config
