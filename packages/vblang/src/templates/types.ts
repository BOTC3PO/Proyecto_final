/**
 * F6-05 — Shape común de las plantillas VBLang OFICIALES.
 *
 * Mismo shape que `PlantillaOficialEconomiaAR` (F6-04,
 * `economia-ar-oficiales.ts`), extraído porque F6-05 agrega 4 archivos
 * nuevos (biología, química, informática, matemáticas) que comparten
 * exactamente esta forma.
 */
export interface PlantillaOficial {
  /** Id propuesto para sembrar como `PlantillaEjercicio` (F6-01: owner=SYSTEM_OWNER_ID). */
  id: string;
  nombre: string;
  descripcion: string;
  materia: string;
  tags: string[];
  /** Subtipo del generador nativo que esta plantilla reemplaza/upgradea. */
  subtipoOriginal: string;
  codigoDsl: string;
}
