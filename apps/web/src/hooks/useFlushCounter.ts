/**
 * F5-03 — Hook que cuenta las veces que la pestaña del intento pierde
 * visibilidad.
 *
 * Semántica: "salida de pestaña" = `document.visibilitychange` con
 * `document.hidden === true`. NO se cuentan blur (click en URL bar) ni
 * beforeunload (cerrar la pestaña) — esos son eventos de foco, no de
 * visibilidad. El docente quiere saber "¿el alumno miró a otro lado?",
 * no "¿el alumno tocó la barra de URL?".
 *
 * PRIVACIDAD: el hook sólo mantiene un counter entero local. NO loggea,
 * NO envía al backend, NO rastrea timestamps. El padre decide cuándo
 * (y si) persistir el counter vía PATCH al backend.
 *
 * Diseño: el counter es monotónico crecientes (sólo incrementa, nunca
 * decrementa). Si `enabled` cambia a `false`, el counter se RESETEA a 0
 * (útil cuando el intento se cierra o se re-carga).
 */
import { useEffect, useRef, useState } from "react";

export interface UseFlushCounterOptions {
  /** Si false, el hook no escucha eventos y devuelve count=0. */
  enabled: boolean;
}

export interface UseFlushCounterResult {
  count: number;
  /** Resetea el counter a 0 (útil al iniciar un nuevo intento). */
  reset: () => void;
}

export function useFlushCounter(opts: UseFlushCounterOptions): UseFlushCounterResult {
  const { enabled } = opts;
  const [count, setCount] = useState(0);
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  // Reset al cambiar enabled (true → false o false → true). Cubre el
  // caso "el alumno terminó el intento y arrancó otro".
  useEffect(() => {
    setCount(0);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const handler = () => {
      if (!enabledRef.current) return;
      // happy-dom no actualiza `document.hidden` por default; chequeamos
      // también `visibilityState` (cubierto en F5-02 con el mismo patrón).
      const isHidden =
        (typeof document !== "undefined" && document.hidden === true) ||
        (typeof document !== "undefined" &&
          typeof document.visibilityState === "string" &&
          document.visibilityState === "hidden");
      if (isHidden) {
        setCount((prev) => prev + 1);
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }, [enabled]);

  return { count, reset: () => setCount(0) };
}
