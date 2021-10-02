const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-pattern": {
          "background-image": "url(/pattern.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
