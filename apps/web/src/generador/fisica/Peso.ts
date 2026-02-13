// src/ejercicios/fisica/temaPeso.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "09_peso";

export class PesoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/dinamica/peso";
  categorias: string[] = ["peso"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    masa = randIntFromPorNivel(limits, params.nivel, "masa", this, {
      basico: [5, 50],
      intermedio: [20, 150],
      avanzado: [50, 500],
    });

    const resultado = calc.calcular({
      tipo: "peso",
      payload: { masa, g },
    });

    const peso = resultado.resultado;
    const opciones = this.mezclar([
      peso.toString(),
      ...this.generarOpcionesIncorrectas(peso, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("peso"),
      materia: this.materia,
      categoria: "peso",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["peso"][0] ||
        `Calcula el peso de un objeto de ${masa} kg. (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g },
      opciones: opciones.map((o) => `${o} N`),
      respuestaCorrecta: `${peso} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "peso", "gravedad"],
      },
      visual: {
        kind: "physics-forces-vectors",
        title: "Peso del objeto",
        description: "Fuerza peso representada hacia abajo.",
        unit: "N",
        body: {
          label: "Objeto",
          shape: "circle",
          color: "#E2E8F0",
        },
        vectors: [
          {
            id: "peso",
            label: "Peso",
            magnitude: peso,
            angleDeg: -90,
            color: "#2563EB",
          },
        ],
        options: {
          showAxes: true,
        },
      },
    };
  }
}
