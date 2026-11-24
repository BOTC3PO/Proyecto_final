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

const enTauri = "__TAURI_INTERNALS__" in window;

function elegirAlmacen(): Almacen {
  // En Tauri, por comandos de Rust; en el «modo navegador» (Huayra 5 y 6), por HTTP al programa en 127.0.0.1.
  return enTauri ? almacenTauri(invoke) : almacenHttp("/__almacen", fetchOriginal);
}

/**
 * «Modo navegador»: el programa se cierra solo si nadie lo usa (ver `navegador/src/servidor.rs`); mientras la
 * pestaña está abierta, le avisa cada 2 minutos.
 */
function latidos() {
  const latir = () => void fetchOriginal("/__almacen/latido", { method: "POST" }).catch(() => undefined);
  window.setInterval(latir, 2 * 60 * 1000);
}

/** Sin la llave (se abrió la dirección a mano, o se borraron las cookies), la base no responde: se explica qué hacer. */
function avisarSinLlave() {
  document.body.innerHTML =
    '<main style="font-family:sans-serif;max-width:32rem;margin:3rem auto;padding:0 1rem">' +
    '<h1 style="font-size:1.3rem">Virtual Book sin conexión</h1>' +
    "<p>Abrí Virtual Book desde el menú de aplicaciones: así el navegador puede usar los datos de este equipo.</p></main>";
}

/**
 * La primera vez, instala los paquetes que vienen dentro de la app (`/paquetes/indice.json`, armados por
 * `scripts/generar-paquetes.ts` al compilar), así hay algo para estudiar antes de bajar nada.
 */
async function instalarIncluidos(ctx: Contexto) {
  const ya = new Set((await ctx.almacen.consulta<{ id: string }>("contenido", "SELECT id FROM paquetes_instalados")).map((f) => f.id));
  const r = await fetchOriginal("/paquetes/indice.json");
  if (!r.ok) return;
  const { paquetes } = (await r.json()) as { paquetes: Disponible[] };
  // Cada paquete incluido se instala una sola vez: si la persona lo quita, no vuelve en el arranque siguiente.
  const marca = "incluidos-instalados";
  const [fila] = await ctx.almacen.consulta<{ valor: string }>("contenido", "SELECT valor FROM meta WHERE clave = ?", [marca]);
  const hechos = new Set<string>(fila ? (JSON.parse(fila.valor) as string[]) : []);
  for (const p of paquetes) {
    if (ya.has(p.id) || hechos.has(p.id)) continue;
    const archivo = await fetchOriginal(`/paquetes/${p.archivo}`);
    if (!archivo.ok || !archivo.body) continue;
    const inst = await instalarDesde(ctx, p.id, archivo.body, { esperado: p.id, sha256: p.sha256 });
    console.info("Paquete incluido instalado:", inst.titulo, inst.modulos);
    hechos.add(p.id);
    await ctx.almacen.ejecutar("contenido", "INSERT OR REPLACE INTO meta (clave, valor) VALUES (?, ?)", [marca, JSON.stringify([...hechos])]);
  }
}

const ctx = crearContexto(elegirAlmacen(), {
  config: CONFIG,
  remoto: REMOTA && !CONFIG.modoAutonomo ? { base: REMOTA, fetch: fetchOriginal } : null,
});
if (!enTauri) latidos();
const listo = (async () => {
  await prepararBases(ctx.almacen);
  await instalarIncluidos(ctx);
})().catch((e) => {
  // Para entonces la web ya se montó: el aviso la reemplaza.
  if (!enTauri && (e as { code?: string }).code === "SIN_LLAVE") avisarSinLlave();
  console.error("No se pudo preparar la base de la app:", e);
});
const atender = crearServidorLocal(ctx);

window.fetch = async (entrada: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof entrada === "string" ? entrada : entrada instanceof URL ? entrada.href : entrada.url;
  if (BASE && url.startsWith(`${BASE}/`)) {
    await listo;
    return atender(new Request(entrada, init));
  }
  return fetchOriginal(entrada, init);
};
