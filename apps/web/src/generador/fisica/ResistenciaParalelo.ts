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
    const leftNode = { id: "left", label: "A", position: { x: 0.18, y: 0.5 } };
    const rightNode = { id: "right", label: "B", position: { x: 0.82, y: 0.5 } };
    const branchNodes = resistencias.map((_, index) => {
      const y = 0.25 + (0.5 * index) / Math.max(1, resistencias.length - 1);
      return {
        start: { id: `s${index + 1}`, position: { x: 0.35, y } },
        end: { id: `e${index + 1}`, position: { x: 0.65, y } },
      };
    });
    const nodes = [
      leftNode,
      rightNode,
      ...branchNodes.flatMap((branch) => [branch.start, branch.end]),
    ];
    const components = resistencias.map((value, index) => ({
      id: `rp${index + 1}`,
      type: "resistor" as const,
      label: `R${index + 1}`,
      fromNodeId: branchNodes[index].start.id,
      toNodeId: branchNodes[index].end.id,
      value,
      unit: "Ω",
    }));
    const connections = branchNodes.flatMap((branch, index) => [
      { id: `wire-left-${index}`, fromNodeId: leftNode.id, toNodeId: branch.start.id, style: "solid" as const },
      { id: `wire-right-${index}`, fromNodeId: branch.end.id, toNodeId: rightNode.id, style: "solid" as const },
    ]);
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
      visual: {
        kind: "circuit",
        title: "Resistencias en paralelo",
        description: "Ramas conectadas entre los mismos nodos.",
        nodes,
        components,
        connections,
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
