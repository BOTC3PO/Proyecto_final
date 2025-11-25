// src/generators/quimica/15_porcentaje_volumen_volumen.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarPorcentajeVolumenVolumen: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const volumenSoluto = dificultad === "facil"
    ? randFloat(5, 30, 1)     // mL de soluto
    : randFloat(10, 50, 1);

  const volumenDisolvente = dificultad === "facil"
    ? randFloat(70, 170, 1)   // mL de disolvente
    : randFloat(100, 300, 1);

  const volumenSolucion = volumenSoluto + volumenDisolvente;

  const volumenSolutoR = parseFloat(volumenSoluto.toFixed(1));
  const volumenSolucionR = parseFloat(volumenSolucion.toFixed(1));

  const porcentaje = (volumenSolutoR / volumenSolucionR) * 100;
  const resultado = parseFloat(porcentaje.toFixed(1));

  return {
    idTema: 15,
    tituloTema: "% v/v",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución mezclando dos líquidos totalmente miscibles.\n" +
      `Si se mezclan ${volumenSolutoR} mL de soluto con suficiente disolvente como para obtener ${volumenSolucionR} mL de solución,\n` +
      "calcula la concentración en porcentaje volumen/volumen (% v/v) del soluto.",
    datos: {
      volumenSoluto: volumenSolutoR,
      volumenSolucion: volumenSolucionR,
    },
    unidades: {
      volumenSoluto: "mL",
      volumenSolucion: "mL",
      resultado: "% v/v",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que % v/v = (volumen de soluto / volumen de solución) · 100.",
      `Sustituye los datos: % v/v = (${volumenSolutoR} mL / ${volumenSolucionR} mL) · 100.`,
      "Realiza la división y multiplica por 100.",
      "Redondea el resultado a 1 decimal.",
    ],
  };
};
