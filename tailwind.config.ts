import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "background": "#F9F9F9",
        "background-menu": "#007FBA",
      },
      colors: {
        black: "#37474F",
        blue: "#007FBA",
        grayLigth: "#F9F9F9",
        grayDark: "#F1F4F5",
        gray: "#666666",
        textGray:"#455a64"
      }
    },
  },
  plugins: [],
};
export default config;
