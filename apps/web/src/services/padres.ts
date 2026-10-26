import { apiGet, apiPatch, apiPost } from "../lib/api";

export type ActividadHijo = {
  id: string;
  aulaId: string;
  aulaNombre: string;
  tipo: "clase" | "evaluacion" | "evento";
  titulo: string;
  descripcion?: string;
  fecha: string;
  when: string;
};

export type EvaluacionBoletin = {
  quizId: string;
  quizTitle?: string;
  score: number | null;
  maxScore: number | null;
  fecha: string;
};

export type MateriaBoletin = {
  materia: string;
  promedio: number | null;
  evaluaciones: EvaluacionBoletin[];
};

export type BoletinResponse = {
  materias: MateriaBoletin[];
  total: number;
};

export async function fetchActividadesHijo(
  hijoId: string
): Promise<ActividadHijo[]> {
  const data = await apiGet<{ items: ActividadHijo[] }>(
    `/api/padres/hijos/${hijoId}/actividades`
  );
  return data.items ?? [];
}

export async function fetchBoletinHijo(
  hijoId: string
): Promise<BoletinResponse> {
  return apiGet<BoletinResponse>(
    `/api/padres/hijos/${hijoId}/boletin`
  );
}

// ─── FASE 5 ─────────────────────────────────────────────────────────────

export type AulaHijo = {
  id: string;
  nombre: string;
  grado: string | null;
};

export async function fetchAulasHijo(hijoId: string): Promise<AulaHijo[]> {
  const data = await apiGet<{ aulas: AulaHijo[] }>(
    `/api/padres/hijos/${hijoId}/aulas`
  );
  return data.aulas ?? [];
}

// ─── PLAN-C §5 diferido — límites del hijo + revocar vínculo ───────────

export type LimitesHijo = {
  permisosTareas: boolean;
  permisosMensajes: boolean;
  notas: string | null;
};

export async function fetchLimitesHijo(hijoId: string): Promise<LimitesHijo> {
  return apiGet<LimitesHijo>(`/api/padres/hijos/${hijoId}/limites`);
}

export async function actualizarLimitesHijo(
  hijoId: string,
  cambios: Partial<Pick<LimitesHijo, "permisosTareas" | "permisosMensajes" | "notas">>
): Promise<LimitesHijo> {
  return apiPatch<LimitesHijo>(`/api/padres/hijos/${hijoId}/limites`, cambios);
}

export async function revocarVinculoHijo(hijoId: string): Promise<{ ok: boolean }> {
  return apiPost<{ ok: boolean }>(`/api/padres/hijos/${hijoId}/revocar`, {});
}

export type CrearCuentaAlumnoResponse = {
  ok: boolean;
  created: boolean;
  espejo: { id: string; username: string; fullName: string };
  cuentaVinculada: { destinoUsuarioId: string; tipoDestino: TipoDestino } | null;
};

/**
 * Espejo opt-in del padre: crea (on-demand) su cuenta de alumno.
 * Idempotente — si ya existe devuelve el mismo espejo.
 */
export async function crearCuentaAlumnoPadre(): Promise<CrearCuentaAlumnoResponse> {
  return apiPost<CrearCuentaAlumnoResponse>(
    "/api/padres/crear-cuenta-alumno",
    {}
  );
}

// ─── FASE 6 ─────────────────────────────────────────────────────────────

/**
 * Tipos de destino de un `CuentaVinculada`. FASE 1/2/5 usan
 * "ALUMNO" (soy principal, el otro es mi espejo alumno) y
 * "PRINCIPAL" (soy espejo, el otro es mi principal staff/padre).
 * FASE 6 agrega "PADRE" (soy alumno, el otro es mi cuenta de
 * padre) y "ALUMNO_HIJO" (soy padre, el otro es mi cuenta de
 * alumno del par).
 */
export type TipoDestino = "ALUMNO" | "PRINCIPAL" | "PADRE" | "ALUMNO_HIJO";

export type CrearCuentaPadreResponse = {
  ok: boolean;
  created: boolean;
  padre: { id: string; username: string; fullName: string };
  cuentaVinculada: { destinoUsuarioId: string; tipoDestino: TipoDestino } | null;
};

/**
 * Autoservicio alumno → cuenta de padre (FASE 6).
 *
 * Un alumno adulto (USER, 18+) puede crear su cuenta de padre
 * (PARENT) y conservarla junto a la de alumno. La cuenta nueva
 * queda apuntada por un `CuentaVinculada` simétrico y es
 * switchable con el mismo mecanismo de Fases 2/3
 * (`switchCuenta` en el `AuthProvider`).
 *
 * Idempotente: si ya tiene una cuenta de padre vinculada, la
 * devuelve sin duplicar.
 *
 * Errores posibles:
 *   - 401 si no hay sesión.
 *   - 403 si el usuario no es USER puro, si es un espejo o si
 *     no cumple los 18+ (en cuyo caso `code` viene en el body
 *     para que la UI pueda mostrar un mensaje específico).
 */
export async function crearCuentaPadreAlumno(): Promise<CrearCuentaPadreResponse> {
  return apiPost<CrearCuentaPadreResponse>(
    "/api/alumnos/crear-cuenta-padre",
    {}
  );
}
