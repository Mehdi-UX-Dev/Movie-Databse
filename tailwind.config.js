module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
          colors: {
            darkBlue : '#0d253f',
            lightBlue: "#01b4e4",
            lightgreen : "#90cea1"
          }
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}