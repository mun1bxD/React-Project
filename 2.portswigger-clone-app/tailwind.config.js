/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customOrange: '#FF6633',
        customeGrey:'#DDE2E4',
        customPeach:'#FFEFEA',
        customWhite:'#F2FAFB',
        customBlue:'#001350',
        customeDarkgrey:'#7F85A7',
        customlightBlue:'#0094FF',
        customeBlueGreen:'#1AABC0',
        customePurple:'#5B4FFF',
        customeLightBlueGreen:'#00A2B9',
      },
      screens:{
        'xls':'1257px',
        'msm':'938px',
        'xlg':'1127px',
      },
      width:{
        'customW1':'45%',
        'customW2':'55%',
      },
    },
  },
  plugins: [],
}

