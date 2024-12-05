import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        mildGray: "#3A3A3AB2",
        customgray: "#3A3A3A",
        sideMapGray: "#A4A4A4",
      },
    },
  },
  plugins: [],
};
export default config;
