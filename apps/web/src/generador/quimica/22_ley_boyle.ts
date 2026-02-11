// src/generators/quimica/22_ley_boyle.ts
import { type GeneratorFn, type NumericExercise, randFloat, choice } from "./generico";
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
    v1Min: number;
    v1Max: number;
    factorCompresionMin: number;
    factorCompresionMax: number;
  };
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];

function getNivelCore(nivel: string): DificultadCore {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  if (nivel === "dificil") return "avanzado";
  throw new Error(`Nivel de dificultad no soportado: ${nivel}`);
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}

function parseCatalogo(): CatalogItem[] {
  const parsed = getCatalogoTemaSync("22_ley_boyle");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 22_ley_boyle.enunciados.json debe ser un array.");
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
      typeof item.data?.p1Min !== "number" ||
      typeof item.data?.p1Max !== "number" ||
      typeof item.data?.v1Min !== "number" ||
      typeof item.data?.v1Max !== "number" ||
      typeof item.data?.factorCompresionMin !== "number" ||
      typeof item.data?.factorCompresionMax !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

const CATALOGO = parseCatalogo();

export const generarLeyBoyle: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 22_ley_boyle.enunciados.json.`
    );
  }

  const selected = choice(pool);

  const P1 = randFloat(selected.data.p1Min, selected.data.p1Max, 2);
  const V1 = randFloat(selected.data.v1Min, selected.data.v1Max, 2);
  const factorCompresion = randFloat(
    selected.data.factorCompresionMin,
    selected.data.factorCompresionMax,
    2
  );

  const V2 = V1 * factorCompresion;
  const P2 = (P1 * V1) / V2;

  const P1R = parseFloat(P1.toFixed(2));
  const V1R = parseFloat(V1.toFixed(2));
  const V2R = parseFloat(V2.toFixed(2));
  const P2R = parseFloat(P2.toFixed(2));

  const ejercicio = {
    idTema: 22,
    tituloTema: "Ley de Boyle",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      P1: P1R,
      V1: V1R,
      V2: V2R,
    }),
    datos: {
      P1: P1R,
      V1: V1R,
      V2: V2R,
    },
    unidades: {
      P1: "atm",
      V1: "L",
      V2: "L",
      resultado: "atm",
    },
    resultado: P2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Aplica la ley de Boyle: P₁·V₁ = P₂·V₂.",
      "Despeja P₂: P₂ = (P₁·V₁) / V₂.",
      "Sustituye los valores numéricos y calcula.",
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
