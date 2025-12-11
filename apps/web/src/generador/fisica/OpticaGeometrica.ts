// src/ejercicios/fisica/temaOpticaGeometrica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class OpticaGeometricaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/optica/optica_geometrica";
  categorias: string[] = ["optica_geometrica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    // Elegimos si calculamos ángulo de reflexión o de incidencia (pero la relación es 1:1)
    const calcularReflexion = Math.random() > 0.5;

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
        ENUNCIADOS_FISICA["optica_geometrica"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o}°`),
      respuestaCorrecta: `${respuesta}°`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "reflexion", "espejo-plano"],
      },
    };
  }
}
