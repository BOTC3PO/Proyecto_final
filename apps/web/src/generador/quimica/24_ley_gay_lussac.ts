// src/generators/quimica/24_ley_gay_lussac.ts
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
    p1Min: number;
    p1Max: number;
    t1Min: number;
    t1Max: number;
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
  const parsed = getCatalogoTemaSync("24_ley_gay_lussac");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 24_ley_gay_lussac.enunciados.json debe ser un array.");
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
    if (
      typeof data?.p1Min !== "number" ||
      typeof data?.p1Max !== "number" ||
      typeof data?.t1Min !== "number" ||
      typeof data?.t1Max !== "number" ||
      typeof data?.deltaTMin !== "number" ||
      typeof data?.deltaTMax !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }

    if (data.p1Min > data.p1Max || data.t1Min > data.t1Max || data.deltaTMin > data.deltaTMax) {
      throw new Error(`Rangos inválidos en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}

const CATALOGO = parseCatalogo();

export const generarLeyGayLussac: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 24_ley_gay_lussac.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const P1 = randFloat(selected.data.p1Min, selected.data.p1Max, 2);
  const T1 = randFloat(selected.data.t1Min, selected.data.t1Max, 0);
  const deltaT = randFloat(selected.data.deltaTMin, selected.data.deltaTMax, 0);

  const T2 = T1 + deltaT;
  const P2 = (P1 * T2) / T1;

  const P1R = parseFloat(P1.toFixed(2));
  const T1R = parseFloat(T1.toFixed(0));
  const T2R = parseFloat(T2.toFixed(0));
  const P2R = parseFloat(P2.toFixed(2));

  const ejercicio = {
    idTema: 24,
    tituloTema: "Ley de Gay-Lussac",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      P1: P1R,
      T1: T1R,
      T2: T2R,
    }),
    datos: {
      P1: P1R,
      T1: T1R,
      T2: T2R,
    },
    unidades: {
      P1: "atm",
      T1: "K",
      T2: "K",
      resultado: "atm",
    },
    resultado: P2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Aplica la ley de Gay-Lussac: P₁ / T₁ = P₂ / T₂.",
      "Despeja P₂: P₂ = P₁ · (T₂ / T₁).",
      "Sustituye las temperaturas en Kelvin y la presión inicial.",
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
