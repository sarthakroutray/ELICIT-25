/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00FF41',
        'cyber-pink': '#FF00D4',
      },
      fontFamily: {
        techno: ["'Share Tech Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
