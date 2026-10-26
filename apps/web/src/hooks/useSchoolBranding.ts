import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { fetchEscuela, type EscuelaBranding } from "../services/escuelas";

/**
 * PLAN-C §4 (ítem 29) — branding de la escuela del usuario logueado.
 * `null` mientras carga o si el usuario no tiene escuela asignada.
 */
export function useSchoolBranding(): EscuelaBranding | null {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [fetched, setFetched] = useState<{ schoolId: string; branding: EscuelaBranding | null } | null>(null);

  useEffect(() => {
    if (!schoolId) return;
    let active = true;
    fetchEscuela(schoolId)
      .then((escuela) => { if (active) setFetched({ schoolId, branding: escuela.branding }); })
      .catch(() => { if (active) setFetched({ schoolId, branding: null }); });
    return () => { active = false; };
  }, [schoolId]);

  if (!schoolId || fetched?.schoolId !== schoolId) return null;
  return fetched.branding;
}
