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

  /**
   * Sprint 10A: devuelve las filas de un dataset por nombre, o null si no
   * existe / el provider no soporta datasets.
   *
   * Cada fila es un Record plano con los valores. El provider es responsable
   * de elegir el dataset visible al usuario actual (alcance: mías + escuela
   * + públicas aprobadas).
   *
   * Es opcional: si el provider no implementa este método, plantillas con
   * `dataset: <nombre>` fallarán con error claro en evaluación.
   */
  obtenerDataset?(nombre: string): Array<Record<string, unknown>> | null;
}
