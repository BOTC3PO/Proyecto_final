import type { Classroom } from "../domain/classroom/classroom.types";

/**
 * Obtiene el ID real de un aula — prioriza _id
 * (ObjectId de MongoDB/SmartDb) sobre id (string).
 */
export function getAulaId(
  aula: Classroom | null | undefined
): string {
  if (!aula) return "";
  return (aula as { _id?: string } & Classroom)._id ?? aula.id ?? "";
}
