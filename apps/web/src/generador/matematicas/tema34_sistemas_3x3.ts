// src/generators/math/tema34_sistemas_3x3.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
} from "./generic";

const ID_TEMA = 34;
const TITULO = "Sistemas de ecuaciones 3×3 (solución entera)";

export const generarSistemas3x3: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  const rangoSol =
    dificultad === "facil"
      ? 3
      : dificultad === "media"
      ? 5
      : 7;

  const xSol = randomInt(-rangoSol, rangoSol);
  const ySol = randomInt(-rangoSol, rangoSol);
  const zSol = randomInt(-rangoSol, rangoSol);

  const coef = () => randomInt(-4, 4) || 1;

  const a1 = coef(), b1 = coef(), c1 = coef();
  const a2 = coef(), b2 = coef(), c2 = coef();
  const a3 = coef(), b3 = coef(), c3 = coef();

  const d1 = a1 * xSol + b1 * ySol + c1 * zSol;
  const d2 = a2 * xSol + b2 * ySol + c2 * zSol;
  const d3 = a3 * xSol + b3 * ySol + c3 * zSol;

  const e1 = `${a1}x ${b1 >= 0 ? "+ " + b1 : "- " + Math.abs(b1)}y ${
    c1 >= 0 ? "+ " + c1 : "- " + Math.abs(c1)
  }z = ${d1}`;
  const e2 = `${a2}x ${b2 >= 0 ? "+ " + b2 : "- " + Math.abs(b2)}y ${
    c2 >= 0 ? "+ " + c2 : "- " + Math.abs(c2)
  }z = ${d2}`;
  const e3 = `${a3}x ${b3 >= 0 ? "+ " + b3 : "- " + Math.abs(b3)}y ${
    c3 >= 0 ? "+ " + c3 : "- " + Math.abs(c3)
  }z = ${d3}`;

  const correcta = `(${xSol}; ${ySol}; ${zSol})`;

  const opciones: string[] = [correcta];
  const usados = new Set<string>([correcta]);

  while (opciones.length < 4) {
    const x = xSol + randomInt(-3, 3);
    const y = ySol + randomInt(-3, 3);
    const z = zSol + randomInt(-3, 3);
    const cand = `(${x}; ${y}; ${z})`;
    if (!usados.has(cand)) {
      opciones.push(cand);
      usados.add(cand);
    }
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `Resuelve el siguiente sistema 3×3 y elige la solución (x; y; z):\n\n` +
      `${e1}\n` +
      `${e2}\n` +
      `${e3}`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se puede resolver por reducción, sustitución o usando matrices (método de Gauss). La solución es el único trío (x, y, z) que verifica simultáneamente las tres ecuaciones.",
  });
};

export default generarSistemas3x3;
