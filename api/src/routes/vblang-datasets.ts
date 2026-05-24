import { randomUUID } from "crypto";
import { Router } from "express";
import { isStaffRole } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import {
  DatasetCreateSchema,
  DatasetFilaUpdateSchema,
  DatasetFilasBulkSchema,
  DatasetUpdateSchema,
  type Visibility,
} from "../lib/vblang-types";
import { validateDatasetFilas } from "../lib/vblang-validation";

export const vblangDatasets = Router();

type AuthUser = { _id?: string; role?: string; schoolId?: string | null };

type DatasetRow = {
  id: string;
  ownerUserId: string;
  schoolId: string | null;
  visibility: string;
  nombre: string;
  descripcion: string | null;
  columnas: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

type ColumnasMap = Record<string, "string" | "number" | "boolean">;

function parseColumnas(raw: string): ColumnasMap {
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") return parsed as ColumnasMap;
  } catch {
    // fallthrough
  }
  return {};
}

function parseDatos(raw: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") return parsed as Record<string, unknown>;
  } catch {
    // fallthrough
  }
  return {};
}

function canReadDataset(row: DatasetRow, user: AuthUser): boolean {
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
  if (row.visibility === "publica") return true;
  return false;
}

// GET /api/vblang/datasets
vblangDatasets.get("/api/vblang/datasets", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user.role)) {
      res.json({ items: [], total: 0 });
      return;
    }
    const {
      q,
      visibility = "todas",
      owner = "todas",
      limit = "50",
      offset = "0",
    } = req.query as Record<string, string | undefined>;
    const limitNum = Math.min(parseInt(limit ?? "50", 10) || 50, 200);
    const offsetNum = Math.max(parseInt(offset ?? "0", 10) || 0, 0);
    const userId = user._id ?? "";
    const userSchoolId = user.schoolId ?? null;

    const visibilityBranches: Array<Record<string, unknown>> = [];
    if (owner !== "otros") visibilityBranches.push({ ownerUserId: userId });
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
      prisma.vblangDataset.findMany({
        where,
        orderBy: { updatedAt: "desc" },
        take: limitNum,
        skip: offsetNum,
        include: { _count: { select: { filas: true } } },
      }),
      prisma.vblangDataset.count({ where }),
    ]);

    res.json({
      items: rows.map((r) => ({
        id: r.id,
        nombre: r.nombre,
        descripcion: r.descripcion ?? undefined,
        visibility: r.visibility as Visibility,
        ownerUserId: r.ownerUserId,
        schoolId: r.schoolId ?? undefined,
        columnas: parseColumnas(r.columnas),
        filasCount: (r as unknown as { _count?: { filas: number } })._count?.filas ?? 0,
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
      })),
      total,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// GET /api/vblang/datasets/:id
vblangDatasets.get("/api/vblang/datasets/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.vblangDataset.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Dataset no encontrado" });
      return;
    }
    if (!canReadDataset(row as DatasetRow, user)) {
      res.status(403).json({ error: "Sin permisos para ver este dataset" });
      return;
    }
    const filas = await prisma.vblangDatasetFila.findMany({
      where: { datasetId: id },
      orderBy: { orden: "asc" },
    });
    res.json({
      id: row.id,
      nombre: row.nombre,
      descripcion: row.descripcion ?? undefined,
      visibility: row.visibility as Visibility,
      ownerUserId: row.ownerUserId,
      schoolId: row.schoolId ?? undefined,
      columnas: parseColumnas(row.columnas),
      // Sprint 9B: incluimos el id de cada fila para que el editor pueda
      // direccionar PUT/DELETE por filaId. Mantenemos `datos` como Record
      // para compatibilidad con el preview del DSL (uno_de(dataset)).
      filas: filas.map((f) => ({ id: f.id, datos: parseDatos(f.datos) })),
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// POST /api/vblang/datasets
vblangDatasets.post("/api/vblang/datasets", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user.role)) {
      res.status(403).json({ error: "Solo creadores de contenido pueden crear datasets" });
      return;
    }
    const parsed = DatasetCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const data = parsed.data;
    if (data.filas && data.filas.length > 0) {
      const r = validateDatasetFilas(data.columnas, data.filas);
      if (!r.ok) {
        res.status(400).json({
          error: "Filas inválidas",
          filaIndex: r.filaIndex,
          message: r.message,
        });
        return;
      }
    }

    const userId = user._id ?? "";
    // Check unique constraint manually to give a clearer error.
    const existing = await prisma.vblangDataset.findFirst({
      where: { ownerUserId: userId, nombre: data.nombre, isDeleted: false },
    });
    if (existing) {
      res.status(400).json({ error: "Ya existe un dataset con ese nombre" });
      return;
    }

    const id = randomUUID();
    const now = new Date().toISOString();

    await prisma.$transaction(async (tx) => {
      await tx.vblangDataset.create({
        data: {
          id,
          ownerUserId: userId,
          schoolId: user.schoolId ?? null,
          visibility: data.visibility,
          nombre: data.nombre,
          descripcion: data.descripcion ?? null,
          columnas: JSON.stringify(data.columnas),
          isDeleted: false,
          createdAt: now,
          updatedAt: now,
        },
      });
      if (data.filas && data.filas.length > 0) {
        await tx.vblangDatasetFila.createMany({
          data: data.filas.map((datos, i) => ({
            id: randomUUID(),
            datasetId: id,
            orden: i,
            datos: JSON.stringify(datos),
            createdAt: now,
          })),
        });
      }
    });

    const created = await prisma.vblangDataset.findUnique({ where: { id } });
    const filas = await prisma.vblangDatasetFila.findMany({
      where: { datasetId: id },
      orderBy: { orden: "asc" },
    });
    res.status(201).json({
      id: created!.id,
      nombre: created!.nombre,
      descripcion: created!.descripcion ?? undefined,
      visibility: created!.visibility as Visibility,
      ownerUserId: created!.ownerUserId,
      schoolId: created!.schoolId ?? undefined,
      columnas: parseColumnas(created!.columnas),
      filas: filas.map((f) => ({ id: f.id, datos: parseDatos(f.datos) })),
      createdAt: created!.createdAt,
      updatedAt: created!.updatedAt,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// PUT /api/vblang/datasets/:id
vblangDatasets.put("/api/vblang/datasets/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.vblangDataset.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Dataset no encontrado" });
      return;
    }
    if (row.ownerUserId !== user._id && user.role !== "ADMIN") {
      res.status(403).json({ error: "Solo el owner o ADMIN puede modificar" });
      return;
    }
    const parsed = DatasetUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const data = parsed.data;
    const update: Record<string, unknown> = {
      updatedAt: new Date().toISOString(),
    };
    if (data.nombre !== undefined) update.nombre = data.nombre;
    if (data.descripcion !== undefined) update.descripcion = data.descripcion;
    if (data.visibility !== undefined) update.visibility = data.visibility;
    if (data.columnas !== undefined) update.columnas = JSON.stringify(data.columnas);
    const updated = await prisma.vblangDataset.update({
      where: { id },
      data: update,
    });
    res.json({
      id: updated.id,
      nombre: updated.nombre,
      descripcion: updated.descripcion ?? undefined,
      visibility: updated.visibility as Visibility,
      ownerUserId: updated.ownerUserId,
      schoolId: updated.schoolId ?? undefined,
      columnas: parseColumnas(updated.columnas),
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// POST /api/vblang/datasets/:id/filas
vblangDatasets.post(
  "/api/vblang/datasets/:id/filas",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      const id = String(req.params.id);
      const row = await prisma.vblangDataset.findUnique({ where: { id } });
      if (!row || row.isDeleted) {
        res.status(404).json({ error: "Dataset no encontrado" });
        return;
      }
      if (row.ownerUserId !== user._id && user.role !== "ADMIN") {
        res.status(403).json({ error: "Solo el owner o ADMIN puede agregar filas" });
        return;
      }
      const parsed = DatasetFilasBulkSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
        return;
      }
      const columnas = parseColumnas(row.columnas);
      const validation = validateDatasetFilas(columnas, parsed.data.filas);
      if (!validation.ok) {
        res.status(400).json({
          error: "Filas inválidas",
          filaIndex: validation.filaIndex,
          message: validation.message,
        });
        return;
      }
      const max = await prisma.vblangDatasetFila.aggregate({
        where: { datasetId: id },
        _max: { orden: true },
      });
      const startOrden = (max._max.orden ?? -1) + 1;
      const now = new Date().toISOString();
      await prisma.vblangDatasetFila.createMany({
        data: parsed.data.filas.map((datos, i) => ({
          id: randomUUID(),
          datasetId: id,
          orden: startOrden + i,
          datos: JSON.stringify(datos),
          createdAt: now,
        })),
      });
      await prisma.vblangDataset.update({
        where: { id },
        data: { updatedAt: now },
      });
      res.status(201).json({ ok: true, added: parsed.data.filas.length });
    } catch (err) {
      res
        .status(500)
        .json({ error: err instanceof Error ? err.message : "internal server error" });
    }
  },
);

