import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
/**
 * Vite configuration file for setting up plugins and server options.
 * Includes React and Tailwind CSS plugins for a seamless development experience.
 * The server configuration is commented and can be adjusted for local API proxying.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    //port: 5174,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
