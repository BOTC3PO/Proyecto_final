// src/generators/quimica/15_porcentaje_volumen_volumen.ts
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
    solutoMin: number;
    solutoMax: number;
    disolventeMin: number;
    disolventeMax: number;
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
  const parsed = getCatalogoTemaSync("15_porcentaje_volumen_volumen");

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 15_porcentaje_volumen_volumen/enunciados.json debe ser un array."
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

    if (
      typeof item.data?.solutoMin !== "number" ||
      typeof item.data?.solutoMax !== "number" ||
      typeof item.data?.disolventeMin !== "number" ||
      typeof item.data?.disolventeMax !== "number" ||
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

export const generarPorcentajeVolumenVolumen: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 15_porcentaje_volumen_volumen/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const volumenSoluto = randFloat(selected.data.solutoMin, selected.data.solutoMax, 1);
  const volumenDisolvente = randFloat(
    selected.data.disolventeMin,
    selected.data.disolventeMax,
    1
  );
  const volumenSolucion = volumenSoluto + volumenDisolvente;

  const volumenSolutoR = parseFloat(volumenSoluto.toFixed(1));
  const volumenSolucionR = parseFloat(volumenSolucion.toFixed(1));
  const porcentaje = (volumenSolutoR / volumenSolucionR) * 100;
  const resultado = parseFloat(porcentaje.toFixed(selected.data.decimales));

  return {
    idTema: 15,
    tituloTema: "% v/v",
    dificultad,
    tipo: "numeric",
    enunciado: renderEnunciado(selected.enunciadoBase, {
      volumenSoluto: volumenSolutoR,
      volumenSolucion: volumenSolucionR,
      decimalesResultado: selected.data.decimales,
    }),
    datos: {
      volumenSoluto: volumenSolutoR,
      volumenSolucion: volumenSolucionR,
    },
    unidades: {
      volumenSoluto: "mL",
      volumenSolucion: "mL",
      resultado: "% v/v",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que % v/v = (volumen de soluto / volumen de solución) · 100.",
      `Sustituye los datos: % v/v = (${volumenSolutoR} mL / ${volumenSolucionR} mL) · 100.`,
      "Realiza la división y multiplica por 100.",
      `Redondea el resultado a ${selected.data.decimales} decimal(es).`,
    ],
    catalogRef: {
      materia: "quimica",
      tema: "15_porcentaje_volumen_volumen",
      itemId: selected.id,
    },
  };
};
