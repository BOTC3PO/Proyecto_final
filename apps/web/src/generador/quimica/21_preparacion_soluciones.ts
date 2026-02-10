// src/generators/quimica/21_preparacion_soluciones.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/balanceo/21_preparacion_soluciones.enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    sustancia: string;
    masaMolar: number;
    molaridadMin: number;
    molaridadMax: number;
    volumenMin: number;
    volumenMax: number;
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
  let parsed: unknown;

  try {
    parsed = JSON.parse(catalogoRaw);
  } catch (error) {
    throw new Error(
      `Catálogo inválido en 21_preparacion_soluciones.enunciados.json: ${String(error)}`
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 21_preparacion_soluciones.enunciados.json debe ser un array."
    );
  }

  const items = parsed as CatalogItem[];
  const ids = new Set<number>();

  for (const item of items) {
    if (typeof item.id !== "number" || ids.has(item.id)) {
      throw new Error("Cada ítem del catálogo debe tener un id numérico único.");
    }
    ids.add(item.id);

    if (typeof item.activo !== "boolean" || typeof item.enunciadoBase !== "string") {
      throw new Error(`Campos obligatorios inválidos en catálogo para id=${item.id}.`);
    }

    if (!DIFICULTAD_ORDEN.includes(item.difficulty)) {
      throw new Error(`Dificultad inválida en catálogo para id=${item.id}.`);
    }

    if (
      typeof item.data?.sustancia !== "string" ||
      typeof item.data?.masaMolar !== "number" ||
      typeof item.data?.molaridadMin !== "number" ||
      typeof item.data?.molaridadMax !== "number" ||
      typeof item.data?.volumenMin !== "number" ||
      typeof item.data?.volumenMax !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }

    if (
      item.data.molaridadMin > item.data.molaridadMax ||
      item.data.volumenMin > item.data.volumenMax
    ) {
      throw new Error(`Rangos inválidos en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

const CATALOGO = parseCatalogo();

export function findPreparacionSolucionesCatalogItemById(itemId: number): CatalogItem {
  const item = CATALOGO.find((entry) => entry.id === itemId);
  if (!item) {
    throw new Error(
      `No existe itemId=${itemId} en 21_preparacion_soluciones.enunciados.json.`
    );
  }
  return item;
}

export const generarPreparacionSoluciones: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 21_preparacion_soluciones.enunciados.json.`
    );
  }

  const selected = choice(pool);

  const M = randFloat(selected.data.molaridadMin, selected.data.molaridadMax, 2);
  const V = randFloat(selected.data.volumenMin, selected.data.volumenMax, 2);
  const moles = M * V;
  const masa = moles * selected.data.masaMolar;

  const MR = parseFloat(M.toFixed(2));
  const VR = parseFloat(V.toFixed(2));
  const masaR = parseFloat(masa.toFixed(2));

  const ejercicio = {
    idTema: 21,
    tituloTema: "Preparación de soluciones (masa necesaria)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      sustancia: selected.data.sustancia,
      masaMolar: selected.data.masaMolar,
      molaridad: MR,
      volumen: VR,
    }),
    datos: {
      molaridad: MR,
      volumen: VR,
      masaMolar: selected.data.masaMolar,
    },
    unidades: {
      molaridad: "mol/L",
      volumen: "L",
      masaMolar: "g/mol",
      resultado: "g",
    },
    resultado: masaR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula primero los moles necesarios: n = M · V.",
      "Luego convierte moles a masa: m = n · M_molar.",
      "Sustituye los valores y redondea el resultado a 2 decimales.",
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
