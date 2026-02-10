// src/generators/math/tema06_fracciones.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomBool,
  randomInt,
  normalizarDificultadCore,
  mcd,
  pickRandom,
} from "./generic";

const ID_TEMA = 6;
const TITULO = "Fracciones";

interface Fraccion {
  num: number;
  den: number;
}

function simplificarFraccion(fr: Fraccion): Fraccion {
  const g = mcd(fr.num, fr.den);
  return { num: fr.num / g, den: fr.den / g };
}

function fraccionToString(fr: Fraccion): string {
  return `${fr.num}/${fr.den}`;
}

function generarFraccionAleatoria(dificultad: Dificultad): Fraccion {
  let rango: [number, number];
  switch (normalizarDificultadCore(dificultad)) {
    case "basico":
      rango = [2, 10];
      break;
    case "intermedio":
      rango = [2, 20];
      break;
    case "avanzado":
    default:
      rango = [2, 40];
      break;
  }

  const den = randomInt(rango[0], rango[1]);
  const num = randomInt(1, den - 1);
  return { num, den };
}

// --- Tipos de ejercicio ---

function generarEjercicioSimplificar(dificultad: Dificultad) {
  const original = generarFraccionAleatoria(dificultad);
  const noSimplificada = {
    num: original.num * randomInt(2, 5),
    den: original.den * randomInt(2, 5),
  };
  const simplificada = simplificarFraccion(noSimplificada);

  const opciones: string[] = [fraccionToString(simplificada)];

  // Generar fracciones "parecidas"
  const distractores = new Set<string>();
  while (distractores.size < 3) {
    const deltaNum = randomInt(-3, 3);
    const deltaDen = randomInt(-3, 3);
    const cand: Fraccion = {
      num: Math.max(1, simplificada.num + deltaNum),
      den: Math.max(2, simplificada.den + deltaDen),
    };
    const s = fraccionToString(simplificarFraccion(cand));
    if (s !== fraccionToString(simplificada)) distractores.add(s);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Simplifica la fracción:\n\n${fraccionToString(noSimplificada)}`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Se divide numerador y denominador por su máximo común divisor hasta obtener ${fraccionToString(
      simplificada
    )}.`,
  });
}

function generarEjercicioEquivalentes(dificultad: Dificultad) {
  const base = generarFraccionAleatoria(dificultad);
  const simpl = simplificarFraccion(base);

  const factorCorrecto = randomInt(2, 6);
  const correcta: Fraccion = {
    num: simpl.num * factorCorrecto,
    den: simpl.den * factorCorrecto,
  };

  const opciones: string[] = [fraccionToString(correcta)];

  const distractores = new Set<string>();
  while (distractores.size < 3) {
    const factor = randomInt(2, 10);
    if (factor === factorCorrecto) continue;
    const cand: Fraccion = {
      num: simpl.num * factor + randomInt(-2, 2),
      den: simpl.den * factor,
    };
    const s = fraccionToString(cand);
    if (s !== fraccionToString(correcta)) distractores.add(s);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `¿Cuál de las siguientes fracciones es equivalente a ${fraccionToString(
      simpl
    )}?`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Las fracciones equivalentes se obtienen multiplicando o dividiendo numerador y denominador por el mismo número.`,
  });
}

function generarEjercicioComparar(dificultad: Dificultad) {
  const f1 = generarFraccionAleatoria(dificultad);
  const f2 = generarFraccionAleatoria(dificultad);

  const v1 = f1.num / f1.den;
  const v2 = f2.num / f2.den;

  let correcta: string;
  if (Math.abs(v1 - v2) < 1e-6) {
    correcta = `${fraccionToString(f1)} = ${fraccionToString(f2)}`;
  } else if (v1 > v2) {
    correcta = `${fraccionToString(f1)} > ${fraccionToString(f2)}`;
  } else {
    correcta = `${fraccionToString(f1)} < ${fraccionToString(f2)}`;
  }

  const opcionesBase = [
    `${fraccionToString(f1)} > ${fraccionToString(f2)}`,
    `${fraccionToString(f1)} < ${fraccionToString(f2)}`,
    `${fraccionToString(f1)} = ${fraccionToString(f2)}`,
  ];

  const opciones = opcionesBase;
  const indiceCorrecto = opciones.indexOf(correcta);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Compara las fracciones y elige la opción correcta:`,
    opciones,
    indiceCorrecto,
    explicacion: `Para comparar, podés llevarlas al mismo denominador o comparar sus valores decimales.`,
  });
}

function generarEjercicioSumaResta(dificultad: Dificultad) {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const mismoDen = dificultadCore === "basico" || randomBool();

  let f1: Fraccion;
  let f2: Fraccion;

  if (mismoDen) {
    const den = randomInt(
      2,
      dificultadCore === "basico" ? 10 : dificultadCore === "intermedio" ? 20 : 30
    );
    f1 = { num: randomInt(1, den - 1), den };
    f2 = { num: randomInt(1, den - 1), den };
  } else {
    f1 = generarFraccionAleatoria(dificultad);
    f2 = generarFraccionAleatoria(dificultad);
  }

  const esSuma = randomBool();

  const numRes = esSuma
    ? f1.num * f2.den + f2.num * f1.den
    : f1.num * f2.den - f2.num * f1.den;
  const denRes = f1.den * f2.den;
  const resSimpl = simplificarFraccion({ num: numRes, den: denRes });

  const opciones: string[] = [fraccionToString(resSimpl)];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    const delta = randomInt(-3, 3);
    const cand: Fraccion = {
      num: resSimpl.num + delta,
      den: resSimpl.den,
    };
    if (cand.num <= 0) continue;
    const s = fraccionToString(simplificarFraccion(cand));
    if (s !== fraccionToString(resSimpl)) distractores.add(s);
  }

  opciones.push(...Array.from(distractores));

  const signo = esSuma ? "+" : "-";

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula:\n\n${fraccionToString(f1)} ${signo} ${fraccionToString(
      f2
    )}`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Se lleva a común denominador y luego se opera el numerador. Finalmente se simplifica la fracción.`,
  });
}

// ---- Generador principal ----

export const generarFracciones: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const modos = [
    generarEjercicioSimplificar,
    generarEjercicioEquivalentes,
    generarEjercicioComparar,
    generarEjercicioSumaResta,
  ];

  const modo = pickRandom(modos);
  return modo(dificultad);
};

export default generarFracciones;
