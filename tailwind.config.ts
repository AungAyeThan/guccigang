import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        mildGray: '#3A3A3AB2',
        gray: '#3A3A3A',
      },
    },
  },
  plugins: [],
};
export default config;
