/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#d4af37',
          dark: '#050505',
          panel: '#101010'
        }
      },
      boxShadow: {
        premium: '0 0 0 1px rgba(212,175,55,0.25), 0 12px 45px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
};
