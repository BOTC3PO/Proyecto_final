/**
 * F5-02 — Tests del hook de flush al perder visibilidad.
 *
 * Cubre: suscripción a visibilitychange (hidden), window.blur,
 * window.beforeunload; cleanup al desmontar; idempotencia (varios
 * eventos en rápida sucesión disparan varias llamadas, eso es OK
 * porque `flushOutbox` es idempotente).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import { useFlushOnHidden } from "../useFlushOnHidden";

const flushSpy = vi.fn();

function Harness() {
  useFlushOnHidden(flushSpy);
  return null;
}

beforeEach(() => {
  flushSpy.mockReset();
});

afterEach(() => {
  // Restaurar document.hidden a false por si algún test lo cambió.
  Object.defineProperty(document, "hidden", {
    value: false,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(document, "visibilityState", {
    value: "visible",
    configurable: true,
    writable: true,
  });
});

describe("useFlushOnHidden", () => {
  it("window 'blur' dispara el callback", () => {
    render(<Harness />);
    act(() => {
      window.dispatchEvent(new Event("blur"));
    });
    expect(flushSpy).toHaveBeenCalledTimes(1);
  });

  it("window 'beforeunload' dispara el callback", () => {
    render(<Harness />);
    act(() => {
      window.dispatchEvent(new Event("beforeunload"));
    });
    expect(flushSpy).toHaveBeenCalledTimes(1);
  });

  it("document 'visibilitychange' con document.hidden=true dispara el callback", () => {
    render(<Harness />);
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true,
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(flushSpy).toHaveBeenCalledTimes(1);
  });

  it("document 'visibilitychange' con document.hidden=false NO dispara", () => {
    render(<Harness />);
    Object.defineProperty(document, "hidden", {
      value: false,
      configurable: true,
      writable: true,
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(flushSpy).not.toHaveBeenCalled();
  });

  it("cleanup: al desmontar, los listeners se quitan", () => {
    const { unmount } = render(<Harness />);
    unmount();
    act(() => {
      window.dispatchEvent(new Event("blur"));
    });
    act(() => {
      window.dispatchEvent(new Event("beforeunload"));
    });
    expect(flushSpy).not.toHaveBeenCalled();
  });

  it("un error en el callback no rompe los listeners siguientes", () => {
    const failing = vi.fn(() => {
      throw new Error("boom");
    });
    function FailingHarness() {
      useFlushOnHidden(failing);
      return null;
    }
    render(<FailingHarness />);
    expect(() => {
      act(() => {
        window.dispatchEvent(new Event("blur"));
      });
      act(() => {
        window.dispatchEvent(new Event("blur"));
      });
    }).not.toThrow();
    expect(failing).toHaveBeenCalledTimes(2);
  });
});
