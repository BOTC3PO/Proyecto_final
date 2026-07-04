import { createHash, randomUUID } from 'crypto';
import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireUser } from '../lib/user-auth';
import { hasRole } from '../lib/roles';

export const materiales = Router();

// PLAN-G §1 (item 25) — tipos válidos de "material guardado". No es un
// enum de Prisma (coherente con `Modulo.visibility`/`Libro.visibility`,
// que también son String libres).
const MATERIAL_TIPOS = ['mapa', 'timeline', 'interactivo', 'presentacion'] as const;
type MaterialTipo = typeof MATERIAL_TIPOS[number];

function computeContentHash(contenido: unknown): string {
  const str = typeof contenido === 'string' ? contenido : JSON.stringify(contenido);
  return createHash('sha256').update(str).digest('hex');
}

// MULTIROL-01: `roles[]` opcional para chequeos multi-rol.
type AuthUser = {
  id?: string;
  _id?: { toString?: () => string } | string;
  schoolId?: string | null;
  role?: string | null;
  roles?: string[] | null;
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
      subject: true,
      visibility: true,
      schoolId: true,
      ownerUserId: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  // FIX-TEST4-PROF-04 — replicar patrón VblangDataset: incluir
  // `visibility` (string) y `ownerName` (resuelto) en el response
  // para que la UI pueda mostrar el alcance y el nombre del
  // docente que creó el material, no el ID.
  const ownerIds = Array.from(
    new Set(modulos.map((m) => m.ownerUserId).filter((v): v is string => !!v))
  );
  const owners = ownerIds.length
    ? await prisma.usuario.findMany({
        where: { id: { in: ownerIds } },
        select: { id: true, fullName: true, username: true },
      })
    : [];
  const ownerMap = new Map(
    owners.map((u) => [u.id, u.fullName || u.username || u.id])
  );

  // PLAN-G §1 (item 25) — fusionar "materiales guardados" (tabla nueva
  // `Material`) en el mismo listado, con el mismo filtro de visibilidad.
  // Se agrega `origen` para que el front sepa a qué endpoint pegarle al
  // reabrir/descargar cada item ("modulo" sigue igual que antes,
  // "material" es el destino de guardado nuevo de PLAN-G §1).
  const materialesGuardados = await prisma.material.findMany({
    where: { OR: filters, isDeleted: false },
    orderBy: { createdAt: 'desc' },
  });
  const materialOwnerIds = Array.from(
    new Set(materialesGuardados.map((m) => m.ownerUserId).filter((v): v is string => !!v))
  );
  const missingOwnerIds = materialOwnerIds.filter((id) => !ownerMap.has(id));
  if (missingOwnerIds.length) {
    const extraOwners = await prisma.usuario.findMany({
      where: { id: { in: missingOwnerIds } },
      select: { id: true, fullName: true, username: true },
    });
    for (const u of extraOwners) ownerMap.set(u.id, u.fullName || u.username || u.id);
  }

  const items = [
    ...modulos.map((m) => ({
      id: m.id,
      titulo: m.titulo,
      materia: m.subject ?? 'Sin materia',
      tipo: 'cuestionario',
      autor: ownerMap.get(m.ownerUserId ?? '') ?? m.ownerUserId ?? 'Desconocido',
      ownerUserId: m.ownerUserId ?? null,
      escuelaId: m.schoolId ?? null,
      visibility: m.visibility ?? 'privado',
      compartido: m.visibility === 'escuela' || m.visibility === 'publico',
      createdAt: m.createdAt,
      origen: 'modulo' as const,
    })),
    ...materialesGuardados.map((mat) => ({
      id: mat.id,
      titulo: mat.titulo,
      materia: 'Sin materia',
      tipo: mat.tipo,
      autor: ownerMap.get(mat.ownerUserId) ?? mat.ownerUserId ?? 'Desconocido',
      ownerUserId: mat.ownerUserId ?? null,
      escuelaId: mat.schoolId ?? null,
      visibility: mat.visibility ?? 'privado',
      compartido: mat.visibility === 'escuela' || mat.visibility === 'publico',
      createdAt: mat.createdAt,
      origen: 'material' as const,
    })),
  ];

  return res.json({ items });
});

