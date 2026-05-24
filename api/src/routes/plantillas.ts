import { randomUUID } from "crypto";
import { Router } from "express";
import { isStaffRole } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import {
  PlantillaCreateSchema,
  PlantillaForkSchema,
  PlantillaUpdateSchema,
  type Visibility,
} from "../lib/vblang-types";
import { validateDslSyntax } from "../lib/vblang-validation";

export const plantillas = Router();

type AuthUser = { _id?: string; role?: string; schoolId?: string | null };

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
  if (user.role === "ADMIN") return true;
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

// GET /api/plantillas
plantillas.get("/api/plantillas", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user.role)) {
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
    if (!isStaffRole(user.role)) {
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
      data.visibility === "publica" && user.role === "ADMIN" ? true : false;
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
    if (!isOwner && user.role !== "ADMIN") {
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
      if (data.visibility === "publica" && user.role !== "ADMIN") {
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
    if (!isOwner && user.role !== "ADMIN") {
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

// POST /api/plantillas/:id/fork
plantillas.post("/api/plantillas/:id/fork", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user.role)) {
      res.status(403).json({ error: "Solo creadores de contenido pueden hacer fork" });
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
    const parsed = PlantillaForkSchema.safeParse(req.body ?? {});
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const nombre = parsed.data.nombre ?? `Copia de ${original.nombre}`;
    const visibility = parsed.data.visibility ?? "privada";
    const newId = randomUUID();
    const now = new Date().toISOString();
    const userId = user._id ?? "";

    const fork = await prisma.$transaction(async (tx) => {
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
          changelog: `Fork de ${original.id}`,
          createdAt: now,
          createdBy: userId,
        },
      });
      return row;
    });
    res.status(201).json(toDetail(fork as PlantillaRow));
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// ─── Sprint 10A — Aprobación admin de plantillas públicas ─────────────────

// GET /api/admin/plantillas/pendientes — solo ADMIN.
plantillas.get(
  "/api/admin/plantillas/pendientes",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      if (user.role !== "ADMIN") {
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
      if (user.role !== "ADMIN") {
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
      if (user.role !== "ADMIN") {
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
