/**
 * Arranque de la app sin conexión: prepara las bases e instala la API local antes de que cargue la web.
 *
 * La web se compila con `VITE_API_BASE_URL=https://api.virtualbook.local` (una dirección que no existe): cada llamada
 * a esa dirección la atiende la API local; el resto (imágenes y archivos de la propia app) sigue su camino normal.
 */
import { invoke } from "@tauri-apps/api/core";
import { almacenHttp, almacenTauri, type Almacen } from "./api-local/almacen";
import { crearContexto, type Contexto } from "./api-local/contexto";
import { prepararBases } from "./api-local/esquema";
import { crearServidorLocal } from "./api-local/servidor";
import { instalarDesde, type Disponible } from "./api-local/paquetes";

const BASE = String(import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");
const fetchOriginal = window.fetch.bind(window);

// Configuración de la compilación (ver apps/offline/LEEME.md):
// - VITE_API_REMOTA: la API de la plataforma, para activar cuentas; vacía = sin cuentas de la plataforma.
// - VITE_OFFLINE_CLAVE_PUBLICA: clave pública Ed25519 que verifica los permisos (la da generar_clave_permiso.ts).
// - VITE_MODO_AUTONOMO=true: la plataforma dejó de estar en producción; los permisos no vencen.
// - VITE_USUARIOS_LOCALES=false: no se pueden crear usuarios locales.
const REMOTA = String(import.meta.env.VITE_API_REMOTA ?? "").replace(/\/$/, "");
const CONFIG = {
  modoAutonomo: import.meta.env.VITE_MODO_AUTONOMO === "true",
  usuariosLocales: import.meta.env.VITE_USUARIOS_LOCALES !== "false",
  clavePublica: String(import.meta.env.VITE_OFFLINE_CLAVE_PUBLICA ?? "") || null,
};

function elegirAlmacen(): Almacen {
  // En Tauri, por comandos de Rust; en el «modo navegador» (Huayra 5 y 6), por HTTP al programa en 127.0.0.1.
  return "__TAURI_INTERNALS__" in window ? almacenTauri(invoke) : almacenHttp("/__almacen", fetchOriginal);
}

/**
 * La primera vez, instala los paquetes que vienen dentro de la app (`/paquetes/indice.json`, armados por
 * `scripts/generar-paquetes.ts` al compilar), así hay algo para estudiar antes de bajar nada.
 */
async function instalarIncluidos(ctx: Contexto) {
  const [hay] = await ctx.almacen.consulta("contenido", "SELECT 1 AS x FROM paquetes_instalados LIMIT 1");
  if (hay) return;
  const r = await fetchOriginal("/paquetes/indice.json");
  if (!r.ok) return;
  const { paquetes } = (await r.json()) as { paquetes: Disponible[] };
  for (const p of paquetes) {
    const archivo = await fetchOriginal(`/paquetes/${p.archivo}`);
    if (!archivo.ok || !archivo.body) continue;
    const inst = await instalarDesde(ctx, p.id, archivo.body, { esperado: p.id, sha256: p.sha256 });
    console.info("Paquete incluido instalado:", inst.titulo, inst.modulos);
  }
}

const ctx = crearContexto(elegirAlmacen(), {
  config: CONFIG,
  remoto: REMOTA && !CONFIG.modoAutonomo ? { base: REMOTA, fetch: fetchOriginal } : null,
});
const listo = (async () => {
  await prepararBases(ctx.almacen);
  await instalarIncluidos(ctx);
})().catch((e) => console.error("No se pudo preparar la base de la app:", e));
const atender = crearServidorLocal(ctx);

window.fetch = async (entrada: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof entrada === "string" ? entrada : entrada instanceof URL ? entrada.href : entrada.url;
  if (BASE && url.startsWith(`${BASE}/`)) {
    await listo;
    return atender(new Request(entrada, init));
  }
  return fetchOriginal(entrada, init);
};
