import { randomUUID } from "crypto";
import { Router, type Request, type Response } from "express";
import { ZodError } from "zod";
import { isStaffRole } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import {
  PlantillaCreateSchema,
  PlantillaForkSchema,
  PlantillaUpdateSchema,
  SYSTEM_OWNER_ID,
  type Visibility,
} from "../lib/vblang-types";
import { validateDslSyntax } from "../lib/vblang-validation";

export const plantillas = Router();

// MULTIROL-01 (Fase 1): el shape del user ahora puede traer `roles`
// además de `role` (legacy). `hasRole` mira primero el array y cae
// al singular. El chequeo `user.role === "ADMIN"` se reemplaza por
// `hasRole(user, "ADMIN")` en este archivo.
type AuthUser = {
  _id?: string;
  role?: string;
  roles?: string[];
  schoolId?: string | null;
};

type PlantillaRow = {
  id: string;
  ownerUserId: string;
  schoolId: string | null;
  visibility: string;
  nombre: string;
  descripcion: string | null;
  materia: string | null;
  tags: string | null;
  codigoDsl: string;
  version: number;
  basadoEn: string | null;
  publicAprobado: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

/** F6-01 — una plantilla es "oficial" si su dueño es la cuenta de sistema. */
function esPlantillaOficial(row: PlantillaRow): boolean {
  return row.ownerUserId === SYSTEM_OWNER_ID;
}

function parseTags(raw: string | null | undefined): string[] | undefined {
  if (!raw) return undefined;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map((t) => String(t)) : undefined;
  } catch {
    return undefined;
  }
}

