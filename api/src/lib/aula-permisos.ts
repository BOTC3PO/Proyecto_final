/**
 * Permisos sobre un aula, compartidos por encuestas y tareas.
 *
 * - Gestionar (crear, editar, corregir): el admin, el docente del aula (miembro TEACHER o ADMIN, creador o
 *   titular) o la dirección de su escuela.
 * - Participar (ver y entregar): cualquier miembro del aula.
 */
import { prisma } from "./prisma";
import { hasRole } from "./roles";

export type UsuarioAula = { id?: string; _id?: string; role?: string; roles?: string[]; schoolId?: string | null };

export const idDe = (user: UsuarioAula | undefined) => user?.id ?? user?._id ?? null;

export async function puedeGestionarAula(user: UsuarioAula | undefined, claseId: string): Promise<boolean> {
  if (hasRole(user as never, "ADMIN")) return true;
  const userId = idDe(user);
  if (!userId) return false;
  const clase = await prisma.clase.findFirst({
    where: { id: claseId },
    select: { escuelaId: true, createdBy: true, teacherId: true, teacherOfRecord: true }
  });
  if (!clase) return false;
  if ([clase.createdBy, clase.teacherId, clase.teacherOfRecord].includes(userId)) return true;
  const miembro = await prisma.claseMiembro.findFirst({
    where: { claseId, usuarioId: userId, rolEnClase: { in: ["TEACHER", "ADMIN"] } }
  });
  if (miembro) return true;
  const esDireccion = hasRole(user as never, "DIRECTIVO") || hasRole(user as never, "ADMIN_ESCUELA");
  return esDireccion && !!user?.schoolId && user.schoolId === clase.escuelaId;
}

export async function esMiembroDeAula(userId: string | null, claseId: string, rol?: string): Promise<boolean> {
  if (!userId) return false;
  const miembro = await prisma.claseMiembro.findFirst({
    where: { claseId, usuarioId: userId, ...(rol ? { rolEnClase: rol } : {}) }
  });
  return Boolean(miembro);
}
