module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blue/layouts/**/*.html",
    "./themes/blue/content/**/*.{html,md}",
  ],
  safelist: ["ml-8"],
  theme: {
    extend: {
      textColor: {
        "tc-black": "#161718",
        "tc-gray": "#798188",
      },
      width: {
        23: "5.75rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        245: "61.25rem",
      },
      height: {
        23: "5.75rem",
      },
      aspectRatio: {
        "7/4": "7 / 4",
        "8/5": "8 / 5",
      },
      backgroundColor: {
        "bg-apple-gray": "#F8F8F8",
        "bg-apple-blue": "#0072E3",
      },
      transitionProperty: {
        "shadow-transform": "box-shadow, transform",
      },
      boxShadow: {
        "card-shadow": "-1px 1px 1px 4px rgb(105, 104, 102)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, #D2D2D2 0%, #F3F3F3 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
