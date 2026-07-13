/**
 * PLAN-E §19 (F2) — banco de fórmulas.
 *
 * CRUD mínimo espejo de vblang-datasets pero sin filas ni versiones: una
 * fórmula es nombre + LaTeX + materia. Scoping igual que datasets
 * (mías + escuela + públicas); las globales se siembran con owner "system"
 * y visibility "publica" (seed_demo.ts).
 */
import { randomUUID } from "crypto";
import { Router } from "express";
import { z } from "zod";
import { isStaffRole } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { VISIBILITY, type Visibility } from "../lib/vblang-types";

export const formulas = Router();

type AuthUser = {
  _id?: string;
  role?: string;
  roles?: string[];
  schoolId?: string | null;
};

const FormulaCreateSchema = z.object({
  nombre: z.string().min(1).max(200),
  materia: z.string().max(100).optional(),
  latex: z.string().min(1).max(5000),
  descripcion: z.string().max(500).optional(),
  visibility: z.enum(VISIBILITY),
});

const FormulaUpdateSchema = FormulaCreateSchema.partial();

type FormulaRow = {
  id: string;
  ownerUserId: string;
  schoolId: string | null;
  visibility: string;
  nombre: string;
  materia: string | null;
  latex: string;
  descripcion: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

function toJson(row: FormulaRow) {
  return {
    id: row.id,
    nombre: row.nombre,
    materia: row.materia ?? undefined,
    latex: row.latex,
    descripcion: row.descripcion ?? undefined,
    visibility: row.visibility as Visibility,
    ownerUserId: row.ownerUserId,
    schoolId: row.schoolId ?? undefined,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

// GET /api/formulas?q=&materia=
formulas.get("/api/formulas", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user)) {
      res.json({ items: [], total: 0 });
      return;
    }
    const { q, materia, limit = "100", offset = "0" } = req.query as Record<
      string,
      string | undefined
    >;
    const limitNum = Math.min(parseInt(limit ?? "100", 10) || 100, 500);
    const offsetNum = Math.max(parseInt(offset ?? "0", 10) || 0, 0);
    const userId = user._id ?? "";
    const userSchoolId = user.schoolId ?? null;

    const orBranches: Array<Record<string, unknown>> = [
      { ownerUserId: userId },
      { visibility: "publica" },
    ];
    if (userSchoolId) {
      orBranches.push({ visibility: "escuela", schoolId: userSchoolId });
    }
    const where: Record<string, unknown> = {
      isDeleted: false,
      OR: orBranches,
    };
    const and: Array<Record<string, unknown>> = [];
    if (materia) and.push({ materia });
    if (q) {
      and.push({
        OR: [
          { nombre: { contains: q, mode: "insensitive" as const } },
          { descripcion: { contains: q, mode: "insensitive" as const } },
        ],
      });
    }
    if (and.length > 0) where.AND = and;

    const [rows, total] = await Promise.all([
      prisma.formula.findMany({
        where,
        orderBy: { nombre: "asc" },
        take: limitNum,
        skip: offsetNum,
      }),
      prisma.formula.count({ where }),
    ]);
    res.json({ items: (rows as FormulaRow[]).map(toJson), total });
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// POST /api/formulas
formulas.post("/api/formulas", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    if (!isStaffRole(user)) {
      res.status(403).json({ error: "Solo creadores de contenido pueden crear fórmulas" });
      return;
    }
    const parsed = FormulaCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const data = parsed.data;
    // "publica" global la administra el ADMIN; el docente comparte hasta escuela.
    if (data.visibility === "publica" && !hasRole(user, "ADMIN")) {
      res.status(403).json({ error: "Solo ADMIN puede crear fórmulas públicas" });
      return;
    }
    const now = new Date().toISOString();
    const created = await prisma.formula.create({
      data: {
        id: randomUUID(),
        ownerUserId: user._id ?? "",
        schoolId: user.schoolId ?? null,
        visibility: data.visibility,
        nombre: data.nombre,
        materia: data.materia ?? null,
        latex: data.latex,
        descripcion: data.descripcion ?? null,
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
    });
    res.status(201).json(toJson(created as FormulaRow));
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// PUT /api/formulas/:id
formulas.put("/api/formulas/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = (await prisma.formula.findUnique({ where: { id } })) as
      | FormulaRow
      | null;
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Fórmula no encontrada" });
      return;
    }
    if (row.ownerUserId !== user._id && !hasRole(user, "ADMIN")) {
      res.status(403).json({ error: "Solo el owner o ADMIN puede modificar" });
      return;
    }
    const parsed = FormulaUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", issues: parsed.error.issues });
      return;
    }
    const data = parsed.data;
    if (
      data.visibility === "publica" &&
      row.visibility !== "publica" &&
      !hasRole(user, "ADMIN")
    ) {
      res.status(403).json({ error: "Solo ADMIN puede publicar fórmulas globales" });
      return;
    }
    const update: Record<string, unknown> = { updatedAt: new Date().toISOString() };
    if (data.nombre !== undefined) update.nombre = data.nombre;
    if (data.materia !== undefined) update.materia = data.materia;
    if (data.latex !== undefined) update.latex = data.latex;
    if (data.descripcion !== undefined) update.descripcion = data.descripcion;
    if (data.visibility !== undefined) update.visibility = data.visibility;
    const updated = await prisma.formula.update({ where: { id }, data: update });
    res.json(toJson(updated as FormulaRow));
  } catch (err) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// DELETE /api/formulas/:id
formulas.delete("/api/formulas/:id", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const id = String(req.params.id);
    const row = (await prisma.formula.findUnique({ where: { id } })) as
      | FormulaRow
      | null;
    if (!row || row.isDeleted) {
      res.status(404).json({ error: "Fórmula no encontrada" });
      return;
    }
    if (row.ownerUserId !== user._id && !hasRole(user, "ADMIN")) {
      res.status(403).json({ error: "Solo el owner o ADMIN puede eliminar" });
      return;
    }
    await prisma.formula.update({
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
