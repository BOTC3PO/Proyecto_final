/**
 * F5-02 — Entrada/salida de pantalla completa (Fullscreen API).
 *
 * Plan K5 (ronda 7): si el cuestionario tiene `fullscreenOnStart`,
 * el runner pide pantalla completa al iniciar. La Fullscreen API del
 * navegador EXIGE user-gesture, por lo que la única forma de pedirla
 * es desde un handler de click/teclado. Esta hook encapsula la
 * mecánica y maneja tres casos:
 *
 *   1. API disponible y el usuario la acepta → entra a fullscreen,
 *      `isFullscreen` pasa a true.
 *   2. API disponible pero el usuario la deniega (esc/click fuera) →
 *      `request()` rechaza, `onFallback` se llama, `isFullscreen`
 *      queda en false. El caller decide si continuar.
 *   3. API no disponible (navegador viejo, sin HTTPS) → `request()`
 *      resuelve `false` y `onFallback` se llama. Sin tirar error.
 *
 * Privacidad: NO se loggea el resultado del request. La transición
 * fullscreen ↔ normal sólo se observa a través del listener
 * `fullscreenchange` (evento del DOM, no de la red).
 *
 * Compatibilidad: los navegadores viejos usan prefijos (`webkit`,
 * `moz`). happy-dom no los implementa todos, pero los cubrimos
 * defensivamente. El `requestFullscreen` estándar es el único
 * requisito para entrar a fullscreen en navegadores modernos.
 */
import { useCallback, useEffect, useRef, useState } from "react";

export interface UseFullscreenOptions {
  /** Si false, la hook no registra listeners ni expone `request`/`exit`. */
  enabled: boolean;
  /** Se llama cuando el request falla o la API no está disponible. */
  onFallback?: () => void;
}

export interface UseFullscreenResult {
  /** ¿Estamos actualmente en fullscreen? */
  isFullscreen: boolean;
  /** Pide fullscreen. Resuelve `true` si entró, `false` si falló. */
  request: () => Promise<boolean>;
  /** Sale de fullscreen. Resuelve sin tirar si ya estamos fuera. */
  exit: () => Promise<void>;
}

function getFullscreenElement(): Element | null {
  if (typeof document === "undefined") return null;
  const doc = document as Document & {
    webkitFullscreenElement?: Element | null;
    mozFullScreenElement?: Element | null;
    msFullscreenElement?: Element | null;
  };
  return (
    doc.fullscreenElement ??
    doc.webkitFullscreenElement ??
    doc.mozFullScreenElement ??
    doc.msFullscreenElement ??
    null
  );
}

export function useFullscreen(opts: UseFullscreenOptions): UseFullscreenResult {
  const { enabled, onFallback } = opts;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const onFallbackRef = useRef(onFallback);
  onFallbackRef.current = onFallback;

  useEffect(() => {
    if (!enabled) return;
    const handler = () => {
      setIsFullscreen(getFullscreenElement() !== null);
    };
    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    document.addEventListener("mozfullscreenchange", handler);
    document.addEventListener("MSFullscreenChange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
      document.removeEventListener("mozfullscreenchange", handler);
      document.removeEventListener("MSFullscreenChange", handler);
    };
  }, [enabled]);

  const request = useCallback(async (): Promise<boolean> => {
    if (!enabled) return false;
    if (typeof document === "undefined") return false;
    const root = document.documentElement as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
      mozRequestFullScreen?: () => Promise<void> | void;
      msRequestFullscreen?: () => Promise<void> | void;
    };
    const fn =
      root.requestFullscreen ??
      root.webkitRequestFullscreen ??
      root.mozRequestFullScreen ??
      root.msRequestFullscreen;
    if (!fn) {
      onFallbackRef.current?.();
      return false;
    }
    try {
      await fn.call(root);
      return true;
    } catch {
      onFallbackRef.current?.();
      return false;
    }
  }, [enabled]);

  const exit = useCallback(async (): Promise<void> => {
    if (typeof document === "undefined") return;
    const doc = document as Document & {
      webkitExitFullscreen?: () => Promise<void> | void;
      mozCancelFullScreen?: () => Promise<void> | void;
      msExitFullscreen?: () => Promise<void> | void;
    };
    const fn =
      doc.exitFullscreen ??
      doc.webkitExitFullscreen ??
      doc.mozCancelFullScreen ??
      doc.msExitFullscreen;
    if (!fn) return;
    try {
      await fn.call(doc);
    } catch {
      /* ignorar errores de exit */
    }
  }, []);

  return { isFullscreen, request, exit };
}
