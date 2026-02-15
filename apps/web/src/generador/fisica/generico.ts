// src/ejercicios/fisica/generico.ts

import { BaseGenerator } from "../core/basegenerador";
import type { PRNG } from "../core/prng";
import { getCatalogoTemaFisicaSync } from "./catalogoApi";
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

type EnunciadoCatalogo = {
  mode?: unknown;
  template?: unknown;
};

const CATEGORIA_A_TEMA: Record<string, string> = {
  MRU: "01_mru",
  aceleracion_MRUV: "02_mruv",
  caida_libre: "03_caida_libre",
  conversion_unidades_cinematica: "04_conversion_unidades_cinematica",
  relacion_distancia_tiempo: "05_relacion_distancia_tiempo",
  movimiento_vertical: "06_movimiento_vertical",
  movimiento_horizontal: "07_movimiento_horizontal",
  suma_fuerzas: "08_suma_fuerzas",
  peso: "09_peso",
  friccion: "10_friccion",
  plano_inclinado: "11_plano_inclinado",
  ley_hooke: "12_ley_hooke",
  trabajo_mecanico: "13_trabajo_mecanico",
  energia_cinetica: "14_energia_cinetica",
  energia_potencial: "15_energia_potencial",
  conservacion_energia: "16_conservacion_energia",
  potencia_mecanica: "17_potencia_mecanica",
  calor: "18_calor",
  conversion_temperatura: "19_conversion_temperatura",
  cambios_estado: "20_cambios_estado",
  dilatacion_termica: "21_dilatacion_termica",
  ley_ohm: "22_ley_ohm",
  potencia_electrica: "23_potencia_electrica",
  resistencia_serie: "24_resistencia_serie",
  resistencia_paralelo: "25_resistencia_paralelo",
  consumo_electrico: "26_consumo_electrico",
  frecuencia_periodo: "27_frecuencia_periodo",
  velocidad_ondas: "28_velocidad_ondas",
  longitud_onda: "29_longitud_onda",
  indice_refraccion: "30_indice_refraccion",
  ecuacion_lentes: "31_ecuacion_lentes",
  optica_geometrica: "32_optica_geometrica",
  densidad: "33_densidad",
  presion: "34_presion",
  presion_hidrostatica: "35_presion_hidrostatica",
  caudal: "36_caudal",
  bernoulli: "37_bernoulli",
  principio_arquimedes: "38_principio_arquimedes",
};

const getEnunciadosPorCategoria = (categoria: string): string[] => {
  const tema = CATEGORIA_A_TEMA[categoria];
  if (!tema) return [];

  const enunciado = getCatalogoTemaFisicaSync(tema).enunciado;
  const enunciados = (enunciado?.enunciados as EnunciadoCatalogo[] | undefined) ?? [];

  return enunciados
    .filter((item) => item?.mode === "texto" && typeof item?.template === "string")
    .map((item) => String(item.template));
};

/**
 * Enunciados de física cargados desde catálogo API.
 * Si no están precargados, devuelve [] y cada generador usa su fallback actual.
 */
export const ENUNCIADOS_FISICA: Record<string, string[]> = new Proxy(
  {},
  {
    get: (_, prop: string | symbol) => {
      if (typeof prop !== "string") return [];
      return getEnunciadosPorCategoria(prop);
    },
  }
);
