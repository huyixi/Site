module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.{html,md}",
      "./themes/blue/layouts/**/*.html",
      "./themes/blue/content/**/*.{html,md}",
    ],
    options: {
      safelist: ["ml-8"],
    },
  },
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
      backgroundColor: {
        "bg-apple-gray": "#F8F8F8",
        "bg-apple-blue": "#0072E3",
      },
      transitionProperty: {
        "shadow-transform": "box-shadow, transform",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
