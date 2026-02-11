// src/generators/quimica/03_calculo_masa.ts
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
    sustancia: string;
    masaMolar: number;
    molesMin: number;
    molesMax: number;
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
  const parsed = getCatalogoTemaSync("03_calculo_masa");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 03_calculo_masa.enunciados.json debe ser un array.");
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
      typeof item.data?.molesMin !== "number" ||
      typeof item.data?.molesMax !== "number"
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

export const generarCalculoMasa: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 03_calculo_masa.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const moles = randFloat(selected.data.molesMin, selected.data.molesMax, 2);
  const masa = moles * selected.data.masaMolar;

  const ejercicio = {
    idTema: 3,
    tituloTema: "Cálculo de masa",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      moles,
      sustancia: selected.data.sustancia,
      masaMolar: selected.data.masaMolar,
    }),
    datos: { moles, masaMolar: selected.data.masaMolar },
    unidades: { moles: "mol", masaMolar: "g/mol", resultado: "g" },
    resultado: parseFloat(masa.toFixed(2)),
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Relación moles-masa",
      xAxis: { label: "Magnitud" },
      yAxis: { label: "Valor" },
      series: [
        {
          id: "moles-masa",
          label: selected.data.sustancia,
          data: [
            { x: "Moles (mol)", y: parseFloat(moles.toFixed(2)) },
            { x: "Masa (g)", y: parseFloat(masa.toFixed(2)) },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Usa la relación: m = n · M.",
      `Sustituye: m = ${moles} mol · ${selected.data.masaMolar} g/mol.`,
      "Redondea el resultado a 2 cifras decimales.",
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
