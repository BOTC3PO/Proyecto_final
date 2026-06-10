/**
 * Tests del helper de quick-fixes (Tarea 13).
 */

import { describe, expect, it } from "vitest";
import { parse } from "@vb/vblang";
import { quickFixFor } from "../quickFixes";

describe("quickFixes", () => {
  describe("tipo-missing", () => {
    it("agrega `tipo: input` al final cuando el bloque no esta presente", () => {
      const code = `variables:
  a: 1

enunciado: "x"
respuesta: a
`;
      const fix = quickFixFor("tipo-missing", "Falta el bloque `tipo:`", code);
      expect(fix).not.toBeNull();
      expect(fix?.label).toBe("Agregar `tipo: input`");
      expect(fix?.newCode).toMatch(/tipo: input\s*$/);
    });

    it("no duplica si el bloque ya esta", () => {
      const code = `variables:
  a: 1

enunciado: "x"
respuesta: a
tipo: input
`;
      const fix = quickFixFor("tipo-missing", "Falta el bloque `tipo:`", code);
      // Si el fix existe, no debe duplicar `tipo:`.
      if (fix) {
        const matches = fix.newCode.match(/^\s*tipo\s*:/gm) ?? [];
        expect(matches.length).toBe(1);
      }
    });

    it("el codigo resultante compila", () => {
      const code = `variables:
  a: 1

enunciado: "x"
respuesta: a
`;
      const fix = quickFixFor("tipo-missing", "Falta el bloque `tipo:`", code);
      expect(fix).not.toBeNull();
      // Debe parsear sin tirar ParseError.
      expect(() => parse(fix!.newCode)).not.toThrow();
    });
  });

  describe("Falta enunciado", () => {
    it("agrega `enunciado: \"...\"` al final cuando el code es PARSE", () => {
      const code = `variables:
  a: 1

respuesta: a
tipo: input
`;
      const fix = quickFixFor(
        "PARSE",
        "Falta el bloque obligatorio `enunciado:` (o `enunciados:` con una lista de variantes)",
        code,
      );
      expect(fix).not.toBeNull();
      expect(fix?.label).toBe("Agregar enunciado");
      expect(fix?.newCode).toMatch(/enunciado:\s*"\.\.\."/);
    });

    it("tambien matchea por mensaje aunque el code no sea PARSE (fallback)", () => {
      const code = `variables:
  a: 1

respuesta: a
tipo: input
`;
      const fix = quickFixFor(
        undefined,
        "Falta el bloque obligatorio `enunciado:` (o `enunciados:`)",
        code,
      );
      expect(fix).not.toBeNull();
    });
  });

  describe("Variable no declarada (enunciados[i])", () => {
    it("agrega `  X: 0` al bloque `variables:` existente", () => {
      const code = `variables:
  a: 1

enunciados:
  - "{a} y {b}"
tipo: input
`;
      const fix = quickFixFor(
        "enunciados-var-undef",
        'enunciados[0]: variable "b" no declarada',
        code,
      );
      expect(fix).not.toBeNull();
      expect(fix?.label).toBe("Declarar `b`");
      // b: 0 debe estar en el bloque variables, despues de a: 1.
      expect(fix?.newCode).toMatch(/variables:\n\s{2,}a: 1\n\s{2,}b: 0/);
    });

    it("crea el bloque `variables:` si no existe", () => {
      const code = `mapa: world_countries

enunciados:
  - "{pais}"
tipo: marcar_mapa
respuesta_iso: "ARG"
`;
      const fix = quickFixFor(
        "enunciados-var-undef",
        'enunciados[0]: variable "pais" no declarada',
        code,
      );
      expect(fix).not.toBeNull();
      // El bloque variables: debe aparecer despues del bloque mapa:.
      expect(fix?.newCode).toMatch(/mapa: world_countries\n\nvariables:\n\s{2,}pais: 0/);
    });

    it("no duplica si la variable ya esta declarada", () => {
      const code = `variables:
  a: 1
  b: 2

enunciados:
  - "{a} y {b}"
tipo: input
`;
      const fix = quickFixFor(
        "enunciados-var-undef",
        'enunciados[0]: variable "a" no declarada',
        code,
      );
      // No debe cambiar nada (a ya esta).
      expect(fix?.newCode).toBe(code);
    });

    it("rechaza nombres de variable invalidos", () => {
      const code = "x";
      const fix = quickFixFor(
        "enunciados-var-undef",
        'enunciados[0]: variable "123bad" no declarada',
        code,
      );
      expect(fix).toBeNull();
    });
  });

  it("devuelve null para errores que no son quick-fixeables", () => {
    const fix = quickFixFor(
      "range-invalid",
      "random(5, 1): min > max",
      "variables:\n  a: random(5, 1)\n",
    );
    expect(fix).toBeNull();
  });
});
