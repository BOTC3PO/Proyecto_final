// src/generators/quimica/27_presiones_parciales.ts
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
    gasA: string;
    gasB: string;
    nAMin: number;
    nAMax: number;
    nBMin: number;
    nBMax: number;
    pTotalMin: number;
    pTotalMax: number;
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
  const parsed = getCatalogoTemaSync("27_presiones_parciales");

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 27_presiones_parciales.enunciados.json debe ser un array."
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
      typeof item.data?.gasA !== "string" ||
      typeof item.data?.gasB !== "string" ||
      typeof item.data?.nAMin !== "number" ||
      typeof item.data?.nAMax !== "number" ||
      typeof item.data?.nBMin !== "number" ||
      typeof item.data?.nBMax !== "number" ||
      typeof item.data?.pTotalMin !== "number" ||
      typeof item.data?.pTotalMax !== "number"
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

export const generarPresionesParciales: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 27_presiones_parciales.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const nA = randFloat(selected.data.nAMin, selected.data.nAMax, 2);
  const nB = randFloat(selected.data.nBMin, selected.data.nBMax, 2);
  const Ptotal = randFloat(selected.data.pTotalMin, selected.data.pTotalMax, 2);

  const nTotal = nA + nB;
  const xA = nA / nTotal;
  const xB = nB / nTotal;
  const PA = xA * Ptotal;
  const PB = xB * Ptotal;

  const nAR = parseFloat(nA.toFixed(2));
  const nBR = parseFloat(nB.toFixed(2));
  const PtotalR = parseFloat(Ptotal.toFixed(2));
  const xAR = parseFloat(xA.toFixed(3));
  const xBR = parseFloat(xB.toFixed(3));
  const PAR = parseFloat(PA.toFixed(2));
  const PBR = parseFloat(PB.toFixed(2));

  const ejercicio = {
    idTema: 27,
    tituloTema: "Presiones parciales (Ley de Dalton)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      gasA: selected.data.gasA,
      gasB: selected.data.gasB,
      nA: nAR,
      nB: nBR,
      Ptotal: PtotalR,
    }),
    datos: {
      nA: nAR,
      nB: nBR,
      Ptotal: PtotalR,
    },
    unidades: {
      nA: "mol",
      nB: "mol",
      Ptotal: "atm",
      resultado_PA: "atm",
      resultado_PB: "atm",
    },
    resultado: {
      xA: xAR,
      xB: xBR,
      PA: PAR,
      PB: PBR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Calcula el número total de moles: n_total = n(A) + n(B).",
      "Halla las fracciones molares: x(A) = n(A)/n_total y x(B) = n(B)/n_total.",
      "Aplica la ley de Dalton: P_A = x(A) · P_total y P_B = x(B) · P_total.",
      "Redondea fracciones molares a 3 decimales y presiones parciales a 2.",
    ],
    catalogRef: {
      materia: "quimica",
      generador: "presiones_parciales",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      generador: "presiones_parciales";
      itemId: number;
    };
  };

  return ejercicio;
};
