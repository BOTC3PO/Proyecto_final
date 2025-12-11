// src/ejercicios/fisica/temaResistenciaParalelo.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ResistenciaParaleloGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad/resistencia_paralelo";
  categorias: string[] = ["resistencia_paralelo"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const cantidadResistencias =
      params.nivel === "basico" ? 2 :
      params.nivel === "intermedio" ? 3 : 4;

    const resistencias: number[] = [];

    for (let i = 0; i < cantidadResistencias; i++) {
      resistencias.push(this.randomInt(20, 200));
    }

    const resultado = calc.calcular({
      tipo: "resistencia_paralelo",
      payload: { resistencias },
    });

    const resistenciaTotal = resultado.resultado;
    const opciones = this.mezclar([
      resistenciaTotal.toString(),
      ...this.generarOpcionesIncorrectas(resistenciaTotal, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("paralelo"),
      materia: this.materia,
      categoria: "resistencia_paralelo",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["resistencia_paralelo"][0] ||
        `Calcula la resistencia equivalente de estas resistencias en paralelo: ${resistencias
          .map((r) => `${r} Ω`)
          .join(", ")}`,
      tipoRespuesta: "multiple",
      datos: { resistencias },
      opciones: opciones.map((o) => `${o} Ω`),
      respuestaCorrecta: `${resistenciaTotal} Ω`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "resistencias", "paralelo"],
      },
    };
  }
}
