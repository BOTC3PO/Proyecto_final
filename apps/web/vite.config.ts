import { existsSync, readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// HTTPS local (mkcert) — sólo si los certs existen (`.certs/`, gitignored).
// Necesario para probar checkouts reales de MercadoPago: exige backUrl
// https, si no rompe con un CSP violation en su propia página.
const CERT_KEY = "./.certs/localhost-key.pem";
const CERT_FILE = "./.certs/localhost.pem";
const httpsConfig =
  existsSync(CERT_KEY) && existsSync(CERT_FILE)
    ? { key: readFileSync(CERT_KEY), cert: readFileSync(CERT_FILE) }
    : undefined;

export default defineConfig({
  // Pass ANALYZE=true to emit stats.html with chunk sizes: ANALYZE=true pnpm build
  plugins: [react(), tailwindcss(), ...(process.env.ANALYZE ? [visualizer({ open: false, gzipSize: true, brotliSize: true, filename: "dist/stats.html" })] : [])],

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
    https: httpsConfig,
    proxy: {
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
});
