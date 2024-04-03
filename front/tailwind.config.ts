import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: '#7D28F7'
        },
        secondary: {
          DEFAULT: '#343A40CC'
        },
        heading: {
          DEFAULT: '#444444'
        },
        card: {
          DEFAULT: '#FAFAFA'
        },
        background: {
          DEFAULT: '#EBEEF2'
        },
        whatsapp: {
          DEFAULT: '#4AC959'
        }
      }
    },
  },
  plugins: [],
};
export default config;
