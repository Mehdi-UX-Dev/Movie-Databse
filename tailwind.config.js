module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "batman" : "url('../public/Batman.jpg')",
        "iron-man":"url('../public/iron-man.jpg')",
        "joker" : "url('../public/joker.jpg')",
        "poker" : "url('../public/poker.jpg')",
        "jokerwall" : "url('../public/jokerwall.jpg')",
        "jokercard" : "url('../public/jokercard.jpg')",
        "netflix" : "url('../public/Netflix.jpg')"
      },
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