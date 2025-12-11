// src/ejercicios/fisica/temaSumaFuerzas.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class SumaFuerzasGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/dinamica/suma_fuerzas";
  categorias: string[] = ["suma_fuerzas"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const cantidadFuerzas =
      params.nivel === "basico" ? 2 :
      params.nivel === "intermedio" ? 3 : 4;

    const fuerzas: number[] = [];

    for (let i = 0; i < cantidadFuerzas; i++) {
      const fuerza = this.randomInt(5, 50);
      // algunas positivas, algunas negativas
      fuerzas.push(Math.random() > 0.3 ? fuerza : -fuerza);
    }

    const resultado = calc.calcular({
      tipo: "suma_fuerzas",
      payload: { fuerzas },
    });

    const fuerzaResultante = resultado.resultado;
    const opciones = this.mezclar([
      fuerzaResultante.toString(),
      ...this.generarOpcionesIncorrectas(
        Math.abs(fuerzaResultante),
        3,
        0.4
      )
        .map((v) => (Math.random() > 0.5 ? v : -v))
        .map(String),
    ]);

    return {
      id: this.generateId("fuerzas"),
      materia: this.materia,
      categoria: "suma_fuerzas",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["suma_fuerzas"][0] ||
        `Sobre un objeto actúan las siguientes fuerzas: ${fuerzas
          .map((f) => `${f} N`)
          .join(", ")}. ¿Cuál es la fuerza resultante?`,
      tipoRespuesta: "multiple",
      datos: { fuerzas },
      opciones: opciones.map((o) => `${o} N`),
      respuestaCorrecta: `${fuerzaResultante} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "fuerzas", "fuerza-resultante"],
      },
    };
  }
}
