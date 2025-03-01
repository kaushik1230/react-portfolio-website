import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this is set correctly
    chunkSizeWarningLimit: 2000, // Increase from default 500 KB
  },
});
