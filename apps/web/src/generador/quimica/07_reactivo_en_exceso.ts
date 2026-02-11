// src/generators/quimica/07_reactivo_en_exceso.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  randomBool,
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
    masaMolarN2: number;
    masaMolarH2: number;
    nN2Min: number;
    nN2Max: number;
    nH2Min: number;
    nH2Max: number;
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
  const parsed = getCatalogoTemaSync("07_reactivo_en_exceso");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo reactivo_en_exceso/enunciados.json debe ser un array.");
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
      typeof item.data?.masaMolarN2 !== "number" ||
      typeof item.data?.masaMolarH2 !== "number" ||
      typeof item.data?.nN2Min !== "number" ||
      typeof item.data?.nN2Max !== "number" ||
      typeof item.data?.nH2Min !== "number" ||
      typeof item.data?.nH2Max !== "number" ||
      typeof item.data?.factorExcesoMin !== "number" ||
      typeof item.data?.factorExcesoMax !== "number"
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

export const generarReactivoEnExceso: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en reactivo_en_exceso/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const limitarPor = randomBool() ? "N2" : "H2";

  let masaN2: number;
  let masaH2: number;
  let reactivoEnExceso: "N2" | "H2";
  let molesSobrantes: number;
  let masaSobrante: number;

  if (limitarPor === "N2") {
    const nN2 = randFloat(selected.data.nN2Min, selected.data.nN2Max, 2);
    const nH2req = 3 * nN2;
    const factorExceso = randFloat(selected.data.factorExcesoMin, selected.data.factorExcesoMax, 2);
    const nH2 = nH2req * factorExceso;

    masaN2 = nN2 * selected.data.masaMolarN2;
    masaH2 = nH2 * selected.data.masaMolarH2;

    molesSobrantes = nH2 - nH2req;
    masaSobrante = molesSobrantes * selected.data.masaMolarH2;
    reactivoEnExceso = "H2";
  } else {
    const nH2 = randFloat(selected.data.nH2Min, selected.data.nH2Max, 2);
    const nN2req = nH2 / 3;
    const factorExceso = randFloat(selected.data.factorExcesoMin, selected.data.factorExcesoMax, 2);
    const nN2 = nN2req * factorExceso;

    masaN2 = nN2 * selected.data.masaMolarN2;
    masaH2 = nH2 * selected.data.masaMolarH2;

    molesSobrantes = nN2 - nN2req;
    masaSobrante = molesSobrantes * selected.data.masaMolarN2;
    reactivoEnExceso = "N2";
  }

  const masaN2r = parseFloat(masaN2.toFixed(1));
  const masaH2r = parseFloat(masaH2.toFixed(1));
  const molesSobR = parseFloat(molesSobrantes.toFixed(3));
  const masaSobR = parseFloat(masaSobrante.toFixed(2));
  const molesN2r = parseFloat((masaN2 / selected.data.masaMolarN2).toFixed(3));
  const molesH2r = parseFloat((masaH2 / selected.data.masaMolarH2).toFixed(3));
  const sobranteN2 = reactivoEnExceso === "N2" ? molesSobR : 0;
  const sobranteH2 = reactivoEnExceso === "H2" ? molesSobR : 0;

  const ejercicio = {
    idTema: 7,
    tituloTema: "Reactivo en exceso",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      masaN2: masaN2r,
      masaH2: masaH2r,
    }),
    datos: {
      masaN2: masaN2r,
      masaH2: masaH2r,
      masaMolarN2: selected.data.masaMolarN2,
      masaMolarH2: selected.data.masaMolarH2,
    },
    unidades: {
      masaN2: "g",
      masaH2: "g",
      masaMolarN2: "g/mol",
      masaMolarH2: "g/mol",
      molesSobrantes: "mol",
      masaSobrante: "g",
    },
    resultado: {
      reactivoEnExceso,
      molesSobrantes: molesSobR,
      masaSobrante: masaSobR,
    },
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Reactivo en exceso (moles)",
      xAxis: { label: "Reactivo" },
      yAxis: { label: "Moles" },
      series: [
        {
          id: "moles-iniciales",
          label: "Iniciales",
          data: [
            { x: "N₂", y: molesN2r },
            { x: "H₂", y: molesH2r },
          ],
        },
        {
          id: "moles-sobrantes",
          label: "Sobrantes",
          data: [
            { x: "N₂", y: sobranteN2 },
            { x: "H₂", y: sobranteH2 },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Determina primero el reactivo limitante comparando los moles de cada reactivo con sus coeficientes.",
      "Calcula cuántos moles del otro reactivo se consumen según la estequiometría.",
      "Resta los moles consumidos de los moles iniciales del reactivo en exceso.",
      "Convierte los moles sobrantes a masa usando su masa molar.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "reactivo_en_exceso",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "reactivo_en_exceso";
      itemId: number;
    };
  };

  return ejercicio;
};
