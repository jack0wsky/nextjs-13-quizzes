/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/**/*.tsx"],
  theme: {
    borderWidth: {
      1: "1px",
    },
    spacing: {
      12: "12px",
      8: "8px",
      4: "4px",
    },
    extend: {
      black: "#1f1f1f",
    },
  },
  plugins: [],
};
