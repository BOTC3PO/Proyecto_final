/**
 * Errores específicos del adaptador. Códigos posibles:
 *  - "tipo-no-soportado": el tipo de pregunta (ordenar, marcar_mapa, etc.)
 *    no está soportado en la v1 del adaptador. Llega en Sprint 9.
 *  - "sin-respuesta-correcta": el adaptador no encontró respuesta correcta
 *    (mc sin opción marcada como correcta).
 *  - "respuesta-inconsistente": shape del GenerationResult inválido.
 */
export class AdapterError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.name = "AdapterError";
    this.code = code;
  }
}
