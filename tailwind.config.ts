import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#e5e7eb",
      secondary: "#f3f4f6",
      matrix: "#15803d",
      info: "#f59e0b",
      error: "#e11d48",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
