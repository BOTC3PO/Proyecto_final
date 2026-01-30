// BaseGenerator.ts
import type {
  Materia,
  GeneradorParametros,
  Ejercicio,
  Calculator,
} from "./types";
import type { PRNG } from "./prng";

export abstract class BaseGenerator {
  protected prng: PRNG;

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
    const random = Math.floor(this.prng.next() * 0xffffff)
      .toString(36)
      .padStart(6, "0");
    const suffix = Math.floor(this.prng.next() * 0xffffff)
      .toString(36)
      .padStart(6, "0");
    return `${prefix}_${random}_${suffix}`;
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
