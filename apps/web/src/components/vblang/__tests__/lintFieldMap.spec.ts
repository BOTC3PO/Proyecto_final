/**
 * VB-B5 — tests del mapeo lint → fieldId.
 *
 * Helper puro (`lintIssueToFieldId`) que decide a qué campo del
 * formulario se le debería pintar el error de un `LintIssue`. Se
 * testea en aislamiento porque toda la lógica de routing vive acá
 * y no depende de React.
 *
 * Cubre:
 *  - Códigos más comunes y sus fieldIds esperados.
 *  - Mensajes con índice (`enunciados[i]`, `pistas[i]`) — extrae
 *    el índice correctamente.
 *  - Mensajes con formato inesperado → devuelve `null` (fallback
 *    seguro: el error queda en el panel general).
 *  - `buildFieldErrors` agrupa issues por fieldId.
 *  - `fieldHasError` / `FieldErrorBadge` se comportan según el map.
 */

import { describe, expect, it } from "vitest";
import type { LintIssue } from "@vb/vblang";
import { lintIssueToFieldId } from "../lintFieldMap";
import {
  buildFieldErrors,
  fieldHasError,
  FieldErrorBadge,
} from "../FieldErrorBadge";

function issue(partial: Partial<LintIssue>): LintIssue {
  return {
    severity: "error",
    code: "x",
    message: "",
    line: 1,
    col: 1,
    ...partial,
  };
}

describe("VB-B5: lintIssueToFieldId", () => {
  it("mapea var-duplicada → 'variables'", () => {
    expect(
      lintIssueToFieldId(
        issue({ code: "var-duplicada", message: "variable duplicada: a" })
      )
    ).toBe("variables");
  });

  it("mapea range-invalid → 'variables'", () => {
    expect(
      lintIssueToFieldId(
        issue({ code: "range-invalid", message: "random(5, 1): min > max" })
      )
    ).toBe("variables");
  });

  it("mapea enunciados-var-undef a 'enunciados.<i>' extrayendo el índice", () => {
    expect(
      lintIssueToFieldId(
        issue({
          code: "enunciados-var-undef",
          message: 'enunciados[2]: variable "x" no declarada',
        })
      )
    ).toBe("enunciados.2");
    expect(
      lintIssueToFieldId(
        issue({
          code: "enunciados-var-undef",
          message: 'enunciados[0]: variable "y" no declarada',
        })
      )
    ).toBe("enunciados.0");
  });

  it("mapea pistas-var-undef a 'pistas.<i>'", () => {
    expect(
      lintIssueToFieldId(
        issue({
          code: "pistas-var-undef",
          message: 'pistas[1]: variable "n" no declarada',
        })
      )
    ).toBe("pistas.1");
  });

  it("mapea explicacion-var-undef → 'explicacion'", () => {
    expect(
      lintIssueToFieldId(
        issue({
          code: "explicacion-var-undef",
          message: 'explicacion: variable "x" no declarada',
        })
      )
    ).toBe("explicacion");
  });

  it("mapea type-mismatch/vf-requires-boolean/mc-requires-number → 'respuesta'", () => {
    expect(
      lintIssueToFieldId(issue({ code: "type-mismatch", message: "x" }))
    ).toBe("respuesta");
    expect(
      lintIssueToFieldId(issue({ code: "vf-requires-boolean", message: "x" }))
    ).toBe("respuesta");
    expect(
      lintIssueToFieldId(issue({ code: "mc-requires-number", message: "x" }))
    ).toBe("respuesta");
    expect(
      lintIssueToFieldId(
        issue({ code: "mc-opcion-no-incluida", message: "x" })
      )
    ).toBe("respuesta");
  });

  it("mapea palabra-no-en-texto → 'respuestas_validas'", () => {
    expect(
      lintIssueToFieldId(
        issue({ code: "palabra-no-en-texto", message: "x" })
      )
    ).toBe("respuestas_validas");
  });

  it("errores globales (tipo-missing, enunciados-duplicado, etc.) → null", () => {
    const globales = [
      "tipo-missing",
      "enunciados-duplicado",
      "ordenar-requires-opciones-explicitas",
      "ordenar-requires-respuesta-orden",
      "ordenar-sets-diferentes",
      "marcar-mapa-requires-mapa",
      "marcar-mapa-requires-respuesta-iso",
      "analisis-sintactico-requires-texto-analizar",
      "analisis-sintactico-requires-etiquetas-pedidas",
      "identificar-palabras-requires-texto-analizar",
      "identificar-palabras-requires-respuestas-validas",
      "abierta-correccion-invalida",
      "correccion-fuera-de-abierta",
      "random-inline",
    ];
    for (const code of globales) {
      expect(
        lintIssueToFieldId(issue({ code, message: "x" })),
        `esperaba null para ${code}`
      ).toBeNull();
    }
  });

  it("código desconocido → null (fallback seguro, no rompe)", () => {
    expect(
      lintIssueToFieldId(issue({ code: "code-raro-del-futuro", message: "x" }))
    ).toBeNull();
  });

  it("mensaje con formato inesperado (sin corchetes) → fallback a key raíz", () => {
    // Si el linter cambia el formato del mensaje y ya no incluye
    // `[N]`, igual señalamos el bloque (no la variante exacta).
    expect(
      lintIssueToFieldId(
        issue({
          code: "enunciados-var-undef",
          message: 'variable "x" no declarada',
        })
      )
    ).toBe("enunciados");
    expect(
      lintIssueToFieldId(
        issue({
          code: "pistas-var-undef",
          message: 'variable "x" no declarada',
        })
      )
    ).toBe("pistas");
  });

  it("mensaje con índice no-numérico → fallback a key raíz", () => {
    expect(
      lintIssueToFieldId(
        issue({
          code: "enunciados-var-undef",
          message: "enunciados[abc]: variable x",
        })
      )
    ).toBe("enunciados");
  });
});

