// BaseGenerator.ts
import type {
  Materia,
  GeneradorParametros,
  Ejercicio,
  GeneratedExercise,
  Calculator,
} from "./types";
import type { GeneratedQuestionDTO, QuestionCorrection } from "./generated-question";
import type { PRNG } from "./prng";
import { parseGeneradorParametros } from "./schemas";

export abstract class BaseGenerator {
  protected prng: PRNG;
  private idCounter = 0;
  readonly version = 1;

  constructor(prng: PRNG) {
    this.prng = prng;
  }
  /**
   * Identificador único del generador.
   * Ej: "matematica/sumas_basicas", "fisica/MRU"
   */
  abstract readonly id: string;

  /**
   * Materia a la que pertenece.
   * Ej: "matematica", "fisica", "economia"
   */
  abstract readonly materia: Materia;

  /**
   * Lista de categorías que este generador sabe manejar.
   * Ej: ["sumas_basicas"], ["MRU"], ["asientos_simples"]
   */
  abstract readonly categorias: string[];

  /**
   * Método principal de generación de ejercicios.
   * Cada generador concreto DEBE implementarlo.
   *
   * @param params  Parámetros generales (materia, categoría, nivel, opciones)
   * @param calc    Motor de cálculo que puede usar para obtener el resultado correcto
   */
  abstract generarEjercicio(
    params: GeneradorParametros,
    calc: Calculator
  ): Ejercicio;

  generate(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const validatedParams = parseGeneradorParametros(params);

    if (validatedParams.materia !== this.materia) {
      throw new Error(
        `Materia inválida para ${this.id}: se esperaba ${this.materia}, se recibió ${validatedParams.materia}.`
      );
    }

    if (!this.categorias.includes(validatedParams.categoria)) {
      throw new Error(
        `Categoría inválida para ${this.id}: ${validatedParams.categoria} no está entre ${this.categorias.join(", ")}.`
      );
    }

    const ejercicio = this.generarEjercicio(validatedParams, calc);
    return {
      ...ejercicio,
      generatorId: this.id,
      generatorVersion: this.version,
    };
  }

  generateRenderable(params: GeneradorParametros, calc: Calculator): GeneratedExercise {
    const ejercicio = this.generate(params, calc);
    const { question, correction } = this.toGeneratedPayload(ejercicio);
    return { question, correction };
  }

  protected toGeneratedPayload(ejercicio: Ejercicio): {
    question: GeneratedQuestionDTO;
    correction: QuestionCorrection;
  } {
    const questionType = this.mapTipoRespuesta(ejercicio.tipoRespuesta);
    const optionItems = ejercicio.opciones?.map((text, index) => ({
      id: `opt_${index}`,
      text,
    }));
    const answerKey = this.mapAnswerKey(ejercicio, optionItems);

    const question: GeneratedQuestionDTO = {
      id: ejercicio.id,
      prompt: ejercicio.enunciado,
      questionType,
      options: optionItems,
      metadata: {
        generatorId: ejercicio.generatorId,
        generatorVersion: ejercicio.generatorVersion,
        materia: ejercicio.materia,
        categoria: ejercicio.categoria,
        dificultad: ejercicio.nivel,
        tags: ejercicio.metadatos?.tags,
      },
      data: ejercicio.datos,
      visual: ejercicio.visual,
    };

    return {
      question,
      correction: {
        id: ejercicio.id,
        answerKey,
        explanation: ejercicio.explicacionPasoAPaso?.join("\n"),
      },
    };
  }

  protected mapTipoRespuesta(tipoRespuesta: Ejercicio["tipoRespuesta"]):
    | "mc"
    | "input"
    | "interactive" {
    switch (tipoRespuesta) {
      case "multiple":
        return "mc";
      case "interactiva":
        return "interactive";
      case "abierta":
      default:
        return "input";
    }
  }

  protected mapAnswerKey(
    ejercicio: Ejercicio,
    optionItems?: Array<{ id: string; text: string }>
  ): QuestionCorrection["answerKey"] {
    if (ejercicio.tipoRespuesta === "multiple") {
      const index = optionItems?.findIndex(
        (option) => option.text === ejercicio.respuestaCorrecta
      );
      if (index !== undefined && index >= 0) {
        return optionItems?.[index]?.id ?? String(ejercicio.respuestaCorrecta);
      }
    }
    return ejercicio.respuestaCorrecta as QuestionCorrection["answerKey"];
  }

  // ─────────────────────────────
  // Helpers comunes para todos los generadores
  // ─────────────────────────────

  /**
   * Genera un entero aleatorio entre min y max (incluidos).
   */
  protected randomInt(min: number, max: number): number {
    return this.prng.int(min, max);
  }

  /**
   * Genera un ID simple basado en el tiempo + algo de ruido.
   * Podés reemplazar esto con uuid si querés.
   */
  protected generateId(prefix: string): string {
    const counter = this.idCounter++;
    const random = Math.floor(this.prng.next() * 0xffffff)
      .toString(36)
      .padStart(6, "0");
    return `${prefix}_${counter.toString(36).padStart(4, "0")}_${random}`;
  }

  /**
   * Helper para obtener valores desde params.opciones con default.
   */
  protected getOpcion<T>(
    params: GeneradorParametros,
    key: string,
    defaultValue: T
  ): T {
    return (params.opciones?.[key] as T) ?? defaultValue;
  }
}
