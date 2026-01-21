// src/ejercicios/fisica/temaLeyOhm.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class LeyOhmGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad/ley_ohm";
  categorias: string[] = ["ley_ohm"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const tipo = ["calcular_V", "calcular_I", "calcular_R"][this.randomInt(0, 2)];
    let voltaje: number, corriente: number, resistencia: number;

    switch (params.nivel) {
      case "basico":
        voltaje = this.randomInt(3, 24);
        resistencia = this.randomInt(10, 100);
        corriente = this.redondear(voltaje / resistencia, 2);
        break;
      case "intermedio":
        voltaje = this.randomInt(12, 120);
        resistencia = this.randomInt(20, 500);
        corriente = this.redondear(voltaje / resistencia, 2);
        break;
      default:
        voltaje = this.randomInt(50, 240);
        resistencia = this.randomInt(50, 1000);
        corriente = this.redondear(voltaje / resistencia, 3);
    }

    let datos: any;
    let enunciado: string;
    let respuesta: string;
    let unidad: string;

    if (tipo === "calcular_V") {
      datos = { corriente, resistencia };
      enunciado = `Por una resistencia de ${resistencia} Ω circula una corriente de ${corriente} A. ¿Cuál es el voltaje?`;
      respuesta = voltaje.toString();
      unidad = "V";
    } else if (tipo === "calcular_I") {
      datos = { voltaje, resistencia };
      enunciado = `Un circuito tiene ${voltaje} V y ${resistencia} Ω. ¿Qué corriente circula?`;
      respuesta = corriente.toString();
      unidad = "A";
    } else {
      datos = { voltaje, corriente };
      enunciado = `Con ${voltaje} V circula ${corriente} A. ¿Cuál es la resistencia?`;
      respuesta = resistencia.toString();
      unidad = "Ω";
    }

    const resultado = calc.calcular({
      tipo: `ley_ohm_${tipo}`,
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("ohm"),
      materia: this.materia,
      categoria: "ley_ohm",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["ley_ohm"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "ley-ohm", "circuitos"],
      },
      visual: {
        kind: "circuit",
        title: "Circuito con resistencia",
        description: "Esquema básico con batería y resistencia.",
        nodes: [
          { id: "n1", label: "A", position: { x: 0.2, y: 0.5 } },
          { id: "n2", label: "B", position: { x: 0.5, y: 0.5 } },
          { id: "n3", label: "C", position: { x: 0.8, y: 0.5 } },
        ],
        components: [
          {
            id: "battery",
            type: "battery",
            label: "Batería",
            fromNodeId: "n1",
            toNodeId: "n2",
          },
          {
            id: "resistor",
            type: "resistor",
            label: "R",
            fromNodeId: "n2",
            toNodeId: "n3",
            value: resistencia,
            unit: "Ω",
          },
        ],
        connections: [
          { id: "wire-return", fromNodeId: "n3", toNodeId: "n1", style: "solid" },
        ],
        measurements: [
          {
            id: "voltaje",
            type: "voltaje",
            value: voltaje,
            unit: "V",
            label: "Voltaje",
          },
          {
            id: "corriente",
            type: "corriente",
            value: corriente,
            unit: "A",
            label: "Corriente",
          },
          {
            id: "resistencia",
            type: "resistencia",
            value: resistencia,
            unit: "Ω",
            label: "Resistencia",
            relatedComponentId: "resistor",
          },
        ],
      },
    };
  }
}
