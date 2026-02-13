// src/generators/quimica/28_mezcla_gases.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import { getCatalogoTemaSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface RangoDato {
  min: number;
  max: number;
  decimales: number;
}

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    R: number;
    nA: RangoDato;
    nB: RangoDato;
    T: RangoDato;
    V: RangoDato;
  };
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];

function getNivelCore(nivel: string): DificultadCore {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  if (nivel === "dificil") return "avanzado";
  throw new Error(`Nivel de dificultad no soportado: ${nivel}`);
}

function validarRangoDato(rango: RangoDato | undefined, itemId: number, key: string): void {
  if (
    !rango ||
    typeof rango.min !== "number" ||
    typeof rango.max !== "number" ||
    typeof rango.decimales !== "number"
  ) {
    throw new Error(`Rango inválido para ${key} en catálogo para id=${itemId}.`);
  }
}

function parseCatalogo(): CatalogItem[] {
  const parsed = getCatalogoTemaSync("28_mezcla_gases");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo 28_mezcla_gases.enunciados.json debe ser un array.");
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

    if (typeof item.data?.R !== "number") {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }

    validarRangoDato(item.data.nA, item.id, "nA");
    validarRangoDato(item.data.nB, item.id, "nB");
    validarRangoDato(item.data.T, item.id, "T");
    validarRangoDato(item.data.V, item.id, "V");
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}


export const generarMezclaGases: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 28_mezcla_gases.enunciados.json.`
    );
  }

  const selected = choice(pool);

  const nA = randFloat(selected.data.nA.min, selected.data.nA.max, selected.data.nA.decimales);
  const nB = randFloat(selected.data.nB.min, selected.data.nB.max, selected.data.nB.decimales);
  const T = randFloat(selected.data.T.min, selected.data.T.max, selected.data.T.decimales);
  const V = randFloat(selected.data.V.min, selected.data.V.max, selected.data.V.decimales);
  const R = selected.data.R;

  const nTotal = nA + nB;

  // P_total = n_total · R · T / V
  const Ptotal = (nTotal * R * T) / V;
  const xA = nA / nTotal;
  const xB = nB / nTotal;
  const PA = xA * Ptotal;
  const PB = xB * Ptotal;

  const nAR = parseFloat(nA.toFixed(2));
  const nBR = parseFloat(nB.toFixed(2));
  const TR = parseFloat(T.toFixed(0));
  const VR = parseFloat(V.toFixed(1));
  const PtotalR = parseFloat(Ptotal.toFixed(2));
  const xAR = parseFloat(xA.toFixed(3));
  const xBR = parseFloat(xB.toFixed(3));
  const PAR = parseFloat(PA.toFixed(2));
  const PBR = parseFloat(PB.toFixed(2));

  const ejercicio = {
    idTema: 28,
    tituloTema: "Mezcla de gases (fracción molar, presión total)",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      nA: nAR,
      nB: nBR,
      T: TR,
      V: VR,
    }),
    datos: {
      nA: nAR,
      nB: nBR,
      T: TR,
      V: VR,
      R,
    },
    unidades: {
      nA: "mol",
      nB: "mol",
      T: "K",
      V: "L",
      resultado_Ptotal: "atm",
      resultado_PA: "atm",
      resultado_PB: "atm",
    },
    resultado: {
      Ptotal: PtotalR,
      xA: xAR,
      xB: xBR,
      PA: PAR,
      PB: PBR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Calcula los moles totales: n_total = n(A) + n(B).",
      "Aplica la ecuación de gas ideal para la mezcla: P_total = n_total·R·T / V.",
      "Halla las fracciones molares: x(A) = n(A)/n_total, x(B) = n(B)/n_total.",
      "Usa P_A = x(A)·P_total y P_B = x(B)·P_total para las presiones parciales.",
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
