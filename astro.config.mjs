// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import react from "@astrojs/react";

const aliases = {
  "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
  "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
  "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
  "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
};

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: aliases,
    },
  },

  server: {
    host: '0.0.0.0'
  },

  adapter: node({
    mode: "standalone",
  }),

  integrations: [react()],
});
