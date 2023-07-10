
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(240, 73%, 65%)',
        violet: 'hsl(273, 75%, 66%)',
        texto: 'hsl(238, 29%, 16%)',
        textoRespuesta: 'hsl(240, 6%, 50%)',
      },
      fontFamily: {
        'kumbh': ['Kumbh', 'sans-serif'],
      },
    },
  },
  plugins: [],
}