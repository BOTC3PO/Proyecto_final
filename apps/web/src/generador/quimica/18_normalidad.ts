// src/generators/quimica/18_normalidad.ts
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
    solutoNombre: string;
    formula: string;
    masaMolar: number;
    valencia: number;
    masaMin: number;
    masaMax: number;
    volumenMin: number;
    volumenMax: number;
    masaDecimales: number;
    volumenDecimales: number;
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
  const parsed = getCatalogoTemaSync("18_normalidad");

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
      typeof item.data?.solutoNombre !== "string" ||
      typeof item.data?.formula !== "string" ||
      typeof item.data?.masaMolar !== "number" ||
      typeof item.data?.valencia !== "number" ||
      typeof item.data?.masaMin !== "number" ||
      typeof item.data?.masaMax !== "number" ||
      typeof item.data?.volumenMin !== "number" ||
      typeof item.data?.volumenMax !== "number" ||
      typeof item.data?.masaDecimales !== "number" ||
      typeof item.data?.volumenDecimales !== "number"
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

export const generarNormalidad: GeneratorFn = (dificultad = "media"): NumericExercise => {
  const nivelCore = getNivelCore(dificultad);
  const maxLevel = DIFICULTAD_ORDEN.indexOf(nivelCore);

  const pool = CATALOGO.filter((item) => {
    if (!item.activo) return false;
    const itemLevel = DIFICULTAD_ORDEN.indexOf(item.difficulty);
    return itemLevel <= maxLevel;
  });

  if (pool.length === 0) {
    throw new Error(
      `No hay enunciados activos para nivel ${nivelCore} en 18_normalidad/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masaSoluto = randFloat(
    selected.data.masaMin,
    selected.data.masaMax,
    selected.data.masaDecimales
  );
  const volumenLitros = randFloat(
    selected.data.volumenMin,
    selected.data.volumenMax,
    selected.data.volumenDecimales
  );

  const moles = masaSoluto / selected.data.masaMolar;
  const equivalentes = moles * selected.data.valencia;
  const normalidad = equivalentes / volumenLitros;

  const resultado = parseFloat(normalidad.toFixed(3));

  const ejercicio = {
    idTema: 18,
    tituloTema: "Normalidad (N)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      solutoNombre: selected.data.solutoNombre,
      formula: selected.data.formula,
      masaMolar: selected.data.masaMolar,
      masaSoluto,
      volumenLitros,
      valencia: selected.data.valencia,
    }),
    datos: {
      masaSoluto,
      masaMolar: selected.data.masaMolar,
      volumen: volumenLitros,
      valencia: selected.data.valencia,
    },
    unidades: {
      masaSoluto: "g",
      masaMolar: "g/mol",
      volumen: "L",
      resultado: "eq/L",
    },
    resultado,
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa del soluto a moles: n = m / M.",
      "Calcula equivalentes: eq = n · valencia.",
      "Aplica normalidad: N = eq / V.",
      "Redondea el resultado a 3 cifras decimales.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "18_normalidad",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "18_normalidad";
      itemId: number;
    };
  };

  return ejercicio;
};
