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
import * as vblang from "@vb/vblang";
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

  it("debounce: cambios rápidos solo disparan parse una vez tras el último", async () => {
    const parseSpy = vi.spyOn(vblang, "parse");
    parseSpy.mockClear();
    render(<Harness initial={VALID_DSL} />);
    // Esperamos al primer debounce — eso cuenta UN parse del render inicial.
    await act(async () => {
      vi.advanceTimersByTime(600);
    });
    const baseline = parseSpy.mock.calls.length;
    expect(baseline).toBeGreaterThanOrEqual(1);

    const setCode = (window as unknown as { __setCode: (v: string) => void })
      .__setCode;
    // Tres cambios separados por 100ms cada uno (< 500ms de debounce). Cada uno
    // cancela el timer anterior, así que NO debería parsearse nada todavía.
    await act(async () => {
      setCode(VALID_DSL + "\n# c1");
      vi.advanceTimersByTime(100);
      setCode(VALID_DSL + "\n# c2");
      vi.advanceTimersByTime(100);
      setCode(VALID_DSL + "\n# c3");
      vi.advanceTimersByTime(100);
    });
    expect(parseSpy.mock.calls.length).toBe(baseline);

    // Después de superar el debounce del último cambio, parse se invoca UNA
    // sola vez más (no tres) — esto es el punto del debounce.
    await act(async () => {
      vi.advanceTimersByTime(600);
    });
    expect(parseSpy.mock.calls.length).toBe(baseline + 1);
    expect(captured?.status).toBe("ok");
    parseSpy.mockRestore();
  });
});
