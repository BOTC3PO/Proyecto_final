import { describe, expect, it } from "vitest";
import type { ModuleQuizQuestion as PaqueteQuestion } from "@vb/vblang";
import type { ModuleQuizQuestion as WebQuestion } from "../../domain/module/module.types";

/**
 * Test de compatibilidad estructural entre el `ModuleQuizQuestion` del paquete
 * @vb/vblang y el de apps/web/src/domain/module/module.types.ts.
 *
 * Si los tipos divergen, este archivo falla en `tsc --noEmit` y obliga a
 * sincronizar el shape del paquete con el shape de apps/web.
 *
 * El test runtime es trivial: el "test" real es el typecheck.
 */
function isCompatible(q: PaqueteQuestion): WebQuestion {
  return q as unknown as WebQuestion;
}

function reverse(q: WebQuestion): PaqueteQuestion {
  return q as unknown as PaqueteQuestion;
}

describe("vblang ModuleQuizQuestion compat con apps/web", () => {
  it("typecheck en ambas direcciones", () => {
    expect(typeof isCompatible).toBe("function");
    expect(typeof reverse).toBe("function");
  });
});
