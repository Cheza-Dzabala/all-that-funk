module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hotPink: "#B136C6",
        gradient: {
          start: "#12236D",
          end: "#166859",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