function toListItem(row: PlantillaRow, ownerName?: string) {
  return {
    id: row.id,
    nombre: row.nombre,
    descripcion: row.descripcion ?? undefined,
    materia: row.materia ?? undefined,
    tags: parseTags(row.tags),
    visibility: row.visibility as Visibility,
    publicAprobado: row.publicAprobado,
    esOficial: esPlantillaOficial(row),
    ownerUserId: row.ownerUserId,
    ownerName,
    schoolId: row.schoolId ?? undefined,
    version: row.version,
    basadoEn: row.basadoEn ?? undefined,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

function toDetail(row: PlantillaRow, ownerName?: string) {
  return {
    ...toListItem(row, ownerName),
    codigoDsl: row.codigoDsl,
  };
}

function canRead(row: PlantillaRow, user: AuthUser): boolean {
  if (row.isDeleted) return false;
  if (hasRole(user, "ADMIN")) return true;
  if (row.ownerUserId === user._id) return true;
  if (
    row.visibility === "escuela" &&
    row.schoolId &&
    user.schoolId &&
    row.schoolId === user.schoolId
  ) {
    return true;
  }
  if (row.visibility === "publica" && row.publicAprobado) return true;
  return false;
}

// POST /api/plantillas/batch
// Devuelve solo {id, nombre, materia, version} de cada plantilla pedida que el
// usuario puede ver. Sustituye múltiples GET /api/plantillas/:id en flujos como
// ModuloEditor donde solo se necesita el nombre para mostrar al docente.
plantillas.post("/api/plantillas/batch", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const body = req.body as { ids?: unknown } | undefined;
    const idsRaw = body?.ids;
    if (!Array.isArray(idsRaw)) {
      res.status(400).json({ error: "Body debe ser { ids: string[] }" });
      return;
    }
    const ids = idsRaw
      .filter((v): v is string => typeof v === "string" && v.length > 0)
      .slice(0, 200); // cap defensivo
    if (ids.length === 0) {
      res.json({ items: [] });
      return;
    }
    const rows = await prisma.plantillaEjercicio.findMany({
      where: { id: { in: ids }, isDeleted: false },
    });
    const visible = (rows as PlantillaRow[]).filter((r) => canRead(r, user));
    res.json({
      items: visible.map((r) => ({
        id: r.id,
        nombre: r.nombre,
        materia: r.materia ?? undefined,
        version: r.version,
      })),
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// GET /api/plantillas
plantillas.get("/api/plantillas", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user)) {
      res.json({ items: [], total: 0 });
      return;
    }
    const {
      q,
      materia,
      visibility = "todas",
      owner = "todas",
      limit = "50",
      offset = "0",
    } = req.query as Record<string, string | undefined>;

    const limitNum = Math.min(parseInt(limit ?? "50", 10) || 50, 200);
    const offsetNum = Math.max(parseInt(offset ?? "0", 10) || 0, 0);

    const userId = user._id ?? "";
    const userSchoolId = user.schoolId ?? null;

    // Visibility OR-branches.
    const visibilityBranches: Array<Record<string, unknown>> = [];

    if (owner !== "otros") {
      visibilityBranches.push({ ownerUserId: userId });
    }
    if (owner !== "mias") {
      if (userSchoolId) {
        visibilityBranches.push({
          schoolId: userSchoolId,
          visibility: { in: ["escuela", "publica"] as const },
          NOT: { ownerUserId: userId },
        });
      }
      visibilityBranches.push({
        visibility: "publica",
        publicAprobado: true,
        NOT: { ownerUserId: userId },
      });
    }

    let visBranches = visibilityBranches;
    if (visibility !== "todas") {
      const target =
        visibility === "privadas"
          ? "privada"
          : visibility === "publicas"
            ? "publica"
            : "escuela";
      visBranches = visibilityBranches
        .map((b) => ({ ...b, visibility: target }))
        // strip incompatible branches (e.g. visibility:in mismatch).
        .filter((b) => {
          const v = (b as { visibility?: unknown }).visibility;
          if (typeof v === "string") return v === target;
          return true;
        });
    }

    if (visBranches.length === 0) {
      res.json({ items: [], total: 0 });
      return;
    }

    const where: Record<string, unknown> = {
      isDeleted: false,
      OR: visBranches,
    };
    if (materia) where.materia = materia;
    if (q) {
      where.AND = [
        {
          OR: [
            { nombre: { contains: q, mode: "insensitive" as const } },
            { descripcion: { contains: q, mode: "insensitive" as const } },
          ],
        },
      ];
    }

    const [rows, total] = await Promise.all([
      prisma.plantillaEjercicio.findMany({
        where,
        orderBy: { updatedAt: "desc" },
        take: limitNum,
        skip: offsetNum,
      }),
      prisma.plantillaEjercicio.count({ where }),
    ]);

    const ownerIds = Array.from(new Set(rows.map((r) => r.ownerUserId)));
    const owners = ownerIds.length
      ? await prisma.usuario.findMany({
          where: { id: { in: ownerIds } },
          select: { id: true, fullName: true },
        })
      : [];
    const ownerMap = new Map(owners.map((o) => [o.id, o.fullName]));

    res.json({
      items: rows.map((r) => toListItem(r as PlantillaRow, ownerMap.get(r.ownerUserId))),
      total,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// GET /api/plantillas/:id
plantillas.get("/api/plantillas/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.plantillaEjercicio.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Plantilla no encontrada" });
      return;
    }
    if (!canRead(row as PlantillaRow, user)) {
      res.status(403).json({ error: "Sin permisos para ver esta plantilla" });
      return;
    }
    const owner = await prisma.usuario.findUnique({
      where: { id: row.ownerUserId },
      select: { fullName: true },
    });
    res.json(toDetail(row as PlantillaRow, owner?.fullName));
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// POST /api/plantillas
plantillas.post("/api/plantillas", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user)) {
      res.status(403).json({ error: "Solo creadores de contenido pueden crear plantillas" });
      return;
    }
    const parsed = PlantillaCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const data = parsed.data;
    const dsl = validateDslSyntax(data.codigoDsl);
    if (!dsl.ok) {
      res.status(400).json({
        error: "Código DSL inválido",
        dslError: { message: dsl.message, line: dsl.line, col: dsl.col },
      });
      return;
    }
    const id = randomUUID();
    const now = new Date().toISOString();
    const publicAprobado =
      data.visibility === "publica" && hasRole(user, "ADMIN") ? true : false;
    const userId = user._id ?? "";

    const created = await prisma.$transaction(async (tx) => {
      const row = await tx.plantillaEjercicio.create({
        data: {
          id,
          ownerUserId: userId,
          schoolId: user.schoolId ?? null,
          visibility: data.visibility,
          nombre: data.nombre,
          descripcion: data.descripcion ?? null,
          materia: data.materia ?? null,
          tags: data.tags ? JSON.stringify(data.tags) : null,
          codigoDsl: data.codigoDsl,
          version: 1,
          basadoEn: null,
          publicAprobado,
          isDeleted: false,
          createdAt: now,
          updatedAt: now,
        },
      });
      await tx.plantillaEjercicioVersion.create({
        data: {
          id: randomUUID(),
          plantillaId: id,
          version: 1,
          codigoDsl: data.codigoDsl,
          changelog: "Versión inicial",
          createdAt: now,
          createdBy: userId,
        },
      });
      return row;
    });

    res.status(201).json(toDetail(created as PlantillaRow));
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// PUT /api/plantillas/:id
plantillas.put("/api/plantillas/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.plantillaEjercicio.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Plantilla no encontrada" });
      return;
    }
    const isOwner = row.ownerUserId === user._id;
    if (!isOwner && !hasRole(user, "ADMIN")) {
      res.status(403).json({ error: "Solo el owner o ADMIN puede modificar" });
      return;
    }
    const parsed = PlantillaUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const data = parsed.data;
    let nextCodigo: string | undefined;
    if (typeof data.codigoDsl === "string" && data.codigoDsl !== row.codigoDsl) {
      const dsl = validateDslSyntax(data.codigoDsl);
      if (!dsl.ok) {
        res.status(400).json({
          error: "Código DSL inválido",
          dslError: { message: dsl.message, line: dsl.line, col: dsl.col },
        });
        return;
      }
      nextCodigo = data.codigoDsl;
    }
    const now = new Date().toISOString();
    const newVersion = nextCodigo ? row.version + 1 : row.version;
    const update: Record<string, unknown> = { updatedAt: now };
    if (data.nombre !== undefined) update.nombre = data.nombre;
    if (data.descripcion !== undefined) update.descripcion = data.descripcion;
    if (data.materia !== undefined) update.materia = data.materia;
    if (data.tags !== undefined) update.tags = JSON.stringify(data.tags);
    if (nextCodigo) {
      update.codigoDsl = nextCodigo;
      update.version = newVersion;
    }
    if (data.visibility !== undefined) {
      update.visibility = data.visibility;
      if (data.visibility === "publica" && !hasRole(user, "ADMIN")) {
        update.publicAprobado = false;
      }
    }

    const updated = await prisma.$transaction(async (tx) => {
      const u = await tx.plantillaEjercicio.update({
        where: { id },
        data: update,
      });
      if (nextCodigo) {
        await tx.plantillaEjercicioVersion.create({
          data: {
            id: randomUUID(),
            plantillaId: id,
            version: newVersion,
            codigoDsl: nextCodigo,
            changelog: data.changelog ?? "Sin descripción",
            createdAt: now,
            createdBy: user._id ?? "",
          },
        });
      }
      return u;
    });

    res.json(toDetail(updated as PlantillaRow));
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// DELETE /api/plantillas/:id
plantillas.delete("/api/plantillas/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.plantillaEjercicio.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Plantilla no encontrada" });
      return;
    }
    const isOwner = row.ownerUserId === user._id;
    if (!isOwner && !hasRole(user, "ADMIN")) {
      res.status(403).json({ error: "Solo el owner o ADMIN puede eliminar" });
      return;
    }
    await prisma.plantillaEjercicio.update({
      where: { id },
      data: { isDeleted: true, updatedAt: new Date().toISOString() },
    });
    res.json({ ok: true });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

