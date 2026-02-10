// src/ejercicios/fisica/temaIndiceRefraccion.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class IndiceRefraccionGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica/indice_refraccion";
  categorias: string[] = ["indice_refraccion"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const c = 300000000; // velocidad luz en vacío
    let velocidadMedio: number;
    let indiceMedio: number;

    const medios = [
      { nombre: "agua", indice: 1.33 },
      { nombre: "vidrio", indice: 1.5 },
      { nombre: "diamante", indice: 2.42 },
    ] as const;

    const medioIndex =
      params.nivel === "basico"
        ? 0
        : params.nivel === "intermedio"
        ? this.randomInt(0, 1)
        : this.randomInt(0, 2);

    const medio = medios[medioIndex];
    indiceMedio = medio.indice;
    velocidadMedio = this.redondear(c / indiceMedio);

    const calcularIndice = this.prng.next() > 0.5;

    let datos: any;
    let enunciado: string;
    let respuesta: string;

    if (calcularIndice) {
      datos = { c, velocidadMedio };
      enunciado = `La luz viaja a ${velocidadMedio} m/s en un medio. ¿Cuál es el índice de refracción? (c = ${c} m/s)`;
      respuesta = indiceMedio.toString();
    } else {
      datos = { c, indiceMedio };
      enunciado = `¿A qué velocidad viaja la luz en ${medio.nombre}? (n = ${indiceMedio}, c = ${c} m/s)`;
      respuesta = velocidadMedio.toString();
    }

    const resultado = calc.calcular({
      tipo: calcularIndice ? "indice_refraccion" : "velocidad_medio",
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.2).map(String),
    ]);

    const unidad = calcularIndice ? "" : "m/s";
    const distanciaFocal = Number((10 / indiceMedio).toFixed(2));
    const objectHeight = 3.5;

    return {
      id: this.generateId("refraccion"),
      materia: this.materia,
      categoria: "indice_refraccion",
      nivel: params.nivel,
      enunciado:
        enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`.trim()),
      respuestaCorrecta: `${respuesta} ${unidad}`.trim(),
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "refraccion", "indice"],
      },
      visual: {
        kind: "optics-rays",
        title: "Índice de refracción",
        description: "El cambio de medio desvía los rayos luminosos.",
        layout: {
          xRange: { min: -12, max: 12 },
          yRange: { min: -6, max: 6 },
        },
        element: {
          type: "lente-divergente",
          positionX: 0,
          height: 10,
          label: `Medio ${medio.nombre}`,
        },
        object: {
          position: { x: -8, y: 0 },
          height: objectHeight,
          label: "Objeto",
        },
        image: {
          position: { x: -distanciaFocal, y: 0 },
          height: -objectHeight * 0.7,
          label: "Imagen virtual",
          virtual: true,
        },
        focalPoints: {
          left: { x: -distanciaFocal, label: "F" },
          right: { x: distanciaFocal, label: "F'" },
        },
        rays: [
          {
            id: "rayo-incidente",
            label: "Rayo incidente",
            kind: "incidente",
            color: "#2563EB",
            points: [
              { x: -8, y: objectHeight },
              { x: 0, y: objectHeight },
              { x: 6, y: objectHeight + 1.5 },
            ],
          },
          {
            id: "rayo-refractado",
            label: "Rayo refractado",
            kind: "refractado",
            color: "#F97316",
            points: [
              { x: -8, y: objectHeight },
              { x: 0, y: 0 },
              { x: 6, y: -1.5 },
            ],
          },
          {
            id: "rayo-prolongacion",
            label: "Prolongación",
            kind: "refractado",
            color: "#64748B",
            dashed: true,
            points: [
              { x: 0, y: 0 },
              { x: -distanciaFocal, y: 0 },
            ],
          },
        ],
      },
    };
  }
}
