import { describe, expect, it } from "vitest";
import { CONSTANTES_GLOBALES } from "../../src/evaluator/constants.js";
import { interpolar } from "../../src/evaluator/interpolation.js";
import { Scope } from "../../src/evaluator/scope.js";
import { parseEnunciadoString } from "../../src/parser/interpolation.js";
import { makeCtx } from "./_helpers.js";

const baseLoc = { line: 1, col: 1, endLine: 1, endCol: 1 };

function interp(
  template: string,
  vars: Record<string, unknown> = {},
): string {
  const partes = parseEnunciadoString(template, baseLoc);
  const ctx = makeCtx();
  const scope = new Scope({ ...CONSTANTES_GLOBALES, ...vars });
  return interpolar(partes, scope, ctx);
}

describe("interpolación runtime", () => {
  it('"{a + b}" con a=2, b=3 → "5"', () => {
    expect(interp("{a + b}", { a: 2, b: 3 })).toBe("5");
  });

  it("modificador numérico: {x | 2} con x=3.14159 → 3.14", () => {
    expect(interp("{x | 2}", { x: 3.14159 })).toBe("3.14");
  });

  it("modificador de unidad: {v | km/h} con v=80 → 80 km/h", () => {
    expect(interp("{v | km/h}", { v: 80 })).toBe("80 km/h");
  });

  it("modificador capitalizar", () => {
    expect(interp("{nombre | capitalizar}", { nombre: "juan" })).toBe("Juan");
  });

  it("modificador mayusculas", () => {
    expect(interp("{nombre | mayusculas}", { nombre: "juan" })).toBe("JUAN");
  });

  it("expresión compuesta con modificador 0", () => {
    expect(interp("Distancia: {v * t | 0} km", { v: 80, t: 3.5 })).toBe(
      "Distancia: 280 km",
    );
  });

  it("verdadero → 'verdadero'", () => {
    expect(interp("{verdadero}")).toBe("verdadero");
  });

  it("array → '1,2,3'", () => {
    expect(interp("{[1, 2, 3]}")).toBe("1,2,3");
  });

  it("llaves escapadas: 'Pasa {{nada}}' → 'Pasa {nada}'", () => {
    expect(interp("Pasa {{nada}}")).toBe("Pasa {nada}");
  });

  it("acceso a campo", () => {
    expect(interp("{vehiculo.nombre}", { vehiculo: { nombre: "auto" } })).toBe(
      "auto",
    );
  });

  it("número entero sin modificador no muestra decimales", () => {
    expect(interp("{x}", { x: 5 })).toBe("5");
  });

  it("número decimal sin modificador muestra hasta 4 decimales sin trailing zero", () => {
    expect(interp("{x}", { x: 3.1 })).toBe("3.1");
    expect(interp("{x}", { x: 3.14159 })).toBe("3.1416");
  });

  it("texto sin interpolación se preserva", () => {
    expect(interp("Solo texto")).toBe("Solo texto");
  });
});
