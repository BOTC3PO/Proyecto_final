// src/generators/math/tema41_multiplicacion_polinomios_avanzada.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 41;
const TITULO = "Multiplicación de polinomios (binomio × trinomio)";

interface Polinomio {
  a: number; // x^2
  b: number; // x
  c: number; // término independiente
}

function poliToString(p: Polinomio): string {
  const partes: string[] = [];

  if (p.a !== 0) {
    const c = p.a;
    if (c === 1) partes.push("x^2");
    else if (c === -1) partes.push("-x^2");
    else partes.push(`${c}x^2`);
  }

  if (p.b !== 0) {
    const c = p.b;
    const s = partes.length && c > 0 ? "+" : "";
    if (c === 1) partes.push(`${s}x`);
    else if (c === -1) partes.push(`${s}-x`);
    else partes.push(`${s}${c}x`);
  }

  if (p.c !== 0 || partes.length === 0) {
    const c = p.c;
    const s = partes.length && c > 0 ? "+" : "";
    partes.push(`${s}${c}`);
  }

  return partes.join(" ");
}

export const generarMultiplicacionPolinomiosAvanzada: GeneratorFn = (
  dificultad: Dificultad = "intermedio"
) => {
  // (ax + b)(cx^2 + dx + e)
  const dificultadCore = normalizarDificultadCore(dificultad);
  const rango =
    dificultadCore === "basico"
      ? 4
      : dificultadCore === "intermedio"
      ? 6
      : 8;

  const a = randomInt(-rango, rango) || 1;
  const b = randomInt(-rango, rango);
  const c = randomInt(-rango, rango) || 1;
  const d = randomInt(-rango, rango);
  const e = randomInt(-rango, rango);

  // Polinomio resultado: (ax + b)(cx^2 + dx + e)
  // = a*c x^3 + a*d x^2 + a*e x + b*c x^2 + b*d x + b*e
  // Lo dejamos hasta grado 3 pero lo representamos como x^3 + ...
  const a3 = a * c;
  const a2 = a * d + b * c;
  const a1 = a * e + b * d;
  const a0 = b * e;

  const resultado = `y = ${a3 === 1 ? "" : a3 === -1 ? "-" : a3}x^3 ` +
    `${a2 >= 0 ? "+ " + a2 : "- " + Math.abs(a2)}x^2 ` +
    `${a1 >= 0 ? "+ " + a1 : "- " + Math.abs(a1)}x ` +
    `${a0 >= 0 ? "+ " + a0 : "- " + Math.abs(a0)}`;

  const correcta = resultado;

  // Distractores: errores típicos (no distribuir bien, perder término, etc.)
  const d1 = `y = ${a3}x^3 ${a2 >= 0 ? "+ " + a2 : "- " + Math.abs(
    a2
  )}x^2 ${a0 >= 0 ? "+ " + a0 : "- " + Math.abs(a0)}`; // sin el término en x
  const d2 = `y = ${a3}x^3 ${a1 >= 0 ? "+ " + a1 : "- " + Math.abs(
    a1
  )}x ${a0 >= 0 ? "+ " + a0 : "- " + Math.abs(a0)}`; // sin x^2
  const d3 = `y = ${a3}x^3 ${(-a2) >= 0 ? "+ " + -a2 : "- " + Math.abs(
    -a2
  )}x^2 ${a1 >= 0 ? "+ " + a1 : "- " + Math.abs(a1)}x ${a0 >= 0 ? "+ " + a0 : "- " + Math.abs(a0)}`;

  const opciones = [correcta, d1, d2, d3];

  const binomio = `(${a === 1 ? "" : a === -1 ? "-" : a}x ${
    b >= 0 ? "+ " + b : "- " + Math.abs(b)
  })`;
  const trinomio = `(${c === 1 ? "" : c === -1 ? "-" : c}x^2 ${
    d >= 0 ? "+ " + d : "- " + Math.abs(d)
  }x ${e >= 0 ? "+ " + e : "- " + Math.abs(e)})`;

  const enunciado =
    `Desarrolla el siguiente producto de polinomios y elige la opción correcta:\n\n` +
    `${binomio} · ${trinomio}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se aplica distributiva: cada término del primer polinomio multiplica a todo el segundo polinomio, luego se agrupan términos semejantes.",
  });
};

export default generarMultiplicacionPolinomiosAvanzada;
