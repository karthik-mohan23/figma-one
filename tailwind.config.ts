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
          700: "#0085FF",
        },
        "custom-green": {
          500: "#00A424",
        },
        "custom-pink": {
          500: "#EB2891",
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
