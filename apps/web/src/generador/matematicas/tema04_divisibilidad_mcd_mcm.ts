// src/generators/math/tema04_divisibilidad_mcd_mcm.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  rangoPorDificultadCore,
  randomInt,
  mcd,
  mcm,
} from "./generic";

const ID_TEMA = 4;
const TITULO = "Divisibilidad, MCD y MCM";

type TipoProblema = "MCD" | "MCM";

function generarPar(dificultad: Dificultad): [number, number] {
  const [min, max] = rangoPorDificultadCore(dificultad, {
    basico: [6, 40],
    intermedio: [10, 80],
    avanzado: [20, 120],
  });

  let a = randomInt(min, max);
  let b = randomInt(min, max);
  if (a === b) b += 1;
  return [a, b];
}

export const generarDivisibilidadMcdMcm: GeneratorFn = (
  dificultad = "intermedio"
) => {
  const tipo: TipoProblema = Math.random() < 0.5 ? "MCD" : "MCM";
  const [a, b] = generarPar(dificultad);

  let respuesta: number;
  let enunciado: string;
  let explicacion: string;

  if (tipo === "MCD") {
    respuesta = mcd(a, b);
    enunciado = `Calcula el máximo común divisor (MCD) de ${a} y ${b}.`;
    explicacion = `El MCD de ${a} y ${b} es ${respuesta}, el mayor número que divide a ambos sin dejar resto.`;
  } else {
    respuesta = mcm(a, b);
    enunciado = `Calcula el mínimo común múltiplo (MCM) de ${a} y ${b}.`;
    explicacion = `El MCM de ${a} y ${b} es ${respuesta}, el menor número que es múltiplo de ambos.`;
  }

  const distractores = new Set<number>();
  while (distractores.size < 3) {
    const delta = randomInt(-respuesta, respuesta);
    if (delta === 0) continue;
    const candidato = respuesta + delta;
    if (candidato > 0 && candidato !== respuesta) {
      distractores.add(candidato);
    }
  }

  const opciones = [respuesta, ...Array.from(distractores)];
  const indiceCorrecto = 0;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion,
  });
};

export default generarDivisibilidadMcdMcm;
