// src/generators/math/tema42_division_polinomios.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
} from "./generic";

const ID_TEMA = 42;
const TITULO = "División de polinomios por binomio (x - a)";

interface Poli3 {
  a: number; // x^3
  b: number; // x^2
  c: number; // x
  d: number; // constante
}

function poli3ToString(p: Poli3): string {
  const partes: string[] = [];

  if (p.a !== 0) {
    const c = p.a;
    if (c === 1) partes.push("x^3");
    else if (c === -1) partes.push("-x^3");
    else partes.push(`${c}x^3`);
  }

  if (p.b !== 0) {
    const c = p.b;
    const s = partes.length && c > 0 ? "+" : "";
    if (c === 1) partes.push(`${s}x^2`);
    else if (c === -1) partes.push(`${s}-x^2`);
    else partes.push(`${s}${c}x^2`);
  }

  if (p.c !== 0) {
    const c = p.c;
    const s = partes.length && c > 0 ? "+" : "";
    if (c === 1) partes.push(`${s}x`);
    else if (c === -1) partes.push(`${s}-x`);
    else partes.push(`${s}${c}x`);
  }

  if (p.d !== 0 || partes.length === 0) {
    const c = p.d;
    const s = partes.length && c > 0 ? "+" : "";
    partes.push(`${s}${c}`);
  }

  return partes.join(" ");
}

export const generarDivisionPolinomios: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  // Generamos P(x) a partir de un cociente Q(x) y divisor (x - a)
  const rangoA = dificultad === "dificil" ? 6 : 4;

  const a = randomInt(-rangoA, rangoA) || 1; // divisor: (x - a)

  // Q(x) = ux^2 + vx + w
  const u = randomInt(-5, 5) || 1;
  const v = randomInt(-5, 5);
  const w = randomInt(-5, 5);

  // P(x) = (x - a)Q(x) => multiplicamos
  // (x - a)(ux^2 + vx + w) = u x^3 + (v - au)x^2 + (w - av)x - aw
  const A = u;
  const B = v - a * u;
  const C = w - a * v;
  const D = -a * w;

  const P: Poli3 = { a: A, b: B, c: C, d: D };
  const Pstr = poli3ToString(P);

  const Qstr =
    `${u === 1 ? "" : u === -1 ? "-" : u}x^2 ` +
    `${v >= 0 ? "+ " + v : "- " + Math.abs(v)}x ` +
    `${w >= 0 ? "+ " + w : "- " + Math.abs(w)}`;

  const divisor = `(x ${a >= 0 ? "- " + a : "+ " + Math.abs(a)})`;

  const correcta = Qstr;

  // Distractores: errores típicos cambiando un coeficiente
  const d1 = `${u + 1 === 1 ? "" : u + 1 === -1 ? "-" : u + 1}x^2 ${
    v >= 0 ? "+ " + v : "- " + Math.abs(v)
  }x ${w >= 0 ? "+ " + w : "- " + Math.abs(w)}`;
  const d2 = `${u === 1 ? "" : u === -1 ? "-" : u}x^2 ${
    v + 1 >= 0 ? "+ " + (v + 1) : "- " + Math.abs(v + 1)
  }x ${w >= 0 ? "+ " + w : "- " + Math.abs(w)}`;
  const d3 = `${u === 1 ? "" : u === -1 ? "-" : u}x^2 ${
    v >= 0 ? "+ " + v : "- " + Math.abs(v)
  }x ${w + 1 >= 0 ? "+ " + (w + 1) : "- " + Math.abs(w + 1)}`;

  const opciones = [correcta, d1, d2, d3];

  const enunciado =
    `Realiza la siguiente división de polinomios y escribe el cociente (se asume resto 0):\n\n` +
    `${Pstr} ÷ ${divisor}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se divide el polinomio P(x) por (x - a) usando Ruffini o división sintética. El resultado es un polinomio de grado 2.",
  });
};

export default generarDivisionPolinomios;
