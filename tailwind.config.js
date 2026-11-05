/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat', 'sans-serif'] },
      colors: {
        ink: '#111113', side: '#0A0A0B', panel: '#1A1A1D', line: '#2E2A20',
        gold: '#D4AF37', goldlt: '#F0CF65', golddk: '#B8892B', muted: '#A8A292', cream: '#F5F1E6',
      },
    },
  },
  plugins: [],
};
