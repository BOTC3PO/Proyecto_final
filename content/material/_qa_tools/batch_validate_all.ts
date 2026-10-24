// Valida TODOS los bloques VBLang de TODOS los cuestionario.md finales del
// proyecto (no sólo idiomas-extranjeros) en un solo proceso Node. Uso:
//   api/node_modules/.bin/tsx content/material/_qa_tools/batch_validate_all.ts [filtro-materia]
// Imprime resumen por archivo y guarda detalle de FAILs en
// content/material/_qa_tools/all_fails_2026-09-07.json
import { parse } from "../../../packages/vblang/src/parser/parser.js";
import { lint } from "../../../packages/vblang/src/validator/linter.js";
import { compile } from "../../../packages/vblang/src/runtime/compile.js";
import { generate } from "../../../packages/vblang/src/runtime/generate.js";
import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = "content/material";
const filtroMateria = process.argv[2];
// Carpetas que no son materias reales / no tienen cuestionario.md final
const IGNORAR = new Set([
  "_audio-generado", "_borradores-gemma", "_qa_tools", "examen-jefe",
  "teoria-extendida",
]);

function extraerBloques(texto: string): string[] {
  const re = /```[ \t]*(?:yaml)?[ \t]*\n([\s\S]*?)```/g;
  const bloques: string[] = [];
  let m;
  while ((m = re.exec(texto))) bloques.push(m[1]);
  return bloques;
}

function validarBloque(src: string): { ok: boolean; error?: string } {
  try {
    const ast = parse(src);
    const lintResult = lint(ast);
    if (lintResult.errors && lintResult.errors.length > 0) {
      return {
        ok: false,
        error: "lint: " + lintResult.errors.map((e: any) => `${e.code}: ${e.message}`).join(" | "),
      };
    }
    const compiled = compile(ast);
    for (const seed of ["s1", "s2", "s3", "s4", "s5"]) {
      const r = generate(compiled, { seed });
      if (r == null) throw new Error("generate devolvió null/undefined");
    }
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? String(e) };
  }
}

function findCuestionarios(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORAR.has(entry.name)) continue;
      out.push(...findCuestionarios(full));
    } else if (entry.name === "cuestionario.md") {
      out.push(full);
    }
  }
  return out;
}

function main() {
  const materias = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !IGNORAR.has(d.name) && !d.name.startsWith("."))
    .map((d) => d.name)
    .filter((m) => !filtroMateria || m === filtroMateria)
    .sort();

  const fails: any[] = [];
  let totalOk = 0, totalFail = 0, totalArchivos = 0;
  const resumenPorMateria: Record<string, { ok: number; fail: number; archivos: number }> = {};

  for (const materia of materias) {
    const archivos = findCuestionarios(path.join(ROOT, materia));
    if (archivos.length === 0) continue;
    let mOk = 0, mFail = 0;
    for (const f of archivos.sort()) {
      totalArchivos++;
      const texto = fs.readFileSync(f, "utf-8");
      const bloques = extraerBloques(texto);
      let fOk = 0, fFail = 0;
      bloques.forEach((b, i) => {
        const r = validarBloque(b);
        if (r.ok) { fOk++; mOk++; totalOk++; }
        else {
          fFail++; mFail++; totalFail++;
          fails.push({ materia, archivo: f, bloque: i + 1, error: r.error });
        }
      });
      if (fFail > 0) console.log(`${f}: ${fOk} OK, ${fFail} FAIL`);
    }
    resumenPorMateria[materia] = { ok: mOk, fail: mFail, archivos: archivos.length };
  }

  console.log("\n=== RESUMEN POR MATERIA ===");
  for (const [materia, r] of Object.entries(resumenPorMateria)) {
    if (r.fail > 0) console.log(`${materia}: ${r.ok} OK, ${r.fail} FAIL (${r.archivos} archivos)`);
  }
  console.log(`\n=== TOTAL: ${totalOk} OK, ${totalFail} FAIL, ${totalArchivos} archivos, ${materias.length} materias ===`);

  fs.writeFileSync(
    "content/material/_qa_tools/all_fails_2026-09-07.json",
    JSON.stringify(fails, null, 2),
    "utf-8",
  );
  console.log(`Detalle guardado en content/material/_qa_tools/all_fails_2026-09-07.json (${fails.length} entradas)`);
}

main();
