/**
 * F5-02 — Cronómetro de evaluación (cuenta regresiva).
 *
 * Maneja el ciclo de vida del timer de un intento de evaluación: arranca
 * en `initialSeconds` y decrece 1 unidad por segundo. Al llegar a 0
 * marca `isExpired=true` y llama a `onExpire` UNA vez.
 *
 * Contratos:
 *  - Si `initialSeconds` es `null`, el hook es no-op: no inicia
 *    cronómetro, no llama a `onExpire`, devuelve `remaining=null`.
 *  - Si `initialSeconds` cambia (p. ej. se carga un nuevo intento),
 *    el estado se reinicia al nuevo valor y `isExpired` vuelve a false.
 *  - El callback `onExpire` se llama exactamente una vez por ciclo
 *    de countdown. No se vuelve a llamar si el componente se re-renderiza
 *    o si los timers se re-arman.
 *  - El cleanup en unmount cancela el `setInterval` para no dejar
 *    ticks en curso.
 *
 * Decisión de diseño: `setRemaining` recibe el updater puro de React
 * y la lógica de "expirar" vive en un `useEffect` separado que mira
 * el valor. Esto evita side-effects dentro de un updater de estado
 * (que debe ser puro).
 */
import { useEffect, useRef, useState } from "react";

export interface UseCountdownOptions {
  /** Segundos iniciales. `null` desactiva el cronómetro. */
  initialSeconds: number | null;
  /** Se llama una sola vez cuando el cronómetro llega a 0. */
  onExpire?: () => void;
}

export interface UseCountdownResult {
  /** Segundos restantes. `null` si el cronómetro está desactivado. */
  remaining: number | null;
  /** `true` cuando ya llegó a 0 (permanece true hasta que cambie initialSeconds). */
  isExpired: boolean;
}

export function useCountdown(opts: UseCountdownOptions): UseCountdownResult {
  const { initialSeconds, onExpire } = opts;
  const safeInitial =
    initialSeconds === null ? null : Math.max(0, Math.floor(initialSeconds));
  const [remaining, setRemaining] = useState<number | null>(safeInitial);
  const [isExpired, setIsExpired] = useState(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  // Reset al cambiar initialSeconds (carga de nuevo intento, hot reload, etc.).
  useEffect(() => {
    setRemaining(safeInitial);
    setIsExpired(false);
  }, [safeInitial]);

  // Tick. Mantiene la lógica de "decrementar" en el updater (puro) y
  // delega la señalización de expiración a un useEffect aparte.
  useEffect(() => {
    if (safeInitial === null || safeInitial <= 0) return;
    const interval = setInterval(() => {
      setRemaining((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, [safeInitial]);

  // Dispara onExpire UNA vez cuando remaining llega a 0. El guard !isExpired
  // previene que se vuelva a llamar en re-renders subsecuentes.
  useEffect(() => {
    if (remaining === 0 && !isExpired) {
      setIsExpired(true);
      const cb = onExpireRef.current;
      if (cb) {
        try {
          cb();
        } catch {
          /* un error del callback no debe romper el cronómetro */
        }
      }
    }
  }, [remaining, isExpired]);

  return { remaining, isExpired };
}
