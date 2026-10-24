/**
 * Defaults de estilo por tipo de anotación (M4).
 *
 * Coinciden con los defaults que `AnnotationLayer` aplica en su render cuando
 * el campo opcional no está presente. El inspector los usa para mostrar el
 * valor efectivo en el control aunque el campo esté `undefined` en el modelo.
 */

export const ESTILO_DEFAULTS = {
  texto: { tamano: 14, color: "#1a1a1a" },
  marcador: { tamano: 1, color: "#ef4444" },
  ruta: { grosor: 2, color: "#f59e0b", flechaFinal: true },
  zona: { grosor: 1.5, color: "#3b82f6", opacidadRelleno: 0.25 },
  flecha: { grosor: 2, color: "#f59e0b" },
} as const;

/** Rango del slider para el tamaño de fuente del tipo `texto`. */
export const TEXTO_TAMANO_MIN = 10;
export const TEXTO_TAMANO_MAX = 48;

/** Rango del slider para el factor de escala del tipo `marcador` (0.5× a 2×). */
export const MARCADOR_TAMANO_MIN = 0.5;
export const MARCADOR_TAMANO_MAX = 2;

/** Rango del slider de grosor (1 a 8 px). */
export const GROSOR_MIN = 1;
export const GROSOR_MAX = 8;

/** Rango del slider de opacidad de relleno (0 a 0.8). */
export const OPACIDAD_MIN = 0;
export const OPACIDAD_MAX = 0.8;
export const OPACIDAD_STEP = 0.05;
