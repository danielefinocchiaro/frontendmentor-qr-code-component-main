/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "376px",
        md: "568px",
        lg: "924px",
        xl: "1280px",
      },
      colors: {
        "light-gray": "#d6e2f0",
        "grayish-blue": "	#7b879d",
        "dark-blue": "#1f3251",
      },
    },
    plugins: [],
  },
};
