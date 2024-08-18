/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        customColor:'#0B121F',
        customColorMainPage:'#0C111F',
        customeParaColor:'#A4B1CD',
        customeDesignColor:'#BBFF34',
        customeDesignColor2:'#AAFF34',
        customeDesignColor3:'#A4B1CD',
        customeCodeDemoColor:'#F5F6F8',
        customegray:'#D8D9DB',
        customFontColor:'#404756'
      }
    },
  },
  plugins: [],
}

