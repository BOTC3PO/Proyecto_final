// src/ejercicios/fisica/temaPotenciaElectrica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class PotenciaElectricaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad/potencia_electrica";
  categorias: string[] = ["potencia_electrica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let voltaje: number;
    let corriente: number;

    switch (params.nivel) {
      case "basico":
        voltaje = this.randomInt(5, 24);
        corriente = this.randomInt(1, 5);
        break;
      case "intermedio":
        voltaje = this.randomInt(12, 120);
        corriente = this.redondear(Math.random() * 10 + 0.5, 2);
        break;
      default:
        voltaje = this.randomInt(110, 240);
        corriente = this.redondear(Math.random() * 20 + 1, 2);
    }

    const resultado = calc.calcular({
      tipo: "potencia_electrica",
      payload: { voltaje, corriente },
    });

    const potencia = resultado.resultado;
    const opciones = this.mezclar([
      potencia.toString(),
      ...this.generarOpcionesIncorrectas(potencia, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("potencia_elec"),
      materia: this.materia,
      categoria: "potencia_electrica",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["potencia_electrica"][0] ||
        `Un dispositivo funciona con ${voltaje} V y consume ${corriente} A. ¿Cuál es su potencia?`,
      tipoRespuesta: "multiple",
      datos: { voltaje, corriente },
      opciones: opciones.map((o) => `${o} W`),
      respuestaCorrecta: `${potencia} W`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "potencia", "consumo"],
      },
    };
  }
}
