const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        // top right bottom left
        "30%": "0 30% 0 30%",
      },
      height: {
        176:'704px'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: {
          1000: "#1C1B7E",
        },
        purple: {
          1000: "#8C4BFF",
        },
        yellow: {
          1000: "#FDE895",
        },
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {},
  plugins: [],
};
