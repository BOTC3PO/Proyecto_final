// src/generators/quimica/13_porcentaje_masa_masa.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/13_porcentaje_masa_masa/enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    masaSolutoMin: number;
    masaSolutoMax: number;
    masaDisolventeMin: number;
    masaDisolventeMax: number;
    decimales: number;
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
      `Catálogo inválido en enunciados.json (13_porcentaje_masa_masa): ${String(error)}`
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo enunciados.json (13_porcentaje_masa_masa) debe ser un array.");
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
      typeof item.data?.masaSolutoMin !== "number" ||
      typeof item.data?.masaSolutoMax !== "number" ||
      typeof item.data?.masaDisolventeMin !== "number" ||
      typeof item.data?.masaDisolventeMax !== "number" ||
      typeof item.data?.decimales !== "number"
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

export function obtenerCatalogoPorId(itemId: number): CatalogItem {
  const item = CATALOGO.find((entry) => entry.id === itemId);
  if (!item) {
    throw new Error(`No existe itemId=${itemId} en enunciados.json (13_porcentaje_masa_masa).`);
  }
  return item;
}

export const generarPorcentajeMasaMasa: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en enunciados.json (13_porcentaje_masa_masa).`
    );
  }

  const selected = choice(pool);

  const masaSoluto = randFloat(
    selected.data.masaSolutoMin,
    selected.data.masaSolutoMax,
    selected.data.decimales
  );

  const masaDisolvente = randFloat(
    selected.data.masaDisolventeMin,
    selected.data.masaDisolventeMax,
    selected.data.decimales
  );

  const masaSolucion = masaSoluto + masaDisolvente;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(selected.data.decimales));
  const masaSolucionR = parseFloat(masaSolucion.toFixed(selected.data.decimales));
  const porcentaje = (masaSolutoR / masaSolucionR) * 100;
  const resultado = parseFloat(porcentaje.toFixed(1));

  const ejercicio = {
    idTema: 13,
    tituloTema: "% m/m",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaSoluto: masaSolutoR,
      masaSolucion: masaSolucionR,
    }),
    datos: {
      masaSoluto: masaSolutoR,
      masaSolucion: masaSolucionR,
    },
    unidades: {
      masaSoluto: "g",
      masaSolucion: "g",
      resultado: "% m/m",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que % m/m = (masa de soluto / masa de solución) · 100.",
      `Sustituye los datos: % m/m = (${masaSolutoR} g / ${masaSolucionR} g) · 100.`,
      "Realiza la división y multiplica por 100.",
      "Redondea el resultado a 1 decimal.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "13_porcentaje_masa_masa",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "13_porcentaje_masa_masa";
      itemId: number;
    };
  };

  return ejercicio;
};
