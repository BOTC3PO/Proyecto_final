// src/generators/quimica/05_relaciones_molares.ts
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
    ecuacion: string;
    nombreReactivo: string;
    nombreProducto: string;
    coefReactivo: number;
    coefProducto: number;
    nReactivoMin: number;
    nReactivoMax: number;
    nReactivoDecimales: number;
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
  const parsed = getCatalogoTemaSync("05_relaciones_molares");

  if (!Array.isArray(parsed)) {
    throw new Error("El catálogo relaciones_molares/enunciados.json debe ser un array.");
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
      typeof item.data?.ecuacion !== "string" ||
      typeof item.data?.nombreReactivo !== "string" ||
      typeof item.data?.nombreProducto !== "string" ||
      typeof item.data?.coefReactivo !== "number" ||
      typeof item.data?.coefProducto !== "number" ||
      typeof item.data?.nReactivoMin !== "number" ||
      typeof item.data?.nReactivoMax !== "number" ||
      typeof item.data?.nReactivoDecimales !== "number"
    ) {
      throw new Error(`Data inválida en catálogo para id=${item.id}.`);
    }
  }

  return items;
}

function renderEnunciado(base: string, values: Record<string, number | string>): string {
  return base.replaceAll(/\{\{(\w+)\}\}/g, (_, key: string) => String(values[key] ?? ""));
}


export const generarRelacionesMolares: GeneratorFn = (
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
      `No hay enunciados activos para nivel ${nivelCore} en relaciones_molares/enunciados.json.`
    );
  }

  const selected = choice(pool);
  const nReactivo = randFloat(
    selected.data.nReactivoMin,
    selected.data.nReactivoMax,
    selected.data.nReactivoDecimales
  );
  const nProducto = nReactivo * (selected.data.coefProducto / selected.data.coefReactivo);

  const ejercicio = {
    idTema: 5,
    tituloTema: "Relaciones molares entre reactivos y productos",
    dificultad,
    tipo: "numeric" as const,
    enunciado: renderEnunciado(selected.enunciadoBase, {
      ecuacion: selected.data.ecuacion,
      nReactivo,
      nombreReactivo: selected.data.nombreReactivo,
      nombreProducto: selected.data.nombreProducto,
    }),
    datos: {
      nReactivo,
      coefReactivo: selected.data.coefReactivo,
      coefProducto: selected.data.coefProducto,
    },
    unidades: {
      nReactivo: "mol",
      resultado: "mol",
    },
    resultado: parseFloat(nProducto.toFixed(3)),
    visualSpec: {
      kind: "chart" as const,
      chartType: "bar" as const,
      title: "Relación molar reactivo-producto",
      xAxis: { label: "Sustancia" },
      yAxis: { label: "Moles" },
      series: [
        {
          id: "relacion-molar",
          label: "Moles",
          data: [
            {
              x: selected.data.nombreReactivo,
              y: parseFloat(nReactivo.toFixed(selected.data.nReactivoDecimales)),
            },
            { x: selected.data.nombreProducto, y: parseFloat(nProducto.toFixed(2)) },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Identifica los coeficientes estequiométricos de la ecuación balanceada.",
      `Relación: n(${selected.data.nombreProducto}) / n(${selected.data.nombreReactivo}) = ` +
        `${selected.data.coefProducto} / ${selected.data.coefReactivo}.`,
      `Calcula: n(${selected.data.nombreProducto}) = ${nReactivo} · (${selected.data.coefProducto}/${selected.data.coefReactivo}).`,
      "Redondea el resultado a 3 cifras decimales.",
    ],
    catalogRef: {
      materia: "quimica",
      tema: "relaciones_molares",
      itemId: selected.id,
    },
  } as NumericExercise & {
    catalogRef: {
      materia: "quimica";
      tema: "relaciones_molares";
      itemId: number;
    };
  };

  return ejercicio;
};
