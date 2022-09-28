/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6ad2dd",
        
"secondary": "#e0c37f",
        
"accent": "#1090cc",
        
"neutral": "#161C27",
        
"base-100": "#E2E4EE",
        
"info": "#7287E3",
        
"success": "#1A7F67",
        
"warning": "#D98612",
        
"error": "#F2737B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
