// src/generators/quimica/30_cambio_entalpia.ts
import { type GeneratorFn, type NumericExercise, randFloat, choice } from "./generico";
import { getCatalogoTemaSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    reaccion: string;
    masaMolarCH4: number;
    deltaHMolar: number;
    masaMin: number;
    masaMax: number;
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
  const parsed = getCatalogoTemaSync("30_cambio_entalpia");

  if (!Array.isArray(parsed)) {
    throw new Error(
      "El catálogo 30_cambio_entalpia.enunciados.json debe ser un array."
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
      typeof item.data?.reaccion !== "string" ||
      typeof item.data?.masaMolarCH4 !== "number" ||
      typeof item.data?.deltaHMolar !== "number" ||
      typeof item.data?.masaMin !== "number" ||
      typeof item.data?.masaMax !== "number"
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

export function getCambioEntalpiaCatalogItemById(itemId: number): CatalogItem {
  const item = CATALOGO.find((entry) => entry.id === itemId);
  if (!item) {
    throw new Error(
      `No existe itemId=${itemId} en 30_cambio_entalpia.enunciados.json para quimica/balanceo.`
    );
  }

  return item;
}

export const generarCambioEntalpia: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en 30_cambio_entalpia.enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masaCH4 = randFloat(selected.data.masaMin, selected.data.masaMax, 1);
  const nCH4 = masaCH4 / selected.data.masaMolarCH4;
  const deltaH = nCH4 * selected.data.deltaHMolar;

  const masaCH4R = parseFloat(masaCH4.toFixed(1));
  const deltaHR = parseFloat(deltaH.toFixed(1));

  const ejercicio = {
    idTema: 30,
    tituloTema: "Cambio de entalpía ΔH por ecuación química",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      reaccion: selected.data.reaccion,
      deltaHMolar: selected.data.deltaHMolar,
      masaCH4: masaCH4R,
    }),
    datos: {
      masaCH4: masaCH4R,
      masaMolarCH4: selected.data.masaMolarCH4,
      deltaHMolar: selected.data.deltaHMolar,
    },
    unidades: {
      masaCH4: "g",
      masaMolarCH4: "g/mol",
      deltaHMolar: "kJ/mol",
      resultado: "kJ",
    },
    resultado: deltaHR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de CH₄ a moles: n = m / M.",
      "Usa el cambio de entalpía molar: ΔH_total = n · (ΔH° por mol).",
      `Sustituye el número de moles y el valor de ${selected.data.deltaHMolar} kJ/mol.`,
      "Redondea el resultado a 1 decimal (será negativo porque la reacción es exotérmica).",
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
