// src/generators/quimica/20_diluciones.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/20_diluciones/enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface DilucionData {
  C1Min: number;
  C1Max: number;
  V1Min: number;
  V1Max: number;
  factorDilucion: number;
  decimalsC1: number;
  decimalsV1: number;
  decimalsC2: number;
  pasos: string[];
}

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: DilucionData;
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
    throw new Error(`Catálogo inválido en 20_diluciones/enunciados.json: ${String(error)}`);
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 20_diluciones/enunciados.json debe ser un array.");
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

    const data = item.data;
    const numericFields: (keyof Omit<DilucionData, "pasos">)[] = [
      "C1Min",
      "C1Max",
      "V1Min",
      "V1Max",
      "factorDilucion",
      "decimalsC1",
      "decimalsV1",
      "decimalsC2",
    ];

    for (const key of numericFields) {
      if (typeof data?.[key] !== "number") {
        throw new Error(`Data inválida en catálogo para id=${item.id}: campo ${key}.`);
      }
    }

    if (!Array.isArray(data?.pasos) || data.pasos.some((paso) => typeof paso !== "string")) {
      throw new Error(`Data inválida en catálogo para id=${item.id}: campo pasos.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}

const CATALOGO = parseCatalogo();

export function getDilucionesCatalogItemById(itemId: number): CatalogItem {
  const found = CATALOGO.find((item) => item.id === itemId);
  if (!found) {
    throw new Error(`No existe itemId=${itemId} en 20_diluciones/enunciados.json.`);
  }
  return found;
}

export const generarDiluciones: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 20_diluciones/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const C1 = randFloat(selected.data.C1Min, selected.data.C1Max, selected.data.decimalsC1);
  const V1 = randFloat(selected.data.V1Min, selected.data.V1Max, selected.data.decimalsV1);
  const V2 = parseFloat((V1 * selected.data.factorDilucion).toFixed(selected.data.decimalsV1));
  const C2 = parseFloat(((C1 * V1) / V2).toFixed(selected.data.decimalsC2));

  const ejercicio = {
    idTema: 20,
    tituloTema: "Diluciones (C₁V₁ = C₂V₂)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, { C1, V1, V2 }),
    datos: {
      C1,
      V1,
      V2,
      factorDilucion: selected.data.factorDilucion,
    },
    unidades: {
      C1: "mol/L",
      V1: "mL",
      V2: "mL",
      resultado: "mol/L",
    },
    resultado: C2,
    toleranciaRelativa: 0.02,
    pasos: selected.data.pasos,
    catalogRef: {
      materia: "quimica",
      tema: "20_diluciones",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "20_diluciones";
      itemId: number;
    };
  };

  return ejercicio;
};
