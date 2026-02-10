// src/ejercicios/fisica/temaPresionHidrostatica.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class PresionHidrostaticaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/fluidos/presion_hidrostatica";
  categorias: string[] = ["presion_hidrostatica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let densidad: number;
    let profundidad: number;

    const fluidos = [
      { nombre: "agua", densidad: 1000 },
      { nombre: "aceite", densidad: 920 },
      { nombre: "mercurio", densidad: 13600 },
    ] as const;

    const fluido =
      params.nivel === "basico"
        ? fluidos[0]
        : params.nivel === "intermedio"
        ? fluidos[this.randomInt(0, 1)]
        : fluidos[this.randomInt(0, 2)];

    densidad = fluido.densidad;

    switch (params.nivel) {
      case "basico":
        profundidad = this.randomInt(2, 10);
        break;
      case "intermedio":
        profundidad = this.randomInt(5, 30);
        break;
      default:
        profundidad = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "presion_hidrostatica",
      payload: { densidad, g, profundidad },
    });

    const presion = resultado.resultado;
    const opciones = this.mezclar([
      presion.toString(),
      ...this.generarOpcionesIncorrectas(presion, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("presion_hidro"),
      materia: this.materia,
      categoria: "presion_hidrostatica",
      nivel: params.nivel,
      enunciado:
        `¿Cuál es la presión hidrostática en ${fluido.nombre} a ${profundidad} m de profundidad? (ρ = ${densidad} kg/m³, g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { densidad, g, profundidad },
      opciones: opciones.map((o) => `${o} Pa`),
      respuestaCorrecta: `${presion} Pa`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "presion-hidrostatica", "profundidad"],
      },
    };
  }
}
