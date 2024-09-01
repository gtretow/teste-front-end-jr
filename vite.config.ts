import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@import "./src/styles/_variables.scss";
        `,
      },
    },
  },
});
