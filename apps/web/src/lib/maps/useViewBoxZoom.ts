/**
 * useViewBoxZoom — hook compartido para zoom + pan en mapas SVG (M7).
 *
 * Maneja el encuadre de un `<svg>` con atributo `viewBox`. Pensado para
 * mapas mundi con `viewBox` rectangular (ancho > 0, alto > 0).
 *
 * Capacidades:
 *   - Rueda con `preventDefault` (handler sintético + listener nativo no-pasivo
 *     como respaldo, mismo patrón que M1).
 *   - Pan por pointer (un dedo o click + drag).
 *   - Zoom con punto focal: `zoomBy(factor, focus)` deja el punto fijo.
 *   - Clamping: el encuadre nunca sale del rectángulo del mapa.
 *   - Botones: `zoomIn` / `zoomOut` / `reset` con foco en el centro.
 *   - `active` opcional: deshabilita pan (lo usa el editor cuando la
 *     herramienta activa no es "select").
 *
 * El hook NO conoce las features del mapa: el consumidor es responsable de
 * pasar las dimensiones (`width`/`height`) y de mantener el SVG en pantalla
 * (`touch-action: none`, `overscroll-behavior: contain`).
 */
import { useCallback, useEffect, useRef, useState, type PointerEvent, type WheelEvent, type RefObject } from "react";

export type ViewBox = { x: number; y: number; w: number; h: number };

export type UseViewBoxZoomOptions = {
  /** Ancho total del lienzo SVG (coincide con `viewBox` cuando no hay zoom). */
  width: number;
  /** Alto total del lienzo SVG. */
  height: number;
  /** Ancho mínimo del viewBox — limita el zoom-in. Default 40. */
  minVb?: number;
  /** Factor de zoom por tick de rueda. Default 1.15. */
  wheelFactor?: number;
  /** Factor de zoom por click en `+` / `-`. Default 1.3. */
  buttonFactor?: number;
  /** Ref al elemento `<svg>` raíz (necesario para el mapeo cliente→SVG y
   *  el listener nativo de `wheel`). Acepta `null` en el `.current` para
   *  ser compatible con la inferencia estándar de `useRef<T>(null)`. */
  svgRef: RefObject<SVGSVGElement | null>;
  /** Si es false, `handlePointerDown` no inicia pan. Default true. */
  active?: boolean;
  /** Restringe pan/zoom/reset a este rectángulo en vez de todo el lienzo
   *  `[0,0,width,height]` — la zona bloqueada que puede fijar el editor
   *  (ver `MapaConfig.bounds`). `undefined` = comportamiento de siempre
   *  (todo el mundo navegable). */
  bounds?: ViewBox;
};

export type UseViewBoxZoomResult = {
  viewBox: ViewBox;
  setViewBox: React.Dispatch<React.SetStateAction<ViewBox>>;
  /** Handler sintético para `onWheel` del SVG. */
  handleWheel: (e: WheelEvent<SVGSVGElement>) => void;
  /** Inicia pan. */
  handlePointerDown: (e: PointerEvent<SVGSVGElement>) => void;
  /** Aplica pan. */
  handlePointerMove: (e: PointerEvent<SVGSVGElement>) => void;
  /** Termina pan. */
  handlePointerUp: (e: PointerEvent<SVGSVGElement>) => void;
  /** Zoom-in con foco en el centro. */
  zoomIn: () => void;
  /** Zoom-out con foco en el centro. */
  zoomOut: () => void;
  /** Vuelve al encuadre completo. */
  reset: () => void;
  /** Zoom programático con foco opcional en coords SVG. */
  zoomBy: (factor: number, focus?: [number, number]) => void;
};

const DEFAULT_MIN_VB = 40;
const DEFAULT_WHEEL_FACTOR = 1.15;
const DEFAULT_BUTTON_FACTOR = 1.3;

