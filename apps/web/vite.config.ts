import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  optimizeDeps: {
    exclude: ["archive"],
  },

  build: {
    // Chunk size warning a 800KB
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Matemáticas y LaTeX — solo cuando se usan
          "vendor-math": ["mathjs", "katex"],
          // Gráficos y visualización
          "vendor-charts": ["recharts"],
          // Mapas geográficos
          "vendor-geo": ["d3-geo", "topojson-client"],
          // Editor de flujo
          "vendor-flow": ["@xyflow/react"],
          // Drag and drop
          "vendor-dnd": [
            "@dnd-kit/core",
            "@dnd-kit/sortable",
            "@dnd-kit/utilities",
          ],
          // Iconos
          "vendor-icons": ["lucide-react"],
          // Animaciones
          "vendor-anime": ["animejs"],
        },
      },
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
});
