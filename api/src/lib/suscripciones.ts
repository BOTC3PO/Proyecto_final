import { openContentDb } from "./db-open";
import { ENV } from "./env";

export const LIMITES_GRATUITOS = {
  max_profesores: 5,
  max_directivos: 5,
  max_aulas: 5,
  max_alumnos_por_aula: 30,
} as const;

export const EXPANSION_UNIDADES = {
  aulas: 5,
  alumnos_por_aula: 30,
} as const;

export type LimitesEscuela = {
  max_profesores: number;
  max_directivos: number;
  max_aulas: number;
  max_alumnos_por_aula: number;
};

export type Suscripcion = {
  id: string;
  entidad_tipo: "escuela" | "profesor" | "alumno";
  entidad_id: string;
  plan: "gratuito" | "pago";
  estado: "activa" | "cancelada" | "vencida" | "pendiente";
  mp_preapproval_id: string | null;
  mp_payer_email: string | null;
  periodo_inicio: string;
  periodo_fin: string;
  monto_mensual: number;
  moneda: string;
  expansiones: number;
  cancelada_at: string | null;
  cancelada_by: string | null;
  reembolso_solicitado: number;
  reembolso_at: string | null;
  created_at: string;
  updated_at: string;
};

// Obtener límites de una escuela
// ADMIN no tiene límites — retorna Infinity en todos los campos
export function getLimitesEscuela(
  escuelaId: string,
  role?: string
): LimitesEscuela {
  if (role === "ADMIN") {
    return {
      max_profesores: Infinity,
      max_directivos: Infinity,
      max_aulas: Infinity,
      max_alumnos_por_aula: Infinity,
    };
  }

  const db = openContentDb();
  const row = db
    .prepare("SELECT * FROM limites_escuela WHERE escuela_id = ?")
    .get(escuelaId) as LimitesEscuela & { escuela_id: string } | undefined;

  return row ?? { ...LIMITES_GRATUITOS };
}

// Verificar si una escuela puede agregar más profesores/directivos
export function puedeAgregarStaff(
  escuelaId: string,
  role: string,
  countActual: number
): boolean {
  if (role === "ADMIN") return true;
  const limites = getLimitesEscuela(escuelaId);
  if (role === "TEACHER") return countActual < limites.max_profesores;
  if (role === "DIRECTIVO") return countActual < limites.max_directivos;
  return true;
}

// Verificar si una escuela puede agregar más aulas
export function puedeAgregarAula(
  escuelaId: string,
  role: string,
  aulasActivasActuales: number
): boolean {
  if (role === "ADMIN") return true;
  const limites = getLimitesEscuela(escuelaId);
  return aulasActivasActuales < limites.max_aulas;
}

// Verificar si un aula puede agregar más alumnos
export function puedeAgregarAlumno(
  escuelaId: string,
  role: string,
  alumnosActuales: number
): boolean {
  if (role === "ADMIN") return true;
  const limites = getLimitesEscuela(escuelaId);
  return alumnosActuales < limites.max_alumnos_por_aula;
}

// Calcular monto mensual para una escuela según exceso
export function calcularMontoEscuela(params: {
  profesoresActuales: number;
  directivosActuales: number;
  alumnosTotales: number;
}): number {
  if (!ENV.PAYMENTS_ENABLED) return 0;

  const excesoProfesores = Math.max(
    0, params.profesoresActuales - LIMITES_GRATUITOS.max_profesores
  );
  const excesoDirectivos = Math.max(
    0, params.directivosActuales - LIMITES_GRATUITOS.max_directivos
  );
  const excesoAlumnos = Math.max(
    0, params.alumnosTotales - (LIMITES_GRATUITOS.max_aulas * LIMITES_GRATUITOS.max_alumnos_por_aula)
  );

  return (
    (excesoProfesores + excesoDirectivos) * ENV.PRECIO_STAFF_MENSUAL +
    excesoAlumnos * ENV.PRECIO_ALUMNO_MENSUAL
  );
}

// Obtener suscripción activa de una entidad
export function getSuscripcionActiva(
  entidadTipo: string,
  entidadId: string
): Suscripcion | null {
  const db = openContentDb();
  const now = new Date().toISOString();
  return db.prepare(`
    SELECT * FROM suscripciones
    WHERE entidad_tipo = ?
      AND entidad_id = ?
      AND estado = 'activa'
      AND periodo_fin >= ?
    ORDER BY periodo_fin DESC
    LIMIT 1
  `).get(entidadTipo, entidadId, now) as Suscripcion | null;
}

// Verificar si un alumno tiene multiplicador activo
export function tieneMultiplicadorActivo(alumnoId: string): boolean {
  const suscripcion = getSuscripcionActiva("alumno", alumnoId);
  return suscripcion?.plan === "pago" && suscripcion?.estado === "activa";
}