// POST /api/materiales/:id/compartir — cambia visibility según el
// alcance que elija el docente. FIX-COMPARTIR-SCOPE — antes siempre
// pasaba a 'escuela' (sin selector); ahora acepta un body con `scope`
// ∈ {'privado', 'escuela', 'publico'} y opcionalmente `targetIds`
// (array de aulas/docentes/alumnos) que se persiste como `compartirCon`
// para mantener el contrato original mientras se suma el nuevo
// alcance. Backward compat: si el body está vacío o `scope` no
// viene, se mantiene el comportamiento legacy (escuela) para no
// romper integraciones existentes.
materiales.post('/api/materiales/:id/compartir', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  const id = String(req.params.id ?? "");

  if (!userId) return res.status(403).json({ error: 'forbidden' });

  const body = (req.body ?? {}) as {
    scope?: 'privado' | 'escuela' | 'publico';
    targetIds?: string[];
  };
  const scope = body.scope ?? 'escuela';
  if (scope !== 'privado' && scope !== 'escuela' && scope !== 'publico') {
    return res.status(400).json({
      error: "scope inválido (debe ser 'privado', 'escuela' o 'publico')",
    });
  }
  const userSchoolId =
    typeof user?.schoolId === 'string' ? user.schoolId : null;
  if (scope === 'escuela' && !userSchoolId) {
    return res.status(400).json({
      error: 'Para compartir con la escuela, el usuario debe tener una escuela asignada',
    });
  }
  const updateData: Record<string, unknown> = { visibility: scope };
  if (scope === 'escuela' && userSchoolId) {
    updateData.schoolId = userSchoolId;
  }
  if (scope === 'privado') {
    // Volver a privado limpia la schoolId del material para que no
    // quede heredando la visibilidad anterior.
    updateData.schoolId = null;
  }
  if (Array.isArray(body.targetIds)) {
    updateData.compartirCon = JSON.stringify(body.targetIds);
  }

  await prisma.modulo.updateMany({
    where: { id, ownerUserId: userId },
    data: updateData,
  });

  return res.json({ ok: true, scope });
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
  const isAdmin = hasRole(user ?? null, "ADMIN");
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

// PLAN-G §1 (item 25) — "Guardar como material" desde los 4 editores
// standalone. Tabla nueva `materiales_guardados`/`material_versions`
// (modelos Prisma `Material`/`MaterialVersion`), patrón padre+version
// igual a quizzes/quiz_versions: cada guardado posterior crea una
// versión nueva, nunca sobrescribe la anterior.

// POST /api/materiales/guardados — crea un material nuevo (versión 1).
materiales.post('/api/materiales/guardados', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  if (!userId) return res.status(403).json({ error: 'forbidden' });

  const body = (req.body ?? {}) as { tipo?: string; titulo?: string; contenido?: unknown };
  const tipo = body.tipo;
  if (!tipo || !MATERIAL_TIPOS.includes(tipo as MaterialTipo)) {
    return res.status(400).json({ error: `tipo inválido (debe ser uno de: ${MATERIAL_TIPOS.join(', ')})` });
  }
  const titulo = typeof body.titulo === 'string' ? body.titulo.trim() : '';
  if (!titulo) return res.status(400).json({ error: 'titulo es requerido' });
  if (body.contenido === undefined) return res.status(400).json({ error: 'contenido es requerido' });

  const now = new Date().toISOString();
  const materialId = randomUUID();
  const versionId = randomUUID();
  const contenidoStr = JSON.stringify(body.contenido);

  await prisma.material.create({
    data: {
      id: materialId,
      tipo,
      titulo,
      ownerUserId: userId,
      schoolId: null,
      visibility: 'privado',
      currentVersionId: versionId,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
  });
  await prisma.materialVersion.create({
    data: {
      id: versionId,
      materialId,
      versionNumber: 1,
      schemaVersion: 1,
      contenido: contenidoStr,
      contentHash: computeContentHash(contenidoStr),
      createdAt: now,
      createdBy: userId,
    },
  });

  return res.status(201).json({ id: materialId, versionId, versionNumber: 1 });
});

// POST /api/materiales/guardados/:id/versiones — guarda una versión
// nueva sobre un material existente (no sobrescribe la anterior).
materiales.post('/api/materiales/guardados/:id/versiones', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  if (!userId) return res.status(403).json({ error: 'forbidden' });

  const id = String(req.params.id ?? '');
  const material = await prisma.material.findFirst({ where: { id, isDeleted: false } });
  if (!material) return res.status(404).json({ error: 'not found' });

  const isOwner = material.ownerUserId === userId;
  const isAdmin = hasRole(user ?? null, 'ADMIN');
  if (!isOwner && !isAdmin) return res.status(403).json({ error: 'forbidden' });

  const body = (req.body ?? {}) as { contenido?: unknown };
  if (body.contenido === undefined) return res.status(400).json({ error: 'contenido es requerido' });

  const existingVersions = await prisma.materialVersion.findMany({ where: { materialId: id } });
  const nextVersionNumber = existingVersions.length + 1;
  const now = new Date().toISOString();
  const versionId = randomUUID();
  const contenidoStr = JSON.stringify(body.contenido);

  await prisma.materialVersion.create({
    data: {
      id: versionId,
      materialId: id,
      versionNumber: nextVersionNumber,
      schemaVersion: 1,
      contenido: contenidoStr,
      contentHash: computeContentHash(contenidoStr),
      createdAt: now,
      createdBy: userId,
    },
  });
  await prisma.material.updateMany({
    where: { id },
    data: { currentVersionId: versionId, updatedAt: now },
  });

  return res.status(201).json({ id, versionId, versionNumber: nextVersionNumber });
});