/**
 * Núcleo compartido de "clonar para editar" (F6-01) y "fork": crea una copia
 * EDITABLE de `original` cuyo dueño es el solicitante, `basadoEn` apunta al
 * original (procedencia) y arranca en version 1 con visibility privada por
 * defecto. El original queda INTACTO. Sirve para clonar plantillas oficiales
 * (públicas, dueño = sistema) sin tocar la fuente. Sigue el patrón de
 * `POST /api/modulos/:id/duplicar`: id nuevo, owner = solicitante, copia la
 * config, no hereda aprobación pública.
 */
async function clonarParaEditar(
  original: PlantillaRow,
  user: AuthUser,
  body: unknown,
  changelogLabel: string,
): Promise<PlantillaRow> {
  const parsed = PlantillaForkSchema.parse(body ?? {});
  const nombre = parsed.nombre ?? `Copia de ${original.nombre}`;
  const visibility = parsed.visibility ?? "privada";
  const newId = randomUUID();
  const now = new Date().toISOString();
  const userId = user._id ?? "";

  return prisma.$transaction(async (tx) => {
    const row = await tx.plantillaEjercicio.create({
      data: {
        id: newId,
        ownerUserId: userId,
        schoolId: user.schoolId ?? null,
        visibility,
        nombre,
        descripcion: original.descripcion,
        materia: original.materia,
        tags: original.tags,
        codigoDsl: original.codigoDsl,
        version: 1,
        basadoEn: original.id,
        publicAprobado: false,
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
    });
    await tx.plantillaEjercicioVersion.create({
      data: {
        id: randomUUID(),
        plantillaId: newId,
        version: 1,
        codigoDsl: original.codigoDsl,
        changelog: `${changelogLabel} ${original.id}`,
        createdAt: now,
        createdBy: userId,
      },
    });
    return row as PlantillaRow;
  });
}

/**
 * Handler común para `/fork` y `/clonar`. Requiere rol staff y permiso de
 * lectura sobre el original (las oficiales son públicas → cualquier staff las
 * puede clonar; jamás permite editar la original). `changelogLabel` distingue la
 * procedencia en el historial de versiones del clon.
 */
async function handleClonado(
  req: Request,
  res: Response,
  changelogLabel: string,
): Promise<void> {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user)) {
      res.status(403).json({ error: "Solo creadores de contenido pueden clonar" });
      return;
    }
    const id = String(req.params.id);
    const original = await prisma.plantillaEjercicio.findUnique({ where: { id } });
    if (!original || original.isDeleted) {
      res.status(404).json({ error: "Plantilla no encontrada" });
      return;
    }
    if (!canRead(original as PlantillaRow, user)) {
      res.status(403).json({ error: "Sin permisos para ver esta plantilla" });
      return;
    }
    const clon = await clonarParaEditar(original as PlantillaRow, user, req.body, changelogLabel);
    res.status(201).json(toDetail(clon));
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ error: "Datos inválidos", issues: err.issues });
      return;
    }
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
}

