/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",'node_modules/preline/dist/*.js', "./node_modules/tw-elements/dist/js/**/*.js",],
  theme: {
    extend: {
      colors: {
        primColor: "#384AAD",
        secColor: "#FAD284",
        textColor: "#1B1B1B",
        dashboardAsh: "#F8F8F8",
        highlightBlue: "#384AAD26"
      },
      fontFamily: {
        open: ["'Open Sans'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pt: ["'PT Sans'", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        "rounded-xl": "0px 0px 25px -5px rgba(0, 0, 0, 0.3)",
        "rounded-md": "0px 0px 8px 1px rgba(0, 0, 0, 0.1)",
        "rounded-xl-soft": "0px 0px 6px 1px rgba(0, 0, 0, 0.07)",
        "dashboard-shadow": "10px 0px 10px 0px rgba(0, 0, 0, 0.07)",
      },
      screens: {
        small: "500px",
        ipad: "700px",
        mini: "900px",
        desktop: "1024px",
        large: "1280px",
      },
    },
  },
  plugins: [require('preline/plugin'), require("tw-elements/dist/plugin.cjs"), require('flowbite/plugin')],
};
