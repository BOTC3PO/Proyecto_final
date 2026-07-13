/**
 * PLAN-Q §2.1 — true en viewport angosto (< md, el mismo corte que ya
 * usa el resto de la app para colapsar a drawer/hamburguesa, PLAN-I).
 * Reactivo a resize/rotación vía matchMedia, no sólo al montar.
 */
import { useEffect, useState } from "react";

const QUERY = "(max-width: 767px)";

export function useIsNarrowViewport(): boolean {
  const [isNarrow, setIsNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const handler = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isNarrow;
}
