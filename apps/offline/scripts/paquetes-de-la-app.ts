/**
 * Arma los paquetes que van DENTRO de la app (`dist-web/paquetes`, con su `indice.json`): todo el temario oficial y
 * el diccionario de español. Los demás diccionarios se bajan aparte (desde la app o desde /descargas).
 *
 *   tsx scripts/paquetes-de-la-app.ts --salida dist-web/paquetes
 *
 * De dónde salen (por variables de entorno, así sirve igual en GitHub Actions y en el servidor):
 * - `PAQUETES_DESDE=https://…` (la API de la plataforma): baja los paquetes publicados en `GET /api/offline/paquetes`,
 *   y verifica cada hash. Es lo que va en las versiones publicadas: la app trae los MISMOS archivos que ofrece el
 *   servidor, así no los ve «para actualizar» apenas se conecta (la comparación es por hash).
 * - Sin `PAQUETES_DESDE`: los genera con `generar-paquetes.ts` desde el temario del repositorio (`content/material`)
 *   y, si está `DICCIONARIO_SQLITE`, también el diccionario de español.
 * - `EXIGIR_DICCIONARIO=true`: falla si el diccionario de español no quedó incluido (para las versiones publicadas).
 */
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** El diccionario que viaja dentro de la app. */
export const IDIOMA_INCLUIDO = "es";

type Entrada = { id: string; tipo: string; archivo: string; sha256: string; idioma?: string };

/** Qué paquetes del índice del servidor van dentro de la app. */
export function elegirIncluidos(paquetes: Entrada[]): Entrada[] {
  return paquetes.filter((p) => p.tipo === "contenido" || (p.tipo === "diccionario" && p.idioma === IDIOMA_INCLUIDO));
}

async function bajarPublicados(desde: string, salida: string) {
  const base = desde.replace(/\/$/, "");
  const r = await fetch(`${base}/api/offline/paquetes`);
  if (!r.ok) throw new Error(`No se pudo leer el índice de paquetes de ${base} (HTTP ${r.status})`);
  const indice = (await r.json()) as { formato: number; paquetes: Entrada[] };
  const elegidos = elegirIncluidos(indice.paquetes ?? []);
  if (!elegidos.some((p) => p.tipo === "contenido")) throw new Error(`${base} no publica paquetes del temario`);
  for (const p of elegidos) {
    const a = await fetch(`${base}/api/offline/paquetes/archivo/${encodeURIComponent(p.archivo)}`);
    if (!a.ok) throw new Error(`No se pudo bajar ${p.archivo} (HTTP ${a.status})`);
    const datos = Buffer.from(await a.arrayBuffer());
    const hash = crypto.createHash("sha256").update(datos).digest("hex");
    if (hash !== p.sha256) throw new Error(`${p.archivo}: el hash no coincide con el del índice`);
    fs.writeFileSync(path.join(salida, path.basename(p.archivo)), datos);
    console.log(`incluido ${p.archivo} (${(datos.length / 1e6).toFixed(1)} MB)`);
  }
  fs.writeFileSync(path.join(salida, "indice.json"), JSON.stringify({ formato: indice.formato ?? 1, paquetes: elegidos }, null, 2));
}

function generarDelRepositorio(salida: string, diccionario: string | null) {
  const script = path.join(path.dirname(fileURLToPath(import.meta.url)), "generar-paquetes.ts");
  const args = ["--import", "tsx", script, "--salida", salida];
  if (diccionario) args.push("--diccionario", diccionario, "--idiomas", IDIOMA_INCLUIDO);
  execFileSync(process.execPath, args, { stdio: "inherit" });
}

async function main() {
  const i = process.argv.indexOf("--salida");
  if (i < 0 || !process.argv[i + 1]) throw new Error("Uso: paquetes-de-la-app.ts --salida DIR");
  const salida = path.resolve(process.argv[i + 1]);
  fs.rmSync(salida, { recursive: true, force: true });
  fs.mkdirSync(salida, { recursive: true });

  const desde = process.env.PAQUETES_DESDE?.trim();
  if (desde) await bajarPublicados(desde, salida);
  else generarDelRepositorio(salida, process.env.DICCIONARIO_SQLITE?.trim() || null);

  const { paquetes } = JSON.parse(fs.readFileSync(path.join(salida, "indice.json"), "utf8")) as { paquetes: Entrada[] };
  const conDiccionario = paquetes.some((p) => p.tipo === "diccionario" && p.idioma === IDIOMA_INCLUIDO);
  console.log(`dentro de la app: ${paquetes.filter((p) => p.tipo === "contenido").length} materias${conDiccionario ? " y el diccionario de español" : ""}`);
  if (!conDiccionario) {
    if (process.env.EXIGIR_DICCIONARIO === "true") throw new Error("Falta el diccionario de español (PAQUETES_DESDE o DICCIONARIO_SQLITE)");
    console.warn("aviso: la app se compiló SIN el diccionario de español (definí PAQUETES_DESDE o DICCIONARIO_SQLITE)");
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
}
