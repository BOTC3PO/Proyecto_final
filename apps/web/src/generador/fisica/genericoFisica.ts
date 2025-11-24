// genericoFisica.ts
import { BaseGenerator } from "../core/basegenerador";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

/**
 * Utilidades comunes para generadores de física
 */
export abstract class FisicaBaseGenerator extends BaseGenerator {
  readonly materia = "fisica" as const;

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
      const factor = 1 + (Math.random() * variacion * 2 - variacion);
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
      const j = Math.floor(Math.random() * (i + 1));
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

/**
 * Templates de enunciados vacíos para cada categoría
 * Se pueden llenar manualmente o generar dinámicamente
 */
export const ENUNCIADOS_FISICA: Record<string, string[]> = {
  // Cinemática
  "MRU": [],
  "relacion_distancia_tiempo": [],
  "conversion_unidades_cinematica": [],
  "aceleracion_MRUV": [],
  "caida_libre": [],
  "movimiento_vertical": [],
  "movimiento_horizontal": [],
  
  // Dinámica
  "suma_fuerzas": [],
  "peso": [],
  "friccion": [],
  "plano_inclinado": [],
  "ley_hooke": [],
  
  // Trabajo y Energía
  "trabajo_mecanico": [],
  "energia_cinetica": [],
  "energia_potencial": [],
  "conservacion_energia": [],
  "potencia_mecanica": [],
  
  // Termodinámica
  "calor": [],
  "dilatacion_termica": [],
  "cambios_estado": [],
  "conversion_temperatura": [],
  
  // Electricidad
  "ley_ohm": [],
  "potencia_electrica": [],
  "resistencia_serie": [],
  "resistencia_paralelo": [],
  "consumo_electrico": [],
  
  // Ondas
  "frecuencia_periodo": [],
  "velocidad_ondas": [],
  "longitud_onda": [],
  
  // Óptica
  "optica_geometrica": [],
  "ecuacion_lentes": [],
  "indice_refraccion": [],
  
  // Fluidos
  "densidad": [],
  "presion": [],
  "presion_hidrostatica": [],
  "caudal": []
};