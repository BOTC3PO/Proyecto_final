// src/generators/quimica/11_ley_proporciones_multiples.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randInt,
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
    masaX: number;
    masaY1Min: number;
    masaY1Max: number;
    razonMin: number;
    razonMax: number;
    ruidoMin: number;
    ruidoMax: number;
    decimales: number;
    toleranciaRelativa: number;
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
  const parsed = getCatalogoTemaSync("11_ley_proporciones_multiples");

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 11_ley_proporciones_multiples/enunciados.json debe ser un array."
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
      typeof item.data?.masaX !== "number" ||
      typeof item.data?.masaY1Min !== "number" ||
      typeof item.data?.masaY1Max !== "number" ||
      typeof item.data?.razonMin !== "number" ||
      typeof item.data?.razonMax !== "number" ||
      typeof item.data?.ruidoMin !== "number" ||
      typeof item.data?.ruidoMax !== "number" ||
      typeof item.data?.decimales !== "number" ||
      typeof item.data?.toleranciaRelativa !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}


export const generarLeyProporcionesMultiples: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const catalogo = parseCatalogo();
  const nivelCore = getNivelCore(dificultad);
  const maxLevel = DIFICULTAD_ORDEN.indexOf(nivelCore);

  const pool = catalogo.filter((item) => {
    if (!item.activo) return false;
    const itemLevel = DIFICULTAD_ORDEN.indexOf(item.difficulty);
    return itemLevel <= maxLevel;
  });

  if (pool.length === 0) {
    throw new Error(
      `No hay enunciados activos para nivel ${nivelCore} en 11_ley_proporciones_multiples/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masaY1Base = randInt(selected.data.masaY1Min, selected.data.masaY1Max);
  const razonEntera = randInt(selected.data.razonMin, selected.data.razonMax);
  const masaY2Base = masaY1Base * razonEntera;

  const masaY1 = parseFloat(
    (masaY1Base + randFloat(selected.data.ruidoMin, selected.data.ruidoMax, selected.data.decimales)).toFixed(
      selected.data.decimales
    )
  );

  const masaY2 = parseFloat(
    (masaY2Base + randFloat(selected.data.ruidoMin, selected.data.ruidoMax, selected.data.decimales)).toFixed(
      selected.data.decimales
    )
  );

  const razon = parseFloat((masaY2 / masaY1).toFixed(2));

  const ejercicio = {
    idTema: 11,
    tituloTema: "Ley de proporciones múltiples",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaY1,
      masaY2,
    }),
    datos: {
      masaX_compuestoA: selected.data.masaX,
      masaY_compuestoA: masaY1,
      masaX_compuestoB: selected.data.masaX,
      masaY_compuestoB: masaY2,
    },
    unidades: {
      masaX_compuestoA: "g",
      masaY_compuestoA: "g",
      masaX_compuestoB: "g",
      masaY_compuestoB: "g",
      resultado: "adimensional",
    },
    resultado: razon,
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Masas de Y en compuestos",
      xAxis: { label: "Compuesto" },
      yAxis: { label: "Masa de Y (g)" },
      series: [
        {
          id: "masas-y",
          label: "Masa de Y",
          data: [
            { x: "A", y: masaY1 },
            { x: "B", y: masaY2 },
          ],
        },
      ],
    },
    toleranciaRelativa: selected.data.toleranciaRelativa,
    pasos: [
      "Escribe la razón entre las masas de Y: razón = m(Y en B) / m(Y en A).",
      "Sustituye los valores numéricos dados para m(Y en B) y m(Y en A).",
      "Calcula el cociente y obsérvalo: debería ser cercano a un número entero sencillo.",
      "Esa relación entera es una manifestación de la ley de las proporciones múltiples.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "11_ley_proporciones_multiples",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "11_ley_proporciones_multiples";
      itemId: number;
    };
  };

  return ejercicio;
};
