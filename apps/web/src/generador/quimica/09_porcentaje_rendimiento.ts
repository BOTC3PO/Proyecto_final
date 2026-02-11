// src/generators/quimica/09_porcentaje_rendimiento.ts
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
    masaH2Min: number;
    masaH2Max: number;
    decimalesMasaH2: number;
    factorRealMin: number;
    factorRealMax: number;
    decimalesFactorReal: number;
    masaMolarH2: number;
    masaMolarH2O: number;
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
  const parsed = getCatalogoTemaSync("09_porcentaje_rendimiento");

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

    if (!DIFICULTAD_ORDEN.includes(item.difficulty)) {
      throw new Error(`Dificultad inválida en catálogo para id=${item.id}.`);
    }

    if (typeof item.activo !== "boolean" || typeof item.enunciadoBase !== "string") {
      throw new Error(`Campos obligatorios inválidos en catálogo para id=${item.id}.`);
    }

    if (
      typeof item.data?.masaH2Min !== "number" ||
      typeof item.data?.masaH2Max !== "number" ||
      typeof item.data?.decimalesMasaH2 !== "number" ||
      typeof item.data?.factorRealMin !== "number" ||
      typeof item.data?.factorRealMax !== "number" ||
      typeof item.data?.decimalesFactorReal !== "number" ||
      typeof item.data?.masaMolarH2 !== "number" ||
      typeof item.data?.masaMolarH2O !== "number"
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

export function obtenerItemCatalogoPorId(itemId: number): CatalogItem {
  const item = CATALOGO.find((catalogItem) => catalogItem.id === itemId);
  if (!item) {
    throw new Error(`No existe itemId=${itemId} en enunciados.json.`);
  }
  return item;
}

export const generarPorcentajeRendimiento: GeneratorFn = (
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
  const masaH2 = randFloat(
    selected.data.masaH2Min,
    selected.data.masaH2Max,
    selected.data.decimalesMasaH2
  );

  const nH2 = masaH2 / selected.data.masaMolarH2;
  const masaTeoricaH2O = nH2 * selected.data.masaMolarH2O;
  const factorReal = randFloat(
    selected.data.factorRealMin,
    selected.data.factorRealMax,
    selected.data.decimalesFactorReal
  );
  const masaRealH2O = masaTeoricaH2O * factorReal;

  const masaH2R = parseFloat(masaH2.toFixed(selected.data.decimalesMasaH2));
  const masaTeoricaH2OR = parseFloat(masaTeoricaH2O.toFixed(2));
  const masaRealH2OR = parseFloat(masaRealH2O.toFixed(2));
  const porcentajeRendimiento = (masaRealH2OR / masaTeoricaH2OR) * 100;
  const porcentajeR = parseFloat(porcentajeRendimiento.toFixed(1));

  const ejercicio = {
    idTema: 9,
    tituloTema: "Porcentaje de rendimiento",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaH2: masaH2R,
      masaTeoricaH2O: masaTeoricaH2OR,
      masaRealH2O: masaRealH2OR,
    }),
    datos: {
      masaH2: masaH2R,
      masaTeoricaH2O: masaTeoricaH2OR,
      masaRealH2O: masaRealH2OR,
    },
    unidades: {
      masaH2: "g",
      masaTeoricaH2O: "g",
      masaRealH2O: "g",
      resultado: "%",
    },
    resultado: porcentajeR,
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Rendimiento real vs teórico",
      xAxis: { label: "Masa (g)" },
      yAxis: { label: "Valor" },
      series: [
        {
          id: "rendimiento",
          label: "Agua obtenida",
          data: [
            { x: "Teórica", y: masaTeoricaH2OR },
            { x: "Real", y: masaRealH2OR },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula el rendimiento teórico de agua (ya dado en el enunciado).",
      "Aplica la fórmula: % rendimiento = (masa real / masa teórica) · 100.",
      "Sustituye las masas y redondea el resultado a 1 decimal.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "09_porcentaje_rendimiento",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "09_porcentaje_rendimiento";
      itemId: number;
    };
  };

  return ejercicio;
};