// GET /api/materiales/guardados/:id — devuelve el material + su versión
// actual (contenido ya parseado), para reabrirlo en su editor de origen.
materiales.get('/api/materiales/guardados/:id', requireUser, async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const userId = getUserId(user);
  if (!userId) return res.status(403).json({ error: 'forbidden' });

  const id = String(req.params.id ?? '');
  const material = await prisma.material.findFirst({ where: { id, isDeleted: false } });
  if (!material) return res.status(404).json({ error: 'not found' });

  const isOwner = material.ownerUserId === userId;
  const isAdmin = hasRole(user ?? null, 'ADMIN');
  const userSchoolId = typeof user?.schoolId === 'string' ? user.schoolId : null;
  const sameSchoolShared =
    userSchoolId !== null &&
    material.schoolId === userSchoolId &&
    (material.visibility === 'escuela' || material.visibility === 'publico');
  if (!isOwner && !isAdmin && !sameSchoolShared) {
    return res.status(403).json({ error: 'forbidden' });
  }

  const version = material.currentVersionId
    ? await prisma.materialVersion.findFirst({ where: { id: material.currentVersionId } })
    : null;
  if (!version) return res.status(404).json({ error: 'version not found' });

  let contenido: unknown = version.contenido;
  if (typeof contenido === 'string') {
    try { contenido = JSON.parse(contenido); } catch { /* leave as string */ }
  }

  return res.json({
    id: material.id,
    tipo: material.tipo,
    titulo: material.titulo,
    visibility: material.visibility,
    schoolId: material.schoolId ?? null,
    ownerUserId: material.ownerUserId,
    version: {
      id: version.id,
      versionNumber: version.versionNumber,
      contenido,
      createdAt: version.createdAt,
    },
  });
});
