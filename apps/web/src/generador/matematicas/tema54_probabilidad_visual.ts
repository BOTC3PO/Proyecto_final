// src/generators/math/tema54_probabilidad_visual.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  mcd,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 54;
const TITULO = "Probabilidad compuesta y distribuciones";

type CasoArbol = {
  enunciado: string;
  numFav: number;
  numTotal: number;
  distractores: string[];
};

function simplificarFraccion(num: number, den: number): [number, number] {
  const g = mcd(num, den);
  return [num / g, den / g];
}

function fraccionString(num: number, den: number): string {
  return `${num}/${den}`;
}

function crearOpcionesUnicas(correcta: string, extras: string[]): string[] {
  const opciones = new Set<string>([correcta]);
  extras.forEach((opcion) => opciones.add(opcion));
  return Array.from(opciones);
}

export const generarProbabilidadVisual: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipos = [
    "arbol",
    "binomial_media",
    "normal_area",
    "area_curva",
    "simulacion",
  ] as const;
  const tipo = pickRandom(tipos);

  if (tipo === "arbol") {
    const casos: CasoArbol[] = [
      {
        enunciado:
          "Se lanza una moneda equilibrada dos veces. Usando un diagrama de árbol, ¿cuál es la probabilidad de obtener exactamente una cara?",
        numFav: 2,
        numTotal: 4,
        distractores: ["1/4", "3/4", "1/3"],
      },
      {
        enunciado:
          "Se lanzan dos dados equilibrados. Usando un diagrama de árbol, ¿cuál es la probabilidad de que la suma sea 7?",
        numFav: 6,
        numTotal: 36,
        distractores: ["1/12", "1/9", "1/3"],
      },
      {
        enunciado:
          "Se lanza una moneda y un dado. Usando un diagrama de árbol, ¿cuál es la probabilidad de obtener cara y un número par?",
        numFav: 3,
        numTotal: 12,
        distractores: ["1/2", "1/6", "1/3"],
      },
      {
        enunciado:
          "Se lanzan dos dados. Usando un diagrama de árbol, ¿cuál es la probabilidad de obtener al menos un 6?",
        numFav: 11,
        numTotal: 36,
        distractores: ["1/6", "5/6", "10/36"],
      },
    ];

    const caso = pickRandom(casos);
    const [numSimp, denSimp] = simplificarFraccion(caso.numFav, caso.numTotal);
    const correcta = fraccionString(numSimp, denSimp);
    const opciones = crearOpcionesUnicas(correcta, caso.distractores);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: caso.enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "En un diagrama de árbol, cada rama representa un resultado equiprobable. La probabilidad del evento es casos favorables sobre casos posibles.",
    });
  }

  if (tipo === "binomial_media") {
    const n =
      dificultadCore === "basico"
        ? randomInt(10, 16)
        : dificultadCore === "intermedio"
        ? randomInt(17, 24)
        : randomInt(25, 30);
    const p = pickRandom([0.2, 0.3, 0.4, 0.5, 0.6]);
    const esperado = Number((n * p).toFixed(1));

    const opciones = crearOpcionesUnicas(String(esperado), [
      String(Number((n * (p + 0.1)).toFixed(1))),
      String(Number((n * (p - 0.1)).toFixed(1))),
      String(n),
    ]);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `En una distribución binomial con n = ${n} y p = ${p}, ¿cuál es el número esperado de éxitos?`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "En la binomial, el valor esperado es E(X) = n · p, que representa el promedio de éxitos en muchas repeticiones.",
    });
  }

  if (tipo === "normal_area") {
    const opciones = ["68%", "95%", "99.7%", "50%"];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado:
        "En una distribución normal, aproximadamente ¿qué porcentaje del área se encuentra entre μ - 1σ y μ + 1σ?",
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "La regla 68-95-99.7 indica que cerca del 68% de los datos se ubican dentro de una desviación estándar de la media.",
    });
  }

  if (tipo === "area_curva") {
    const opciones = [
      "El área bajo la curva entre a y b",
      "La altura de la curva exactamente en b",
      "La diferencia entre el valor máximo y mínimo",
      "La pendiente de la curva en la media",
    ];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado:
        "En una distribución continua, ¿cómo se interpreta la probabilidad P(a ≤ X ≤ b)?",
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Para variables continuas, la probabilidad se interpreta como el área bajo la curva de densidad entre los límites a y b.",
    });
  }

  const repeticiones =
    dificultadCore === "basico"
      ? randomInt(200, 500)
      : dificultadCore === "intermedio"
      ? randomInt(600, 1200)
      : randomInt(1500, 3000);
  const frecuencia = Number((randomInt(48, 52) / 100).toFixed(2));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `Se simulan ${repeticiones} lanzamientos de una moneda equilibrada y se obtiene una frecuencia relativa de cara de ${frecuencia}. ` +
      "¿Qué ilustra esto sobre la Ley de los Grandes Números?",
    opciones: [
      "Que al aumentar las repeticiones, la frecuencia relativa se acerca a la probabilidad real",
      "Que la frecuencia relativa siempre es exactamente igual a la probabilidad teórica",
      "Que los resultados futuros dependen del último lanzamiento",
      "Que los eventos dejan de ser aleatorios con muchas repeticiones",
    ],
    indiceCorrecto: 0,
    explicacion:
      "La Ley de los Grandes Números indica que, con muchas repeticiones, la frecuencia relativa se aproxima a la probabilidad teórica.",
  });
};

export default generarProbabilidadVisual;
