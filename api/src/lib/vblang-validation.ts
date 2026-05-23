import { compile, parse } from "@vb/vblang";

export type ValidationResult =
  | { ok: true }
  | { ok: false; message: string; line?: number; col?: number };

/**
 * Red de seguridad server-side. NO corre las 100 simulaciones del validador
 * (eso es trabajo del editor en el frontend). Solo verifica que el código
 * parsea y compila sin errores estructurales.
 */
export function validateDslSyntax(codigoDsl: string): ValidationResult {
  try {
    const plantilla = parse(codigoDsl);
    compile(plantilla);
    return { ok: true };
  } catch (e) {
    const err = e as Error & { line?: number; col?: number };
    return {
      ok: false,
      message: err.message,
      line: err.line,
      col: err.col,
    };
  }
}

/**
 * Valida que cada fila de un dataset tenga exactamente las columnas declaradas
 * y que los valores sean del tipo declarado.
 */
export function validateDatasetFilas(
  columnas: Record<string, "string" | "number" | "boolean">,
  filas: Array<Record<string, unknown>>,
): { ok: true } | { ok: false; filaIndex: number; message: string } {
  const colNames = Object.keys(columnas);
  for (let i = 0; i < filas.length; i++) {
    const fila = filas[i];
    const filaKeys = Object.keys(fila);
    if (filaKeys.length !== colNames.length) {
      return {
        ok: false,
        filaIndex: i,
        message: `fila ${i} tiene ${filaKeys.length} columnas, se esperaban ${colNames.length}`,
      };
    }
    for (const col of colNames) {
      if (!(col in fila)) {
        return {
          ok: false,
          filaIndex: i,
          message: `fila ${i} no tiene columna "${col}"`,
        };
      }
      const expected = columnas[col];
      const value = fila[col];
      const actual = typeof value;
      if (actual !== expected) {
        return {
          ok: false,
          filaIndex: i,
          message: `fila ${i} columna "${col}": esperaba ${expected}, recibió ${actual}`,
        };
      }
    }
  }
  return { ok: true };
}
