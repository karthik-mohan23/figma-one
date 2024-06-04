import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": {
          500: "#36485C",
          700: "#172026",
        },
        "custom-blue": {
          500: "#4328EB",
        },
        "custom-white": {
          500: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
