// src/generators/math/tema32_sistemas_2x2.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 32;
const TITULO = "Sistemas de ecuaciones 2×2";

export const generarSistemas2x2: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const rangoSol =
    dificultadCore === "basico"
      ? 5
      : dificultadCore === "intermedio"
      ? 8
      : 12;

  const xSol = randomInt(-rangoSol, rangoSol);
  const ySol = randomInt(-rangoSol, rangoSol);

  // Coeficientes de las ecuaciones
  const a1 = randomInt(-6, 6) || 1;
  const b1 = randomInt(-6, 6) || 1;
  const a2 = randomInt(-6, 6) || 1;
  const b2 = randomInt(-6, 6) || -1;

  const c1 = a1 * xSol + b1 * ySol;
  const c2 = a2 * xSol + b2 * ySol;

  const ec1 = `${a1}x ${b1 >= 0 ? "+ " + b1 : "- " + Math.abs(b1)}y = ${c1}`;
  const ec2 = `${a2}x ${b2 >= 0 ? "+ " + b2 : "- " + Math.abs(b2)}y = ${c2}`;

  const correcta = `(${xSol}; ${ySol})`;

  const opciones = [correcta];
  const usados = new Set<string>();
  usados.add(correcta);

  while (opciones.length < 4) {
    const x = xSol + randomInt(-4, 4);
    const y = ySol + randomInt(-4, 4);
    const cand = `(${x}; ${y})`;
    if (!usados.has(cand) && (x !== xSol || y !== ySol)) {
      opciones.push(cand);
      usados.add(cand);
    }
  }

  const indiceCorrecto = 0;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `Resuelve el siguiente sistema de ecuaciones y elige la solución (x; y):\n\n` +
      `${ec1}\n` +
      `${ec2}`,
    opciones,
    indiceCorrecto,
    explicacion:
      "Para resolver un sistema 2×2 se pueden usar los métodos de sustitución o igualación (o reducción). La solución es el par (x; y) que verifica ambas ecuaciones a la vez.",
  });
};

export default generarSistemas2x2;
