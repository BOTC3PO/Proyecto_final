// src/ejercicios/fisica/temaFrecuenciaPeriodo.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class FrecuenciaPeriodoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica/frecuencia_periodo";
  categorias: string[] = ["frecuencia_periodo"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const calcularFrecuencia = Math.random() > 0.5;
    let frecuencia: number;
    let periodo: number;

    switch (params.nivel) {
      case "basico":
        frecuencia = this.randomInt(2, 20);
        periodo = this.redondear(1 / frecuencia, 3);
        break;
      case "intermedio":
        frecuencia = this.randomInt(10, 100);
        periodo = this.redondear(1 / frecuencia, 4);
        break;
      default:
        frecuencia = this.randomInt(50, 1000);
        periodo = this.redondear(1 / frecuencia, 5);
    }

    let datos: any;
    let enunciado: string;
    let respuesta: string;
    let unidad: string;

    if (calcularFrecuencia) {
      datos = { periodo };
      enunciado = `Una onda tiene un período de ${periodo} s. ¿Cuál es su frecuencia?`;
      respuesta = frecuencia.toString();
      unidad = "Hz";
    } else {
      datos = { frecuencia };
      enunciado = `Una onda tiene una frecuencia de ${frecuencia} Hz. ¿Cuál es su período?`;
      respuesta = periodo.toString();
      unidad = "s";
    }

    const resultado = calc.calcular({
      tipo: calcularFrecuencia ? "calcular_frecuencia" : "calcular_periodo",
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("freq_per"),
      materia: this.materia,
      categoria: "frecuencia_periodo",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["frecuencia_periodo"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["ondas", "frecuencia", "periodo"],
      },
      visual: {
        kind: "wave-interference",
        title: "Onda sinusoidal",
        description: "Relación entre frecuencia, período y fase.",
        axes: {
          x: { label: "Tiempo", unit: "s", min: 0, max: 1 },
          y: { label: "Amplitud" },
        },
        samples: 200,
        waves: [
          {
            id: "onda-base",
            label: "Onda 1",
            amplitude: 1,
            frequency,
            phase: 0,
            color: "#2563EB",
          },
          {
            id: "onda-desfase",
            label: "Onda 2",
            amplitude: 0.7,
            frequency,
            phase: Math.PI / 3,
            color: "#F97316",
          },
        ],
        superposition: {
          enabled: true,
          label: "Interferencia",
          color: "#0F172A",
        },
        animation: {
          enabled: params.nivel !== "basico",
          speed: 1,
        },
      },
    };
  }
}
