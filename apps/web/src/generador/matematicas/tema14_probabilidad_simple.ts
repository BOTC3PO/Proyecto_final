// src/generators/math/tema14_probabilidad_simple.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  mcd,
} from "./generic";

const ID_TEMA = 14;
const TITULO = "Probabilidad simple";

type TipoExperimento = "dado" | "moneda" | "bolsa";

function simplificarFraccion(num: number, den: number): [number, number] {
  const g = mcd(num, den);
  return [num / g, den / g];
}

function fraccionString(num: number, den: number): string {
  return `${num}/${den}`;
}

export const generarProbabilidadSimple: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoExperimento = pickRandom(["dado", "moneda", "bolsa"]);

  let numFav: number;
  let numTotal: number;
  let enunciado: string;

  if (tipo === "dado") {
    numTotal = 6;

    const opcionesDado = [
      {
        desc: "salir un número par",
        fav: 3, // 2,4,6
      },
      {
        desc: "salir un número mayor que 4",
        fav: 2, // 5,6
      },
      {
        desc: "salir un número menor o igual que 2",
        fav: 2, // 1,2
      },
      {
        desc: "salir exactamente el número 3",
        fav: 1,
      },
    ];

    const caso = pickRandom(opcionesDado);
    numFav = caso.fav;
    enunciado = `Se lanza un dado cúbico equilibrado. ¿Cuál es la probabilidad de que ${caso.desc}?`;
  } else if (tipo === "moneda") {
    numTotal = 2;
    numFav = 1;

    const desc = pickRandom([
      "salga cara",
      "salga cruz",
      "no salga cruz",
      "no salga cara",
    ]);

    enunciado = `Se lanza una moneda equilibrada. ¿Cuál es la probabilidad de que ${desc}?`;

    // Todos estos casos tienen probabilidad 1/2, así que no cambiamos numFav
  } else {
    // bolsa con bolas de colores
    const numRojas = randomInt(1, dificultad === "facil" ? 3 : 5);
    const numAzules = randomInt(1, dificultad === "facil" ? 3 : 5);
    const numVerdes =
      dificultad === "dificil" ? randomInt(1, 4) : randomInt(0, 2);

    numTotal = numRojas + numAzules + numVerdes;

    const color = pickRandom(["roja", "azul", "verde"] as const);
    if (color === "roja") numFav = numRojas;
    else if (color === "azul") numFav = numAzules;
    else numFav = numVerdes;

    // Si no hay bolas de ese color, ajustamos para evitar prob 0 en todos los casos
    if (numFav === 0) {
      numFav = numRojas;
    }

    enunciado =
      `En una bolsa hay ${numRojas} bolas rojas, ` +
      `${numAzules} azules y ${numVerdes} verdes. ` +
      `Se extrae una bola al azar. ¿Cuál es la probabilidad de sacar una bola del color pedido?`;
  }

  const [numSimp, denSimp] = simplificarFraccion(numFav, numTotal);
  const correcta = fraccionString(numSimp, denSimp);

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    let n = randomInt(1, numTotal);
    let d = numTotal;
    const [nS, dS] = simplificarFraccion(n, d);
    const cand = fraccionString(nS, dS);
    if (cand !== correcta) distractores.add(cand);
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
      "La probabilidad clásica se calcula como casos favorables sobre casos posibles (P = favorables / totales) en experimentos equiprobables.",
  });
};

export default generarProbabilidadSimple;
