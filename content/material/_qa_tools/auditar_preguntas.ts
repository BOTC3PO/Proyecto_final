// Genera cada pregunta con el motor real de VBLang y detecta preguntas defectuosas.
// Uso (raíz del repo): tsx content/material/_qa_tools/auditar_preguntas.ts <cuestionario.md>...
// Marca: mc sin exactamente 1 correcta u opciones repetidas/vacías, completar sin hueco o sin respuestas válidas,
// texto con llaves sin resolver / undefined / NaN / [object, enunciado vacío, enunciados repetidos en el archivo.
import { readFileSync } from "node:fs";
import { parse } from "../../../packages/vblang/src/parser/parser.js";
import { compile } from "../../../packages/vblang/src/runtime/compile.js";
import { generate } from "../../../packages/vblang/src/runtime/generate.js";

function bloques(texto: string): Array<{ titulo: string; src: string }> {
  const L = texto.split("\n"); const out: Array<{ titulo: string; src: string }> = []; let titulo = "";
  for (let i = 0; i < L.length; i++) {
    if (/^###\s/.test(L[i])) titulo = L[i].replace(/^###\s*/, "");
    if (/^```\w*\s*$/.test(L[i])) { let j = i + 1; while (j < L.length && L[j].trim() !== "```") j++;
      if (j < L.length) { out.push({ titulo, src: L.slice(i + 1, j).join("\n") }); i = j; } }
  }
  return out;
}
const MAL = /\{[^}]*\}|undefined|NaN|\[object|\bnull\b/;
let archivosConProblemas = 0;
for (const f of process.argv.slice(2)) {
  let txt: string; try { txt = readFileSync(f, "utf-8"); } catch { continue; }
  const probs: string[] = []; const vistos = new Map<string, number>();
  bloques(txt).forEach((b, k) => {
    try {
      const c = compile(parse(b.src));
      for (const seed of ["a1", "a2", "a3"]) {
        const r: any = generate(c, { seed });
        const id = `#${k + 1} [${b.titulo.slice(0, 40)}]`;
        if (!r.enunciado || !String(r.enunciado).trim()) probs.push(`${id} enunciado vacío`);
        if (MAL.test(String(r.enunciado))) probs.push(`${id} texto sin resolver en el enunciado: ${String(r.enunciado).slice(0, 80)}`);
        if (r.explicacion && MAL.test(String(r.explicacion))) probs.push(`${id} texto sin resolver en la explicación`);
        if (r.tipo === "mc" || r.tipo === "opcion_multiple") {
          const o = r.opciones ?? [];
          const ok = o.filter((x: any) => x.correcta).length;
          const t = o.map((x: any) => String(x.texto).trim());
          if (o.length < 2) probs.push(`${id} mc con menos de 2 opciones`);
          if (ok !== 1) probs.push(`${id} mc con ${ok} opciones correctas`);
          if (new Set(t).size !== t.length) probs.push(`${id} mc con opciones repetidas`);
          if (t.some((x: string) => !x || MAL.test(x))) probs.push(`${id} mc con opción vacía o sin resolver`);
        }
        if (r.tipo === "completar") {
          if (!/_{2,}/.test(String(r.enunciado))) probs.push(`${id} completar sin hueco ___`);
          if (!r.respuestasValidas || r.respuestasValidas.length === 0) probs.push(`${id} completar sin respuestas válidas`);
        }
        if (r.tipo === "vf" && typeof r.respuesta !== "boolean") probs.push(`${id} vf sin respuesta booleana`);
        if (seed === "a1") { const e = String(r.enunciado).trim(); if (vistos.has(e)) probs.push(`${id} enunciado repetido con #${vistos.get(e)}`); else vistos.set(e, k + 1); }
      }
    } catch (e: any) { probs.push(`#${k + 1} [${b.titulo.slice(0, 40)}] no se pudo generar: ${e?.message ?? e}`); }
  });
  const uniq = [...new Set(probs)];
  if (uniq.length) { archivosConProblemas++; console.log(`${f}: ${uniq.length} problema(s)`); uniq.forEach((p) => console.log("   " + p)); }
}
console.log(`ARCHIVOS CON PROBLEMAS: ${archivosConProblemas}`);
