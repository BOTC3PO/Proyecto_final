// src/generators/math/tema39_problemas_funcion_afin.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 39;
const TITULO = "Problemas de función afín (modelo y = mx + b)";

type Contexto = "taxis" | "telefonia" | "suscripcion";

export const generarProblemasFuncionAfin: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  const contexto: Contexto = pickRandom(["taxis", "telefonia", "suscripcion"]);

  const m = randomInt(2, 10);      // costo por unidad
  const b = randomInt(50, 200);    // costo fijo
  const x = randomInt(1, 10);
  const y = m * x + b;

  let enunciado: string;

  if (contexto === "taxis") {
    enunciado =
      `El costo de un viaje en taxi se calcula con una tarifa fija de ${b} pesos ` +
      `más ${m} pesos por cada kilómetro recorrido.\n\n` +
      `¿Cuánto costará un viaje de ${x} km?`;
  } else if (contexto === "telefonia") {
    enunciado =
      `Un plan de telefonía cobra una tarifa fija mensual de ${b} pesos ` +
      `más ${m} pesos por cada gigabyte (GB) extra de datos usados.\n\n` +
      `Si este mes usas ${x} GB extra, ¿cuánto pagarás en total?`;
  } else {
    enunciado =
      `Una plataforma de streaming cobra una suscripción fija de ${b} pesos por mes ` +
      `más ${m} pesos por cada alquiler de película.\n\n` +
      `Si en un mes alquilas ${x} películas, ¿cuánto pagarás en total?`;
  }

  const correcta = y;
  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-50, 50);
    if (delta === 0) continue;
    const cand = correcta + delta;
    if (cand > 0 && cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se identifica la función y = mx + b donde b es el costo fijo y m el costo por unidad. Luego se reemplaza x por el valor dado.",
  });
};

export default generarProblemasFuncionAfin;
