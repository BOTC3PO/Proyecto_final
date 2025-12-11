// src/ejercicios/fisica/temaEcuacionLentes.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class EcuacionLentesGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica/ecuacion_lentes";
  categorias: string[] = ["ecuacion_lentes"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let distanciaObjeto: number;
    let distanciaFocal: number;

    switch (params.nivel) {
      case "basico":
        distanciaFocal = this.randomInt(5, 20);
        distanciaObjeto = this.randomInt(25, 60);
        break;
      case "intermedio":
        distanciaFocal = this.randomInt(10, 40);
        distanciaObjeto = this.randomInt(50, 150);
        break;
      default:
        distanciaFocal = this.randomInt(15, 100);
        distanciaObjeto = this.randomInt(100, 500);
    }

    const resultado = calc.calcular({
      tipo: "ecuacion_lentes",
      payload: { distanciaObjeto, distanciaFocal },
    });

    const distanciaImagen = resultado.resultado;
    const opciones = this.mezclar([
      distanciaImagen.toString(),
      ...this.generarOpcionesIncorrectas(distanciaImagen, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("lentes"),
      materia: this.materia,
      categoria: "ecuacion_lentes",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["ecuacion_lentes"][0] ||
        `Un objeto está a ${distanciaObjeto} cm de una lente convergente con distancia focal ${distanciaFocal} cm. ¿A qué distancia se forma la imagen?`,
      tipoRespuesta: "multiple",
      datos: { distanciaObjeto, distanciaFocal },
      opciones: opciones.map((o) => `${o} cm`),
      respuestaCorrecta: `${distanciaImagen} cm`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "lentes", "imagen"],
      },
    };
  }
}
