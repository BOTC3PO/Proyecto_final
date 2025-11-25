// src/generators/quimica/13_porcentaje_masa_masa.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarPorcentajeMasaMasa: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaSoluto = dificultad === "facil"
    ? randFloat(2, 10, 1)
    : randFloat(5, 20, 1);

  const masaDisolvente = dificultad === "facil"
    ? randFloat(20, 90, 1)
    : randFloat(30, 180, 1);

  const masaSolucion = masaSoluto + masaDisolvente;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const masaSolucionR = parseFloat(masaSolucion.toFixed(1));

  const porcentaje = (masaSolutoR / masaSolucionR) * 100;
  const resultado = parseFloat(porcentaje.toFixed(1));

  return {
    idTema: 13,
    tituloTema: "% m/m",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución disolviendo un soluto sólido en un disolvente líquido.\n" +
      `Si se disuelven ${masaSolutoR} g de soluto y la masa total de la solución resultante es ${masaSolucionR} g,\n` +
      "calcula la concentración en porcentaje masa/masa (% m/m) del soluto.",
    datos: {
      masaSoluto: masaSolutoR,
      masaSolucion: masaSolucionR,
    },
    unidades: {
      masaSoluto: "g",
      masaSolucion: "g",
      resultado: "% m/m",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que % m/m = (masa de soluto / masa de solución) · 100.",
      `Sustituye los datos: % m/m = (${masaSolutoR} g / ${masaSolucionR} g) · 100.`,
      "Realiza la división y multiplica por 100.",
      "Redondea el resultado a 1 decimal.",
    ],
  };
};
