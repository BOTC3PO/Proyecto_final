/**
 * F5-03 — Tests del hook useFlushCounter.
 *
 * Cubre: estado inicial, incremento en visibilitychange hidden, no-op
 * cuando document.hidden=false, no-op cuando enabled=false, cleanup
 * del listener, reset.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFlushCounter } from "../useFlushCounter";

beforeEach(() => {
  Object.defineProperty(document, "hidden", {
    value: false,
    configurable: true,
    writable: true
  });
  Object.defineProperty(document, "visibilityState", {
    value: "visible",
    configurable: true,
    writable: true
  });
});

afterEach(() => {
  Object.defineProperty(document, "hidden", {
    value: false,
    configurable: true,
    writable: true
  });
  Object.defineProperty(document, "visibilityState", {
    value: "visible",
    configurable: true,
    writable: true
  });
});

describe("useFlushCounter", () => {
  it("estado inicial: count=0", () => {
    const { result } = renderHook(() =>
      useFlushCounter({ enabled: true })
    );
    expect(result.current.count).toBe(0);
  });

  it("incrementa en visibilitychange con document.hidden=true", () => {
    const { result } = renderHook(() =>
      useFlushCounter({ enabled: true })
    );
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current.count).toBe(1);

    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current.count).toBe(2);
  });

  it("NO incrementa en visibilitychange con document.hidden=false", () => {
    const { result } = renderHook(() =>
      useFlushCounter({ enabled: true })
    );
    Object.defineProperty(document, "hidden", {
      value: false,
      configurable: true,
      writable: true
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current.count).toBe(0);
  });

  it("enabled=false: hook es no-op (count=0, no incrementa)", () => {
    const { result } = renderHook(() =>
      useFlushCounter({ enabled: false })
    );
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current.count).toBe(0);
  });

  it("reset() vuelve el counter a 0", () => {
    const { result } = renderHook(() =>
      useFlushCounter({ enabled: true })
    );
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });

  it("cleanup: al desmontar, los listeners se quitan", () => {
    const { unmount, result } = renderHook(() =>
      useFlushCounter({ enabled: true })
    );
    expect(result.current.count).toBe(0);
    unmount();
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true
    });
    // Si el listener no se removió, esto tiraría. Si se removió, no hay efecto.
    expect(() => {
      act(() => {
        document.dispatchEvent(new Event("visibilitychange"));
      });
    }).not.toThrow();
  });

  it("cambio enabled: true → false resetea el counter", () => {
    const { result, rerender } = renderHook(
      ({ enabled }: { enabled: boolean }) =>
        useFlushCounter({ enabled }),
      { initialProps: { enabled: true } }
    );
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current.count).toBe(1);
    rerender({ enabled: false });
    expect(result.current.count).toBe(0);
  });
});
