import { prisma } from "./prisma";
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

// Obtener límites de una escuela (async)
export async function getLimitesEscuela(
  escuelaId: string,
  role?: string
): Promise<LimitesEscuela> {
  if (role === "ADMIN") {
    return {
      max_profesores: Infinity,
      max_directivos: Infinity,
      max_aulas: Infinity,
      max_alumnos_por_aula: Infinity,
    };
  }

  const row = await prisma.limiteEscuela.findUnique({
    where: { escuelaId },
  });

  if (!row) return { ...LIMITES_GRATUITOS };

  return {
    max_profesores: row.maxProfesores,
    max_directivos: row.maxDirectivos,
    max_aulas: row.maxAulas,
    max_alumnos_por_aula: row.maxAlumnosPorAula,
  };
}

// Verificar si una escuela puede agregar más profesores/directivos (async)
export async function puedeAgregarStaff(
  escuelaId: string,
  role: string,
  countActual: number
): Promise<boolean> {
  if (role === "ADMIN") return true;
  const limites = await getLimitesEscuela(escuelaId);
  if (role === "TEACHER") return countActual < limites.max_profesores;
  if (role === "DIRECTIVO") return countActual < limites.max_directivos;
  return true;
}

// Verificar si una escuela puede agregar más aulas (async)
export async function puedeAgregarAula(
  escuelaId: string,
  role: string,
  aulasActivasActuales: number
): Promise<boolean> {
  if (role === "ADMIN") return true;
  const limites = await getLimitesEscuela(escuelaId);
  return aulasActivasActuales < limites.max_aulas;
}

// Verificar si un aula puede agregar más alumnos (async)
export async function puedeAgregarAlumno(
  escuelaId: string,
  role: string,
  alumnosActuales: number
): Promise<boolean> {
  if (role === "ADMIN") return true;
  const limites = await getLimitesEscuela(escuelaId);
  return alumnosActuales < limites.max_alumnos_por_aula;
}

// Calcular monto mensual para una escuela según exceso
export function calcularMontoEscuela(params: {
  profesoresActuales: number;
  directivosActuales: number;
  alumnosTotales: number;
}): number {
  if (!ENV.PAYMENTS_ENABLED) return 0;

  const excesoProfesores = Math.max(0, params.profesoresActuales - LIMITES_GRATUITOS.max_profesores);
  const excesoDirectivos = Math.max(0, params.directivosActuales - LIMITES_GRATUITOS.max_directivos);
  const excesoAlumnos = Math.max(
    0,
    params.alumnosTotales - (LIMITES_GRATUITOS.max_aulas * LIMITES_GRATUITOS.max_alumnos_por_aula)
  );

  return (
    (excesoProfesores + excesoDirectivos) * ENV.PRECIO_STAFF_MENSUAL +
    excesoAlumnos * ENV.PRECIO_ALUMNO_MENSUAL
  );
}

// Obtener suscripción activa de una entidad (async)
export async function getSuscripcionActiva(
  entidadTipo: string,
  entidadId: string
): Promise<Suscripcion | null> {
  const now = new Date().toISOString();
  const row = await prisma.suscripcion.findFirst({
    where: {
      entidadTipo,
      entidadId,
      estado: "activa",
      periodoFin: { gte: now },
    },
    orderBy: { periodoFin: "desc" },
  });

  if (!row) return null;

  return {
    id: row.id,
    entidad_tipo: row.entidadTipo as Suscripcion["entidad_tipo"],
    entidad_id: row.entidadId,
    plan: row.plan as Suscripcion["plan"],
    estado: row.estado as Suscripcion["estado"],
    mp_preapproval_id: row.mpPreapprovalId ?? null,
    mp_payer_email: row.mpPayerEmail ?? null,
    periodo_inicio: row.periodoInicio,
    periodo_fin: row.periodoFin,
    monto_mensual: row.montoMensual,
    moneda: row.moneda,
    expansiones: row.expansiones,
    cancelada_at: row.canceladaAt ?? null,
    cancelada_by: row.canceladaBy ?? null,
    reembolso_solicitado: row.reembolsoSolicitado,
    reembolso_at: row.reembolsoAt ?? null,
    created_at: row.createdAt,
    updated_at: row.updatedAt,
  };
}

// Verificar si un alumno tiene multiplicador activo (async)
export async function tieneMultiplicadorActivo(alumnoId: string): Promise<boolean> {
  const suscripcion = await getSuscripcionActiva("alumno", alumnoId);
  return suscripcion?.plan === "pago" && suscripcion?.estado === "activa";
}
