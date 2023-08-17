import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-blue-gray": "#4d6e7f",
      "secondary-blue-gray": "#60899f",
      "primary-yellow": "#f9c307",
      "secondary-yellow": "#FACF39",
      "tertiary-yellow": "#fbdb6b",
      "primary-teal": "#3C8E9B",
      "secondary-teal": "#33A8A4",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
