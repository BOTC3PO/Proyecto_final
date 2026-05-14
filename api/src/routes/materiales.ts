import { Router } from 'express';
import { prisma } from '../lib/prisma';

export const materiales = Router();

type AuthUser = {
  id?: string;
  _id?: { toString?: () => string } | string;
  schoolId?: string | null;
};

const getUserId = (user?: AuthUser): string | null => {
  const raw = user?.id ?? user?._id;
  if (!raw) return null;
  if (typeof raw === 'string') return raw;
  return (raw as { toString?: () => string }).toString?.() ?? null;
};

// GET /api/materiales — lista módulos propios + escuela como materiales
materiales.get('/api/materiales', async (req, res) => {
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
materiales.post('/api/materiales/:id/compartir', async (req, res) => {
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
