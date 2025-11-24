// BaseGenerator.ts
import type {
  Materia,
  GeneradorParametros,
  Ejercicio,
  Calculator,
} from "./types";

export abstract class BaseGenerator {
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

  // ─────────────────────────────
  // Helpers comunes para todos los generadores
  // ─────────────────────────────

  /**
   * Genera un entero aleatorio entre min y max (incluidos).
   */
  protected randomInt(min: number, max: number): number {
    const from = Math.ceil(min);
    const to = Math.floor(max);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }

  /**
   * Genera un ID simple basado en el tiempo + algo de ruido.
   * Podés reemplazar esto con uuid si querés.
   */
  protected generateId(prefix: string): string {
    const random = Math.random().toString(36).substring(2, 8);
    return `${prefix}_${Date.now()}_${random}`;
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
