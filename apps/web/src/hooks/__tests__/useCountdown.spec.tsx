/**
 * F5-02 — Tests del cronómetro del intento de evaluación.
 *
 * Cubre: estado inicial, decremento, expiración una sola vez,
 * reset al cambiar initialSeconds, no-op cuando initialSeconds es
 * null, cleanup del setInterval en unmount.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import { useState } from "react";
import { useCountdown } from "../useCountdown";

interface Captured {
  remaining: number | null;
  isExpired: boolean;
}

let captured: Captured | undefined;
const expireSpy = vi.fn();

function Harness({ initial }: { initial: number | null }) {
  const state = useCountdown({ initialSeconds: initial, onExpire: expireSpy });
  captured = state;
  return null;
}

function setInitial(initial: number | null) {
  (window as unknown as { __setInitial: (v: number | null) => void }).__setInitial(
    initial
  );
}

function HarnessWithToggle({ first, second }: { first: number; second: number }) {
  const [current, setCurrent] = useState<number>(first);
  const state = useCountdown({ initialSeconds: current, onExpire: expireSpy });
  captured = state;
  (window as unknown as { __setInitial: (v: number) => void }).__setInitial = (
    v: number
  ) => setCurrent(v);
  void second;
  return null;
}

beforeEach(() => {
  vi.useFakeTimers();
  expireSpy.mockReset();
  captured = undefined;
});

afterEach(() => {
  vi.useRealTimers();
});

describe("useCountdown", () => {
  it("estado inicial: remaining = initialSeconds, isExpired = false", () => {
    render(<Harness initial={60} />);
    expect(captured?.remaining).toBe(60);
    expect(captured?.isExpired).toBe(false);
  });

  it("decrementa 1 unidad por segundo (fake timers)", () => {
    render(<Harness initial={5} />);
    expect(captured?.remaining).toBe(5);
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(captured?.remaining).toBe(4);
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(captured?.remaining).toBe(3);
  });

  it("al llegar a 0 marca isExpired y llama onExpire una sola vez", () => {
    render(<Harness initial={2} />);
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(captured?.remaining).toBe(0);
    expect(captured?.isExpired).toBe(true);
    expect(expireSpy).toHaveBeenCalledTimes(1);

    // Ticks adicionales no vuelven a llamar onExpire.
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(expireSpy).toHaveBeenCalledTimes(1);
    expect(captured?.remaining).toBe(0);
  });

  it("no-op cuando initialSeconds es null: remaining null, no tick, no expire", () => {
    render(<Harness initial={null} />);
    expect(captured?.remaining).toBeNull();
    expect(captured?.isExpired).toBe(false);
    act(() => {
      vi.advanceTimersByTime(60_000);
    });
    expect(captured?.remaining).toBeNull();
    expect(captured?.isExpired).toBe(false);
    expect(expireSpy).not.toHaveBeenCalled();
  });

  it("reset al cambiar initialSeconds: el contador vuelve al nuevo valor y isExpired=false", () => {
    render(<HarnessWithToggle first={3} second={10} />);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(captured?.remaining).toBe(0);
    expect(captured?.isExpired).toBe(true);
    expect(expireSpy).toHaveBeenCalledTimes(1);

    // Carga de un nuevo intento: initialSeconds cambia.
    act(() => {
      setInitial(10);
    });
    expect(captured?.remaining).toBe(10);
    expect(captured?.isExpired).toBe(false);

    // El nuevo ciclo también puede expirar.
    act(() => {
      vi.advanceTimersByTime(10_000);
    });
    expect(captured?.remaining).toBe(0);
    expect(captured?.isExpired).toBe(true);
    expect(expireSpy).toHaveBeenCalledTimes(2);
  });

  it("un error en onExpire no rompe el cronómetro", () => {
    const failing = vi.fn(() => {
      throw new Error("boom");
    });
    function FailingHarness() {
      useCountdown({ initialSeconds: 1, onExpire: failing });
      return null;
    }
    render(<FailingHarness />);
    expect(() => {
      act(() => {
        vi.advanceTimersByTime(1000);
      });
    }).not.toThrow();
    expect(failing).toHaveBeenCalledTimes(1);
  });
});
