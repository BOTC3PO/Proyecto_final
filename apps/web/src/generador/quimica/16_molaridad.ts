// src/generators/quimica/16_molaridad.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/16_molaridad/enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    sustancia: string;
    masaMolar: number;
    masaMin: number;
    masaMax: number;
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
      throw new Error(`El campo activo es inválido para id=${item.id}.`);
    }

    if (!DIFICULTAD_ORDEN.includes(item.difficulty)) {
      throw new Error(`Dificultad inválida en catálogo para id=${item.id}.`);
    }

    if (typeof item.enunciadoBase !== "string") {
      throw new Error(`El campo enunciadoBase es inválido para id=${item.id}.`);
    }

    if (
      typeof item.data?.sustancia !== "string" ||
      typeof item.data?.masaMolar !== "number" ||
      typeof item.data?.masaMin !== "number" ||
      typeof item.data?.masaMax !== "number" ||
      typeof item.data?.volumenMin !== "number" ||
      typeof item.data?.volumenMax !== "number"
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

export const generarMolaridad: GeneratorFn = (
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
  const masaSoluto = randFloat(selected.data.masaMin, selected.data.masaMax, 1);
  const volumenLitros = randFloat(selected.data.volumenMin, selected.data.volumenMax, 2);

  const moles = masaSoluto / selected.data.masaMolar;
  const molaridad = moles / volumenLitros;

  const ejercicio = {
    idTema: 16,
    tituloTema: "Molaridad (M)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaSoluto: parseFloat(masaSoluto.toFixed(1)),
      sustancia: selected.data.sustancia,
      masaMolar: selected.data.masaMolar,
      volumen: parseFloat(volumenLitros.toFixed(2)),
    }),
    datos: {
      masaSoluto: parseFloat(masaSoluto.toFixed(1)),
      masaMolar: selected.data.masaMolar,
      volumen: parseFloat(volumenLitros.toFixed(2)),
    },
    unidades: {
      masaSoluto: "g",
      masaMolar: "g/mol",
      volumen: "L",
      resultado: "mol/L",
    },
    resultado: parseFloat(molaridad.toFixed(3)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula los moles de soluto con n = m / M (masa entre masa molar).",
      "Usa la expresión de molaridad: C = n / V.",
      "Sustituye los valores y conserva las unidades en mol/L.",
      "Redondea el resultado final a 3 cifras decimales.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "16_molaridad",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "16_molaridad";
      itemId: number;
    };
  };

  return ejercicio;
};

export function getMolaridadCatalogItemById(itemId: number): CatalogItem {
  const found = CATALOGO.find((item) => item.id === itemId);
  if (!found) {
    throw new Error(`No existe itemId=${itemId} en 16_molaridad/enunciados.json.`);
  }
  return found;
}
