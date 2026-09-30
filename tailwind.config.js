/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EFE6',
        paper: '#FBF8F2',
        ink: '#161513',
        muted: '#6E685E',
        line: '#E2DBCF',
        ember: '#E0592A',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        pixel: ['Doto', 'Geist Mono', 'ui-monospace', 'monospace'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { page: '1200px' },
      boxShadow: {
        soft: '0 1px 2px rgba(22,21,19,0.04), 0 6px 20px -12px rgba(22,21,19,0.10)',
      },
    },
  },
  plugins: [],
}
