/**
 * Tests del hook usePlantillaCompilation.
 *
 * Estrategia: render dentro de un componente test que setea `codigoDsl` y
 * lee el state devuelto. Usamos `vi.useFakeTimers` para controlar el
 * debounce (500ms por default).
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { act, render } from "@testing-library/react";
import { useState } from "react";
import {
  usePlantillaCompilation,
  type CompilationState,
} from "../usePlantillaCompilation";

let captured: CompilationState | undefined;

function Harness({ initial }: { initial: string }) {
  const [code, setCode] = useState(initial);
  const state = usePlantillaCompilation(code, 500);
  captured = state;
  // Exponemos el setter via window para los tests
  (window as unknown as { __setCode: (v: string) => void }).__setCode = setCode;
  return null;
}

const VALID_DSL = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "{a} + {b}"
respuesta: a + b
tipo: input
`;

const INVALID_DSL = `variables:
  a: random(
`;

describe("usePlantillaCompilation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    captured = undefined;
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("con código válido pasa a status 'ok' y produce compiled", async () => {
    render(<Harness initial={VALID_DSL} />);
    await act(async () => {
      vi.advanceTimersByTime(600);
    });
    expect(captured?.status).toBe("ok");
    expect(captured?.compiled).toBeDefined();
    expect(captured?.lintReport).toBeDefined();
    expect(captured?.parseError).toBeUndefined();
  });

  it("con código inválido pasa a status 'parse-error'", async () => {
    render(<Harness initial={INVALID_DSL} />);
    await act(async () => {
      vi.advanceTimersByTime(600);
    });
    expect(captured?.status).toBe("parse-error");
    expect(captured?.parseError).toBeDefined();
    expect(captured?.compiled).toBeUndefined();
  });

  it("debounce: cambios rápidos no disparan compile múltiples veces", async () => {
    render(<Harness initial={VALID_DSL} />);
    const setCode = (window as unknown as { __setCode: (v: string) => void })
      .__setCode;
    // Cambiamos varias veces antes de que se cumpla el debounce
    await act(async () => {
      setCode(VALID_DSL + "\n# c1");
      vi.advanceTimersByTime(100);
      setCode(VALID_DSL + "\n# c2");
      vi.advanceTimersByTime(100);
      setCode(VALID_DSL + "\n# c3");
      vi.advanceTimersByTime(100);
    });
    // Antes de los 500ms desde el último cambio, status sigue idle/anterior
    expect(captured?.status).not.toBe("ok-pending-final");
    // Después de superar el debounce final
    await act(async () => {
      vi.advanceTimersByTime(600);
    });
    expect(captured?.status).toBe("ok");
  });
});
