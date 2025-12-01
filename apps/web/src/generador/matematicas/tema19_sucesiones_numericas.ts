// src/generators/math/tema19_sucesiones_numericas.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 19;
const TITULO = "Sucesiones numéricas (patrones)";

type TipoSucesion = "aritmetica" | "geometrica";

function generarSucesionAritmetica(
  longitud: number,
  inicio: number,
  diferencia: number
): number[] {
  const res: number[] = [];
  for (let i = 0; i < longitud; i++) {
    res.push(inicio + i * diferencia);
  }
  return res;
}

function generarSucesionGeometrica(
  longitud: number,
  inicio: number,
  razon: number
): number[] {
  const res: number[] = [];
  let actual = inicio;
  for (let i = 0; i < longitud; i++) {
    res.push(actual);
    actual *= razon;
  }
  return res;
}

export const generarSucesionesNumericas: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoSucesion =
    dificultad === "facil"
      ? "aritmetica"
      : pickRandom(["aritmetica", "geometrica"]);

  const longitud = dificultad === "dificil" ? 5 : 4;

  let sucesion: number[];
  let siguiente: number;
  let descripcionTipo: string;

  if (tipo === "aritmetica") {
    const inicio = randomInt(-10, 20);
    const dif = randomInt(-5, 10) || 1;
    sucesion = generarSucesionAritmetica(longitud + 1, inicio, dif);
    siguiente = sucesion[sucesion.length - 1];
    sucesion = sucesion.slice(0, longitud);
    descripcionTipo = `Sucesión aritmética de diferencia ${dif}.`;
  } else {
    const inicio = randomInt(1, 5);
    const razon =
      dificultad === "facil"
        ? pickRandom([2, 3])
        : pickRandom([2, 3, 4]);
    sucesion = generarSucesionGeometrica(longitud + 1, inicio, razon);
    siguiente = sucesion[sucesion.length - 1];
    sucesion = sucesion.slice(0, longitud);
    descripcionTipo = `Sucesión geométrica de razón ${razon}.`;
  }

  const opciones = [siguiente];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-10, 10);
    if (delta === 0) continue;
    const cand = siguiente + delta;
    if (cand !== siguiente) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  const enunciado =
    `Observa la siguiente sucesión numérica:\n\n` +
    sucesion.join(", ") +
    `, ?\n\n` +
    `¿Qué número debería ir en lugar del signo de interrogación?`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      `Se identifica la regla de formación de la sucesión. En este caso: ${descripcionTipo}`,
  });
};

export default generarSucesionesNumericas;
