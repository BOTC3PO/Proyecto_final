// src/ejercicios/fisica/temaDensidad.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class DensidadGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/fluidos/densidad";
  categorias: string[] = ["densidad"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const calcularDensidad = Math.random() > 0.3;
    let masa: number;
    let volumen: number;
    let densidad: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 1000);
        volumen = this.randomInt(50, 500);
        densidad = this.redondear(masa / volumen, 2);
        break;
      case "intermedio":
        masa = this.randomInt(500, 5000);
        volumen = this.randomInt(100, 2000);
        densidad = this.redondear(masa / volumen, 3);
        break;
      default:
        masa = this.randomInt(1000, 10000);
        volumen = this.randomInt(500, 5000);
        densidad = this.redondear(masa / volumen, 3);
    }

    let datos: any;
    let enunciado: string;
    let respuesta: string;
    let unidad: string;

    if (calcularDensidad) {
      datos = { masa, volumen };
      enunciado = `Un objeto tiene masa ${masa} g y volumen ${volumen} cm³. ¿Cuál es su densidad?`;
      respuesta = densidad.toString();
      unidad = "g/cm³";
    } else {
      datos = { densidad, volumen };
      masa = this.redondear(densidad * volumen);
      enunciado = `Un material con densidad ${densidad} g/cm³ ocupa ${volumen} cm³. ¿Cuál es su masa?`;
      respuesta = masa.toString();
      unidad = "g";
    }

    const resultado = calc.calcular({
      tipo: calcularDensidad ? "densidad" : "masa_desde_densidad",
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("densidad"),
      materia: this.materia,
      categoria: "densidad",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["densidad"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "densidad", "masa-volumen"],
      },
    };
  }
}
