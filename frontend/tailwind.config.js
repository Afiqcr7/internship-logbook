/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          900: '#0B1120', 800: '#111827', 700: '#1E293B', 600: '#334155', 500: '#3B82F6',
        },
      }
    },
  },
  plugins: [],
}