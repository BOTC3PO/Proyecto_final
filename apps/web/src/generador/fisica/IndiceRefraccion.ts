// src/ejercicios/fisica/temaIndiceRefraccion.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
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

    const calcularIndice = Math.random() > 0.5;

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

    return {
      id: this.generateId("refraccion"),
      materia: this.materia,
      categoria: "indice_refraccion",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["indice_refraccion"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`.trim()),
      respuestaCorrecta: `${respuesta} ${unidad}`.trim(),
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "refraccion", "indice"],
      },
    };
  }
}
