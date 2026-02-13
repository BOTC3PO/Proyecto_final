// src/generators/math/tema55_inferencia_estadistica.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
} from "./generic";

const ID_TEMA = 55;
const TITULO = "Inferencia estadística: intervalos y contrastes";

type TipoEjercicio = "interpretacion_ic" | "region_rechazo" | "p_valor";

function graficoColaDerecha(critLabel: string): string {
  return (
    "Gráfico (normal estándar, cola derecha sombreada):\n" +
    "           _\n" +
    "        _/   \\_\n" +
    "      _/       \\_\n" +
    "_____/           \\████████\n" +
    `     ${critLabel}           z`
  );
}

function graficoDosColas(zLabel: string): string {
  return (
    "Gráfico (normal estándar, colas sombreadas = p-valor):\n" +
    "██████\\_       _/██████\n" +
    "      \\_     _/\n" +
    "        \\_ _/\n" +
    `         ${zLabel}`
  );
}

export const generarInferenciaEstadistica: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipos: TipoEjercicio[] =
    dificultadCore === "basico"
      ? ["interpretacion_ic", "region_rechazo"]
      : ["interpretacion_ic", "region_rechazo", "p_valor"];
  const tipo: TipoEjercicio = pickRandom(tipos);

  if (tipo === "interpretacion_ic") {
    const intervalo =
      dificultadCore === "basico"
        ? pickRandom([
            { li: 48, ls: 52, media: 50 },
            { li: 18, ls: 22, media: 20 },
          ])
        : pickRandom([
            { li: 48, ls: 52, media: 50 },
            { li: 96, ls: 104, media: 100 },
            { li: 18, ls: 22, media: 20 },
          ]);
    const enunciado =
      `Se construyó un intervalo de confianza del 95% para la media: ` +
      `[${intervalo.li}, ${intervalo.ls}].\n` +
      "Representación:\n" +
      `---|-----[${intervalo.li} —— ${intervalo.media} —— ${intervalo.ls}]-----|---\n\n` +
      "¿Cuál es la interpretación correcta?";

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones: [
        "Si repitiéramos el muestreo muchas veces, cerca del 95% de los intervalos incluirían la media poblacional",
        "El 95% de los datos individuales están entre los límites del intervalo",
        "Hay un 95% de probabilidad de que la media poblacional esté en ese intervalo para este único estudio",
        "El 95% de las medias muestrales futuras serán exactamente iguales al intervalo",
      ],
      indiceCorrecto: 0,
      explicacion:
        "El 95% de confianza describe el rendimiento a largo plazo del método, no una probabilidad directa sobre la media fija.",
    });
  }

  if (tipo === "region_rechazo") {
    const casos = [
      {
        zObs: 2.1,
        decision: "Rechazar H0",
        explicacion:
          "El estadístico cae en la región crítica (cola derecha), por lo que se rechaza H0.",
      },
      {
        zObs: 1.2,
        decision: "No rechazar H0",
        explicacion:
          "El estadístico no alcanza el valor crítico, por lo que no se rechaza H0.",
      },
    ];
    const caso = pickRandom(casos);
    const opciones = [
      "Rechazar H0",
      "No rechazar H0",
      "Aceptar H1 con 100% de certeza",
      "No se puede decidir sin cambiar α",
    ];
    const enunciado =
      "Se contrasta H0: μ = 50 vs H1: μ > 50 con α = 0.05.\n" +
      "El valor crítico es z = 1.645.\n\n" +
      graficoColaDerecha("1.645") +
      `\n\nSe obtiene z = ${caso.zObs}. ¿Cuál es la decisión?`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: opciones.indexOf(caso.decision),
      explicacion: caso.explicacion,
    });
  }

  const pvalor = pickRandom([
    { z: 2.2, p: 0.03, decision: "Rechazar H0" },
    { z: 1.55, p: 0.12, decision: "No rechazar H0" },
  ]);
  const enunciado =
    "Se contrasta H0: μ = 100 vs H1: μ ≠ 100.\n" +
    `El estadístico observado es z = ${pvalor.z}.\n\n` +
    graficoDosColas(`z = ±${pvalor.z}`) +
    `\n\nEl p-valor (área sombreada) es ${pvalor.p}. ` +
    "Con α = 0.05, ¿qué decisión corresponde?";

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones: [
      pvalor.decision,
      pvalor.decision === "Rechazar H0" ? "No rechazar H0" : "Rechazar H0",
      "Aceptar H0 como verdadera con certeza absoluta",
      "Cambiar a un intervalo de confianza del 50%",
    ],
    indiceCorrecto: 0,
    explicacion:
      pvalor.p < 0.05
        ? "Un p-valor menor que α indica evidencia suficiente para rechazar H0."
        : "Un p-valor mayor que α indica que la evidencia no es suficiente para rechazar H0.",
  });
};

export default generarInferenciaEstadistica;
