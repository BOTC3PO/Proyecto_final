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
    const nodes = Array.from({ length: resistencias.length + 1 }, (_, index) => ({
      id: `n${index + 1}`,
      label: index === 0 ? "A" : index === resistencias.length ? "B" : undefined,
      position: { x: 0.15 + (0.7 * index) / resistencias.length, y: 0.5 },
    }));
    const components = resistencias.map((value, index) => ({
      id: `r${index + 1}`,
      type: "resistor" as const,
      label: `R${index + 1}`,
      fromNodeId: nodes[index].id,
      toNodeId: nodes[index + 1].id,
      value,
      unit: "Ω",
    }));
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
      visual: {
        kind: "circuit",
        title: "Resistencias en serie",
        description: "Resistencias conectadas una tras otra.",
        nodes,
        components,
        connections: [
          { id: "wire-return", fromNodeId: nodes.at(-1)!.id, toNodeId: nodes[0].id, style: "solid" },
        ],
        measurements: [
          {
            id: "req",
            type: "resistencia",
            value: resistenciaTotal,
            unit: "Ω",
            label: "R equivalente",
          },
        ],
      },
    };
  }
}
