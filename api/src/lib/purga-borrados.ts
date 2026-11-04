/**
 * Purga definitiva de lo que está marcado como borrado hace más de BORRADOS_PURGA_ANOS (4 por defecto),
 * siempre que no afecte a otra parte del sistema (decisión de Javier, 2026-10-29).
 *
 * Se purgan:
 * - publicaciones del aula (con sus comentarios);
 * - eventos del calendario y actividades del aula;
 * - tareas sin entregas (una tarea con entregas tiene notas: se conserva);
 * - eventos y recompensas de economía que ningún movimiento referencie.
 *
 * NO se purgan, aunque estén borrados: usuarios y escuelas (registro educativo y contable; los usuarios se
 * anonimizan), aulas (asistencia, notas y miembros), módulos, plantillas, fórmulas, datasets y materiales
 * (los usan intentos ya rendidos o el contenido de otros módulos).
 *
 * Calendario y actividades no guardaban la fecha de borrado: los que no la tienen reciben la fecha de hoy y
 * se purgan 4 años después.
 */
import { prisma } from "./prisma";
import { ENV } from "./env";

const LOTE = 500;

const corte = (ahora: Date, anios: number) => {
  const d = new Date(ahora.getTime());
  d.setUTCFullYear(d.getUTCFullYear() - anios);
  return d.toISOString();
};

export async function purgarBorradosViejos(ahora = new Date(), anios = ENV.BORRADOS_PURGA_ANOS) {
  const r = { publicaciones: 0, comentarios: 0, calendario: 0, actividades: 0, tareas: 0, economiaEventos: 0, economiaRecompensas: 0 };
  if (!Number.isFinite(anios) || anios <= 0) return r;
  const limite = corte(ahora, anios);
  const hoy = ahora.toISOString();

  // Fecha de borrado desconocida: se marca hoy (la purga llega 4 años después).
  await prisma.calendarioEscuela.updateMany({ where: { isDeleted: true, deletedAt: null }, data: { deletedAt: hoy } });
  await prisma.actividadAula.updateMany({ where: { isDeleted: true, deletedAt: null }, data: { deletedAt: hoy } });

  // Publicaciones: al borrarlas se actualiza `updatedAt`.
  const pubs = await prisma.publicacion.findMany({ where: { isDeleted: true, updatedAt: { lt: limite } }, select: { id: true }, take: LOTE });
  if (pubs.length) {
    const ids = pubs.map((p) => p.id);
    r.comentarios = (await prisma.comentario.deleteMany({ where: { publicacionId: { in: ids } } })).count;
    r.publicaciones = (await prisma.publicacion.deleteMany({ where: { id: { in: ids } } })).count;
  }

  r.calendario = (await prisma.calendarioEscuela.deleteMany({ where: { isDeleted: true, deletedAt: { lt: limite } } })).count;
  r.actividades = (await prisma.actividadAula.deleteMany({ where: { isDeleted: true, deletedAt: { lt: limite } } })).count;

  // Tareas: solo las que no tienen ninguna entrega.
  const tareas = await prisma.tareaAula.findMany({ where: { isDeleted: true, updatedAt: { lt: limite } }, select: { id: true }, take: LOTE });
  for (const t of tareas) {
    if ((await prisma.entregaTarea.count({ where: { tareaId: t.id } })) === 0) {
      await prisma.tareaAula.delete({ where: { id: t.id } });
      r.tareas++;
    }
  }

  // Economía: solo si ningún movimiento la referencia (el historial de monedas no pierde nada).
  const sinMovimientos = async (id: string) => (await prisma.ledgerMovimiento.count({ where: { referenciaId: id } })) === 0;
  const eventos = await prisma.economiaEvento.findMany({ where: { isDeleted: true, deletedAt: { lt: limite } }, select: { id: true }, take: LOTE });
  for (const e of eventos) {
    if (await sinMovimientos(e.id)) {
      await prisma.economiaEvento.delete({ where: { id: e.id } });
      r.economiaEventos++;
    }
  }
  const recompensas = await prisma.economiaRecompensa.findMany({ where: { isDeleted: true, deletedAt: { lt: limite } }, select: { id: true }, take: LOTE });
  for (const e of recompensas) {
    if (await sinMovimientos(e.id)) {
      await prisma.economiaRecompensa.delete({ where: { id: e.id } });
      r.economiaRecompensas++;
    }
  }
  return r;
}