// POST /api/plantillas/:id/clonar — F6-01 "Usar como base / Clonar para editar".
plantillas.post("/api/plantillas/:id/clonar", requireUser, (req, res) =>
  handleClonado(req, res, "Clonado de"),
);

// POST /api/plantillas/:id/fork — alias histórico de clonar-para-editar.
plantillas.post("/api/plantillas/:id/fork", requireUser, (req, res) =>
  handleClonado(req, res, "Fork de"),
);

// ─── Sprint 10A — Aprobación admin de plantillas públicas ─────────────────

// GET /api/admin/plantillas/pendientes — solo ADMIN.
plantillas.get(
  "/api/admin/plantillas/pendientes",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      if (!hasRole(user, "ADMIN")) {
        res.status(403).json({ error: "Solo ADMIN" });
        return;
      }
      const { limit = "50", offset = "0" } = req.query as Record<
        string,
        string | undefined
      >;
      const limitNum = Math.min(parseInt(limit ?? "50", 10) || 50, 200);
      const offsetNum = Math.max(parseInt(offset ?? "0", 10) || 0, 0);
      const where = {
        isDeleted: false,
        visibility: "publica",
        publicAprobado: false,
      };
      const [rows, total] = await Promise.all([
        prisma.plantillaEjercicio.findMany({
          where,
          orderBy: { updatedAt: "desc" },
          take: limitNum,
          skip: offsetNum,
        }),
        prisma.plantillaEjercicio.count({ where }),
      ]);
      const ownerIds = Array.from(new Set(rows.map((r) => r.ownerUserId)));
      const owners = ownerIds.length
        ? await prisma.usuario.findMany({
            where: { id: { in: ownerIds } },
            select: { id: true, fullName: true },
          })
        : [];
      const ownerMap = new Map(owners.map((o) => [o.id, o.fullName]));
      res.json({
        items: rows.map((r) =>
          toListItem(r as PlantillaRow, ownerMap.get(r.ownerUserId)),
        ),
        total,
      });
    } catch (err) {
      res
        .status(500)
        .json({ error: err instanceof Error ? err.message : "internal server error" });
    }
  },
);