describe("VB-B5: buildFieldErrors", () => {
  it("agrupa issues por fieldId y descarta los null (globales)", () => {
    const issues: LintIssue[] = [
      issue({
        code: "var-duplicada",
        message: "variable duplicada: a",
      }),
      issue({
        code: "enunciados-var-undef",
        message: 'enunciados[0]: variable "x" no declarada',
      }),
      issue({
        code: "enunciados-var-undef",
        message: 'enunciados[0]: variable "y" no declarada',
      }),
      issue({
        code: "tipo-missing",
        message: "global",
      }),
    ];
    const map = buildFieldErrors(issues);
    expect(map.variables).toHaveLength(1);
    expect(map["enunciados.0"]).toHaveLength(2);
    expect(map.tipo).toBeUndefined();
  });

  it("devuelve {} cuando no hay issues", () => {
    expect(buildFieldErrors([])).toEqual({});
  });
});

describe("VB-B5: fieldHasError", () => {
  it("true sólo cuando el fieldId tiene issues", () => {
    const map = buildFieldErrors([
      issue({ code: "var-duplicada", message: "x" }),
    ]);
    expect(fieldHasError("variables", map)).toBe(true);
    expect(fieldHasError("enunciado", map)).toBe(false);
    expect(fieldHasError("no-existe", map)).toBe(false);
  });
});

describe("VB-B5: FieldErrorBadge", () => {
  it("devuelve null cuando no hay error para fieldId", () => {
    const map = buildFieldErrors([
      issue({ code: "var-duplicada", message: "x" }),
    ]);
    const el = FieldErrorBadge({ fieldId: "enunciado", errors: map });
    expect(el).toBeNull();
  });

  it("renderiza un <ul role='alert'> con data-testid estable", () => {
    const map = buildFieldErrors([
      issue({
        code: "enunciados-var-undef",
        message: 'enunciados[0]: variable "x" no declarada',
      }),
    ]);
    const el = FieldErrorBadge({ fieldId: "enunciados.0", errors: map });
    expect(el).not.toBeNull();
    // Tipo: ReactElement. Verificamos el tipo del nodo y el data-testid.
    const node = el as unknown as {
      type: string;
      props: { "data-testid": string; children: Array<unknown> };
    };
    expect(node.type).toBe("ul");
    expect(node.props["data-testid"]).toBe(
      "vblang-field-error-enunciados.0"
    );
  });
});
