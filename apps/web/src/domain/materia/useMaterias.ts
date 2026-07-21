/**
 * PLAN-F ítem 30 — fuente única de materias para todos los selectores.
 *
 * Antes había 4 copias divergentes del mismo fetch a `/api/materias` (cada
 * una con su propio fallback si la red fallaba), más una lista hardcodeada
 * sin fetch en `MetadataPanel` (VBLang). Si el admin agregaba una materia
 * nueva, algunos selectores la mostraban y otros no, dependiendo de cuál
 * hubiera migrado a la fecha. Este hook centraliza el fetch.
 *
 * Las 12 materias de `FALLBACK_MATERIAS` están sembradas como filas reales
 * en la tabla `materias` (2026-07-21) y se gestionan desde /admin/materias
 * como cualquier otra — el servidor ya NO tiene una copia hardcodeada que
 * las inyecte (antes la tenía, y eso hacía que 10 de las 12 no existieran
 * como fila y no se pudieran desactivar/renombrar desde el admin). Este
 * array es sólo el último recurso del cliente si `/api/materias` no
 * responde en absoluto (backend caído) — no una fuente paralela de verdad.
 */
import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export const FALLBACK_MATERIAS = [
  "Matemáticas", "Lengua", "Historia", "Geografía",
  "Física", "Química", "Biología", "Informática",
  "Economía", "Filosofía", "Arte", "Educación Física",
] as const;

export type UseMateriasResult = {
  materias: string[];
  loading: boolean;
};

export function useMaterias(): UseMateriasResult {
  const [materias, setMaterias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    apiGet<{ items?: Array<{ nombre: string }> }>("/api/materias")
      .then((data) => {
        if (cancelled) return;
        const nombres = (data.items ?? []).map((m) => m.nombre).filter(Boolean);
        setMaterias(nombres.length > 0 ? nombres : [...FALLBACK_MATERIAS]);
      })
      .catch(() => {
        if (cancelled) return;
        setMaterias([...FALLBACK_MATERIAS]);
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { materias, loading };
}