export function useViewBoxZoom({
  width,
  height,
  minVb = DEFAULT_MIN_VB,
  wheelFactor = DEFAULT_WHEEL_FACTOR,
  buttonFactor = DEFAULT_BUTTON_FACTOR,
  svgRef,
  active = true,
  bounds,
}: UseViewBoxZoomOptions): UseViewBoxZoomResult {
  // Rectángulo navegable: todo el lienzo por default, o la zona fijada por
  // el editor. `zoomBy`/pan/`reset` clampean contra ESTO, no contra
  // `[0,0,width,height]` directo.
  const limits = bounds ?? { x: 0, y: 0, w: width, h: height };
  const [viewBox, setViewBox] = useState<ViewBox>(limits);
  const panState = useRef<{ startX: number; startY: number; origin: ViewBox } | null>(null);

  // Si `bounds` cambia (el editor fija/quita la zona bloqueada), el
  // encuadre actual puede quedar afuera del nuevo rectángulo navegable —
  // lo reseteamos al límite nuevo, mismo criterio que `reset()`.
  useEffect(() => {
    setViewBox(limits);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bounds?.x, bounds?.y, bounds?.w, bounds?.h, width, height]);

  // Mapea coordenadas de cliente (px en pantalla) a coords del viewBox actual.
  // Es interna — el consumidor no la necesita.
  const clientToSvg = useCallback(
    (clientX: number, clientY: number): [number, number] | null => {
      const svg = svgRef.current;
      if (!svg) return null;
      const rect = svg.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return null;
      const svgX = viewBox.x + ((clientX - rect.left) / rect.width) * viewBox.w;
      const svgY = viewBox.y + ((clientY - rect.top) / rect.height) * viewBox.h;
      return [svgX, svgY];
    },
    [svgRef, viewBox],
  );

  const zoomBy = useCallback(
    (factor: number, focus?: [number, number]) => {
      setViewBox((vb) => {
        // factor < 1 achica, factor > 1 agranda. El clamp protege en ambos
        // extremos: no se achica más que `minVb` ni se agranda más que
        // `limits` (todo el lienzo, o la zona fijada por el editor).
        const newW = Math.min(limits.w, Math.max(minVb, vb.w * factor));
        const newH = newW * (limits.h / limits.w);
        const fx = focus ? focus[0] : vb.x + vb.w / 2;
        const fy = focus ? focus[1] : vb.y + vb.h / 2;
        const ratioX = (fx - vb.x) / vb.w;
        const ratioY = (fy - vb.y) / vb.h;
        let nx = fx - ratioX * newW;
        let ny = fy - ratioY * newH;
        nx = Math.min(limits.x + limits.w - newW, Math.max(limits.x, nx));
        ny = Math.min(limits.y + limits.h - newH, Math.max(limits.y, ny));
        return { x: nx, y: ny, w: newW, h: newH };
      });
    },
    [limits.x, limits.y, limits.w, limits.h, minVb],
  );

  // `zoomIn` achica: factor 1/buttonFactor < 1. El editor usa la misma
  // convención: "Acercar" → factor 1/1.3.
  const zoomIn = useCallback(() => zoomBy(1 / buttonFactor), [zoomBy, buttonFactor]);
  const zoomOut = useCallback(() => zoomBy(buttonFactor), [zoomBy, buttonFactor]);
  const reset = useCallback(() => setViewBox(limits), [limits.x, limits.y, limits.w, limits.h]);

  // El handler de wheel es un listener NATIVO no-pasivo en lugar de un
  // handler React sintético, por dos razones:
  //   1. Garantiza que `e.preventDefault()` funcione — React a veces monta
  //      `onWheel` como pasivo, lo que impide preventDefault y hace que la
  //      página scrollee al usar la rueda sobre el SVG.
  //   2. Evita la doble-disparación: si registramos ambos, el zoom se aplica
  //      dos veces por cada evento.
  // El consumidor puede pasar `onWheel={api.handleWheel}` (que es un no-op)
  // o, mejor, no usar `onWheel` y dejar que el hook monte su propio listener.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const nativeHandler = (e: globalThis.WheelEvent) => {
      e.preventDefault();
      const pt = clientToSvg(e.clientX, e.clientY);
      zoomBy(e.deltaY > 0 ? wheelFactor : 1 / wheelFactor, pt ?? undefined);
    };
    svg.addEventListener("wheel", nativeHandler, { passive: false });
    return () => {
      svg.removeEventListener("wheel", nativeHandler);
    };
  }, [clientToSvg, zoomBy, wheelFactor, svgRef]);

  // Handler público de wheel (útil si el consumidor quiere enrutar el evento
  // por su cuenta, p. ej. cuando hay una capa interactiva encima). Es un
  // alias del comportamiento nativo — el consumidor normalmente no necesita
  // conectarlo en el JSX.
  const handleWheel = useCallback(
    (e: WheelEvent<SVGSVGElement>) => {
      e.preventDefault();
      const pt = clientToSvg(e.clientX, e.clientY);
      zoomBy(e.deltaY > 0 ? wheelFactor : 1 / wheelFactor, pt ?? undefined);
    },
    [clientToSvg, zoomBy, wheelFactor],
  );

  const handlePointerDown = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      if (!active) return;
      panState.current = { startX: e.clientX, startY: e.clientY, origin: viewBox };
      // Guard contra `e.target` null (puede pasar en tests con eventos
      // sintéticos sin target asignado).
      const t = e.target as Element | null;
      t?.setPointerCapture?.(e.pointerId);
    },
    [active, viewBox],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      const pan = panState.current;
      if (!pan) return;
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const dx = ((e.clientX - pan.startX) / rect.width) * pan.origin.w;
      const dy = ((e.clientY - pan.startY) / rect.height) * pan.origin.h;
      const nx = Math.min(limits.x + limits.w - pan.origin.w, Math.max(limits.x, pan.origin.x - dx));
      const ny = Math.min(limits.y + limits.h - pan.origin.h, Math.max(limits.y, pan.origin.y - dy));
      setViewBox({ ...pan.origin, x: nx, y: ny });
    },
    [svgRef, limits.x, limits.y, limits.w, limits.h],
  );

  const handlePointerUp = useCallback(() => {
    panState.current = null;
  }, []);

  return {
    viewBox,
    setViewBox,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    zoomIn,
    zoomOut,
    reset,
    zoomBy,
  };
}
