/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js,tsx}", "./*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}