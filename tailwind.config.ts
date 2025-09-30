import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        skye: {
          50: 'var(--skye-50)',
          100: 'var(--skye-100)',
          200: 'var(--skye-200)',
          300: 'var(--skye-300)',
          400: 'var(--skye-400)',
          500: 'var(--skye-500)',
          600: 'var(--skye-600)',
          700: 'var(--skye-700)',
          800: 'var(--skye-800)',
          900: 'var(--skye-900)',
        },
        ink: { 900: 'var(--ink-900)' },
      },
      borderRadius: { '2xl': '1.25rem' },
    },
  },
  plugins: [],
}

export default config
