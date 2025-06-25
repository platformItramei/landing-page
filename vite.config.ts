import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: false,
    minify: "esbuild",
    outDir: "dist",
  },
  server: {
    port: 5174,
    host: "0.0.0.0",
  },
  preview: {
    port: 5174,
  },
});