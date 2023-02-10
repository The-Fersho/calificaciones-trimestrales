import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },

  server: {
    host: '192.168.1.19'
  },

  plugins: []
});