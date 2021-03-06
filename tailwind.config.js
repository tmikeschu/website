module.exports = {
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [/^(hover:)?(bg|text)-(\w+)-[1-9]00$/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      "screen-1/2": "50vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