// PUT /api/vblang/datasets/:id/filas/:filaId
vblangDatasets.put(
  "/api/vblang/datasets/:id/filas/:filaId",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      const id = String(req.params.id);
      const filaId = String(req.params.filaId);
      const row = await prisma.vblangDataset.findUnique({ where: { id } });
      if (!row || row.isDeleted) {
        res.status(404).json({ error: "Dataset no encontrado" });
        return;
      }
      if (row.ownerUserId !== user._id && user.role !== "ADMIN") {
        res.status(403).json({ error: "Solo el owner o ADMIN puede modificar filas" });
        return;
      }
      const fila = await prisma.vblangDatasetFila.findUnique({
        where: { id: filaId },
      });
      if (!fila || fila.datasetId !== id) {
        res.status(404).json({ error: "Fila no encontrada" });
        return;
      }
      const parsed = DatasetFilaUpdateSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
        return;
      }
      const columnas = parseColumnas(row.columnas);
      const validation = validateDatasetFilas(columnas, [parsed.data.datos]);
      if (!validation.ok) {
        res.status(400).json({ error: "Fila inválida", message: validation.message });
        return;
      }
      const updated = await prisma.vblangDatasetFila.update({
        where: { id: filaId },
        data: { datos: JSON.stringify(parsed.data.datos) },
      });
      await prisma.vblangDataset.update({
        where: { id },
        data: { updatedAt: new Date().toISOString() },
      });
      res.json({
        id: updated.id,
        orden: updated.orden,
        datos: parseDatos(updated.datos),
      });
    } catch (err) {
      res
        .status(500)
        .json({ error: err instanceof Error ? err.message : "internal server error" });
    }
  },
);

