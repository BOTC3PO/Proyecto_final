// Valida TODOS los bloques VBLang de TODOS los cuestionario_crudo.md de
// idiomas-extranjeros en un solo proceso Node (evita el overhead de
// arrancar tsx una vez por archivo). Uso:
//   api/node_modules/.bin/tsx content/material/_qa_tools/batch_validate_idiomas.ts [filtro-idioma]
// Imprime un resumen por archivo y guarda el detalle de FAILs en
// content/material/_qa_tools/idiomas_fails.json
import { parse } from "../../../packages/vblang/src/parser/parser.js";
import { lint } from "../../../packages/vblang/src/validator/linter.js";
import { compile } from "../../../packages/vblang/src/runtime/compile.js";
import { generate } from "../../../packages/vblang/src/runtime/generate.js";
import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = "content/material/_borradores-gemma/idiomas-extranjeros";
const filtroIdioma = process.argv[2];

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

function main() {
  const idiomas = fs.readdirSync(ROOT).filter((d) =>
    fs.statSync(path.join(ROOT, d)).isDirectory() && (!filtroIdioma || d === filtroIdioma),
  );
  const fails: any[] = [];
  let totalOk = 0, totalFail = 0;
  const resumenPorIdioma: Record<string, { ok: number; fail: number; temas: number }> = {};

  for (const idioma of idiomas.sort()) {
    const idiomaDir = path.join(ROOT, idioma);
    const temas = fs.readdirSync(idiomaDir).filter((t) => fs.statSync(path.join(idiomaDir, t)).isDirectory());
    let idOk = 0, idFail = 0;
    for (const tema of temas.sort()) {
      const f = path.join(idiomaDir, tema, "cuestionario_crudo.md");
      if (!fs.existsSync(f)) continue;
      const texto = fs.readFileSync(f, "utf-8");
      const bloques = extraerBloques(texto);
      let temaOk = 0, temaFail = 0;
      bloques.forEach((b, i) => {
        const r = validarBloque(b);
        if (r.ok) { temaOk++; idOk++; totalOk++; }
        else {
          temaFail++; idFail++; totalFail++;
          fails.push({ idioma, tema, bloque: i + 1, error: r.error });
        }
      });
      console.log(`${idioma}/${tema}: ${temaOk} OK, ${temaFail} FAIL`);
    }
    resumenPorIdioma[idioma] = { ok: idOk, fail: idFail, temas: temas.length };
  }

  console.log("\n=== RESUMEN POR IDIOMA ===");
  for (const [idioma, r] of Object.entries(resumenPorIdioma)) {
    console.log(`${idioma}: ${r.ok} OK, ${r.fail} FAIL (${r.temas} temas)`);
  }
  console.log(`\n=== TOTAL: ${totalOk} OK, ${totalFail} FAIL ===`);

  fs.writeFileSync(
    "content/material/_qa_tools/idiomas_fails.json",
    JSON.stringify(fails, null, 2),
    "utf-8",
  );
  console.log(`\nDetalle de fails guardado en content/material/_qa_tools/idiomas_fails.json (${fails.length} entradas)`);
}

main();
