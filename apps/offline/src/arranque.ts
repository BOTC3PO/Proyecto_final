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
import { cargarManifiesto } from "./api-local/temario";

const BASE = String(import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");
const fetchOriginal = window.fetch.bind(window);

function elegirAlmacen(): Almacen {
  // En Tauri, por comandos de Rust; en el «modo navegador» (Huayra 5 y 6), por HTTP al programa en 127.0.0.1.
  return "__TAURI_INTERNALS__" in window ? almacenTauri(invoke) : almacenHttp("/__almacen", fetchOriginal);
}

/**
 * Provisorio hasta la fase 3 (paquetes): si el dispositivo no tiene contenido, carga la materia de muestra que viene
 * con la app (`/paquetes/muestra.json`, el manifiesto de una materia del temario oficial).
 */
async function cargarMuestra(ctx: Contexto) {
  const [hay] = await ctx.almacen.consulta("contenido", "SELECT 1 AS x FROM modulos LIMIT 1");
  if (hay) return;
  const r = await fetchOriginal("/paquetes/muestra.json");
  if (!r.ok) return;
  const resultado = await cargarManifiesto(ctx, await r.json(), { origen: "oficial", paquete: "muestra" });
  console.info("Contenido de muestra cargado:", resultado);
}

const ctx = crearContexto(elegirAlmacen());
const listo = (async () => {
  await prepararBases(ctx.almacen);
  await cargarMuestra(ctx);
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
