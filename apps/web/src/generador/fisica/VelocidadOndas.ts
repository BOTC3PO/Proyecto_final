// src/ejercicios/fisica/temaVelocidadOndas.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class VelocidadOndasGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica/velocidad_ondas";
  categorias: string[] = ["velocidad_ondas"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let frecuencia: number;
    let longitud: number;

    switch (params.nivel) {
      case "basico":
        frecuencia = this.randomInt(10, 100);
        longitud = this.randomInt(2, 10);
        break;
      case "intermedio":
        frecuencia = this.randomInt(50, 500);
        longitud = this.redondear(Math.random() * 20 + 1, 2);
        break;
      default:
        frecuencia = this.randomInt(100, 10000);
        longitud = this.redondear(Math.random() * 100 + 0.1, 3);
    }

    const resultado = calc.calcular({
      tipo: "velocidad_ondas",
      payload: { frecuencia, longitud },
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("vel_ondas"),
      materia: this.materia,
      categoria: "velocidad_ondas",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["velocidad_ondas"][0] ||
        `Una onda tiene frecuencia ${frecuencia} Hz y longitud de onda ${longitud} m. ¿Cuál es su velocidad de propagación?`,
      tipoRespuesta: "multiple",
      datos: { frecuencia, longitud },
      opciones: opciones.map((o) => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["ondas", "velocidad", "propagacion"],
      },
      visual: {
        kind: "wave-interference",
        title: "Velocidad de propagación",
        description: "Comparación de dos ondas con distinta fase.",
        axes: {
          x: { label: "Tiempo", unit: "s", min: 0, max: 1 },
          y: { label: "Amplitud" },
        },
        samples: 200,
        waves: [
          {
            id: "onda-principal",
            label: "Onda principal",
            amplitude: 1,
            frequency,
            phase: 0,
            color: "#2563EB",
          },
          {
            id: "onda-secundaria",
            label: "Onda secundaria",
            amplitude: 0.8,
            frequency: frequency * 0.9,
            phase: Math.PI / 4,
            color: "#14B8A6",
          },
        ],
        superposition: {
          enabled: true,
          label: "Superposición",
          color: "#0F172A",
        },
        animation: {
          enabled: params.nivel !== "basico",
          speed: 1.2,
        },
      },
    };
  }
}
