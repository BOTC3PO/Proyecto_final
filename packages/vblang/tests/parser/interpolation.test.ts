import { describe, expect, it } from "vitest";
import { ParseError } from "../../src/parser/errors.js";
import { parseEnunciadoString } from "../../src/parser/interpolation.js";

const baseLoc = { line: 1, col: 1, endLine: 1, endCol: 1 };

describe("interpolación de strings", () => {
  it('"Recorre {v * t | 0} km"', () => {
    const parts = parseEnunciadoString("Recorre {v * t | 0} km", baseLoc);
    expect(parts).toHaveLength(3);
    expect(parts[0]).toMatchObject({ kind: "texto", value: "Recorre " });
    expect(parts[1]).toMatchObject({
      kind: "interp",
      modificador: "0",
      expr: {
        kind: "binop",
        op: "*",
        left: { kind: "var", name: "v" },
        right: { kind: "var", name: "t" },
      },
    });
    expect(parts[2]).toMatchObject({ kind: "texto", value: " km" });
  });

  it('"Pasa {{nada}}" devuelve "Pasa {nada}" como texto literal', () => {
    const parts = parseEnunciadoString("Pasa {{nada}}", baseLoc);
    expect(parts).toEqual([{ kind: "texto", value: "Pasa {nada}" }]);
  });

  it('"Llave {v sin cerrar" lanza ParseError', () => {
    expect(() => parseEnunciadoString("Llave {v sin cerrar", baseLoc)).toThrow(
      ParseError,
    );
    expect(() => parseEnunciadoString("Llave {v sin cerrar", baseLoc)).toThrow(
      /no se cierra/,
    );
  });

  it("modificador único capitaliza un acceso a campo", () => {
    const parts = parseEnunciadoString(
      "{vehiculo.articulo | capitalizar} algo",
      baseLoc,
    );
    expect(parts).toHaveLength(2);
    expect(parts[0]).toMatchObject({
      kind: "interp",
      modificador: "capitalizar",
      expr: {
        kind: "field",
        target: { kind: "var", name: "vehiculo" },
        field: "articulo",
      },
    });
    expect(parts[1]).toMatchObject({ kind: "texto", value: " algo" });
  });

  it("expresión sin modificador", () => {
    const parts = parseEnunciadoString("Valor: {x + 1}", baseLoc);
    expect(parts).toHaveLength(2);
    expect(parts[1]).toMatchObject({ kind: "interp" });
    if (parts[1].kind === "interp") {
      expect(parts[1].modificador).toBeUndefined();
    }
  });

  it("texto sin interpolación", () => {
    const parts = parseEnunciadoString("Solo texto sin nada", baseLoc);
    expect(parts).toEqual([{ kind: "texto", value: "Solo texto sin nada" }]);
  });

  it("varias interpolaciones seguidas", () => {
    const parts = parseEnunciadoString("{a}{b}{c}", baseLoc);
    expect(parts).toHaveLength(3);
    expect(parts.every((p) => p.kind === "interp")).toBe(true);
  });
});
