import WindiCSS from "vite-plugin-windicss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: WindiCSS({
    scan: {
      fileExtensions: ["html", "md", "njk"],
    },
  }),
  build: {
    outDir: "_site",
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: "/src/client/main.js",
    },
  },
});
