import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#E5A03F",
        purple: "#AE93F9",
        grey: "#505050",
        redcard:"#972C21",
        lightyellow: "#F9DC5C",
        lightgreen: "#E5F993",
        dropcolor: "#FFC83C",
        header:"#003CAA"
      },fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-custom": "linear-gradient(to top, #6FB96F , #55A9AB)",
          "custom-header": "url('/bgimage.png')",
      },
    },
  },
  plugins: [
    
  ],
};

export default config;
