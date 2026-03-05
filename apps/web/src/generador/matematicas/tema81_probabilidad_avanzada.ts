import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, construirEnunciado, formatNum } from "./temas56_85_helpers";
import { combinatoria, fraccionReducida } from "./temas81_85_helpers";

const ID_TEMA = 81;
const TITULO = "Probabilidad avanzada";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const generarTema81: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["prob.condicional", "prob.union_interseccion", "prob.combinatoria_simple"] as const);
  const [minP, maxP] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "p");
  const [minTotal, maxTotal] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "total");
  const [minN, maxN] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "n");

  if (variante === "prob.condicional") {
    const bDen = pickRandom([4, 5, 8, 10]);
    const bNum = randomInt(1, bDen - 1);
    const aDen = pickRandom([4, 5, 8, 10]);
    const aNum = randomInt(1, aDen - 1);
    const interNum = randomInt(1, Math.min(aNum * bDen, bNum * aDen));
    const interDen = aDen * bDen;

    const pA = aNum / aDen;
    const pB = bNum / bDen;
    const _pInter = interNum / interDen;
    const correcta = fraccionReducida(interNum * bDen, interDen * bNum);
    const distractor1 = fraccionReducida(interNum * aDen, interDen * aNum);
    const distractor2 = formatNum(pA * pB);
    const distractor3 = formatNum(Math.min(1, pA + pB));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "prob.condicional",
        fallback: "Si P(A)={{pA}}, P(B)={{pB}} y P(A∩B)={{pInter}}, ¿cuál es P(A|B)?",
        variables: {
          pA: fraccionReducida(aNum, aDen),
          pB: fraccionReducida(bNum, bDen),
          pInter: fraccionReducida(interNum, interDen),
        },
      }),
      opciones: buildOpcionesUnicas(correcta, [distractor1, distractor2, distractor3]),
      indiceCorrecto: 0,
      explicacion: "Por definición, P(A|B)=P(A∩B)/P(B).",
    });
  }

  if (variante === "prob.union_interseccion") {
    const minPct = Math.max(2, Math.min(7, Math.round(minP)));
    const maxPct = Math.max(minPct, Math.min(7, Math.round(maxP)));
    const pA = randomInt(minPct, maxPct) * 10;
    const pB = randomInt(minPct, maxPct) * 10;
    const minInter = Math.max(0, pA + pB - 100);
    const maxInter = Math.min(pA, pB, 40);
    const pInter = randomInt(minInter / 10, Math.max(minInter / 10, maxInter / 10)) * 10;
    const correcta = `${pA + pB - pInter}%`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "prob.union_interseccion",
        fallback: "Si P(A)={{pA}}%, P(B)={{pB}}% y P(A∩B)={{pInter}}%, calcula P(A∪B).",
        variables: { pA, pB, pInter },
      }),
      opciones: buildOpcionesUnicas(correcta, [`${pA + pB}%`, `${Math.max(0, pA + pB - 2 * pInter)}%`, `${pInter}%`]),
      indiceCorrecto: 0,
      explicacion: "Se aplica inclusión-exclusión: P(A∪B)=P(A)+P(B)-P(A∩B).",
    });
  }

  const total = Math.max(5, Math.min(12, randomInt(Math.max(5, minTotal), Math.max(5, maxTotal))));
  const extraidas = Math.max(2, Math.min(3, randomInt(Math.max(2, minN), Math.max(2, Math.min(maxN, total - 1)))));
  const rojas = Math.max(2, Math.min(total - 1, Math.round(total * 0.4)));
  const favorables = combinatoria(rojas, 1) * combinatoria(total - rojas, 1);
  const totalFormas = combinatoria(total, extraidas);
  const correcta = fraccionReducida(favorables, totalFormas);
  const conReemplazo = formatNum(2 * (rojas / total) * ((total - rojas) / total));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "prob.combinatoria_simple",
      fallback: "De una urna con {{rojas}} bolas rojas y {{azules}} azules se extraen {{n}} bolas sin reemplazo. ¿Probabilidad de obtener exactamente 1 roja?",
      variables: { rojas, azules: total - rojas, n: extraidas },
    }),
    opciones: buildOpcionesUnicas(correcta, [formatNum(combinatoria(rojas, 1) / totalFormas), conReemplazo, formatNum(combinatoria(total - rojas, 2) / totalFormas)]),
    indiceCorrecto: 0,
    explicacion: "La probabilidad exacta es C(2,1)·C(3,1)/C(5,2)=6/10=3/5.",
  });
};

export default generarTema81;
