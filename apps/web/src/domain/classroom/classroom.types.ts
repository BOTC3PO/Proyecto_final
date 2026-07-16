export type ClassroomAccess = "publica" | "privada";
export type ClassroomStatus = "activa" | "archivada" | "ACTIVE" | "ARCHIVED" | "LOCKED";
export type NormalizedClassroomStatus = "ACTIVE" | "ARCHIVED" | "LOCKED";

export const normalizeClassroomStatus = (
  status?: ClassroomStatus | string | null
): NormalizedClassroomStatus | null => {
  if (!status) return null;
  const normalized = status.toString().trim().toUpperCase();
  if (normalized === "ACTIVA" || normalized === "ACTIVE") return "ACTIVE";
  if (normalized === "ARCHIVADA" || normalized === "ARCHIVED") return "ARCHIVED";
  if (normalized === "LOCKED") return "LOCKED";
  return null;
};

/** Devuelve la CLAVE i18n del estado del aula (no el texto) — el caller debe pasarla por `t()`. */
export const getClassroomStatusLabelKey = (status?: ClassroomStatus | string | null) => {
  const normalized = normalizeClassroomStatus(status);
  if (normalized === "ARCHIVED") return "profesorAulas.archivada";
  if (normalized === "LOCKED") return "profesorAulas.bloqueada";
  if (normalized === "ACTIVE") return "profesorAulas.activa";
  return "modulosList.sinEstado";
};

export type Classroom = {
  id: string;
  name: string;
  description: string;
  institutionId?: string;
  category?: string;
  accessType: ClassroomAccess;
  status: ClassroomStatus;
  classCode?: string;
  // Código legacy pre-`classCode` (columna `code` en Prisma). El back
  // acepta cualquiera de los dos para unirse (`aulas.ts` /unirse), así
  // que la UI también debe caer acá cuando `classCode` está vacío pero
  // el aula ya tiene un `code` funcional (aulas viejas sin backfill,
  // ver FIX-CLASSCODE-ENTERPRISE).
  code?: string;
  createdBy: string;
  // IDs del esquema Prisma (devueltos por el back). El front los
  // usa para chequeos de ownership. Los `*Name` equivalentes son
  // los nombres resueltos que ahora también devuelve el back.
  teacherId?: string | null;
  teacherOfRecord?: string | null;
  // FIX-TEST4-X05B-NOMBRES — el back ahora devuelve el nombre
  // resuelto del `createdBy` para mostrarlo en la UI en vez del
  // ID crudo. Si el user ya no existe o el back no lo devolvió,
  // cae al ID como fallback.
  createdByName?: string | null;
  teacherName?: string | null;
  teacherOfRecordName?: string | null;
  teacherIds?: string[];
  /**
   * QA-FIX-08 — flag derivado en el back (`isClassroomTeacher`,
   * criterio canónico de QA-FIX-05). true cuando el viewer es
   * admin, owner por `createdBy`/`teacherId`/`teacherOfRecord`,
   * o miembro con `rolEnClase === "TEACHER"`. El front usa esto
   * para el dropdown de aulas en ProfesorCalendario (en lugar
   * de los phantom `teacherIds`/`members` que el back nunca
   * poblaba).
   */
  viewerIsTeacher?: boolean;
  /**
   * MULTIROL-03 (Fase 3) — rol CONTEXTUAL del viewer en esta aula.
   * Distinto de `viewerIsTeacher` (boolean) y del rol global de la
   * cuenta: es el `rolEnClase` del viewer en `clase_miembros`,
   * mapeado a `"TEACHER" | "STUDENT" | null`. Un profesor que es
   * alumno en el aula de un colega recibe `"STUDENT"` aunque su
   * rol global sea `"TEACHER"`. `null` si no es miembro (la
   * autoridad de docente la cubre `viewerIsTeacher` por separado).
   */
  viewerRoleInClass?: "TEACHER" | "STUDENT" | null;
  createdAt: string;
  updatedAt: string;
  members?: Array<{
    userId: string;
    roleInClass: "TEACHER" | "ADMIN" | "STUDENT";
    schoolId?: string;
    joinedAt?: string;
  }>;
};

export type ClassroomListResponse = {
  items: Classroom[];
  limit: number;
  offset: number;
};
