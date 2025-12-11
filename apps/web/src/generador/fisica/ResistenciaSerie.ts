// src/ejercicios/fisica/temaResistenciaSerie.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ResistenciaSerieGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad/resistencia_serie";
  categorias: string[] = ["resistencia_serie"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const cantidadResistencias =
      params.nivel === "basico" ? 2 :
      params.nivel === "intermedio" ? 3 : 4;

    const resistencias: number[] = [];

    for (let i = 0; i < cantidadResistencias; i++) {
      resistencias.push(this.randomInt(10, 200));
    }

    const resultado = calc.calcular({
      tipo: "resistencia_serie",
      payload: { resistencias },
    });

    const resistenciaTotal = resultado.resultado;
    const opciones = this.mezclar([
      resistenciaTotal.toString(),
      ...this.generarOpcionesIncorrectas(resistenciaTotal, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("serie"),
      materia: this.materia,
      categoria: "resistencia_serie",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["resistencia_serie"][0] ||
        `Calcula la resistencia equivalente de estas resistencias en serie: ${resistencias
          .map((r) => `${r} Ω`)
          .join(", ")}`,
      tipoRespuesta: "multiple",
      datos: { resistencias },
      opciones: opciones.map((o) => `${o} Ω`),
      respuestaCorrecta: `${resistenciaTotal} Ω`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "resistencias", "serie"],
      },
    };
  }
}
