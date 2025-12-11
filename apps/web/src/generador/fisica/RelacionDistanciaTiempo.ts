// src/ejercicios/fisica/temaRelacionDistanciaTiempo.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class RelacionDistanciaTiempoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/relacion_distancia_tiempo";
  categorias: string[] = ["relacion_distancia_tiempo"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    // Elegimos qué variable calcular
    const modo = ["distancia", "velocidad", "tiempo"][this.randomInt(0, 2)];

    // Generamos valores base (en MRU)
    let velocidad: number;
    let tiempo: number;

    switch (params.nivel) {
      case "basico":
        velocidad = this.randomInt(5, 25);   // m/s
        tiempo = this.randomInt(2, 10);      // s
        break;
      case "intermedio":
        velocidad = this.randomInt(10, 40);
        tiempo = this.randomInt(3, 20);
        break;
      default:
        velocidad = this.randomInt(20, 60);
        tiempo = this.randomInt(5, 30);
    }

    const distancia = this.redondear(velocidad * tiempo); // m

    let datos: any;
    let enunciado: string;
    let respuesta: string;
    let unidad: string;
    let subtipo: "distancia" | "velocidad" | "tiempo";

    if (modo === "distancia") {
      subtipo = "distancia";
      datos = { velocidad, tiempo };
      enunciado = `Un móvil se desplaza con velocidad constante de ${velocidad} m/s durante ${tiempo} s. ¿Qué distancia recorre?`;
      respuesta = distancia.toString();
      unidad = "m";
    } else if (modo === "velocidad") {
      subtipo = "velocidad";
      datos = { distancia, tiempo };
      enunciado = `Un móvil recorre ${distancia} m en ${tiempo} s con movimiento rectilíneo uniforme. ¿Cuál es su velocidad?`;
      respuesta = velocidad.toString();
      unidad = "m/s";
    } else {
      subtipo = "tiempo";
      datos = { distancia, velocidad };
      enunciado = `Un móvil recorre ${distancia} m con velocidad constante de ${velocidad} m/s. ¿Cuánto tiempo tarda?`;
      respuesta = tiempo.toString();
      unidad = "s";
    }

    const resultado = calc.calcular({
      tipo: `relacion_distancia_tiempo_${subtipo}`,
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("relacion_dt"),
      materia: this.materia,
      categoria: "relacion_distancia_tiempo",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["relacion_distancia_tiempo"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRU", "distancia-tiempo-velocidad"],
      },
    };
  }
}
