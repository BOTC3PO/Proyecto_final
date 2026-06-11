/**
 * Tests unitarios del hook useViewBoxZoom (M7).
 *
 * Estrategia: montar un componente de prueba que use el hook con un
 * `<svg>` real (happy-dom) y dispare eventos sintéticos para verificar
 * el comportamiento de zoom + pan + reset.
 *
 * Truco: el hook devuelve un objeto NUEVO en cada render, por lo que
 * capturamos la API en un `ref` externo (`apiRef`) y leemos siempre
 * la referencia más reciente vía `getApi()`.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup, act } from "@testing-library/react";
import { useRef } from "react";
import { useViewBoxZoom, type UseViewBoxZoomResult } from "../useViewBoxZoom";

const WIDTH = 1000;
const HEIGHT = 620;

let apiRef: { current: UseViewBoxZoomResult | null } = { current: null };
let onReadyCalled = false;

function Harness({
  options,
}: {
  options?: Partial<Parameters<typeof useViewBoxZoom>[0]>;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const api = useViewBoxZoom({ width: WIDTH, height: HEIGHT, svgRef, ...options });
  // Exponer SIEMPRE la API más reciente.
  apiRef.current = api;
  // Aviso one-shot al primer render.
  if (!onReadyCalled) onReadyCalled = true;
  return (
    <svg
      ref={svgRef}
      data-testid="svg"
      viewBox={`${api.viewBox.x} ${api.viewBox.y} ${api.viewBox.w} ${api.viewBox.h}`}
    >
      <rect width={WIDTH} height={HEIGHT} />
    </svg>
  );
}

beforeEach(() => {
  apiRef = { current: null };
  onReadyCalled = false;
  if (typeof Element !== "undefined" && !(Element.prototype as any).__patchedRect) {
    const orig = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = function () {
      if (this instanceof SVGSVGElement) {
        return { x: 0, y: 0, top: 0, left: 0, right: WIDTH, bottom: HEIGHT, width: WIDTH, height: HEIGHT, toJSON: () => ({}) };
      }
      return orig.call(this);
    };
    (Element.prototype as any).__patchedRect = true;
  }
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function getApi(): UseViewBoxZoomResult {
  if (!apiRef.current) throw new Error("API no inicializada");
  return apiRef.current;
}

describe("useViewBoxZoom", () => {
  it("estado inicial: viewBox cubre todo el lienzo", () => {
    render(<Harness />);
    expect(getApi().viewBox).toEqual({ x: 0, y: 0, w: WIDTH, h: HEIGHT });
  });

  it("zoomIn achica el viewBox con foco en el centro", () => {
    render(<Harness />);
    act(() => { getApi().zoomIn(); });
    expect(getApi().viewBox.w).toBeLessThan(WIDTH);
    expect(getApi().viewBox.x + getApi().viewBox.w / 2).toBeCloseTo(WIDTH / 2, 5);
  });

  it("zoomOut agranda y satura en el lienzo completo", () => {
    render(<Harness />);
    act(() => { getApi().zoomIn(); });
    const wAntes = getApi().viewBox.w;
    act(() => { getApi().zoomOut(); getApi().zoomOut(); getApi().zoomOut(); getApi().zoomOut(); });
    expect(getApi().viewBox.w).toBe(WIDTH);
    expect(wAntes).toBeLessThan(WIDTH);
  });

  it("zoomBy con focal point mantiene el punto fijo", () => {
    render(<Harness />);
    act(() => { getApi().zoomBy(1.5, [500, 310]); });
    expect(getApi().viewBox.x + getApi().viewBox.w / 2).toBeCloseTo(500, 5);
    expect(getApi().viewBox.y + getApi().viewBox.h / 2).toBeCloseTo(310, 5);
  });

  it("minVb: el zoomIn satura en el mínimo", () => {
    render(<Harness options={{ minVb: 100 }} />);
    act(() => {
      for (let i = 0; i < 30; i++) getApi().zoomIn();
    });
    expect(getApi().viewBox.w).toBe(100);
  });

  it("reset vuelve al encuadre completo", () => {
    render(<Harness />);
    act(() => { getApi().zoomIn(); getApi().zoomBy(1.2, [100, 100]); });
    const despuesZoom = getApi().viewBox.w;
    act(() => { getApi().reset(); });
    expect(despuesZoom).toBeLessThan(WIDTH);
    expect(getApi().viewBox).toEqual({ x: 0, y: 0, w: WIDTH, h: HEIGHT });
  });

  it("clamping: zoomBy con foco en la esquina mantiene el punto en su lugar", () => {
    render(<Harness />);
    act(() => { getApi().zoomBy(10, [0, 0]); });
    expect(getApi().viewBox.x).toBe(0);
    expect(getApi().viewBox.y).toBe(0);
  });

  it("handleWheel hace zoom-in cuando deltaY < 0", () => {
    const { getByTestId } = render(<Harness />);
    const svg = getByTestId("svg");
    fireEvent.wheel(svg, { deltaY: -10, clientX: WIDTH / 2, clientY: HEIGHT / 2 });
    expect(getApi().viewBox.w).toBeLessThan(WIDTH);
  });

  it("handleWheel hace zoom-out cuando deltaY > 0", () => {
    const { getByTestId } = render(<Harness />);
    act(() => { getApi().zoomIn(); });
    const wAntes = getApi().viewBox.w;
    expect(wAntes).toBeLessThan(WIDTH);
    const svg = getByTestId("svg");
    fireEvent.wheel(svg, { deltaY: 10, clientX: WIDTH / 2, clientY: HEIGHT / 2 });
    expect(getApi().viewBox.w).toBeGreaterThan(wAntes);
  });

  it("active=false deshabilita el pan (pointerDown no captura)", () => {
    const { getByTestId } = render(<Harness options={{ active: false }} />);
    const svg = getByTestId("svg");
    const vbAntes = getApi().viewBox;
    fireEvent.pointerDown(svg, { clientX: 100, clientY: 100, pointerId: 1 });
    fireEvent.pointerMove(svg, { clientX: 200, clientY: 200, pointerId: 1 });
    expect(getApi().viewBox).toEqual(vbAntes);
  });

  it("active=true (default): pan por pointer actualiza el viewBox", () => {
    render(<Harness />);
    act(() => { getApi().zoomIn(); getApi().zoomIn(); });
    // Capturamos la API después del re-render (post-zoom) para que el
    // `handlePointerDown` capture el viewBox actual en su closure.
    const api = getApi();
    act(() => {
      api.handlePointerDown({ clientX: 600, clientY: 600, pointerId: 1, target: null } as any);
      api.handlePointerMove({ clientX: 500, clientY: 500, pointerId: 1 } as any);
      api.handlePointerUp({ clientX: 500, clientY: 500, pointerId: 1 } as any);
    });
    expect(getApi().viewBox.x).toBeGreaterThan(0);
    expect(getApi().viewBox.y).toBeGreaterThan(0);
  });
});
