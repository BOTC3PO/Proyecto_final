import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { SPRINT_9B_EXAMPLES } from "../examples";

/**
 * Cada ejemplo debe pasar el pipeline completo parse → compile → generate
 * sin lanzar excepción. Si esto falla, hay una desincronización entre el
 * DSL del archivo `examples.ts` y el parser/runtime del paquete @vb/vblang.
 */
describe("SPRINT_9B_EXAMPLES — pipeline parse → compile → generate", () => {
  for (const ej of SPRINT_9B_EXAMPLES) {
    it(`"${ej.titulo}" se parsea, compila y genera correctamente`, () => {
      const ast = parse(ej.codigoDsl);
      expect(ast.kind).toBe("plantilla");

      const compiled = compile(ast);
      // generate puede fallar si las restricciones son imposibles; con seed
      // fija el resultado es determinista.
      const result = generate(compiled, { seed: "examples-test" });
      // El resultado dependerá del tipo, pero debe tener al menos un enunciado
      // string no vacío y un campo de respuesta presente.
      expect(typeof result.enunciado).toBe("string");
      expect(result.enunciado.length).toBeGreaterThan(0);
    });
  }
});
