/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ["Atkinson", "serif"],
      },
      colors: {
        orange: "#FDA214",
        softWhite: "#FCFCFC",
        darkSoftWhite: "#F2F2F2",
        yankeesBlue: "#152938",
        charcoal: "#304859",
        lightPeriwinkle: "#BCCED9",
        silverLakeBlue: "#6395B8",
        shadowBlue: "#7191A5",
      },
    },
  },
  plugins: [],
};