// DELETE /api/vblang/datasets/:id/filas/:filaId
vblangDatasets.delete(
  "/api/vblang/datasets/:id/filas/:filaId",
  requireUser,
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      const id = String(req.params.id);
      const filaId = String(req.params.filaId);
      const row = await prisma.vblangDataset.findUnique({ where: { id } });
      if (!row || row.isDeleted) {
        res.status(404).json({ error: "Dataset no encontrado" });
        return;
      }
      if (row.ownerUserId !== user._id && user.role !== "ADMIN") {
        res.status(403).json({ error: "Solo el owner o ADMIN puede eliminar filas" });
        return;
      }
      const fila = await prisma.vblangDatasetFila.findUnique({
        where: { id: filaId },
      });
      if (!fila || fila.datasetId !== id) {
        res.status(404).json({ error: "Fila no encontrada" });
        return;
      }
      await prisma.vblangDatasetFila.delete({ where: { id: filaId } });
      await prisma.vblangDataset.update({
        where: { id },
        data: { updatedAt: new Date().toISOString() },
      });
      res.json({ ok: true });
    } catch (err) {
      res
        .status(500)
        .json({ error: err instanceof Error ? err.message : "internal server error" });
    }
  },
);

// DELETE /api/vblang/datasets/:id
vblangDatasets.delete("/api/vblang/datasets/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = await prisma.vblangDataset.findUnique({ where: { id } });
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Dataset no encontrado" });
      return;
    }
    if (row.ownerUserId !== user._id && user.role !== "ADMIN") {
      res.status(403).json({ error: "Solo el owner o ADMIN puede eliminar" });
      return;
    }
    await prisma.vblangDataset.update({
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
