module.exports = {
  purge: [],
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
    // etc.
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
