/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/*.js",
    "./src/components/*.js",
    "./src/**/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-green': '0 -5px 1px 1px green',
        'custom-white': '0 -5px 1px 1px white',
        'custom-gray': '0 -5px 5px 5px rgba(128, 128, 128, 0.5)',
        'custom-amber': '0 -5px 5px 5px rgba(255, 191, 0, 0.5)',
        'custom-black': '0 -5px 1px 1px black',

      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}
