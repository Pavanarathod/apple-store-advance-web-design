module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: "-.015em"
    },
    extend: {
      height: {
        "half-screen": "50vh"
      }
    },
  },
  plugins: [],
};
