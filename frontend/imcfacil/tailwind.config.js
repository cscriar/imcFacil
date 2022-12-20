module.exports = {
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          vs600: '#01372F',
          vs500 : '#004138',
          vs400: '#D1E02F',
        },
       },
    },
  },
  plugins: [],
}
