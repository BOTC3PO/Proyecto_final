// src/generators/quimica/02_calculo_moles.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "./02_calculo_moles.enunciados.json?raw";

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
      `Catálogo inválido en 02_calculo_moles.enunciados.json: ${String(error)}`
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 02_calculo_moles.enunciados.json debe ser un array.");
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
      typeof item.data?.masaMolar !== "number" ||
      typeof item.data?.masaMin !== "number" ||
      typeof item.data?.masaMax !== "number"
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

export const generarCalculoMoles: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 02_calculo_moles.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masa = randFloat(selected.data.masaMin, selected.data.masaMax, 1);
  const moles = masa / selected.data.masaMolar;

  const ejercicio = {
    idTema: 2,
    tituloTema: "Cálculo de moles",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masa,
      sustancia: selected.data.sustancia,
      masaMolar: selected.data.masaMolar,
    }),
    datos: { masa, masaMolar: selected.data.masaMolar },
    unidades: { masa: "g", masaMolar: "g/mol", resultado: "mol" },
    resultado: parseFloat(moles.toFixed(3)),
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Relación masa-moles",
      xAxis: { label: "Magnitud" },
      yAxis: { label: "Valor" },
      series: [
        {
          id: "masa-moles",
          label: selected.data.sustancia,
          data: [
            { x: "Masa (g)", y: parseFloat(masa.toFixed(2)) },
            { x: "Moles (mol)", y: parseFloat(moles.toFixed(3)) },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Usa la relación: n = m / M.",
      `Sustituye: n = ${masa} g / ${selected.data.masaMolar} g/mol.`,
      "Redondea el resultado a 3 cifras decimales.",
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
