// src/generators/math/tema24_suma_resta_polinomios.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 24;
const TITULO = "Suma y resta de polinomios (en x)";

interface Polinomio {
  a: number; // coef de x^2
  b: number; // coef de x
  c: number; // término independiente
}

function poliToString(p: Polinomio): string {
  const partes: string[] = [];

  if (p.a !== 0) partes.push(`${p.a === 1 ? "" : p.a === -1 ? "-" : p.a}x^2`);

  if (p.b !== 0) {
    const signo = p.b > 0 && partes.length > 0 ? "+" : "";
    partes.push(`${signo}${p.b === 1 ? "" : p.b === -1 ? "-" : p.b}x`);
  }

  if (p.c !== 0 || partes.length === 0) {
    const signo = p.c > 0 && partes.length > 0 ? "+" : "";
    partes.push(`${signo}${p.c}`);
  }

  return partes.join(" ");
}

function sumarPolinomios(p1: Polinomio, p2: Polinomio): Polinomio {
  return {
    a: p1.a + p2.a,
    b: p1.b + p2.b,
    c: p1.c + p2.c,
  };
}

function restarPolinomios(p1: Polinomio, p2: Polinomio): Polinomio {
  return {
    a: p1.a - p2.a,
    b: p1.b - p2.b,
    c: p1.c - p2.c,
  };
}

function generarPolinomio(dificultad: Dificultad): Polinomio {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const rango =
    dificultadCore === "basico"
      ? 5
      : dificultadCore === "intermedio"
      ? 8
      : 10;

  return {
    a: randomInt(-rango, rango),
    b: randomInt(-rango, rango),
    c: randomInt(-rango, rango),
  };
}

export const generarSumaRestaPolinomios: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const p1 = generarPolinomio(dificultad);
  const p2 = generarPolinomio(dificultad);

  const esSuma = pickRandom([true, false]);

  const resultado = esSuma ? sumarPolinomios(p1, p2) : restarPolinomios(p1, p2);
  const correcta = poliToString(resultado);

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    // Alteramos un coeficiente
    const deltaA = randomInt(-2, 2);
    const deltaB = randomInt(-2, 2);
    const deltaC = randomInt(-2, 2);

    const cand: Polinomio = {
      a: resultado.a + deltaA,
      b: resultado.b + deltaB,
      c: resultado.c + deltaC,
    };

    const s = poliToString(cand);
    if (s !== correcta) distractores.add(s);
  }

  opciones.push(...Array.from(distractores));

  const enunciado =
    (esSuma ? "Suma" : "Resta") +
    ` los siguientes polinomios en x:\n\n` +
    `P(x) = ${poliToString(p1)}\n` +
    `Q(x) = ${poliToString(p2)}\n`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se agrupan términos semejantes (mismos exponentes de x) y se suman o restan sus coeficientes.",
  });
};

export default generarSumaRestaPolinomios;
