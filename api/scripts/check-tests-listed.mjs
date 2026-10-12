#!/usr/bin/env node
/**
 * El script `test` de package.json lista los archivos de prueba a mano, así que una prueba nueva que no se
 * agrega ahí nunca corre (pasó con 11 archivos). Esto falla si hay un `*.test.ts` que no está en la lista
 * ni en EXCLUIDOS (con el motivo).
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const raiz = new URL("..", import.meta.url).pathname;

// Pruebas que NO corren y por qué. Sacarlas de acá cuando se porten o se borren.
const EXCLUIDOS = {
  "tests/integracion/auth-forgot-password.test.ts": "Heredada de MongoDB (importa `mongodb`, ya no es dependencia): portar a Prisma al resolver E1.",
  "tests/integracion/classroom-scope-cross-school.test.ts": "Heredada de MongoDB: portar a Prisma o borrar.",
  "tests/integracion/governance-authz.test.ts": "Heredada de MongoDB: portar a Prisma o borrar.",
  "tests/integracion/moderacion-nonadmin.test.ts": "Heredada de MongoDB: portar a Prisma (hoy lo cubre moderacion-alcance-escuela) o borrar.",
  "tests/integracion/modulos-auth-readonly.test.ts": "Heredada de MongoDB: portar a Prisma o borrar.",
  "tests/integracion/seed-auth.test.ts": "Heredada de MongoDB: portar a Prisma o borrar.",
  "tests/integracion/libros-copy-on-write.test.ts": "El archivo está truncado (termina a mitad de una prueba): recuperarlo del historial o rehacerlo.",
};

const paquete = JSON.parse(readFileSync(join(raiz, "package.json"), "utf8"));
const listados = new Set(paquete.scripts.test.split(/\s+/).filter((t) => t.endsWith(".test.ts")));

const buscar = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    if (n === "node_modules") return [];
    return statSync(p).isDirectory() ? buscar(p) : n.endsWith(".test.ts") ? [relative(raiz, p)] : [];
  });
const enDisco = [...buscar(join(raiz, "tests/integracion")), ...buscar(join(raiz, "src"))];

const sinListar = enDisco.filter((f) => !listados.has(f) && !(f in EXCLUIDOS));
const fantasmas = [...listados].filter((f) => !enDisco.includes(f));
const excluidosSobrantes = Object.keys(EXCLUIDOS).filter((f) => listados.has(f) || !enDisco.includes(f));

if (sinListar.length || fantasmas.length || excluidosSobrantes.length) {
  for (const f of sinListar) console.error(`Falta en "test" de package.json (o en EXCLUIDOS con motivo): ${f}`);
  for (const f of fantasmas) console.error(`Está en "test" pero el archivo no existe: ${f}`);
  for (const f of excluidosSobrantes) console.error(`Está en EXCLUIDOS pero ya corre o ya no existe: ${f}`);
  process.exit(1);
}
console.log(`check:tests ok — ${listados.size} archivos corren, ${Object.keys(EXCLUIDOS).length} excluidos con motivo.`);
