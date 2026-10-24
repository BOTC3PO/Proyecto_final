// Valida un bloque DSL de pregunta VBLang: parse -> lint -> compile -> generate
// (con varios seeds, para agarrar restricciones nunca satisfechas / errores
// de evaluación que sólo aparecen con ciertos valores sorteados).
// Uso: tsx _validate_dsl.ts < bloque.txt   (imprime "OK" o "FAIL: <motivo>")
import { parse } from "../../packages/vblang/src/parser/parser.js";
import { lint } from "../../packages/vblang/src/validator/linter.js";
import { compile } from "../../packages/vblang/src/runtime/compile.js";
import { generate } from "../../packages/vblang/src/runtime/generate.js";

async function main() {
  const chunks: Buffer[] = [];
  for await (const c of process.stdin) chunks.push(c as Buffer);
  const src = Buffer.concat(chunks).toString("utf-8");

  try {
    const ast = parse(src);
    const lintResult = lint(ast);
    if (lintResult.errors && lintResult.errors.length > 0) {
      console.log(
        "FAIL: lint errors: " +
          lintResult.errors.map((e: any) => `${e.code}: ${e.message}`).join(" | "),
      );
      process.exit(1);
    }
    const compiled = compile(ast);
    for (const seed of ["s1", "s2", "s3", "s4", "s5"]) {
      const r = generate(compiled, { seed });
      if (r == null) throw new Error("generate devolvió null/undefined");
    }
    console.log("OK");
    process.exit(0);
  } catch (e: any) {
    console.log("FAIL: " + (e?.message ?? String(e)));
    process.exit(1);
  }
}

main();
