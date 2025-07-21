import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@aceternity/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2F7D32",
        earth: "#8D6E63",
        sunset: "#FF8A65",
        cream: "#FFF8E1",
        charcoal: "#424242",
      },
      fontFamily: {
        sans: ["DM Sans", ...fontFamily.sans],
        body: ["Inter", ...fontFamily.sans],
        accent: ["Playfair Display", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
