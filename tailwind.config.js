/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Hblack':"#555555",
        'black':"#000000",
        "hblue":"#4270ED",
        'hgrey':"#F3EEFC",
        'hgrblue':"#E8F5FF",
        'hgreen':"#E8F8F0",
        'hgray':"#ECF1FD",
        'hpurple':"#8556E3",
        'htgreen':"#15BD66",
        'hroundp':"#F3EEFC",
        'hroundy':"#FFF9EC",
        'vground':"#D9D9D9",
        "hfooter":"#ECF1FD",
        "lgborder":"#D6D6D6",
        "navactive":"#F8F8F8",
        'tcolor':"#999999",
        "tred":"#FF334B",
        "mybcc":"#EBEBEB",
        "mycloror":"#C2C2C2",
        "onOK":"#F5F5F5"
      }
    },
  },
  plugins: [],
}
