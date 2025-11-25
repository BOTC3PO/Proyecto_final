// src/generators/quimica/14_porcentaje_masa_volumen.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarPorcentajeMasaVolumen: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaSoluto = dificultad === "facil"
    ? randFloat(2, 10, 1)
    : randFloat(5, 20, 1);        // g

  const volumenSolucion = dificultad === "facil"
    ? randFloat(50, 200, 0)       // mL
    : randFloat(100, 500, 0);

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const volumenSolucionR = parseFloat(volumenSolucion.toFixed(0));

  const porcentaje = (masaSolutoR / volumenSolucionR) * 100;
  const resultado = parseFloat(porcentaje.toFixed(1));

  return {
    idTema: 14,
    tituloTema: "% m/v",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución acuosa de un soluto sólido.\n" +
      `Si se disuelven ${masaSolutoR} g de soluto hasta obtener un volumen final de ${volumenSolucionR} mL de solución,\n` +
      "calcula la concentración en porcentaje masa/volumen (% m/v) del soluto.",
    datos: {
      masaSoluto: masaSolutoR,
      volumenSolucion: volumenSolucionR,
    },
    unidades: {
      masaSoluto: "g",
      volumenSolucion: "mL",
      resultado: "% m/v",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que % m/v = (masa de soluto en g / volumen de solución en mL) · 100.",
      `Sustituye los datos: % m/v = (${masaSolutoR} g / ${volumenSolucionR} mL) · 100.`,
      "Realiza la división y multiplica por 100.",
      "Redondea el resultado a 1 decimal.",
    ],
  };
};
