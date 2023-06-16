/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primColor: "#384AAD",
        secColor: "#FAD284",
      },
      fontFamily: {
        open: ["'Open Sans'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pt: ["'PT Sans'", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {},
      screens: {
        small: "500px",
        ipad: "700px",
        mini: "900px",
        desktop: "1024px",
        large: "1280px",
      },
    },
  },
  plugins: [],
};
