// src/generators/math/tema02_operaciones_combinadas.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  rangoPorDificultad,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 2;
const TITULO = "Operaciones combinadas";

type Op = "+" | "-" | "×" | "÷";

function evaluar(a: number, op: Op, b: number): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
  }
}

// Plantillas tipo: (a + b) × c, a + b × c, etc.
function generarExpresion(dificultad: Dificultad): {
  texto: string;
  resultado: number;
} {
  const [min, max] = rangoPorDificultad(dificultad, {
    facil: [1, 20],
    media: [1, 50],
    dificil: [1, 100],
  });

  const plantillas = [
    // a + b × c
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      const res = a + b * c;
      const texto = `${a} + ${b} × ${c}`;
      return { texto, resultado: res };
    },
    // (a + b) × c
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      const res = (a + b) * c;
      const texto = `(${a} + ${b}) × ${c}`;
      return { texto, resultado: res };
    },
    // a × b - c
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      const res = a * b - c;
      const texto = `${a} × ${b} - ${c}`;
      return { texto, resultado: res };
    },
    // a - b × c
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      const res = a - b * c;
      const texto = `${a} - ${b} × ${c}`;
      return { texto, resultado: res };
    },
    // (a - b) × c
    () => {
      const a = randomInt(min, max);
      const b = randomInt(min, max);
      const c = randomInt(min, max);
      const res = (a - b) * c;
      const texto = `(${a} - ${b}) × ${c}`;
      return { texto, resultado: res };
    },
  ];

  const generar = pickRandom(plantillas);
  return generar();
}

export const generarOperacionesCombinadas: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  const { texto, resultado } = generarExpresion(dificultad);

  const distractores = new Set<number>();
  while (distractores.size < 3) {
    const delta = randomInt(-15, 15);
    if (delta === 0) continue;
    const candidato = resultado + delta;
    distractores.add(candidato);
  }

  const opciones = [resultado, ...Array.from(distractores)];
  const indiceCorrecto = 0;

  const enunciado = `Resuelve la siguiente operación respetando la prioridad de las operaciones:\n\n${texto}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "Primero se resuelven paréntesis, luego multiplicaciones/divisiones y por último sumas/restas.",
  });
};

export default generarOperacionesCombinadas;
