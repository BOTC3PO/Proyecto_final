// src/generators/quimica/25_ley_combinada_gases.ts
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
    P1Min: number;
    P1Max: number;
    V1Min: number;
    V1Max: number;
    T1Min: number;
    T1Max: number;
    factorVolumenMin: number;
    factorVolumenMax: number;
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
  const parsed = getCatalogoTemaSync("25_ley_combinada_gases");

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 25_ley_combinada_gases.enunciados.json debe ser un array."
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

    const d = item.data;
    if (
      typeof d?.P1Min !== "number" ||
      typeof d?.P1Max !== "number" ||
      typeof d?.V1Min !== "number" ||
      typeof d?.V1Max !== "number" ||
      typeof d?.T1Min !== "number" ||
      typeof d?.T1Max !== "number" ||
      typeof d?.factorVolumenMin !== "number" ||
      typeof d?.factorVolumenMax !== "number" ||
      typeof d?.deltaTMin !== "number" ||
      typeof d?.deltaTMax !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}


export function getLeyCombinadaGasesCatalogItemById(itemId: number): CatalogItem {
  const item = parseCatalogo().find((catalogItem) => catalogItem.id === itemId);
  if (!item) {
    throw new Error(
      `No existe itemId=${itemId} en 25_ley_combinada_gases.enunciados.json.`
    );
  }
  return item;
}

export const generarLeyCombinadaGases: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 25_ley_combinada_gases.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const P1 = randFloat(selected.data.P1Min, selected.data.P1Max, 2);
  const V1 = randFloat(selected.data.V1Min, selected.data.V1Max, 2);
  const T1 = randFloat(selected.data.T1Min, selected.data.T1Max, 0);
  const factorVolumen = randFloat(
    selected.data.factorVolumenMin,
    selected.data.factorVolumenMax,
    2
  );
  const deltaT = randFloat(selected.data.deltaTMin, selected.data.deltaTMax, 0);

  const V2 = V1 * factorVolumen;
  const T2 = T1 + deltaT;
  const P2 = (P1 * V1 * T2) / (T1 * V2);

  const P1R = parseFloat(P1.toFixed(2));
  const V1R = parseFloat(V1.toFixed(2));
  const T1R = parseFloat(T1.toFixed(0));
  const V2R = parseFloat(V2.toFixed(2));
  const T2R = parseFloat(T2.toFixed(0));
  const P2R = parseFloat(P2.toFixed(2));

  const ejercicio = {
    idTema: 25,
    tituloTema: "Ley combinada de los gases",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      P1: P1R,
      V1: V1R,
      T1: T1R,
      V2: V2R,
      T2: T2R,
    }),
    datos: {
      P1: P1R,
      V1: V1R,
      T1: T1R,
      V2: V2R,
      T2: T2R,
    },
    unidades: {
      P1: "atm",
      V1: "L",
      T1: "K",
      V2: "L",
      T2: "K",
      resultado: "atm",
    },
    resultado: P2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Utiliza la ley combinada: (P₁·V₁)/T₁ = (P₂·V₂)/T₂.",
      "Despeja P₂: P₂ = (P₁·V₁·T₂) / (T₁·V₂).",
      "Sustituye los valores de P₁, V₁, T₁, V₂ y T₂ (temperaturas en Kelvin).",
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
