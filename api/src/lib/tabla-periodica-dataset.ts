/**
 * F6-06 — Dataset oficial "tabla periódica".
 *
 * Subconjunto de `ELEMENTOS` (`apps/web/src/generadoresV2/quimica/AtomosEnlaces.ts`)
 * con las columnas pedidas por el issue: Z, símbolo, config, electronegatividad,
 * radio (+ `nombre` para enunciados legibles). Se siembra como `VblangDataset`
 * `visibility: "publica"` propiedad de `SYSTEM_OWNER_ID` (mismo patrón que las
 * plantillas oficiales de F6-01).
 *
 * `nombre: "tabla_periodica"` es un IDENT snake_case válido — requisito de
 * `docs/vblang/diagnostico_datasets.md` para que `dataset: tabla_periodica` +
 * `uno_de(tabla_periodica)` funcione desde el DSL (a diferencia de los
 * datasets demo "Capitales de América" / "Ciudades de Argentina", sembrados
 * con nombres no-IDENT y por eso inusables desde plantillas).
 */

export const TABLA_PERIODICA_NOMBRE = "tabla_periodica";

export const TABLA_PERIODICA_COLUMNAS = {
  Z: "number",
  simbolo: "string",
  nombre: "string",
  config: "string",
  electronegatividad: "number",
  radio: "number",
} as const;

export const TABLA_PERIODICA_FILAS: Array<{
  Z: number;
  simbolo: string;
  nombre: string;
  config: string;
  electronegatividad: number;
  radio: number;
}> = [
  { Z: 1, simbolo: "H", nombre: "hidrógeno", config: "1s¹", electronegatividad: 2.20, radio: 53 },
  { Z: 2, simbolo: "He", nombre: "helio", config: "1s²", electronegatividad: 0.00, radio: 31 },
  { Z: 3, simbolo: "Li", nombre: "litio", config: "[He] 2s¹", electronegatividad: 0.98, radio: 167 },
  { Z: 6, simbolo: "C", nombre: "carbono", config: "[He] 2s² 2p²", electronegatividad: 2.55, radio: 77 },
  { Z: 7, simbolo: "N", nombre: "nitrógeno", config: "[He] 2s² 2p³", electronegatividad: 3.04, radio: 75 },
  { Z: 8, simbolo: "O", nombre: "oxígeno", config: "[He] 2s² 2p⁴", electronegatividad: 3.44, radio: 73 },
  { Z: 9, simbolo: "F", nombre: "flúor", config: "[He] 2s² 2p⁵", electronegatividad: 3.98, radio: 64 },
  { Z: 11, simbolo: "Na", nombre: "sodio", config: "[Ne] 3s¹", electronegatividad: 0.93, radio: 186 },
  { Z: 12, simbolo: "Mg", nombre: "magnesio", config: "[Ne] 3s²", electronegatividad: 1.31, radio: 160 },
  { Z: 13, simbolo: "Al", nombre: "aluminio", config: "[Ne] 3s² 3p¹", electronegatividad: 1.61, radio: 143 },
  { Z: 14, simbolo: "Si", nombre: "silicio", config: "[Ne] 3s² 3p²", electronegatividad: 1.90, radio: 118 },
  { Z: 17, simbolo: "Cl", nombre: "cloro", config: "[Ne] 3s² 3p⁵", electronegatividad: 3.16, radio: 99 },
  { Z: 20, simbolo: "Ca", nombre: "calcio", config: "[Ar] 4s²", electronegatividad: 1.00, radio: 197 },
  { Z: 26, simbolo: "Fe", nombre: "hierro", config: "[Ar] 3d⁶ 4s²", electronegatividad: 1.83, radio: 126 },
  { Z: 29, simbolo: "Cu", nombre: "cobre", config: "[Ar] 3d¹⁰ 4s¹", electronegatividad: 1.90, radio: 128 },
  { Z: 35, simbolo: "Br", nombre: "bromo", config: "[Ar] 3d¹⁰ 4s² 4p⁵", electronegatividad: 2.96, radio: 114 },
];
