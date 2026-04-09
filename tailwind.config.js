/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        "ibm-plex-serif": ["IBM Plex Serif", "serif"],
      },
      colors: {
        sync: "#1c5534", // hsl(157, 43%, 21%)
      },
    },
  },
  plugins: [],
};
