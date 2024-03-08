import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? "/static/frontend/" : "/",
  build: {
    outDir: "../../static/frontend",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
        assetFileNames: "css/[name].css",
      },
    },
  },
});
