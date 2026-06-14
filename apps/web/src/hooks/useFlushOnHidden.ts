/**
 * F5-02 — Flush del estado del intento cuando la pestaña pierde visibilidad.
 *
 * Plan K5 (ronda 7): el alumno NO debe perder respuestas porque cambió
 * de pestaña o perdió el foco. Esta hook suscribe a tres eventos que
 * indican "el usuario se fue":
 *
 *   - `visibilitychange` con `document.hidden === true`  → el alumno
 *     cambió de pestaña o minimizó la ventana.
 *   - `window` `blur`                                    → el alumno
 *     hizo click afuera de la ventana (otra app / otro monitor).
 *   - `window` `beforeunload`                            → el alumno
 *     está navegando a otra URL o cerrando la pestaña.
 *
 * En cualquiera de los tres casos, dispara `callback`. NO se loggea
 * el evento ni se envía al backend: el contrato de F5-02 es
 * "preservar lo que el alumno ya respondió", no "rastrear lo que
 * hizo". El flush es local → usa la cola offline de F5-01 que ya
 * sincroniza en background.
 *
 * Idempotencia: el callback puede dispararse varias veces en rápida
 * sucesión (visibilitychange + blur, por ejemplo). Se delega a la
 * implementación del callback ser idempotente. En nuestro caso
 * `flushOutbox` lo es (las respuestas ya sincronizadas no se vuelven
 * a enviar).
 */
import { useEffect, useRef } from "react";

export function useFlushOnHidden(
  callback: () => void | Promise<void>
): void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const flush = () => {
      const cb = callbackRef.current;
      try {
        void cb();
      } catch {
        /* un error del callback no debe romper los listeners */
      }
    };

    const onVisibilityChange = () => {
      // happy-dom no actualiza `document.hidden` en eventos sintéticos
      // por default; chequeamos ambos para cubrir navegadores reales y tests.
      const isHidden =
        (typeof document !== "undefined" && document.hidden === true) ||
        (typeof document !== "undefined" &&
          typeof document.visibilityState === "string" &&
          document.visibilityState === "hidden");
      if (isHidden) flush();
    };
    const onBlur = () => flush();
    const onBeforeUnload = () => flush();

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", onBlur);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);
}
