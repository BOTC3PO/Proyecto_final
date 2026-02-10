// src/generators/quimica/01_balanceo.ts
import { type GeneratorFn, type NumericExercise, choice } from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/balanceo/01_balanceo.enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    coeficientes: number[];
    especies: string[];
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
      `Catálogo inválido en 01_balanceo.enunciados.json: ${String(error)}`
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 01_balanceo.enunciados.json debe ser un array.");
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

    if (!Array.isArray(item.data?.coeficientes) || !Array.isArray(item.data?.especies)) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }

    if (
      item.data.coeficientes.some((coef) => typeof coef !== "number") ||
      item.data.especies.some((esp) => typeof esp !== "string")
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

const CATALOGO = parseCatalogo();

export function getBalanceoCatalogItemById(itemId: number): CatalogItem {
  const item = CATALOGO.find((catalogItem) => catalogItem.id === itemId);
  if (!item) {
    throw new Error(`No existe itemId=${itemId} en 01_balanceo.enunciados.json.`);
  }
  return item;
}

export const generarBalanceo: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 01_balanceo.enunciados.json.`
    );
  }

  const selected = choice(pool);

  const ejercicio = {
    idTema: 1,
    tituloTema: "Balanceo de ecuaciones químicas",
    dificultad,
    tipo: "numeric" as const,
    enunciado: `Balancea la siguiente ecuación química (escribe los coeficientes en orden):\n${selected.enunciadoBase}`,
    datos: {},
    resultado: selected.data.coeficientes,
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Coeficientes estequiométricos",
      xAxis: { label: "Especie" },
      yAxis: { label: "Coeficiente" },
      series: [
        {
          id: "coeficientes",
          label: "Coeficiente",
          data: selected.data.especies.map((especie, index) => ({
            x: especie,
            y: selected.data.coeficientes[index] ?? 0,
          })),
        },
      ],
    },
    pasos: [
      "Cuenta los átomos de cada elemento en reactivos y productos.",
      "Ajusta los coeficientes para igualar la cantidad de átomos en ambos lados.",
      "Verifica que la ecuación quede balanceada en todos los elementos.",
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
