import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  build: {
    sourcemap: false,
    minify: "esbuild",
    outDir: "dist",
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
      allowedHosts: [
        "https://itramei-landing-page-prod-162888271972.europe-north1.run.app",
        "itramei-landing-page-prod-162888271972.europe-north1.run.app",
        "www.itramei.com",
        "itramei.com",
        "itramei",
        "www.itramei.ai",
        "itramei.ai",
      ]
  },
  preview: {
    port: 5173,
  }
});