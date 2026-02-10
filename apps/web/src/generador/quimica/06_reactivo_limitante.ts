// src/generators/quimica/06_reactivo_limitante.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";
import catalogoRaw from "../../../../../api/src/generadores/quimica/reactivo_limitante/enunciados.json?raw";

type DificultadCore = "basico" | "intermedio" | "avanzado";

type Reactivo = "N2" | "H2";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    reactivoLimitante: Reactivo;
    reactivoExceso: Reactivo;
    coefLimitante: number;
    coefExceso: number;
    coefProducto: number;
    producto: string;
    masaMolarLimitante: number;
    masaMolarExceso: number;
    molesLimitanteMin: number;
    molesLimitanteMax: number;
    factorExcesoMin: number;
    factorExcesoMax: number;
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
      `Catálogo inválido en reactivo_limitante/enunciados.json: ${String(error)}`
    );
  }

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo reactivo_limitante/enunciados.json debe ser un array.");
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
      !data ||
      (data.reactivoLimitante !== "N2" && data.reactivoLimitante !== "H2") ||
      (data.reactivoExceso !== "N2" && data.reactivoExceso !== "H2") ||
      typeof data.coefLimitante !== "number" ||
      typeof data.coefExceso !== "number" ||
      typeof data.coefProducto !== "number" ||
      typeof data.producto !== "string" ||
      typeof data.masaMolarLimitante !== "number" ||
      typeof data.masaMolarExceso !== "number" ||
      typeof data.molesLimitanteMin !== "number" ||
      typeof data.molesLimitanteMax !== "number" ||
      typeof data.factorExcesoMin !== "number" ||
      typeof data.factorExcesoMax !== "number"
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

export const generarReactivoLimitante: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en reactivo_limitante/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const nLimitante = randFloat(
    selected.data.molesLimitanteMin,
    selected.data.molesLimitanteMax,
    2
  );
  const nExcesoRequerido = (selected.data.coefExceso / selected.data.coefLimitante) * nLimitante;
  const factorExceso = randFloat(
    selected.data.factorExcesoMin,
    selected.data.factorExcesoMax,
    2
  );
  const nExceso = nExcesoRequerido * factorExceso;

  const masaLimitante = nLimitante * selected.data.masaMolarLimitante;
  const masaExceso = nExceso * selected.data.masaMolarExceso;

  const masaN2 =
    selected.data.reactivoLimitante === "N2"
      ? masaLimitante
      : selected.data.reactivoExceso === "N2"
        ? masaExceso
        : 0;
  const masaH2 =
    selected.data.reactivoLimitante === "H2"
      ? masaLimitante
      : selected.data.reactivoExceso === "H2"
        ? masaExceso
        : 0;

  const molesN2 = masaN2 / (selected.data.reactivoLimitante === "N2"
    ? selected.data.masaMolarLimitante
    : selected.data.masaMolarExceso);
  const molesH2 = masaH2 / (selected.data.reactivoLimitante === "H2"
    ? selected.data.masaMolarLimitante
    : selected.data.masaMolarExceso);

  const molesProducto =
    (selected.data.coefProducto / selected.data.coefLimitante) * nLimitante;

  const masaN2r = parseFloat(masaN2.toFixed(1));
  const masaH2r = parseFloat(masaH2.toFixed(1));
  const molesN2r = parseFloat(molesN2.toFixed(3));
  const molesH2r = parseFloat(molesH2.toFixed(3));
  const molesProductor = parseFloat(molesProducto.toFixed(3));

  const ejercicio = {
    idTema: 6,
    tituloTema: "Reactivo limitante",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaN2: masaN2r,
      masaH2: masaH2r,
    }),
    datos: {
      masaN2: masaN2r,
      masaH2: masaH2r,
      masaMolarN2: selected.data.reactivoLimitante === "N2"
        ? selected.data.masaMolarLimitante
        : selected.data.masaMolarExceso,
      masaMolarH2: selected.data.reactivoLimitante === "H2"
        ? selected.data.masaMolarLimitante
        : selected.data.masaMolarExceso,
    },
    unidades: {
      masaN2: "g",
      masaH2: "g",
      masaMolarN2: "g/mol",
      masaMolarH2: "g/mol",
      resultado_molesNH3: "mol",
    },
    resultado: {
      reactivoLimitante: selected.data.reactivoLimitante,
      molesProducto: molesProductor,
    },
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Relación molar inicial",
      xAxis: { label: "Reactivo" },
      yAxis: { label: "Moles" },
      series: [
        {
          id: "moles-reactivos",
          label: "Moles iniciales",
          data: [
            { x: "N₂", y: molesN2r },
            { x: "H₂", y: molesH2r },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte las masas de N₂ y H₂ a moles usando sus masas molares.",
      "Compara la relación n(N₂):n(H₂) con la estequiométrica 1:3.",
      "El que esté en menor proporción respecto a su coeficiente es el reactivo limitante.",
      "Usa el reactivo limitante para calcular los moles máximos de NH₃ producidos.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "reactivo_limitante",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "reactivo_limitante";
      itemId: number;
    };
  };

  return ejercicio;
};
