// src/ejercicios/fisica/temaEcuacionLentes.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "31_ecuacion_lentes";

export class EcuacionLentesGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica/ecuacion_lentes";
  categorias: string[] = ["ecuacion_lentes"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let distanciaObjeto: number;
    let distanciaFocal: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    distanciaFocal = randIntFromPorNivel(limits, params.nivel, "distanciaFocal", this, {
      basico: [5, 20],
      intermedio: [10, 40],
      avanzado: [15, 100],
    });
    distanciaObjeto = randIntFromPorNivel(limits, params.nivel, "distanciaObjeto", this, {
      basico: [25, 60],
      intermedio: [50, 150],
      avanzado: [100, 500],
    });

    const resultado = calc.calcular({
      tipo: "ecuacion_lentes",
      payload: { distanciaObjeto, distanciaFocal },
    });

    const distanciaImagen = resultado.resultado;
    const magnification = -distanciaImagen / distanciaObjeto;
    const objectHeight = 4;
    const imageHeight = Number((objectHeight * magnification).toFixed(2));
    const viewRange = Math.max(
      Math.abs(distanciaObjeto),
      Math.abs(distanciaImagen),
      Math.abs(distanciaFocal),
      10,
    );
    const opciones = this.mezclar([
      distanciaImagen.toString(),
      ...this.generarOpcionesIncorrectas(distanciaImagen, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("lentes"),
      materia: this.materia,
      categoria: "ecuacion_lentes",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["ecuacion_lentes"][0] ||
        `Un objeto está a ${distanciaObjeto} cm de una lente convergente con distancia focal ${distanciaFocal} cm. ¿A qué distancia se forma la imagen?`,
      tipoRespuesta: "multiple",
      datos: { distanciaObjeto, distanciaFocal },
      opciones: opciones.map((o) => `${o} cm`),
      respuestaCorrecta: `${distanciaImagen} cm`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "lentes", "imagen"],
      },
      visual: {
        kind: "optics-rays",
        title: "Ecuación de lentes",
        description: "Rayos principales y formación de la imagen.",
        layout: {
          xRange: { min: -viewRange * 1.2, max: viewRange * 1.2 },
          yRange: { min: -6, max: 6 },
        },
        element: {
          type: "lente-convergente",
          positionX: 0,
          height: 10,
          label: "Lente convergente",
        },
        object: {
          position: { x: -distanciaObjeto, y: 0 },
          height: objectHeight,
          label: "Objeto",
        },
        image: {
          position: { x: distanciaImagen, y: 0 },
          height: imageHeight,
          label: "Imagen",
          virtual: distanciaImagen < 0,
        },
        focalPoints: {
          left: { x: -distanciaFocal, label: "F" },
          right: { x: distanciaFocal, label: "F'" },
        },
        rays: [
          {
            id: "rayo-paralelo",
            label: "Rayo paralelo",
            kind: "paralelo",
            color: "#2563EB",
            points: [
              { x: -distanciaObjeto, y: objectHeight },
              { x: 0, y: objectHeight },
              { x: distanciaFocal, y: 0 },
              { x: distanciaImagen, y: imageHeight },
            ],
          },
          {
            id: "rayo-centro",
            label: "Rayo central",
            kind: "centro",
            color: "#F97316",
            points: [
              { x: -distanciaObjeto, y: objectHeight },
              { x: 0, y: 0 },
              { x: distanciaImagen, y: imageHeight },
            ],
          },
          {
            id: "rayo-focal",
            label: "Rayo focal",
            kind: "focal",
            color: "#14B8A6",
            points: [
              { x: -distanciaObjeto, y: objectHeight },
              { x: -distanciaFocal, y: 0 },
              { x: 0, y: 0 },
              { x: distanciaImagen, y: imageHeight },
            ],
          },
        ],
      },
    };
  }
}
