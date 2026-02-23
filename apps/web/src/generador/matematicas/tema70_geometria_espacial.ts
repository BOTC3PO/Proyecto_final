import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, clampInt, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import type { GeometriaPlanaEspacialSpec } from "../../visualizadores/types";

const ID_TEMA = 70;
const TITULO = "Geometría espacial";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const punto3ToStr = (x: number, y: number, z: number): string => `(${x},${y},${z})`;

const simplificarRaiz = (n: number): string => {
  const raiz = Math.sqrt(n);
  return Number.isInteger(raiz) ? String(raiz) : `√${n}`;
};

const generarTema70: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["geo3d.distancia", "geo3d.punto_medio", "geo3d.plano_basico"] as const);
  const [minRaw, maxRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "vec");
  const lim = clampInt(Math.max(Math.abs(minRaw), Math.abs(maxRaw)), 4, dificultadCore === "basico" ? 10 : 16);

  if (variante === "geo3d.distancia") {
    const triples = pickRandom([
      [3, 4, 0],
      [2, 3, 6],
      [1, 2, 2],
      [2, 2, 1],
    ] as const);
    const signo = () => pickRandom([-1, 1]);
    const dx = triples[0] * signo();
    const dy = triples[1] * signo();
    const dz = triples[2] * signo();

    const x1 = randomInt(-lim, lim);
    const y1 = randomInt(-lim, lim);
    const z1 = randomInt(-lim, lim);
    const x2 = x1 + dx;
    const y2 = y1 + dy;
    const z2 = z1 + dz;
    const suma = dx * dx + dy * dy + dz * dz;

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "geo3d.distancia",
          fallback: "Calcula la distancia entre P={{P}} y Q={{Q}} en R3.",
          variables: { P: punto3ToStr(x1, y1, z1), Q: punto3ToStr(x2, y2, z2) },
        }),
        opciones: buildOpcionesUnicas(simplificarRaiz(suma), [Math.abs(dx) + Math.abs(dy) + Math.abs(dz), simplificarRaiz(Math.abs(dx + dy + dz)), simplificarRaiz(dx * dx + dy * dy)]),
        indiceCorrecto: 0,
        explicacion: "La distancia en 3D es √(Δx²+Δy²+Δz²).",
      }),
      visual: {
        kind: "geometria-plana-espacial" as const,
        title: "Distancia entre puntos en R³",
        description: `d = √(Δx²+Δy²+Δz²) = √${suma}`,
        figures: [{
          id: "seg3d",
          name: "Segmento PQ",
          dimension: "espacial",
          type: "otro",
          parameters: [
            { label: "Δx", value: dx },
            { label: "Δy", value: dy },
            { label: "Δz", value: dz },
          ],
          keyPoints: [
            { id: "P", label: "P", coordinates: [x1, y1, z1] },
            { id: "Q", label: "Q", coordinates: [x2, y2, z2] },
          ],
          formula: "d = √(Δx²+Δy²+Δz²)",
        }],
      } satisfies GeometriaPlanaEspacialSpec,
    };
  }

  if (variante === "geo3d.punto_medio") {
    const x1 = randomInt(-lim, lim);
    const y1 = randomInt(-lim, lim);
    const z1 = randomInt(-lim, lim);
    const x2 = x1 + 2 * randomInt(-5, 5);
    const y2 = y1 + 2 * randomInt(-5, 5);
    const z2 = z1 + 2 * randomInt(-5, 5);

    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const mz = (z1 + z2) / 2;

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "geo3d.punto_medio",
          fallback: "Halla el punto medio del segmento con extremos P={{P}} y Q={{Q}}.",
          variables: { P: punto3ToStr(x1, y1, z1), Q: punto3ToStr(x2, y2, z2) },
        }),
        opciones: buildOpcionesUnicas(punto3ToStr(mx, my, mz), [punto3ToStr(mx + 1, my, mz), punto3ToStr((x2 - x1) / 2, (y2 - y1) / 2, (z2 - z1) / 2), punto3ToStr((x1 + x2) / 3, (y1 + y2) / 3, (z1 + z2) / 3)]),
        indiceCorrecto: 0,
        explicacion: "El punto medio en 3D se obtiene promediando cada coordenada.",
      }),
      visual: {
        kind: "geometria-plana-espacial" as const,
        title: "Punto medio en R³",
        description: `M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)`,
        figures: [{
          id: "seg3d",
          name: "Segmento con punto medio",
          dimension: "espacial",
          type: "otro",
          parameters: [],
          keyPoints: [
            { id: "P", label: "P", coordinates: [x1, y1, z1] },
            { id: "M", label: "M (punto medio)", coordinates: [mx, my, mz] },
            { id: "Q", label: "Q", coordinates: [x2, y2, z2] },
          ],
          formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)",
        }],
      } satisfies GeometriaPlanaEspacialSpec,
    };
  }

  const a = randomInt(-6, 6) || 1;
  const b = randomInt(-6, 6) || -2;
  const c = randomInt(-6, 6) || 3;
  const d = randomInt(1, 20);

  return {
    ...crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "geo3d.plano_basico",
        fallback: "Dado el plano {{a}}x + {{b}}y + {{c}}z = {{d}}, ¿cuál es un vector normal al plano?",
        variables: { a, b, c, d },
      }),
      opciones: buildOpcionesUnicas(punto3ToStr(a, b, c), [punto3ToStr(d, a, b), punto3ToStr(-a, -b, c), punto3ToStr(a, c, b)]),
      indiceCorrecto: 0,
      explicacion: "En ax+by+cz=d, el vector normal puede tomarse como n=(a,b,c).",
    }),
    visual: {
      kind: "geometria-plana-espacial" as const,
      title: `Plano: ${a}x + ${b}y + ${c}z = ${d}`,
      description: "El vector normal al plano es n = (a, b, c).",
      figures: [{
        id: "plano",
        name: "Plano en R³",
        dimension: "espacial",
        type: "otro",
        parameters: [
          { label: "a", value: a },
          { label: "b", value: b },
          { label: "c", value: c },
          { label: "d", value: d },
        ],
        properties: [{ label: "Vector normal", value: punto3ToStr(a, b, c) }],
        formula: `${a}x + ${b}y + ${c}z = ${d}`,
      }],
    } satisfies GeometriaPlanaEspacialSpec,
  };
};

export default generarTema70;
