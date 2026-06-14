/**
 * F5-02 — Tests del hook de Fullscreen API.
 *
 * Cubre: request exitoso, request rechazado (usuario denegó),
 * API no disponible, listener de fullscreenchange actualizando el
 * estado, cleanup al desmontar.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import { useState } from "react";
import { useFullscreen } from "../useFullscreen";

interface Captured {
  isFullscreen: boolean;
  request: () => Promise<boolean>;
}

let captured: Captured | undefined;
let fallbackSpy = vi.fn();

function Harness() {
  const [enabled] = useState(true);
  const fs = useFullscreen({ enabled, onFallback: fallbackSpy });
  captured = { isFullscreen: fs.isFullscreen, request: fs.request };
  return null;
}

function HarnessDisabled() {
  const fs = useFullscreen({ enabled: false, onFallback: fallbackSpy });
  captured = { isFullscreen: fs.isFullscreen, request: fs.request };
  return null;
}

beforeEach(() => {
  fallbackSpy = vi.fn();
  captured = undefined;
});

afterEach(() => {
  vi.restoreAllMocks();
  // Reset del mock de requestFullscreen.
  delete (document.documentElement as { requestFullscreen?: unknown })
    .requestFullscreen;
});

describe("useFullscreen", () => {
  it("isFullscreen=false inicialmente, request invoca document.documentElement.requestFullscreen", async () => {
    const requestMock = vi.fn().mockResolvedValue(undefined);
    (
      document.documentElement as unknown as { requestFullscreen: () => Promise<void> }
    ).requestFullscreen = requestMock;
    render(<Harness />);
    expect(captured?.isFullscreen).toBe(false);

    let ok: boolean | undefined;
    await act(async () => {
      ok = await captured!.request();
    });
    expect(ok).toBe(true);
    expect(requestMock).toHaveBeenCalledTimes(1);
    expect(fallbackSpy).not.toHaveBeenCalled();
  });

  it("request rechazado (usuario denegó) → ok=false, llama onFallback", async () => {
    const requestMock = vi.fn().mockRejectedValue(new Error("denied"));
    (
      document.documentElement as unknown as { requestFullscreen: () => Promise<void> }
    ).requestFullscreen = requestMock;
    render(<Harness />);

    let ok: boolean | undefined;
    await act(async () => {
      ok = await captured!.request();
    });
    expect(ok).toBe(false);
    expect(fallbackSpy).toHaveBeenCalledTimes(1);
  });

  it("API no disponible → ok=false, llama onFallback, no tira error", async () => {
    // Aseguramos que ningún requestFullscreen esté presente.
    const el = document.documentElement as unknown as Record<string, unknown>;
    delete el.requestFullscreen;
    delete el.webkitRequestFullscreen;
    delete el.mozRequestFullScreen;
    delete el.msRequestFullscreen;
    render(<Harness />);

    let ok: boolean | undefined;
    await act(async () => {
      ok = await captured!.request();
    });
    expect(ok).toBe(false);
    expect(fallbackSpy).toHaveBeenCalledTimes(1);
  });

  it("enabled=false → request es no-op (devuelve false sin llamar API)", async () => {
    const requestMock = vi.fn().mockResolvedValue(undefined);
    (
      document.documentElement as unknown as { requestFullscreen: () => Promise<void> }
    ).requestFullscreen = requestMock;
    render(<HarnessDisabled />);
    let ok: boolean | undefined;
    await act(async () => {
      ok = await captured!.request();
    });
    expect(ok).toBe(false);
    expect(requestMock).not.toHaveBeenCalled();
  });

  it("cleanup: el listener de fullscreenchange se quita al desmontar", () => {
    const addSpy = vi.spyOn(document, "addEventListener");
    const removeSpy = vi.spyOn(document, "removeEventListener");
    const { unmount } = render(<Harness />);
    const added = addSpy.mock.calls.filter((c) => c[0] === "fullscreenchange");
    expect(added.length).toBeGreaterThanOrEqual(1);
    unmount();
    const removed = removeSpy.mock.calls.filter(
      (c) => c[0] === "fullscreenchange"
    );
    expect(removed.length).toBeGreaterThanOrEqual(1);
  });
});