// POST /api/admin/plantillas/:id/aprobar — solo ADMIN.
plantillas.post(
  "/api/admin/plantillas/:id/aprobar",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      if (!hasRole(user, "ADMIN")) {
        res.status(403).json({ error: "Solo ADMIN" });
        return;
      }
      const id = String(req.params.id);
      const row = await prisma.plantillaEjercicio.findUnique({ where: { id } });
      if (!row || row.isDeleted) {
        res.status(404).json({ error: "Plantilla no encontrada" });
        return;
      }
      if (row.visibility !== "publica") {
        res.status(400).json({
          error: "solo se pueden aprobar plantillas públicas",
        });
        return;
      }
      if (row.publicAprobado) {
        res.status(400).json({ error: "ya está aprobada" });
        return;
      }
      const updated = await prisma.plantillaEjercicio.update({
        where: { id },
        data: {
          publicAprobado: true,
          updatedAt: new Date().toISOString(),
        },
      });
      res.json(toDetail(updated as PlantillaRow));
    } catch (err) {
      res
        .status(500)
        .json({ error: err instanceof Error ? err.message : "internal server error" });
    }
  },
);

// POST /api/admin/plantillas/:id/rechazar — solo ADMIN.
// Decisión: baja a visibility="escuela" (no "privada") para que la plantilla
// siga siendo accesible al creador y a su escuela, pero deje de ser pública.
plantillas.post(
  "/api/admin/plantillas/:id/rechazar",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      if (!hasRole(user, "ADMIN")) {
        res.status(403).json({ error: "Solo ADMIN" });
        return;
      }
      const id = String(req.params.id);
      const row = await prisma.plantillaEjercicio.findUnique({ where: { id } });
      if (!row || row.isDeleted) {
        res.status(404).json({ error: "Plantilla no encontrada" });
        return;
      }
      if (row.visibility !== "publica") {
        res.status(400).json({
          error: "solo se pueden rechazar plantillas públicas",
        });
        return;
      }
      const updated = await prisma.plantillaEjercicio.update({
        where: { id },
        data: {
          visibility: "escuela",
          publicAprobado: false,
          updatedAt: new Date().toISOString(),
        },
      });
      res.json(toDetail(updated as PlantillaRow));
    } catch (err) {
      res
        .status(500)
        .json({ error: err instanceof Error ? err.message : "internal server error" });
    }
  },
);

// GET /api/plantillas/:id/versions
plantillas.get("/api/plantillas/:id/versions", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.plantillaEjercicio.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Plantilla no encontrada" });
      return;
    }
    if (!canRead(row as PlantillaRow, user)) {
      res.status(403).json({ error: "Sin permisos para ver esta plantilla" });
      return;
    }
    const versions = await prisma.plantillaEjercicioVersion.findMany({
      where: { plantillaId: id },
      orderBy: { version: "desc" },
    });
    res.json(
      versions.map((v) => ({
        id: v.id,
        version: v.version,
        changelog: v.changelog ?? undefined,
        codigoDsl: v.codigoDsl,
        createdAt: v.createdAt,
        createdBy: v.createdBy,
      })),
    );
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});
