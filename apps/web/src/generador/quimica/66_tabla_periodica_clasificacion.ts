// src/generators/quimica/66_tabla_periodica_clasificacion.ts
// src/generators/quimica/66_tabla_periodica_clasificacion.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";
import { PERIODIC_TABLE_ELEMENTS } from "./periodicTableData";

type TipoElemento = "metal" | "no metal" | "metaloide";

interface ElementoClasificacion {
  simbolo: string;
  nombre: string;
  tipo: TipoElemento;
}

const ELEMENTOS_CLASIFICACION: ElementoClasificacion[] = [
  { simbolo: "Na", nombre: "sodio", tipo: "metal" },
  { simbolo: "Fe", nombre: "hierro", tipo: "metal" },
  { simbolo: "Cu", nombre: "cobre", tipo: "metal" },
  { simbolo: "O", nombre: "oxígeno", tipo: "no metal" },
  { simbolo: "N", nombre: "nitrógeno", tipo: "no metal" },
  { simbolo: "S", nombre: "azufre", tipo: "no metal" },
  { simbolo: "Si", nombre: "silicio", tipo: "metaloide" },
  { simbolo: "B", nombre: "boro", tipo: "metaloide" },
  { simbolo: "Ge", nombre: "germanio", tipo: "metaloide" },
];

export const generarClasificacionTablaPeriodica: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, ELEMENTOS_CLASIFICACION.length - 1);
  const el = ELEMENTOS_CLASIFICACION[index];

  const opciones: string[] = ["metal", "no metal", "metaloide"];
  const indiceCorrecto = opciones.indexOf(el.tipo);

  const enunciado =
    `El elemento ${el.nombre} (${el.simbolo}) pertenece a la tabla periódica.\n` +
    "¿Cómo se clasifica según su naturaleza química?";

  return {
    idTema: 66,
    tituloTema: "Clasificación (metal / no metal / metaloide)",
    dificultad,
    tipo: "quiz",
    enunciado,
    opciones,
    indiceCorrecto,
    visualSpec: {
      kind: "chem-periodic-table",
      title: "Clasificación en la tabla periódica",
      description: "Colores por naturaleza química del elemento.",
      highlightProperty: {
        key: "classification",
        label: "Clasificación química",
      },
      scale: {
        type: "categorical",
        colors: ["#f59e0b", "#22c55e", "#8b5cf6"],
      },
      elements: PERIODIC_TABLE_ELEMENTS,
      focusElements: [el.simbolo],
    },
    explicacion:
      "Los metales suelen estar a la izquierda y centro de la tabla, los no metales a la derecha " +
      "y los metaloides en la “escalera” intermedia (B, Si, Ge, As, Sb, Te, etc.).",
  };
};
