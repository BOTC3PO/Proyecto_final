// src/ejercicios/fisica/temaOpticaGeometrica.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class OpticaGeometricaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/optica/optica_geometrica";
  categorias: string[] = ["optica_geometrica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    // Elegimos si calculamos ángulo de reflexión o de incidencia (pero la relación es 1:1)
    const calcularReflexion = this.prng.next() > 0.5;

    let anguloIncidencia: number;

    switch (params.nivel) {
      case "basico":
        anguloIncidencia = this.randomInt(10, 60);
        break;
      case "intermedio":
        anguloIncidencia = this.randomInt(15, 75);
        break;
      default:
        anguloIncidencia = this.randomInt(5, 85);
    }

    const anguloReflexion = anguloIncidencia;

    let datos: any;
    let enunciado: string;
    let respuesta: string;
    let subtipo: "reflexion" | "incidencia";

    if (calcularReflexion) {
      subtipo = "reflexion";
      datos = { anguloIncidencia };
      enunciado = `Un rayo de luz incide sobre un espejo plano con un ángulo de incidencia de ${anguloIncidencia}°. ¿Cuál es el ángulo de reflexión?`;
      respuesta = anguloReflexion.toString();
    } else {
      subtipo = "incidencia";
      datos = { anguloReflexion };
      enunciado = `Un rayo de luz se refleja en un espejo plano con un ángulo de reflexión de ${anguloReflexion}°. ¿Cuál fue el ángulo de incidencia?`;
      respuesta = anguloIncidencia.toString();
    }

    const resultado = calc.calcular({
      tipo: `optica_geometrica_${subtipo}`,
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.2).map(String),
    ]);

    return {
      id: this.generateId("optica_geom"),
      materia: this.materia,
      categoria: "optica_geometrica",
      nivel: params.nivel,
      enunciado:
        enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o}°`),
      respuestaCorrecta: `${respuesta}°`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "reflexion", "espejo-plano"],
      },
      visual: {
        kind: "optics-rays",
        title: "Reflexión en espejo plano",
        description: "El ángulo de incidencia es igual al de reflexión.",
        layout: {
          xRange: { min: -10, max: 10 },
          yRange: { min: -6, max: 6 },
        },
        element: {
          type: "espejo-plano",
          positionX: 0,
          height: 12,
          label: "Espejo",
        },
        object: {
          position: { x: -6, y: 0 },
          height: 3.5,
          label: "Fuente",
        },
        image: {
          position: { x: 6, y: 0 },
          height: 3.5,
          label: "Imagen virtual",
          virtual: true,
        },
        rays: [
          {
            id: "rayo-incidente",
            label: "Incidente",
            kind: "incidente",
            color: "#2563EB",
            points: [
              { x: -6, y: 3.5 },
              { x: 0, y: 1.5 },
            ],
          },
          {
            id: "rayo-reflejado",
            label: "Reflejado",
            kind: "reflejado",
            color: "#F97316",
            points: [
              { x: 0, y: 1.5 },
              { x: 6, y: 3.5 },
            ],
          },
          {
            id: "rayo-prolongacion",
            label: "Prolongación",
            kind: "reflejado",
            color: "#64748B",
            dashed: true,
            points: [
              { x: 0, y: 1.5 },
              { x: -6, y: 3.5 },
            ],
          },
        ],
      },
    };
  }
}
