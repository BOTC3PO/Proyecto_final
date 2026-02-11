// src/generators/quimica/23_ley_charles.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import { getCatalogoTemaSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface LeyCharlesCatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    v1Min: number;
    v1Max: number;
    t1Min: number;
    t1Max: number;
    deltaTMin: number;
    deltaTMax: number;
    decimalesV1: number;
    decimalesTemperatura: number;
    decimalesResultado: number;
  };
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];

function getNivelCore(nivel: string): DificultadCore {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  if (nivel === "dificil") return "avanzado";
  throw new Error(`Nivel de dificultad no soportado: ${nivel}`);
}

function parseCatalogo(): LeyCharlesCatalogItem[] {
  const parsed = getCatalogoTemaSync("23_ley_charles");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 23_ley_charles.enunciados.json debe ser un array.");
  }

  const items = parsed as LeyCharlesCatalogItem[];
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

    const d = item.data;
    if (
      typeof d?.v1Min !== "number" ||
      typeof d?.v1Max !== "number" ||
      typeof d?.t1Min !== "number" ||
      typeof d?.t1Max !== "number" ||
      typeof d?.deltaTMin !== "number" ||
      typeof d?.deltaTMax !== "number" ||
      typeof d?.decimalesV1 !== "number" ||
      typeof d?.decimalesTemperatura !== "number" ||
      typeof d?.decimalesResultado !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }

    if (d.v1Min > d.v1Max || d.t1Min > d.t1Max || d.deltaTMin > d.deltaTMax) {
      throw new Error(`Rangos inválidos en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}

const CATALOGO = parseCatalogo();

export function getLeyCharlesCatalogItemById(itemId: number): LeyCharlesCatalogItem {
  const item = CATALOGO.find((entry) => entry.id === itemId);

  if (!item) {
    throw new Error(`No existe itemId=${itemId} en 23_ley_charles.enunciados.json.`);
  }

  return item;
}

export const generarLeyCharles: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 23_ley_charles.enunciados.json.`
    );
  }

  const selected = choice(pool);

  const V1 = randFloat(selected.data.v1Min, selected.data.v1Max, selected.data.decimalesV1);
  const T1 = randFloat(selected.data.t1Min, selected.data.t1Max, selected.data.decimalesTemperatura);
  const deltaT = randFloat(
    selected.data.deltaTMin,
    selected.data.deltaTMax,
    selected.data.decimalesTemperatura
  );

  const T2 = T1 + deltaT;
  const V2 = (V1 * T2) / T1;

  const V1R = parseFloat(V1.toFixed(selected.data.decimalesV1));
  const T1R = parseFloat(T1.toFixed(selected.data.decimalesTemperatura));
  const T2R = parseFloat(T2.toFixed(selected.data.decimalesTemperatura));
  const V2R = parseFloat(V2.toFixed(selected.data.decimalesResultado));

  const ejercicio = {
    idTema: 23,
    tituloTema: "Ley de Charles",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      V1: V1R,
      T1: T1R,
      T2: T2R,
    }),
    datos: {
      V1: V1R,
      T1: T1R,
      T2: T2R,
    },
    unidades: {
      V1: "L",
      T1: "K",
      T2: "K",
      resultado: "L",
    },
    resultado: V2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Aplica la ley de Charles: V₁ / T₁ = V₂ / T₂.",
      "Despeja V₂: V₂ = V₁ · (T₂ / T₁).",
      "Sustituye los valores de V₁, T₁ y T₂ (en Kelvin).",
      "Redondea el resultado a 2 decimales.",
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
