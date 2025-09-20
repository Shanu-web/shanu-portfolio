/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: '#fcfaf8',
        coffee: '#7a4f3a',
        terracotta: '#b87349',
        roast: '#5a3a2a',
        ink: '#231f1c',
        latte: '#d8c2b4',
        mocha: '#3a2a24',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 15px 35px -25px rgba(90, 58, 42, 0.45)',
        glow: '0 0 0 1px rgba(180, 122, 89, 0.35)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        grain: "url('/textures/grain.svg')",
      },
    },
  },
  plugins: [],
};
