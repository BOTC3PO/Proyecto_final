// src/generators/quimica/29_calor.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/balanceo/29_calor.enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    sustancia: string;
    c: number;
    mMin: number;
    mMax: number;
    deltaTMin: number;
    deltaTMax: number;
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
  let parsed: unknown;

  try {
    parsed = JSON.parse(catalogoRaw);
  } catch (error) {
    throw new Error(
      `Catálogo inválido en 29_calor.enunciados.json: ${String(error)}`
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 29_calor.enunciados.json debe ser un array.");
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
      typeof item.data?.sustancia !== "string" ||
      typeof item.data?.c !== "number" ||
      typeof item.data?.mMin !== "number" ||
      typeof item.data?.mMax !== "number" ||
      typeof item.data?.deltaTMin !== "number" ||
      typeof item.data?.deltaTMax !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}

const CATALOGO = parseCatalogo();

export function getCalorCatalogItemById(itemId: number): CatalogItem {
  const item = CATALOGO.find((catalogItem) => catalogItem.id === itemId);

  if (!item) {
    throw new Error(`No existe itemId=${itemId} en 29_calor.enunciados.json.`);
  }

  return item;
}

export const generarCalorQ: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const nivelCore = getNivelCore(dificultad);
  const maxLevel = DIFICULTAD_ORDEN.indexOf(nivelCore);

  const pool = CATALOGO.filter((item) => {
    if (!item.activo) return false;
    const itemLevel = DIFICULTAD_ORDEN.indexOf(item.difficulty);
    return itemLevel <= maxLevel;
  });

  if (pool.length === 0) {
    throw new Error(
      `No hay enunciados activos para nivel ${nivelCore} en 29_calor.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const m = randFloat(selected.data.mMin, selected.data.mMax, 0);
  const deltaT = randFloat(selected.data.deltaTMin, selected.data.deltaTMax, 0);

  const mR = parseFloat(m.toFixed(0));
  const dTR = parseFloat(deltaT.toFixed(0));
  const Q = mR * selected.data.c * dTR;
  const QR = parseFloat(Q.toFixed(0));

  const ejercicio = {
    idTema: 29,
    tituloTema: "Cálculo de calor: Q = m·c·ΔT",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      sustancia: selected.data.sustancia,
      m: mR,
      deltaT: dTR,
      c: selected.data.c,
    }),
    datos: {
      m: mR,
      c: selected.data.c,
      deltaT: dTR,
    },
    unidades: {
      m: "g",
      c: "J/g·°C",
      deltaT: "°C",
      resultado: "J",
    },
    resultado: QR,
    pasos: [
      "Escribe la expresión: Q = m·c·ΔT.",
      "Sustituye los valores de masa, calor específico y variación de temperatura.",
      "Multiplica y redondea el resultado al joule más cercano.",
    ],
    catalogRef: {
      materia: "quimica",
      generador: "balanceo",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      generador: "balanceo";
      itemId: number;
    };
  };

  return ejercicio;
};
