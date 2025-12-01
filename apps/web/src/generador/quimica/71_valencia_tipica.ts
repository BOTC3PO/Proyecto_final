// src/generators/quimica/71_valencia_tipica.ts
// src/generators/quimica/71_valencia_tipica.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface ElementoValencia {
  nombre: string;
  simbolo: string;
  valenciaCorrecta: string; // la expresamos como texto, p.ej. "+1"
  distracciones: string[];
}

const ELEMENTOS_VALENCIA: ElementoValencia[] = [
  {
    nombre: "sodio",
    simbolo: "Na",
    valenciaCorrecta: "+1",
    distracciones: ["+2", "+3", "−1"],
  },
  {
    nombre: "magnesio",
    simbolo: "Mg",
    valenciaCorrecta: "+2",
    distracciones: ["+1", "+3", "−2"],
  },
  {
    nombre: "aluminio",
    simbolo: "Al",
    valenciaCorrecta: "+3",
    distracciones: ["+1", "+2", "−3"],
  },
  {
    nombre: "cloro",
    simbolo: "Cl",
    valenciaCorrecta: "−1",
    distracciones: ["+1", "+2", "−2"],
  },
  {
    nombre: "oxígeno",
    simbolo: "O",
    valenciaCorrecta: "−2",
    distracciones: ["−1", "+2", "+4"],
  },
  {
    nombre: "calcio",
    simbolo: "Ca",
    valenciaCorrecta: "+2",
    distracciones: ["+1", "+3", "−2"],
  },
];

export const generarValenciaTipica: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * ELEMENTOS_VALENCIA.length);
  const el = ELEMENTOS_VALENCIA[index];

  // armamos opciones mezclando
  const opcionesSet = new Set<string>();
  opcionesSet.add(el.valenciaCorrecta);
  for (const d of el.distracciones) {
    if (opcionesSet.size >= 4) break;
    opcionesSet.add(d);
  }
  const opciones = Array.from(opcionesSet);
  // barajamos un poquito
  opciones.sort(() => Math.random() - 0.5);

  const indiceCorrecto = opciones.indexOf(el.valenciaCorrecta);

  const enunciado =
    `¿Cuál es la valencia típica más frecuente del elemento ${el.nombre} (${el.simbolo}) en sus compuestos más comunes?`;

  return {
    idTema: 71,
    tituloTema: "Valencia típica",
    dificultad,
    tipo: "quiz",
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "La valencia típica se relaciona con la familia en la tabla periódica: alcalinos (+1), alcalinotérreos (+2), " +
      "grupo 13 (+3), halógenos (−1), oxígeno (−2) en la mayoría de sus compuestos binarios, etc.",
  };
};
