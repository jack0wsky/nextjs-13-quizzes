/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/**/*.{tsx,scss}"],
  // content: ["./**/**/*.{tsx,scss}"],
  theme: {
    borderWidth: {
      1: "1px",
    },
    borderRadius: {
      8: "8px",
      4: "4px",
    },
    spacing: {
      24: "24px",
      20: "20px",
      16: "16px",
      12: "12px",
      10: "10px",
      8: "8px",
      4: "4px",
    },
    extend: {
      black: "#1f1f1f",
    },
  },
  plugins: [],
};
