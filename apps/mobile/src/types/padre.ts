/**
 * PLAN-R Parte 4 — copiado de `apps/web/src/services/progreso.ts` +
 * `apps/web/src/services/cobros.ts` (mismo criterio que Partes 1-3:
 * sin workspace compartido hoy). Sólo el subset "resumido" que pide el
 * plan — no actividades/boletín/límites/revocar de
 * `apps/web/src/pages/HijosProgreso.tsx` (eso es gestión, no resumen).
 */
export type ChildModule = {
  id: string;
  titulo: string;
  area: string;
  progreso: number;
  estado: "En curso" | "Completado" | "Bloqueado";
  ultimaActividad: string;
};

export type ChildProgress = {
  id: string;
  nombre: string;
  usuario: string;
  grado: string;
  progresoGeneral: number;
  modulos: ChildModule[];
};

export type EstadoCuota = "pendiente" | "en_proceso" | "pagada" | "vencida" | "anulada";

export type CobroEscuela = {
  id: string;
  concepto: string;
  moneda: string;
  vencimiento?: string | null;
};

export type CuotaAlumno = {
  id: string;
  alumnoId: string;
  alumnoNombre?: string;
  estado: EstadoCuota;
  montoFinal: number;
  cobro?: CobroEscuela | null;
};
