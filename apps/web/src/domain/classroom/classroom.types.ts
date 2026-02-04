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

export const getClassroomStatusLabel = (status?: ClassroomStatus | string | null) => {
  const normalized = normalizeClassroomStatus(status);
  if (normalized === "ARCHIVED") return "Archivada";
  if (normalized === "LOCKED") return "Bloqueada";
  if (normalized === "ACTIVE") return "Activa";
  return "Sin estado";
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
  createdBy: string;
  teacherIds?: string[];
  createdAt: string;
  updatedAt: string;
};

export type ClassroomListResponse = {
  items: Classroom[];
  limit: number;
  offset: number;
};
