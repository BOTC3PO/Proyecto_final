// Valida los cuestionario_crudo.fixed.md generados por fix_idiomas_mechanical.py
// Uso: tsx validate_fixed.ts <idioma>
import { parse } from "../../../packages/vblang/src/parser/parser.js";
import { lint } from "../../../packages/vblang/src/validator/linter.js";
import { compile } from "../../../packages/vblang/src/runtime/compile.js";
import { generate } from "../../../packages/vblang/src/runtime/generate.js";
import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = "content/material/_borradores-gemma/idiomas-extranjeros";
const idioma = process.argv[2];

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
      return { ok: false, error: "lint: " + lintResult.errors.map((e: any) => `${e.code}: ${e.message}`).join(" | ") };
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

function main() {
  const idiomaDir = path.join(ROOT, idioma);
  const temas = fs.readdirSync(idiomaDir).filter((t) => fs.statSync(path.join(idiomaDir, t)).isDirectory());
  let totalOk = 0, totalFail = 0;
  for (const tema of temas.sort()) {
    const f = path.join(idiomaDir, tema, "cuestionario_crudo.fixed.md");
    if (!fs.existsSync(f)) continue;
    const texto = fs.readFileSync(f, "utf-8");
    const bloques = extraerBloques(texto);
    let ok = 0, fail = 0;
    bloques.forEach((b) => {
      const r = validarBloque(b);
      if (r.ok) { ok++; totalOk++; } else { fail++; totalFail++; }
    });
    if (fail > 0) console.log(`${tema}: ${ok} OK, ${fail} FAIL`);
  }
  console.log(`\n=== ${idioma}: ${totalOk} OK, ${totalFail} FAIL ===`);
}

main();
