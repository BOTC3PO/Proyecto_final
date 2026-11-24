#!/usr/bin/env node
/**
 * Compuerta de lint de la web para la integración continua.
 *
 * La web tiene errores de lint heredados que se van corrigiendo por etapas. Para que no entren errores nuevos
 * mientras tanto, esta compuerta compara los errores actuales con los registrados en `tools/lint-web-base.json`
 * (cantidad por archivo y regla) y falla solo si algún par archivo/regla tiene MÁS errores que en la base.
 * Los avisos (warnings) no cuentan.
 *
 *   node tools/lint-gate.mjs                 # corre eslint en apps/web y compara
 *   node tools/lint-gate.mjs --actualizar    # reescribe la base con el estado actual (después de corregir errores)
 *   node tools/lint-gate.mjs --archivo x.json   # usa una salida de `eslint -f json` ya generada
 *
 * La base solo puede achicarse: si se corrigen errores, correr con --actualizar y commitear el archivo.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, "..");
const dirWeb = join(raiz, "apps", "web");
const rutaBase = join(aqui, "lint-web-base.json");
const actualizar = process.argv.includes("--actualizar");
const argArchivo = process.argv.indexOf("--archivo");

let crudo;
if (argArchivo > -1) {
  crudo = readFileSync(process.argv[argArchivo + 1], "utf8");
} else {
  try {
    crudo = execFileSync("pnpm", ["exec", "eslint", ".", "-f", "json"], {
      cwd: dirWeb,
      encoding: "utf8",
      maxBuffer: 256 * 1024 * 1024,
    });
  } catch (e) {
    // eslint sale con código 1 cuando hay errores; el JSON viene igual en stdout.
    crudo = e.stdout?.toString() ?? "";
  }
}
let resultados;
try {
  resultados = JSON.parse(crudo);
} catch {
  console.error("lint-gate: no se pudo leer la salida de eslint.");
  process.exit(2);
}

/** { "src/archivo.tsx": { "regla": cantidad } }, solo errores, con rutas relativas a apps/web y ordenado. */
const actual = {};
for (const r of resultados) {
  const archivo = relative(dirWeb, r.filePath).split(sep).join("/");
  for (const m of r.messages) {
    if (m.severity !== 2) continue;
    const regla = m.ruleId ?? "error-de-sintaxis";
    (actual[archivo] ??= {})[regla] = (actual[archivo][regla] ?? 0) + 1;
  }
}
const ordenar = (o) =>
  Object.fromEntries(
    Object.keys(o)
      .sort()
      .map((k) => [k, typeof o[k] === "object" ? ordenar(o[k]) : o[k]]),
  );
const total = (o) => Object.values(o).reduce((s, reglas) => s + Object.values(reglas).reduce((a, b) => a + b, 0), 0);

if (actualizar) {
  writeFileSync(rutaBase, JSON.stringify(ordenar(actual), null, 2) + "\n");
  console.log(`lint-gate: base actualizada (${total(actual)} errores en ${Object.keys(actual).length} archivos).`);
  process.exit(0);
}

const base = existsSync(rutaBase) ? JSON.parse(readFileSync(rutaBase, "utf8")) : {};
const nuevos = [];
let corregidos = 0;
for (const [archivo, reglas] of Object.entries(actual)) {
  for (const [regla, n] of Object.entries(reglas)) {
    const antes = base[archivo]?.[regla] ?? 0;
    if (n > antes) nuevos.push(`  ${archivo}: ${regla} (${antes} → ${n})`);
  }
}
for (const [archivo, reglas] of Object.entries(base)) {
  for (const [regla, antes] of Object.entries(reglas)) {
    const n = actual[archivo]?.[regla] ?? 0;
    if (n < antes) corregidos += antes - n;
  }
}

console.log(`lint-gate: ${total(actual)} errores (base: ${total(base)}).`);
if (corregidos > 0) {
  console.log(`lint-gate: ${corregidos} errores de la base ya no están; correr «node tools/lint-gate.mjs --actualizar».`);
}
if (nuevos.length > 0) {
  console.error("lint-gate: hay errores de lint nuevos:");
  console.error(nuevos.join("\n"));
  console.error("Ver el detalle con «pnpm --filter web lint».");
  process.exit(1);
}
console.log("lint-gate: sin errores nuevos.");
