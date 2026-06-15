import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireUser } from '../lib/user-auth';

export const materiales = Router();

type AuthUser = {
  id?: string;
  _id?: { toString?: () => string } | string;
  schoolId?: string | null;
  role?: string | null;
};

const getUserId = (user?: AuthUser): string | null => {
  const raw = user?.id ?? user?._id;
  if (!raw) return null;
  if (typeof raw === 'string') return raw;
  return (raw as { toString?: () => string }).toString?.() ?? null;
};

// Sanitiza un string para usarlo como nombre de archivo.
// Reemplaza cualquier carácter fuera de [A-Za-z0-9._-] por '_'.
// Colapsa runs de '_'. Recorta a 80 chars. Quita '_' al final.
function sanitizeFilename(input: string): string {
  const cleaned = (input ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^A-Za-z0-9._-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^[._]+|[._]+$/g, "");
  return (cleaned || "material").slice(0, 80);
}

// GET /api/materiales — lista módulos propios + escuela como materiales
materiales.get('/api/materiales', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  const schoolId = typeof user?.schoolId === 'string' ? user.schoolId : null;

  if (!userId) return res.status(403).json({ error: 'forbidden' });

  const filters = [{ ownerUserId: userId }];
  if (schoolId) {
    (filters as object[]).push({ visibility: 'escuela', schoolId });
    (filters as object[]).push({ visibility: 'publico', schoolId });
  }

  const modulos = await prisma.modulo.findMany({
    where: { OR: filters, isDeleted: false },
    select: {
      id: true,
      titulo: true,
      visibility: true,
      ownerUserId: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  const items = modulos.map((m) => ({
    id: m.id,
    titulo: m.titulo,
    materia: 'Sin materia',
    tipo: 'cuestionario',
    autor: m.ownerUserId ?? 'Desconocido',
    escuelaId: schoolId,
    compartido: m.visibility === 'escuela' || m.visibility === 'publico',
    createdAt: m.createdAt,
  }));

  return res.json({ items });
});

// POST /api/materiales/:id/compartir — cambia visibility a 'escuela'
materiales.post('/api/materiales/:id/compartir', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  const { id } = req.params;

  if (!userId) return res.status(403).json({ error: 'forbidden' });

  await prisma.modulo.updateMany({
    where: { id, ownerUserId: userId },
    data: { visibility: 'escuela' },
  });

  return res.json({ ok: true });
});

// GET /api/materiales/:id/download — descarga el material como JSON.
// Q7: el front debe disparar la descarga via fetch autenticado + blob
// (un <a href download> no lleva el header Authorization → 401).
// Q7: el back setea Content-Disposition para que el archivo se llame
// por el titulo del material y NO "download.json" (que es lo que hace
// el browser cuando se baja una respuesta sin Content-Disposition).
materiales.get('/api/materiales/:id/download', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  if (!userId) return res.status(403).json({ error: 'forbidden' });

  const { id } = req.params;
  if (typeof id !== 'string') return res.status(400).json({ error: 'invalid id' });
  const modulo = await prisma.modulo.findFirst({ where: { id, isDeleted: false } });
  if (!modulo) return res.status(404).json({ error: 'not found' });

  // Mismas reglas de visibilidad que el listado (líneas 27-31):
  //   - owner: siempre puede.
  //   - ADMIN: siempre puede (super-user, igual que el resto del codebase).
  //   - terceros: solo si visibility=escuela o publico Y mismo schoolId.
  // isStaffRole NO se usa porque incluye TEACHER, y un TEACHER de OTRA
  // escuela NO debe poder descargar un material con visibility=private
  // de otro profesor.
  const isOwner = modulo.ownerUserId === userId;
  const isAdmin = user?.role === 'ADMIN';
  const userSchoolId = typeof user?.schoolId === 'string' ? user.schoolId : null;
  const sameSchoolShared =
    userSchoolId !== null &&
    modulo.schoolId === userSchoolId &&
    (modulo.visibility === 'escuela' || modulo.visibility === 'publico');
  if (!isOwner && !isAdmin && !sameSchoolShared) {
    return res.status(403).json({ error: 'forbidden' });
  }

  const filename = sanitizeFilename(modulo.titulo) + '.json';
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(JSON.stringify(modulo, null, 2));
});
