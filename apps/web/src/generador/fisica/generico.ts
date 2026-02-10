// src/ejercicios/fisica/generico.ts

import { BaseGenerator } from "../core/basegenerador";
import type { PRNG } from "../core/prng";
// Si en algún momento usás GeneradorParametros, Ejercicio o Calculator, los volvés a importar.
// import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

/**
 * Utilidades comunes para generadores de física
 */
export abstract class FisicaBaseGenerator extends BaseGenerator {
  readonly materia = "fisica" as const;

  constructor(prng: PRNG) {
    super(prng);
  }

  /**
   * Convierte unidades de longitud a metros
   */
  protected convertirAMetros(valor: number, unidad: "cm" | "m" | "km"): number {
    switch (unidad) {
      case "cm": return valor / 100;
      case "km": return valor * 1000;
      default: return valor;
    }
  }

  /**
   * Convierte metros a la unidad deseada
   */
  protected convertirDesdeMetros(metros: number, unidad: "cm" | "m" | "km"): number {
    switch (unidad) {
      case "cm": return metros * 100;
      case "km": return metros / 1000;
      default: return metros;
    }
  }

  /**
   * Redondea a N decimales
   */
  protected redondear(valor: number, decimales: number = 2): number {
    const factor = Math.pow(10, decimales);
    return Math.round(valor * factor) / factor;
  }

  /**
   * Genera opciones incorrectas para multiple choice
   */
  protected generarOpcionesIncorrectas(
    correcta: number,
    cantidad: number = 3,
    variacion: number = 0.3
  ): number[] {
    const opciones: Set<number> = new Set();
    
    while (opciones.size < cantidad) {
      const factor = 1 + (this.prng.next() * variacion * 2 - variacion);
      const incorrecta = this.redondear(correcta * factor);
      if (incorrecta !== correcta && incorrecta > 0) {
        opciones.add(incorrecta);
      }
    }
    
    return Array.from(opciones);
  }

  /**
   * Mezcla array aleatoriamente
   */
  protected mezclar<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = this.prng.int(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  /**
   * Formatea número con unidad
   */
  protected formatearConUnidad(valor: number, unidad: string): string {
    return `${this.redondear(valor)} ${unidad}`;
  }
}
