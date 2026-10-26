#!/usr/bin/env node
/**
 * G4 — compuerta de `pnpm audit` para la integración continua.
 *
 * Falla si hay avisos de severidad ALTA o CRÍTICA en lo que corre en producción (api, web y paquetes),
 * ignorando la app móvil (`apps__mobile`), que está fuera del alcance de la primera salida (E5).
 * Los avisos que ya están revisados y aceptados se listan en `tools/audit-aceptados.json` con el motivo;
 * así lo nuevo salta y lo conocido no tapa nada.
 *
 *   node tools/audit-gate.mjs            # corre `pnpm audit --prod --json`
 *   node tools/audit-gate.mjs --archivo audit.json
 */
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const NIVELES = ["low", "moderate", "high", "critical"];
const UMBRAL = "high";

const argArchivo = process.argv.indexOf("--archivo");
let crudo;
if (argArchivo > -1) {
  crudo = readFileSync(process.argv[argArchivo + 1], "utf8");
} else {
  try {
    crudo = execFileSync("pnpm", ["audit", "--prod", "--json"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch (e) {
    // `pnpm audit` sale con código distinto de 0 cuando encuentra avisos; el JSON viene igual en stdout.
    crudo = e.stdout?.toString() ?? "";
  }
}
let datos;
try {
  datos = JSON.parse(crudo);
} catch {
  console.error("audit-gate: no se pudo leer la salida de pnpm audit (¿sin red?).");
  process.exit(2);
}

const aceptadosPath = join(aqui, "audit-aceptados.json");
const aceptados = new Set(
  existsSync(aceptadosPath) ? Object.keys(JSON.parse(readFileSync(aceptadosPath, "utf8")).avisos ?? {}) : []
);

const fallan = [];
for (const aviso of Object.values(datos.advisories ?? {})) {
  if (NIVELES.indexOf(aviso.severity) < NIVELES.indexOf(UMBRAL)) continue;
  if (aceptados.has(aviso.github_advisory_id)) continue;
  const rutas = (aviso.findings ?? []).flatMap((f) => f.paths ?? []).filter((r) => !r.startsWith("apps__mobile"));
  if (rutas.length === 0) continue;
  fallan.push({ ...aviso, rutas });
}

if (fallan.length === 0) {
  console.log(`audit-gate: sin avisos ${UMBRAL} o críticos fuera de la app móvil (aceptados: ${aceptados.size}).`);
  process.exit(0);
}
console.error(`audit-gate: ${fallan.length} aviso(s) ${UMBRAL}/critical fuera de la app móvil:\n`);
for (const a of fallan) {
  console.error(`- [${a.severity}] ${a.module_name}: ${a.title}`);
  console.error(`    ${a.github_advisory_id}  parche: ${a.patched_versions}`);
  console.error(`    ${a.rutas[0]}${a.rutas.length > 1 ? `  (+${a.rutas.length - 1} rutas más)` : ""}`);
}
console.error("\nActualizá el paquete o, si se revisó y se acepta, agregalo con su motivo a tools/audit-aceptados.json.");
process.exit(1);
