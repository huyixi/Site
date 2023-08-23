module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blue/layouts/**/*.html",
    "./themes/blue/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      textColor: {
        "tc-black": "#161718",
        "tc-gray": "#798188",
      },
      width: {
        144: "36rem",
        148: "37rem",
        152: "38rem",
        245: "61.25rem",
      },
      backgroundColor: {
        "bg-gray": "#F8F8F8",
      },
      transitionProperty: {
        "shadow-transform": "box-shadow, transform",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
