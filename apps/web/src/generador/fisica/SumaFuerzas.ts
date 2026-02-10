// src/ejercicios/fisica/temaSumaFuerzas.ts
import { FisicaBaseGenerator } from "./generico";
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
      fuerzas.push(this.prng.next() > 0.3 ? fuerza : -fuerza);
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
        .map((v) => (this.prng.next() > 0.5 ? v : -v))
        .map(String),
    ]);
    const vectorColors = ["#2563EB", "#F97316", "#10B981", "#A855F7"];
    const vectors = fuerzas.map((fuerza, index) => ({
      id: `f-${index + 1}`,
      label: `F${index + 1}`,
      magnitude: Math.abs(fuerza),
      angleDeg: fuerza >= 0 ? 0 : 180,
      color: vectorColors[index % vectorColors.length],
    }));

    return {
      id: this.generateId("fuerzas"),
      materia: this.materia,
      categoria: "suma_fuerzas",
      nivel: params.nivel,
      enunciado:
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
      visual: {
        kind: "physics-forces-vectors",
        title: "Fuerzas aplicadas",
        description:
          "Representación a escala de las fuerzas horizontales que actúan sobre el objeto.",
        unit: "N",
        body: {
          label: "Objeto",
          shape: "rect",
          color: "#E2E8F0",
        },
        vectors,
        options: {
          showAxes: true,
        },
      },
    };
  }
}
