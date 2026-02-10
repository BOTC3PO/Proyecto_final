import { readFileSync } from "node:fs";
import { join } from "node:path";

export type DificultadCore = "basico" | "intermedio" | "avanzado";

interface ParametrosGeneracion {
  nivel: DificultadCore;
}

interface CatalogItemData {
  soluto: string;
  solvente: string;
  masaMolarSoluto: number;
  masaMolarSolvente: number;
  masaSolutoMin: number;
  masaSolutoMax: number;
  masaSolventeMin: number;
  masaSolventeMax: number;
  decimalesMasa: number;
  decimalesFraccion: number;
}

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: CatalogItemData;
}

export interface FraccionMolarGenerada {
  enunciado: string;
  resultado: {
    xSoluto: number;
    xSolvente: number;
  };
  datos: {
    masaSoluto: number;
    masaSolvente: number;
    molesSoluto: number;
    molesSolvente: number;
  };
  catalogRef: {
    materia: "quimica";
    tema: "19_fraccion_molar";
    itemId: number;
  };
}

const ORDEN_DIFICULTAD: Record<DificultadCore, number> = {
  basico: 0,
  intermedio: 1,
  avanzado: 2,
};

function cargarCatalogo(): CatalogItem[] {
  const candidatePaths = [
    join(__dirname, "enunciados.json"),
    join(__dirname, "../../../../src/generadores/quimica/19_fraccion_molar/enunciados.json"),
  ];

  let contenido: string | undefined;
  let lastError: unknown;

  for (const path of candidatePaths) {
    try {
      contenido = readFileSync(path, "utf-8");
      lastError = undefined;
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError || contenido === undefined) {
    throw new Error(`No se pudo leer enunciados.json para 19_fraccion_molar: ${String(lastError)}`);
  }

  let data: unknown;
  try {
    data = JSON.parse(contenido);
  } catch (error) {
    throw new Error(`enunciados.json inválido para 19_fraccion_molar: ${String(error)}`);
  }

  if (!Array.isArray(data)) {
    throw new Error("enunciados.json inválido para 19_fraccion_molar: se esperaba un array de ítems");
  }

  return data as CatalogItem[];
}

function randFloat(min: number, max: number, decimals: number): number {
  const value = Math.random() * (max - min) + min;
  return Number(value.toFixed(decimals));
}

function renderEnunciado(base: string, masaSoluto: number, masaSolvente: number): string {
  return base
    .replace("{{masaEtanol}}", String(masaSoluto))
    .replace("{{masaAgua}}", String(masaSolvente));
}

export function generarFraccionMolarDesdeCatalogo(
  params: ParametrosGeneracion
): FraccionMolarGenerada {
  const catalogo = cargarCatalogo();

  const pool = catalogo.filter(
    (item) => item.activo && ORDEN_DIFICULTAD[item.difficulty] <= ORDEN_DIFICULTAD[params.nivel]
  );

  if (pool.length === 0) {
    throw new Error(
      `No hay enunciados activos compatibles con nivel=${params.nivel} en 19_fraccion_molar`
    );
  }

  const item = pool[Math.floor(Math.random() * pool.length)]!;
  const masaSoluto = randFloat(item.data.masaSolutoMin, item.data.masaSolutoMax, item.data.decimalesMasa);
  const masaSolvente = randFloat(
    item.data.masaSolventeMin,
    item.data.masaSolventeMax,
    item.data.decimalesMasa
  );

  const molesSoluto = masaSoluto / item.data.masaMolarSoluto;
  const molesSolvente = masaSolvente / item.data.masaMolarSolvente;
  const nTotal = molesSoluto + molesSolvente;

  const xSoluto = Number((molesSoluto / nTotal).toFixed(item.data.decimalesFraccion));
  const xSolvente = Number((molesSolvente / nTotal).toFixed(item.data.decimalesFraccion));

  return {
    enunciado: renderEnunciado(item.enunciadoBase, masaSoluto, masaSolvente),
    resultado: {
      xSoluto,
      xSolvente,
    },
    datos: {
      masaSoluto,
      masaSolvente,
      molesSoluto,
      molesSolvente,
    },
    catalogRef: {
      materia: "quimica",
      tema: "19_fraccion_molar",
      itemId: item.id,
    },
  };
}

export function obtenerItemCatalogoPorHistorial(itemId: number): CatalogItem {
  const catalogo = cargarCatalogo();
  const item = catalogo.find((entry) => entry.id === itemId);

  if (!item) {
    throw new Error(`No existe itemId=${itemId} en catálogo 19_fraccion_molar`);
  }

  return item;
}
