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
      animation: {
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              quotes: "none",
            },
            'a': {
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              wordWrap: 'break-word',
            },
            'p': {
              overflowWrap: 'break-word',
              wordBreak: 'break-word'
            }
          },
        },
      }),
      colors: {
        "toc-bot-dark": "rgba(66, 66, 69, 0.7)",
        igrey: "rgba(232, 232, 237, 0.7)",
        iblack: "rgb(29,29,31)",
        "icon-strong": "#464D5A",
        "icon-medium": "#81868F",
        "icon-weak": "#CBCDD1",
        "border-weak": "rgba(0, 0, 0, 0.04)",
        "border-medium": "rgba(0, 0, 0, 0.08)",
        "border-strong": "rgba(0, 0, 0, 0.12)",
        "border-ultrastrong": "rgba(0, 0, 0, 0.16)",
        "fill-weak": "#F9FAFB",
        "fill-medium": "#F3F5F7",
        "fill-strong": "#E9EBED",
        "fill-ultrastrong": "#CBCDD1",
        "tsp-fill-weak": "rgba(0, 0, 0, 0.04)",
        "tsp-fill-medium": "rgba(0, 0, 0, 0.08)",
        "tsp-fill-strong": "rgba(0, 0, 0, 0.12)",
        "tsp-fill-ultrastrong": "rgba(0, 0, 0, 0.16)",
        "feedback-hover": "rgba(0, 0, 0, 0.04)",
        "feedback-active": "rgba(0, 0, 0, 0.08)",
        "feedback-accent": "rgba(30, 111, 255, 0.08)",
        "feedback-notice": "#FFFCEB",
        "bg-default": "#FFFFFF",
        "bg-weak": "#F9FAFB",
      },
      textColor: {
        iblack: "rgb(29,29,31)",
        iblack: "rgb(29,29,31)",
        "tc-black": "rgb(29,29,31)",
        "tc-gray": "#798188",
        "text-ultrastrong": "rgba(0, 0, 0, 0.88)",
        "text-strong": "rgba(0, 0, 0, 0.64)",
        "text-medium": "rgba(0, 0, 0, 0.4)",
        "text-weak": "rgba(0, 0, 0, 0.24)",
        "text-ultraweak": "rgba(0, 0, 0, 0.16)",
        "text-link": "#175CEB",
        "text-error": "#EB3639",
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
      maxWidth: { "1/2": "50%" },
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
      backdropFilter: {
        'saturate180': 'saturate(180%)',
        'blur20': 'blur(20px)'
      },
      transitionProperty: {
        "shadow-transform": "box-shadow, transform",
      },
      boxShadow: {
        "card-shadow": "-1px 1px 1px 4px rgb(105, 104, 102)",
        "toc-bot": "0 0 1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, #D2D2D2 0%, #F3F3F3 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
