// src/ejercicios/fisica/generico.ts

import { BaseGenerator } from "../core/basegenerador";
import type { PRNG } from "../core/prng";

/**
 * Instrucciones por generador de Física para poblar prompts activos.
 *
 * Nota: esto NO actúa como fallback en runtime del generador.
 * Se usa como catálogo/default para seeds y configuración editorial.
 */
export const ENUNCIADOS_FISICA: Record<string, string> = {
  "fisica/cinematica/mru": "Resolver MRU calculando distancia, tiempo o velocidad con datos coherentes y unidades claras.",
  "fisica/cinematica/mruv": "Resolver MRUV aplicando relaciones entre velocidad, aceleración y tiempo, con una incógnita principal.",
  "fisica/cinematica/caida_libre": "Resolver caída libre usando g≈9,8 m/s² e identificar la magnitud pedida según el contexto.",
  "fisica/cinematica/conversion_unidades": "Convertir magnitudes de cinemática entre unidades compatibles (m/s, km/h, cm/s).",
  "fisica/cinematica/relacion_distancia_tiempo": "Relacionar distancia y tiempo para interpretar rapidez media en un escenario cotidiano.",
  "fisica/cinematica/movimiento_vertical": "Analizar movimiento vertical (lanzamiento/subida/bajada) y calcular la variable solicitada.",
  "fisica/cinematica/movimiento_horizontal": "Analizar movimiento horizontal uniforme en función de distancia, velocidad y tiempo.",

  "fisica/dinamica/suma_fuerzas": "Calcular fuerza resultante en una dimensión considerando sentido y signos.",
  "fisica/dinamica/peso": "Calcular peso con P = m·g usando datos realistas y unidades del SI.",
  "fisica/dinamica/friccion": "Aplicar modelo de fricción para hallar fuerza de roce o fuerza neta según el caso.",
  "fisica/dinamica/plano_inclinado": "Resolver fuerzas en plano inclinado identificando componentes y magnitud pedida.",
  "fisica/dinamica/ley_hooke": "Aplicar ley de Hooke para resorte ideal y calcular fuerza, elongación o constante elástica.",

  "fisica/energia/trabajo_mecanico": "Calcular trabajo mecánico con fuerza y desplazamiento en la dirección del movimiento.",
  "fisica/energia/energia_cinetica": "Calcular energía cinética a partir de masa y velocidad, interpretando el resultado.",
  "fisica/energia/energia_potencial": "Calcular energía potencial gravitatoria en función de masa, gravedad y altura.",
  "fisica/energia/conservacion_energia": "Aplicar conservación de energía mecánica para encontrar velocidad o altura faltante.",
  "fisica/energia/potencia_mecanica": "Calcular potencia mecánica como trabajo por unidad de tiempo en un proceso simple.",

  "fisica/termodinamica/calor": "¿Cuánto calor se necesita para elevar la temperatura de una sustancia usando Q = m·c·ΔT?",
  "fisica/termodinamica/conversion_temperatura": "Convertir temperaturas entre °C, K y °F indicando fórmula y valor final.",
  "fisica/termodinamica/cambios_estado": "Analizar cambios de estado y energía asociada en procesos térmicos cotidianos.",
  "fisica/termodinamica/dilatacion_termica": "Calcular dilatación térmica lineal en sólidos con coeficiente y variación de temperatura.",

  "fisica/electricidad/ley_ohm": "Aplicar ley de Ohm para calcular V, I o R en un circuito resistivo simple.",
  "fisica/electricidad/potencia_electrica": "Calcular potencia eléctrica y relacionarla con tensión/corriente/resistencia.",
  "fisica/electricidad/resistencia_serie": "Resolver resistencias equivalentes en serie y variable eléctrica asociada.",
  "fisica/electricidad/resistencia_paralelo": "Resolver resistencias equivalentes en paralelo y magnitud solicitada.",
  "fisica/electricidad/consumo_electrico": "Calcular consumo eléctrico (kWh) y estimar costo energético básico.",

  "fisica/ondas_optica/frecuencia_periodo": "Relacionar frecuencia y período en fenómenos periódicos simples.",
  "fisica/ondas_optica/velocidad_ondas": "Aplicar v = λ·f para calcular velocidad, longitud de onda o frecuencia.",
  "fisica/ondas_optica/longitud_onda": "Calcular longitud de onda en función de velocidad y frecuencia.",
  "fisica/ondas_optica/indice_refraccion": "Aplicar índice de refracción para relacionar velocidad de la luz en medios.",
  "fisica/ondas_optica/ecuacion_lentes": "Usar ecuación de lentes delgadas para hallar distancia focal, objeto o imagen.",

  "fisica/optica/optica_geometrica": "Resolver problema básico de óptica geométrica con espejos/lentes e interpretación del resultado.",

  "fisica/fluidos/densidad": "Calcular densidad, masa o volumen a partir de la relación ρ = m/V.",
  "fisica/fluidos/presion": "Calcular presión usando fuerza y área en contextos mecánicos sencillos.",
  "fisica/fluidos/presion_hidrostatica": "Calcular presión hidrostática en función de profundidad, densidad y gravedad.",
  "fisica/fluidos/caudal": "Calcular caudal como volumen por unidad de tiempo en sistemas de flujo simples."
};

/**
 * Utilidades comunes para generadores de física
 */
export abstract class FisicaBaseGenerator extends BaseGenerator {
  readonly materia = "fisica" as const;

  constructor(prng: PRNG) {
    super(prng);
  }

  protected convertirAMetros(valor: number, unidad: "cm" | "m" | "km"): number {
    switch (unidad) {
      case "cm": return valor / 100;
      case "km": return valor * 1000;
      default: return valor;
    }
  }

  protected convertirDesdeMetros(metros: number, unidad: "cm" | "m" | "km"): number {
    switch (unidad) {
      case "cm": return metros * 100;
      case "km": return metros / 1000;
      default: return metros;
    }
  }

  protected redondear(valor: number, decimales: number = 2): number {
    const factor = Math.pow(10, decimales);
    return Math.round(valor * factor) / factor;
  }

  protected generarOpcionesIncorrectas(
    correcta: number,
    cantidad: number = 3,
    variacion: number = 0.3
  ): number[] {
    const opciones: Set<number> = new Set();
    while (opciones.size < cantidad) {
      const factor = 1 + (this.prng.next() * variacion * 2 - variacion);
      const incorrecta = this.redondear(correcta * factor);
      if (incorrecta !== correcta && incorrecta > 0) opciones.add(incorrecta);
    }
    return Array.from(opciones);
  }

  protected mezclar<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = this.prng.int(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  protected formatearConUnidad(valor: number, unidad: string): string {
    return `${this.redondear(valor)} ${unidad}`;
  }
}
