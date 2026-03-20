// src/generators/math/tema02_operaciones_combinadas.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";
import { getRangoConFallback } from "./limits";

const ID_TEMA = 2;
const TITULO = "Operaciones combinadas";

function generarExpresion(dificultad: Dificultad): {
  texto: string;
  resultado: number;
} {
  const [min, max] = getRangoConFallback(ID_TEMA, dificultad, {
    basico: [1, 20],
    intermedio: [1, 50],
    avanzado: [1, 100],
  });

  const plantillas = [
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      return { texto: `${a} + ${b} × ${c}`, resultado: a + b * c };
    },
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      return { texto: `(${a} + ${b}) × ${c}`, resultado: (a + b) * c };
    },
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      return { texto: `${a} × ${b} - ${c}`, resultado: a * b - c };
    },
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      return { texto: `${a} - ${b} × ${c}`, resultado: a - b * c };
    },
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      return { texto: `(${a} - ${b}) × ${c}`, resultado: (a - b) * c };
    },
  ];

  const generar = pickRandom(plantillas);
  return generar();
}

export const generarOperacionesCombinadas: GeneratorFn = (
  dificultad: Dificultad = "intermedio"
) => {
  const { texto, resultado } = generarExpresion(dificultad);

  const distractores = new Set<number>();
  while (distractores.size < 3) {
    const delta = randomInt(-15, 15);
    if (delta === 0) continue;
    distractores.add(resultado + delta);
  }

  const opciones = [resultado, ...Array.from(distractores)];
  const indiceCorrecto = 0;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Resuelve la siguiente operación respetando la prioridad de las operaciones:\n\n${texto}`,
    opciones,
    indiceCorrecto,
    explicacion:
      "Primero se resuelven paréntesis, luego multiplicaciones/divisiones y por último sumas/restas.",
  });
};

export default generarOperacionesCombinadas;
