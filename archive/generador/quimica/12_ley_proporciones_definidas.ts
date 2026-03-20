// src/generators/quimica/12_ley_proporciones_definidas.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import { getCatalogoTemaSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    masaMuestra1Min: number;
    masaMuestra1Max: number;
    masaMuestra2Min: number;
    masaMuestra2Max: number;
    porcentajeXMin: number;
    porcentajeXMax: number;
  };
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];

function getNivelCore(nivel: string): DificultadCore {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  if (nivel === "dificil") return "avanzado";
  throw new Error(`Nivel de dificultad no soportado: ${nivel}`);
}

function parseCatalogo(): CatalogItem[] {
  const parsed = getCatalogoTemaSync("12_ley_proporciones_definidas");

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 12_ley_proporciones_definidas/enunciados.json debe ser un array."
    );
  }

  const items = parsed as CatalogItem[];
  const ids = new Set<number>();

  for (const item of items) {
    if (typeof item.id !== "number" || ids.has(item.id)) {
      throw new Error("Cada ítem del catálogo debe tener un id numérico único.");
    }
    ids.add(item.id);

    if (!DIFICULTAD_ORDEN.includes(item.difficulty)) {
      throw new Error(`Dificultad inválida en catálogo para id=${item.id}.`);
    }

    if (typeof item.activo !== "boolean" || typeof item.enunciadoBase !== "string") {
      throw new Error(`Campos obligatorios inválidos en catálogo para id=${item.id}.`);
    }

    if (
      typeof item.data?.masaMuestra1Min !== "number" ||
      typeof item.data?.masaMuestra1Max !== "number" ||
      typeof item.data?.masaMuestra2Min !== "number" ||
      typeof item.data?.masaMuestra2Max !== "number" ||
      typeof item.data?.porcentajeXMin !== "number" ||
      typeof item.data?.porcentajeXMax !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}


export function obtenerEnunciadoLeyProporcionesDefinidasPorItemId(
  itemId: number
): CatalogItem {
  const item = parseCatalogo().find((entry) => entry.id === itemId);
  if (!item) {
    throw new Error(`No existe itemId=${itemId} en 12_ley_proporciones_definidas/enunciados.json.`);
  }
  return item;
}

export const generarLeyProporcionesDefinidas: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const catalogo = parseCatalogo();
  const nivelCore = getNivelCore(dificultad);
  const maxLevel = DIFICULTAD_ORDEN.indexOf(nivelCore);

  const pool = catalogo.filter((item) => {
    if (!item.activo) return false;
    const itemLevel = DIFICULTAD_ORDEN.indexOf(item.difficulty);
    return itemLevel <= maxLevel;
  });

  if (pool.length === 0) {
    throw new Error(
      `No hay enunciados activos para nivel ${nivelCore} en 12_ley_proporciones_definidas/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masaMuestra1 = randFloat(
    selected.data.masaMuestra1Min,
    selected.data.masaMuestra1Max,
    2
  );
  const masaMuestra2 = randFloat(
    selected.data.masaMuestra2Min,
    selected.data.masaMuestra2Max,
    2
  );
  const porcentajeX = randFloat(selected.data.porcentajeXMin, selected.data.porcentajeXMax, 1);
  const fraccionX = porcentajeX / 100;

  const masaX1r = parseFloat((masaMuestra1 * fraccionX).toFixed(2));
  const masaX2r = parseFloat((masaMuestra2 * fraccionX).toFixed(2));
  const porcentajeMuestra1 = parseFloat(((masaX1r / masaMuestra1) * 100).toFixed(1));
  const resultado = parseFloat(((masaX2r / masaMuestra2) * 100).toFixed(1));

  const ejercicio = {
    idTema: 12,
    tituloTema: "Ley de las proporciones definidas",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaMuestra1: masaMuestra1.toFixed(2),
      masaX1: masaX1r.toFixed(2),
      masaMuestra2: masaMuestra2.toFixed(2),
      masaX2: masaX2r.toFixed(2),
    }),
    datos: {
      masaMuestra1,
      masaX1: masaX1r,
      masaMuestra2,
      masaX2: masaX2r,
    },
    unidades: {
      masaMuestra1: "g",
      masaX1: "g",
      masaMuestra2: "g",
      masaX2: "g",
      resultado: "%",
    },
    resultado,
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Porcentaje en masa de X",
      xAxis: { label: "Muestra" },
      yAxis: { label: "% en masa de X" },
      series: [
        {
          id: "porcentaje-x",
          label: "% X",
          data: [
            { x: "Muestra 1", y: porcentajeMuestra1 },
            { x: "Muestra 2", y: resultado },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula el porcentaje en masa de X en la segunda muestra: %X = (m(X) / m(muestra)) · 100.",
      `Sustituye los valores: %X = (${masaX2r} g / ${masaMuestra2.toFixed(2)} g) · 100.`,
      "Compara este porcentaje con el de la primera muestra: ambos deben ser prácticamente iguales.",
      "Esto ilustra que un compuesto puro siempre tiene la misma proporción en masa de sus elementos.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "12_ley_proporciones_definidas",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "12_ley_proporciones_definidas";
      itemId: number;
    };
  };

  return ejercicio;
};
