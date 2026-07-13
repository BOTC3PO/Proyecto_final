/**
 * PLAN-F ítem 30 — fuente única de materias para todos los selectores.
 *
 * Antes había 4 copias divergentes del mismo fetch a `/api/materias` (cada
 * una con su propio fallback si la red fallaba), más una lista hardcodeada
 * sin fetch en `MetadataPanel` (VBLang). Si el admin agregaba una materia
 * nueva, algunos selectores la mostraban y otros no, dependiendo de cuál
 * hubiera migrado a la fecha. Este hook centraliza el fetch; el fallback
 * (red caída / backend no disponible) es el mismo listado canónico que ya
 * devuelve `GET /api/materias` cuando la tabla está vacía
 * (`api/src/routes/admin.ts:299`), para que el comportamiento offline no
 * cambie.
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
