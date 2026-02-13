// src/generators/quimica/08_rendimiento_teorico.ts
import {
  type GeneratorFn,
  type NumericExercise,
  choice,
  randFloat,
} from "./generico";
import { getCatalogoTemaSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface CatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data: {
    reactivo: string;
    producto: string;
    reaccion: string;
    masaMolarReactivo: number;
    masaMolarProducto: number;
    masaMin: number;
    masaMax: number;
    decimalesMasa: number;
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
  const parsed = getCatalogoTemaSync("08_rendimiento_teorico");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo rendimiento_teorico/enunciados.json debe ser un array.");
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
      typeof item.data?.reactivo !== "string" ||
      typeof item.data?.producto !== "string" ||
      typeof item.data?.reaccion !== "string" ||
      typeof item.data?.masaMolarReactivo !== "number" ||
      typeof item.data?.masaMolarProducto !== "number" ||
      typeof item.data?.masaMin !== "number" ||
      typeof item.data?.masaMax !== "number" ||
      typeof item.data?.decimalesMasa !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}


export const generarRendimientoTeorico: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en rendimiento_teorico/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const masaH2 = randFloat(
    selected.data.masaMin,
    selected.data.masaMax,
    selected.data.decimalesMasa
  );

  const nReactivo = masaH2 / selected.data.masaMolarReactivo;
  const masaProductoTeorica = nReactivo * selected.data.masaMolarProducto;

  const masaReactivoR = parseFloat(masaH2.toFixed(selected.data.decimalesMasa));
  const masaProductoR = parseFloat(masaProductoTeorica.toFixed(2));

  const ejercicio = {
    idTema: 8,
    tituloTema: "Rendimiento teórico",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      reaccion: selected.data.reaccion,
      masaH2: masaReactivoR,
    }),
    datos: {
      masaReactivo: masaReactivoR,
      masaMolarReactivo: selected.data.masaMolarReactivo,
      masaMolarProducto: selected.data.masaMolarProducto,
    },
    unidades: {
      masaReactivo: "g",
      masaMolarReactivo: "g/mol",
      masaMolarProducto: "g/mol",
      resultado: "g",
    },
    resultado: masaProductoR,
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Masa teórica de producto",
      xAxis: { label: "Sustancia" },
      yAxis: { label: "Masa (g)" },
      series: [
        {
          id: "masas",
          label: "Masa",
          data: [
            { x: `${selected.data.reactivo} (reactivo)`, y: masaReactivoR },
            { x: `${selected.data.producto} (teórico)`, y: masaProductoR },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      `Convierte la masa de ${selected.data.reactivo} a moles: n = m / M.`,
      "Aplica la relación estequiométrica 1:1 entre H₂ y H₂O en la reacción balanceada.",
      `Calcula la masa teórica de ${selected.data.producto}: m = n · M.`,
      "Redondea el resultado final según el enunciado.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "rendimiento_teorico",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "rendimiento_teorico";
      itemId: number;
    };
  };

  return ejercicio;
};
