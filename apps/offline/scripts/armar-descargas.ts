/**
 * Arma la carpeta de descargas de la app (la que la API sirve desde `OFFLINE_DESCARGAS_DIR`):
 *
 *   pnpm descargas --instaladores DIR --salida DIR [--paquetes DIR] [--version 0.1.0]
 *
 * - `--instaladores`: los archivos que salen de la compilación (APK firmado, instaladores de Windows, .deb y .tar.gz
 *   de Linux), todos juntos en una carpeta. Ver `src/node/descargas.ts` para los nombres que reconoce.
 * - `--paquetes`: la carpeta de los paquetes (la de `OFFLINE_PAQUETES_DIR`). Si viene, se arma también el paquete
 *   completo para el modo autónomo (un .zip con los instaladores y todos los paquetes).
 * - `--version`: por omisión, la de `src-tauri/tauri.conf.json`.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { armarDescargas } from "../src/node/descargas";

const aqui = path.dirname(new URL(import.meta.url).pathname);
const a = process.argv.slice(2);
const valor = (n: string) => {
  const i = a.indexOf(`--${n}`);
  return i >= 0 ? a[i + 1] : undefined;
};
const ruta = (v: string | undefined) => (v ? path.resolve(v.replace(/^~/, os.homedir())) : null);

const instaladores = ruta(valor("instaladores"));
const salida = ruta(valor("salida"));
if (!instaladores || !salida) {
  console.error("Uso: pnpm descargas --instaladores DIR --salida DIR [--paquetes DIR] [--version X.Y.Z]");
  process.exit(1);
}
const version =
  valor("version") ?? (JSON.parse(fs.readFileSync(path.join(aqui, "../src-tauri/tauri.conf.json"), "utf8")) as { version: string }).version;

const { indice, ignorados } = armarDescargas({ instaladores, salida, version, paquetes: ruta(valor("paquetes")) });
for (const f of ignorados) console.warn(`No se publica (no es un instalador conocido): ${f}`);
for (const d of indice.archivos) console.info(`${d.archivo}: ${(d.bytes / 1e6).toFixed(1)} MB`);
console.info(`${indice.archivos.length} descargas en ${salida} (versión ${version}).`);
