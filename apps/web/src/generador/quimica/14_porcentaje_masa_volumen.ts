import {
  type GeneratorFn,
  type NumericExercise,
  choice,
  randFloat,
} from "./generico";
import { getCatalogoTemaSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    soluto: string;
    masaSolutoMin: number;
    masaSolutoMax: number;
    volumenSolucionMin: number;
    volumenSolucionMax: number;
    decimalesMasa: number;
    decimalesVolumen: number;
  };
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];
const CATALOGO_TEMA = "14_porcentaje_masa_volumen";

function getNivelCore(nivel: string): DificultadCore {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  if (nivel === "dificil") return "avanzado";
  throw new Error(`Nivel de dificultad no soportado: ${nivel}`);
}

function parseCatalogo(): CatalogItem[] {
  const parsed = getCatalogoTemaSync("14_porcentaje_masa_volumen");

  if (!Array.isArray(parsed)) {
    throw new Error(`El catálogo ${CATALOGO_TEMA}/enunciados.json debe ser un array.`);
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
      typeof item.data?.soluto !== "string" ||
      typeof item.data?.masaSolutoMin !== "number" ||
      typeof item.data?.masaSolutoMax !== "number" ||
      typeof item.data?.volumenSolucionMin !== "number" ||
      typeof item.data?.volumenSolucionMax !== "number" ||
      typeof item.data?.decimalesMasa !== "number" ||
      typeof item.data?.decimalesVolumen !== "number"
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

export function getCatalogItemById(itemId: number): CatalogItem {
  const item = CATALOGO.find((entry) => entry.id === itemId);
  if (!item) {
    throw new Error(`No existe itemId=${itemId} en ${CATALOGO_TEMA}/enunciados.json.`);
  }
  return item;
}

export const generarPorcentajeMasaVolumen: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en ${CATALOGO_TEMA}/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masaSoluto = randFloat(
    selected.data.masaSolutoMin,
    selected.data.masaSolutoMax,
    selected.data.decimalesMasa
  );
  const volumenSolucion = randFloat(
    selected.data.volumenSolucionMin,
    selected.data.volumenSolucionMax,
    selected.data.decimalesVolumen
  );

  const porcentaje = (masaSoluto / volumenSolucion) * 100;
  const resultado = parseFloat(porcentaje.toFixed(1));

  return {
    idTema: 14,
    tituloTema: "% m/v",
    dificultad,
    tipo: "numeric",
    enunciado: renderEnunciado(selected.enunciadoBase, {
      soluto: selected.data.soluto,
      masaSoluto,
      volumenSolucion,
    }),
    datos: {
      masaSoluto,
      volumenSolucion,
    },
    unidades: {
      masaSoluto: "g",
      volumenSolucion: "mL",
      resultado: "% m/v",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que % m/v = (masa de soluto en g / volumen de solución en mL) · 100.",
      `Sustituye los datos: % m/v = (${masaSoluto} g / ${volumenSolucion} mL) · 100.`,
      "Realiza la división y multiplica por 100.",
      "Redondea el resultado a 1 decimal.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: CATALOGO_TEMA,
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "14_porcentaje_masa_volumen";
      itemId: number;
    };
  };
};
