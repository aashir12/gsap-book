/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // in case you’re using Next.js App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        archer: ["Archer", "serif"],
      },
      keyframes: {
        floatUp: {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-120vh)",
            opacity: "0",
          },
        },
      },
      animation: {
        "float-up": "floatUp 10s linear infinite",
      },
    },
  },
  plugins: [],
};
