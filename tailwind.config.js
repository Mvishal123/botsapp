/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand/primary": "#0a0a0a",
        "brand/secondary": "#141414",
        "brand/green-dark": "#70e000",
        "brand/green-medium": "#9ef01a",
        "brand/green-light": "#ccff33",
      },
    },
  },
  plugins: [],
};
