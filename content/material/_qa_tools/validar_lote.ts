// Valida todos los bloques VBLang de uno o más cuestionarios en un solo proceso (rápido).
// Uso (desde la raíz del repo): api/node_modules/.bin/tsx content/material/_qa_tools/validar_lote.ts <archivo.md>...
// Imprime, por archivo, "N bloques: X OK, Y FAIL" y el motivo de cada bloque roto (con el título de la pregunta).
import { readFileSync } from "node:fs";
import { parse } from "../../../packages/vblang/src/parser/parser.js";
import { lint } from "../../../packages/vblang/src/validator/linter.js";
import { compile } from "../../../packages/vblang/src/runtime/compile.js";
import { generate } from "../../../packages/vblang/src/runtime/generate.js";

function bloques(texto: string): Array<{ titulo: string; src: string }> {
  const lineas = texto.split("\n");
  const salida: Array<{ titulo: string; src: string }> = [];
  let titulo = "";
  for (let i = 0; i < lineas.length; i++) {
    if (/^###\s/.test(lineas[i])) titulo = lineas[i].replace(/^###\s*/, "");
    if (/^```\w*\s*$/.test(lineas[i])) {
      let j = i + 1;
      while (j < lineas.length && lineas[j].trim() !== "```") j++;
      if (j < lineas.length) {
        salida.push({ titulo, src: lineas.slice(i + 1, j).join("\n") });
        i = j;
      }
    }
  }
  return salida;
}

function validar(src: string): string | null {
  try {
    const ast = parse(src);
    const l = lint(ast);
    if (l.errors && l.errors.length > 0) return "lint: " + l.errors.map((e: any) => `${e.code}: ${e.message}`).join(" | ");
    const c = compile(ast);
    for (const seed of ["s1", "s2", "s3", "s4", "s5"]) {
      if (generate(c, { seed }) == null) throw new Error("generate devolvió null");
    }
    return null;
  } catch (e: any) {
    return e?.message ?? String(e);
  }
}

let totalFail = 0;
for (const archivo of process.argv.slice(2)) {
  const bs = bloques(readFileSync(archivo, "utf-8"));
  const fallas = bs.map((b, i) => ({ i: i + 1, b, e: validar(b.src) })).filter((x) => x.e);
  totalFail += fallas.length;
  console.log(`${archivo}: ${bs.length} bloques: ${bs.length - fallas.length} OK, ${fallas.length} FAIL`);
  for (const f of fallas) console.log(`  #${f.i} [${f.b.titulo.slice(0, 50)}] ${String(f.e).split("\n")[0].slice(0, 200)}`);
}
process.exit(totalFail ? 1 : 0);
