// src/generators/math/tema53_tendencias_descriptiva.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 53;
const TITULO = "Tendencias y análisis descriptivo";

type TipoEjercicio =
  | "linea_temporal"
  | "barras_agrupadas"
  | "barras_apiladas"
  | "boxplot"
  | "dispersion";

const OPCIONES_TENDENCIA = [
  "Tendencia creciente",
  "Tendencia decreciente",
  "Tendencia estable",
  "Tendencia irregular",
] as const;

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"] as const;

function construirOpcionesNumericas(correcta: number, maxOpciones = 4): string[] {
  const opciones = new Set<number>([correcta]);
  while (opciones.size < maxOpciones) {
    const delta = randomInt(-6, 6);
    if (delta === 0) continue;
    opciones.add(correcta + delta);
  }
  return Array.from(opciones).map((valor) => valor.toString());
}

function generarSerieTemporal(tipo: "creciente" | "decreciente" | "estable") {
  const base = randomInt(20, 35);
  const pendiente = tipo === "estable" ? 0 : randomInt(3, 6);
  return MESES.map((mes, idx) => {
    const ruido = randomInt(-2, 2);
    const valor =
      tipo === "decreciente"
        ? base - pendiente * idx + ruido
        : base + pendiente * idx + ruido;
    return { mes, valor };
  });
}

function generarDatosAgrupados() {
  const cursos = ["1°A", "1°B", "1°C"] as const;
  return cursos.map((curso) => ({
    curso,
    anio2023: randomInt(18, 32),
    anio2024: randomInt(20, 36),
  }));
}

function generarDatosApilados() {
  const equipos = ["Equipo Norte", "Equipo Centro", "Equipo Sur"] as const;
  return equipos.map((equipo) => ({
    equipo,
    completadas: randomInt(12, 20),
    pendientes: randomInt(4, 10),
  }));
}

function generarBoxplot() {
  const minimo = randomInt(5, 10);
  const q1 = minimo + randomInt(4, 8);
  const mediana = q1 + randomInt(3, 7);
  const q3 = mediana + randomInt(3, 7);
  const maximo = q3 + randomInt(4, 8);
  return { minimo, q1, mediana, q3, maximo };
}

function generarDispersion(tipo: "positiva" | "negativa") {
  const puntos = Array.from({ length: 6 }, (_, idx) => {
    const horas = idx + 1;
    const base = tipo === "positiva" ? 45 : 85;
    const pendiente = tipo === "positiva" ? 6 : -6;
    const nota = base + pendiente * horas + randomInt(-3, 3);
    return { horas, nota };
  });
  return puntos;
}

export const generarTendenciasDescriptiva: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const tipo: TipoEjercicio = pickRandom([
    "linea_temporal",
    "barras_agrupadas",
    "barras_apiladas",
    "boxplot",
    "dispersion",
  ]);

  if (tipo === "linea_temporal") {
    const tendencia = pickRandom(["creciente", "decreciente", "estable"] as const);
    const serie = generarSerieTemporal(tendencia);
    const enunciado =
      "En un gráfico de líneas se muestran las ventas mensuales (en unidades):\n\n" +
      serie.map((punto) => `${punto.mes}: ${punto.valor}`).join("\n") +
      "\n\n¿Qué tendencia general describe mejor la serie temporal?";
    const correcta =
      tendencia === "creciente"
        ? "Tendencia creciente"
        : tendencia === "decreciente"
        ? "Tendencia decreciente"
        : "Tendencia estable";

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones: OPCIONES_TENDENCIA,
      indiceCorrecto: OPCIONES_TENDENCIA.indexOf(correcta),
      explicacion:
        "La tendencia general se observa comparando el inicio y el final de la serie temporal.",
    });
  }

  if (tipo === "barras_agrupadas") {
    const datos = generarDatosAgrupados();
    const diferencias = datos.map((fila) => ({
      curso: fila.curso,
      diferencia: Math.abs(fila.anio2024 - fila.anio2023),
    }));
    const mayor = diferencias.reduce((acc, item) =>
      item.diferencia > acc.diferencia ? item : acc
    );

    const enunciado =
      "En un gráfico de barras agrupadas se compara el promedio de notas 2023 vs 2024:\n\n" +
      datos
        .map(
          (fila) =>
            `${fila.curso}: 2023=${fila.anio2023}, 2024=${fila.anio2024}`
        )
        .join("\n") +
      "\n\n¿En qué curso se observa la mayor diferencia entre 2023 y 2024?";

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones: datos.map((fila) => fila.curso),
      indiceCorrecto: datos.findIndex((fila) => fila.curso === mayor.curso),
      explicacion:
        "En barras agrupadas se comparan alturas de cada grupo para detectar la mayor brecha.",
    });
  }

  if (tipo === "barras_apiladas") {
    const datos = generarDatosApilados();
    const totales = datos.map((fila) => ({
      equipo: fila.equipo,
      total: fila.completadas + fila.pendientes,
    }));
    const mayor = totales.reduce((acc, item) => (item.total > acc.total ? item : acc));

    const enunciado =
      "Un gráfico de barras apiladas muestra tareas completadas y pendientes por equipo:\n\n" +
      datos
        .map(
          (fila) =>
            `${fila.equipo}: completadas=${fila.completadas}, pendientes=${fila.pendientes}`
        )
        .join("\n") +
      "\n\n¿Cuál es el equipo con mayor total de tareas?";

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones: datos.map((fila) => fila.equipo),
      indiceCorrecto: datos.findIndex((fila) => fila.equipo === mayor.equipo),
      explicacion:
        "En barras apiladas el total corresponde a la suma de los segmentos.",
    });
  }

  if (tipo === "boxplot") {
    const { minimo, q1, mediana, q3, maximo } = generarBoxplot();
    const iqr = q3 - q1;
    const opciones = construirOpcionesNumericas(iqr);

    const enunciado =
      "Se presenta un boxplot con los siguientes valores:\n\n" +
      `Mínimo=${minimo}, Q1=${q1}, Mediana=${mediana}, Q3=${q3}, Máximo=${maximo}` +
      "\n\n¿Cuál es el rango intercuartílico (Q3 - Q1)?";

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: opciones.indexOf(iqr.toString()),
      explicacion:
        "El rango intercuartílico se calcula restando Q1 a Q3.",
    });
  }

  const tendencia = pickRandom(["positiva", "negativa"] as const);
  const puntos = generarDispersion(tendencia);
  const enunciado =
    "En un diagrama de dispersión se relacionan horas de estudio (x) y nota (y):\n\n" +
    puntos.map((punto) => `(${punto.horas}, ${punto.nota})`).join(", ") +
    "\n\n¿Qué tipo de correlación se observa?";
  const opciones = [
    "Correlación positiva",
    "Correlación negativa",
    "Sin correlación clara",
  ];
  const correcta =
    tendencia === "positiva" ? "Correlación positiva" : "Correlación negativa";

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: opciones.indexOf(correcta),
    explicacion:
      "Si al aumentar las horas de estudio la nota sube, la correlación es positiva; si baja, es negativa.",
  });
};

export default generarTendenciasDescriptiva;
