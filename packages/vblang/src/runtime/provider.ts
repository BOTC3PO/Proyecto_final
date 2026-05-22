/**
 * Interface que el consumer (apps/web) implementa para conectar el campo
 * `generador: <id>` de VBLang con generadoresV2 (o cualquier otra fuente
 * de generadores hardcoded). El paquete @vb/vblang NUNCA importa de apps/web.
 */

/**
 * Subset estructural mínimo de `Ejercicio` (generadoresV2). El bridge
 * en apps/web normaliza al shape que esperamos acá.
 */
export interface GeneradorAsistidoEjercicio {
  enunciado: string;
  pasos?: string[];
  visual?: unknown;
  datos?: Record<string, unknown>;

  // Tipo quiz (mc):
  opciones?: string[];
  indiceCorrecto?: number;

  // Tipo numerico (input):
  resultado?: number;
  toleranciaRelativa?: number;
  unidades?: Record<string, string>;

  // Tipo completar:
  respuestaCorrecta?: string | string[];
}

export interface GeneradorAsistidoProvider {
  /**
   * Devuelve un ejercicio del generador identificado por `id`, o `null` si
   * el generador no existe.
   *
   * @param id por ejemplo "fisica/cinematica/MRU"
   * @param seed string para determinismo
   * @param dificultad opcional, "basico" | "intermedio" | "avanzado"
   */
  generar(
    id: string,
    seed: string,
    dificultad?: string,
  ): GeneradorAsistidoEjercicio | null;
}
