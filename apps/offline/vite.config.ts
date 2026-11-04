/**
 * Compila la web (apps/web) para la app sin conexión: misma web, con la API local instalada antes de arrancar.
 * La raíz es la de la web (así Tailwind encuentra sus clases y los archivos públicos son los mismos); solo cambia
 * el punto de entrada.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const web = path.resolve(aqui, "../web");
const ENTRADA = "/@app-sin-conexion/main.ts";

const entradaSinConexion = (): Plugin => ({
  name: "entrada-sin-conexion",
  // "pre": antes de que Vite lea los <script> del HTML para armar el bundle.
  transformIndexHtml: { order: "pre", handler: (html) => html.replace('src="/src/main.tsx"', `src="${ENTRADA}"`) },
  resolveId: (id) => (id === ENTRADA ? path.join(aqui, "src/main.ts") : null),
});

export default defineConfig({
  root: web,
  plugins: [react(), tailwindcss(), entradaSinConexion()],
  optimizeDeps: { exclude: ["archive"] },
  build: {
    outDir: path.join(aqui, "dist-web"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 800,
    // Navegadores viejos del «modo navegador» (Firefox ESR 102 en Huayra sin actualizar).
    target: ["es2020", "firefox102", "chrome100"],
  },
});
