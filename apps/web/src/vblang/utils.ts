import type { Plantilla } from "@vb/vblang";

/**
 * Si la plantilla declara `dataset: <nombre>`, devuelve el nombre. Si no, null.
 * Usado para precargar el dataset antes de compilar/ejecutar.
 */
export function extractDatasetName(plantilla: Plantilla): string | null {
  for (const bloque of plantilla.bloques) {
    if (bloque.kind === "dataset") return bloque.nombre;
  }
  return null;
}
