import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";

const ID_TEMA = 84;
const TITULO = "Estadística inferencial";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const generarTema84: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["inf.intervalo_confianza_concepto", "inf.tamano_muestra", "inf.pvalor_concepto"] as const);
  const [minConf, maxConf] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "conf");

  if (variante === "inf.intervalo_confianza_concepto") {
    const [minMuestra, maxMuestra] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "muestra");
    const centro = randomInt(Math.max(10, minMuestra * 5), Math.max(20, maxMuestra * 5));
    const margen = randomInt(2, 8);
    const confNivel = Math.max(80, Math.min(99, Math.round((minConf + maxConf) / 2)));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "inf.intervalo_confianza_concepto",
        fallback: "Un IC del {{conf}}% para la media es [{{a}}, {{b}}]. ¿Qué interpretación es correcta?",
        variables: { conf: confNivel, a: centro - margen, b: centro + margen },
      }),
      opciones: buildOpcionesUnicas(
        "Si repitiéramos el muestreo muchas veces, cerca del 95% de los intervalos construidos contendrían la media real.",
        [
          "La probabilidad de que la media real esté en este intervalo específico es exactamente 95%.",
          "El 95% de los datos individuales cae dentro de [a,b].",
          "El intervalo implica que el error de medición siempre es 5%.",
        ]
      ),
      indiceCorrecto: 0,
      explicacion: "La interpretación frecuentista del IC se refiere al método, no a un intervalo fijo aislado.",
    });
  }

  if (variante === "inf.tamano_muestra") {
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "inf.tamano_muestra",
        fallback: "Si aumenta el tamaño muestral n, ¿qué pasa con el error estándar de la media?",
        variables: {},
      }),
      opciones: buildOpcionesUnicas("Disminuye aproximadamente como 1/√n.", ["Aumenta con n.", "No cambia.", "Se vuelve exactamente 0 para cualquier n grande."]),
      indiceCorrecto: 0,
      explicacion: "El error estándar es proporcional a 1/√n.",
    });
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "inf.pvalor_concepto",
      fallback: "En una prueba de hipótesis, un p-valor pequeño suele indicar...",
      variables: {},
    }),
    opciones: buildOpcionesUnicas("Evidencia en contra de H0 bajo el modelo asumido.", ["Que H0 es verdadera.", "Que la hipótesis alternativa es falsa.", "Que la muestra está necesariamente sesgada."]),
    indiceCorrecto: 0,
    explicacion: "Un p-valor pequeño refleja baja compatibilidad de los datos con H0.",
  });
};

export default generarTema84;
