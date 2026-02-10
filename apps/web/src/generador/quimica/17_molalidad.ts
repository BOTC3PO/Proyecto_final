// src/generators/quimica/17_molalidad.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/17_molalidad/enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    soluto: string;
    formula: string;
    masaMolar: number;
    masaSolutoMin: number;
    masaSolutoMax: number;
    masaDisolventeMin: number;
    masaDisolventeMax: number;
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
    throw new Error(`Catálogo inválido en enunciados.json: ${String(error)}`);
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo enunciados.json debe ser un array.");
  }

  const items = parsed as CatalogItem[];
  const ids = new Set<number>();

  for (const item of items) {
    if (typeof item.id !== "number" || ids.has(item.id)) {
      throw new Error("Cada ítem del catálogo debe tener un id numérico único.");
    }
    ids.add(item.id);

    if (typeof item.activo !== "boolean") {
      throw new Error(`Campo activo inválido en catálogo para id=${item.id}.`);
    }

    if (!DIFICULTAD_ORDEN.includes(item.difficulty)) {
      throw new Error(`Dificultad inválida en catálogo para id=${item.id}.`);
    }

    if (typeof item.enunciadoBase !== "string") {
      throw new Error(`enunciadoBase inválido en catálogo para id=${item.id}.`);
    }

    if (
      typeof item.data?.soluto !== "string" ||
      typeof item.data?.formula !== "string" ||
      typeof item.data?.masaMolar !== "number" ||
      typeof item.data?.masaSolutoMin !== "number" ||
      typeof item.data?.masaSolutoMax !== "number" ||
      typeof item.data?.masaDisolventeMin !== "number" ||
      typeof item.data?.masaDisolventeMax !== "number"
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

export function getMolalidadCatalogItemById(itemId: number): CatalogItem {
  const item = CATALOGO.find((catalogItem) => catalogItem.id === itemId);

  if (!item) {
    throw new Error(`No existe el itemId=${itemId} en enunciados.json de 17_molalidad.`);
  }

  return item;
}

export const generarMolalidad: GeneratorFn = (
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
    throw new Error(`No hay enunciados activos para nivel ${nivelCore} en enunciados.json.`);
  }

  const selected = choice(pool);
  const masaSoluto = randFloat(selected.data.masaSolutoMin, selected.data.masaSolutoMax, 1);
  const masaDisolvente = randFloat(
    selected.data.masaDisolventeMin,
    selected.data.masaDisolventeMax,
    1
  );

  const molesSoluto = masaSoluto / selected.data.masaMolar;
  const kgDisolvente = masaDisolvente / 1000;
  const molalidad = molesSoluto / kgDisolvente;

  const ejercicio = {
    idTema: 17,
    tituloTema: "Molalidad (m)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      soluto: selected.data.soluto,
      formula: selected.data.formula,
      masaMolar: selected.data.masaMolar,
      masaSoluto,
      masaDisolvente,
    }),
    datos: {
      masaSoluto: parseFloat(masaSoluto.toFixed(1)),
      masaMolar: selected.data.masaMolar,
      masaDisolvente: parseFloat(masaDisolvente.toFixed(1)),
    },
    unidades: {
      masaSoluto: "g",
      masaMolar: "g/mol",
      masaDisolvente: "g",
      resultado: "mol/kg",
    },
    resultado: parseFloat(molalidad.toFixed(3)),
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de soluto a moles: n = m / M.",
      "Convierte la masa de disolvente de gramos a kilogramos.",
      "Aplica la definición de molalidad: m = n / (kg de disolvente).",
      "Redondea el resultado a 3 cifras decimales.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "17_molalidad",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "17_molalidad";
      itemId: number;
    };
  };

  return ejercicio;
};
