/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#4aada9',
        // primary: '#76b38f',
        primary2btn: '#25dba5',
      },
      fontFamily:{
        CreteRound: ['Open Sans', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    theme: ["light", "dark"],
  },
}

