/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
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
