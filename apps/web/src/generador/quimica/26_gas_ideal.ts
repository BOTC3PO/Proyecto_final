// src/generators/quimica/26_gas_ideal.ts
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
    nMin: number;
    nMax: number;
    tMin: number;
    tMax: number;
    vMin: number;
    vMax: number;
    decimalesN: number;
    decimalesT: number;
    decimalesV: number;
    R: number;
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
  const parsed = getCatalogoTemaSync("26_gas_ideal");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 26_gas_ideal.enunciados.json debe ser un array.");
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

    const data = item.data;
    if (
      typeof data?.nMin !== "number" ||
      typeof data?.nMax !== "number" ||
      typeof data?.tMin !== "number" ||
      typeof data?.tMax !== "number" ||
      typeof data?.vMin !== "number" ||
      typeof data?.vMax !== "number" ||
      typeof data?.decimalesN !== "number" ||
      typeof data?.decimalesT !== "number" ||
      typeof data?.decimalesV !== "number" ||
      typeof data?.R !== "number" ||
      data.nMin > data.nMax ||
      data.tMin > data.tMax ||
      data.vMin > data.vMax
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

export const generarGasIdeal: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 26_gas_ideal.enunciados.json.`
    );
  }

  const selected = choice(pool);

  const n = randFloat(selected.data.nMin, selected.data.nMax, selected.data.decimalesN);
  const T = randFloat(selected.data.tMin, selected.data.tMax, selected.data.decimalesT);
  const V = randFloat(selected.data.vMin, selected.data.vMax, selected.data.decimalesV);
  const P = (n * selected.data.R * T) / V;

  const nR = parseFloat(n.toFixed(selected.data.decimalesN));
  const TR = parseFloat(T.toFixed(selected.data.decimalesT));
  const VR = parseFloat(V.toFixed(selected.data.decimalesV));
  const PR = parseFloat(P.toFixed(2));

  const ejercicio = {
    idTema: 26,
    tituloTema: "Ecuación del gas ideal PV = nRT",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      V: VR,
      n: nR,
      T: TR,
      R: selected.data.R.toFixed(3),
    }),
    datos: {
      n: nR,
      T: TR,
      V: VR,
      R: selected.data.R,
    },
    unidades: {
      n: "mol",
      T: "K",
      V: "L",
      resultado: "atm",
    },
    resultado: PR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Escribe la ecuación del gas ideal: P·V = n·R·T.",
      "Despeja la presión: P = n·R·T / V.",
      "Sustituye el número de moles, la constante de los gases, la temperatura y el volumen.",
      "Redondea el resultado a 2 decimales.",
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
