import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireAdmin } from "../lib/admin-auth";
import { requireUser } from "../lib/user-auth";

export const adminRouter = Router();

adminRouter.get("/api/admin/usuarios", requireAdmin, async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit ?? 50), 200);
    const offset = Number(req.query.offset ?? 0);
    const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const roleFilter = typeof req.query.role === "string" ? req.query.role.trim() : "";

    const where: Record<string, unknown> = { isDeleted: false };
    if (roleFilter) where.role = roleFilter;
    if (q) {
      where.OR = [
        { username: { contains: q, mode: "insensitive" } },
        { fullName: { contains: q, mode: "insensitive" } },
        { email: { contains: q, mode: "insensitive" } }
      ];
    }

    const items = await prisma.usuario.findMany({
      where: where as Parameters<typeof prisma.usuario.findMany>[0]["where"],
      skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
      take: Number.isNaN(limit) || limit <= 0 ? 50 : limit,
      orderBy: { createdAt: "desc" },
      select: { id: true, fullName: true, username: true, email: true, role: true, createdAt: true, isBanned: true, warningCount: true }
    });
    const usuarios = items.map((item) => ({
      id: item.id,
      nombre: item.fullName ?? item.username ?? "Sin nombre",
      username: item.username ?? "",
      email: item.email ?? "",
      rol: item.role ?? "USER",
      estado: "Activo",
      isBanned: item.isBanned === true,
      warningCount: typeof item.warningCount === "number" ? item.warningCount : 0,
      createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : ""
    }));
    res.json(usuarios);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/usuarios/:id/modulos-completados", requireAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    const progresoItems = await prisma.progresoModulo.findMany({
      where: { usuarioId: userId, status: "completado" },
      select: { moduloId: true }
    });
    const moduloIds = progresoItems.map((p) => p.moduloId).filter(Boolean);
    if (!moduloIds.length) {
      return res.json({ publicos: 0, privados: 0, total: 0 });
    }
    const modulos = await prisma.modulo.findMany({
      where: { id: { in: moduloIds } },
      select: { id: true, visibility: true }
    });
    const visibilityMap = new Map<string, string>();
    for (const m of modulos) {
      if (m.id) visibilityMap.set(m.id, m.visibility ?? "privado");
    }
    let publicos = 0;
    let privados = 0;
    for (const id of moduloIds) {
      const vis = visibilityMap.get(id) ?? "privado";
      if (vis === "publico") publicos++;
      else privados++;
    }
    res.json({ publicos, privados, total: moduloIds.length });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.patch("/api/admin/usuarios/:id/rol", requireAdmin, async (req, res) => {
  try {
    const { role } = req.body ?? {};
    const allowedRoles = ["ADMIN", "USER", "TEACHER", "PARENT", "DIRECTIVO", "GUEST"];
    if (!role || !allowedRoles.includes(role)) {
      return res.status(400).json({ error: "role inválido" });
    }
    const actor = res.locals.adminUser as { id?: unknown; createdBy?: unknown } | undefined;
    const actorId = actor?.id ? String(actor.id) : null;
    const actorDoc = actorId
      ? await prisma.usuario.findFirst({ where: { id: actorId } })
      : null;
    const isBootstrap = actorDoc && (actorDoc as Record<string, unknown>).createdBy === undefined;
    if (!isBootstrap) {
      return res.status(403).json({
        error: "Solo el administrador principal puede promover directamente. Usa gobernanza.",
        requiresGovernance: true
      });
    }
    const targetId = String(req.params.id);
    if (!targetId) return res.status(400).json({ error: "invalid id" });
    const target = await prisma.usuario.findFirst({ where: { id: targetId, isDeleted: false } });
    if (!target) return res.status(404).json({ error: "usuario no encontrado" });
    await prisma.usuario.updateMany({
      where: { id: targetId },
      data: { role, updatedAt: new Date().toISOString() }
    });
    await prisma.moderacionEvento.create({
      data: {
        id: `me-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        tipo: "role_change",
        usuarioId: targetId,
        motivo: `Rol cambiado a ${role}`,
        createdAt: new Date().toISOString()
      }
    });
    res.json({ ok: true, role });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/stats", requireAdmin, async (_req, res) => {
  try {
    const since30d = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const [totalUsuarios, escuelasActivas, modulosPublicos, eventosModeracion] = await Promise.all([
      prisma.usuario.count({ where: { isDeleted: false } }),
      prisma.escuela.count({ where: { isDeleted: false } }),
      prisma.modulo.count({ where: { visibility: "publico", isDeleted: false } }),
      prisma.moderacionEvento.count({ where: { createdAt: { gte: since30d } } })
    ]);
    res.json({ totalUsuarios, escuelasActivas, modulosPublicos, eventosModeracion });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/reportes-global", requireAdmin, async (req, res) => {
  try {
    const dias = Number(req.query.dias ?? 30);
    const desde = new Date(Date.now() - dias * 24 * 60 * 60 * 1000).toISOString();

    const [usuariosRecientes, usuariosTotalesArr, eventosRecientes, topModulos] = await Promise.all([
      prisma.usuario.findMany({
        where: { isDeleted: false, createdAt: { gte: desde } },
        select: { createdAt: true, role: true }
      }),
      prisma.usuario.findMany({
        where: { isDeleted: false },
        select: { id: true }
      }),
      prisma.moderacionEvento.findMany({
        where: { createdAt: { gte: desde } },
        orderBy: { createdAt: "desc" },
        take: 20,
        select: { tipo: true, motivo: true, createdAt: true }
      }),
      prisma.progresoModulo.findMany({
        where: { status: "completado" },
        select: { moduloId: true }
      })
    ]);

    const usuariosTotales = usuariosTotalesArr.length;
    const totalActivos = usuariosTotales; // no isActive field in Prisma schema

    const countByModulo = new Map<string, number>();
    for (const p of topModulos) {
      const key = p.moduloId;
      if (key) countByModulo.set(key, (countByModulo.get(key) ?? 0) + 1);
    }
    const topModuloIds = [...countByModulo.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id]) => id);
    const modulosDocs = topModuloIds.length > 0
      ? await prisma.modulo.findMany({
          where: { id: { in: topModuloIds } },
          select: { id: true, titulo: true, visibility: true }
        })
      : [];
    const moduloNombres = new Map(modulosDocs.map((m) => [m.id, m.titulo ?? "Sin título"]));
    const topModulosResult = topModuloIds.map((id) => ({
      moduloId: id,
      titulo: moduloNombres.get(id) ?? "Sin título",
      completados: countByModulo.get(id) ?? 0
    }));

    res.json({
      registro: {
        periodo: dias,
        total: usuariosRecientes.length,
        porRol: usuariosRecientes.reduce((acc: Record<string, number>, u) => {
          const r = u.role ?? "USER";
          acc[r] = (acc[r] ?? 0) + 1;
          return acc;
        }, {})
      },
      usuarios: { total: usuariosTotales, activos: totalActivos, inactivos: 0 },
      topModulos: topModulosResult,
      eventosModeracion: eventosRecientes.map((e) => ({
        tipo: e.tipo,
        motivo: e.motivo ?? "",
        createdAt: e.createdAt ? new Date(e.createdAt).toISOString() : ""
      }))
    });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/cursos", requireAdmin, async (_req, res) => {
  // "cursos" collection has no Prisma model — returning empty list
  res.json([]);
});

adminRouter.get("/api/materias", requireUser, async (_req, res) => {
  try {
    const rows = await prisma.materia.findMany();
    const items = rows
      .map((r) => {
        try { return JSON.parse(r.json); } catch { return null; }
      })
      .filter(Boolean)
      .filter((m: Record<string, unknown>) => m.isDeleted !== true)
      .sort((a: Record<string, unknown>, b: Record<string, unknown>) =>
        String(a.nombre ?? "").localeCompare(String(b.nombre ?? ""))
      );
    return res.json({ items });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error"
    });
  }
});

adminRouter.get("/api/admin/materias", requireAdmin, async (_req, res) => {
  try {
    const rows = await prisma.materia.findMany();
    const materias = rows
      .map((r) => {
        try {
          const item = JSON.parse(r.json) as Record<string, unknown>;
          return {
            id: r.id,
            nombre: (item.nombre ?? item.name ?? "Sin nombre") as string,
            descripcion: (item.descripcion ?? item.description ?? "") as string,
            nivel: (item.nivel ?? item.level ?? "") as string,
            activa: item.activa !== false
          };
        } catch { return null; }
      })
      .filter(Boolean)
      .sort((a, b) => String(a!.nombre).localeCompare(String(b!.nombre)));
    res.json(materias);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.post("/api/admin/materias", requireAdmin, async (req, res) => {
  try {
    const { nombre, descripcion, nivel } = req.body ?? {};
    if (!nombre || typeof nombre !== "string" || !nombre.trim()) {
      res.status(400).json({ error: "nombre is required" });
      return;
    }
    const now = new Date().toISOString();
    const doc = {
      nombre: nombre.trim(),
      descripcion: typeof descripcion === "string" ? descripcion.trim() : "",
      nivel: typeof nivel === "string" ? nivel.trim() : "",
      activa: true,
      createdAt: now,
      updatedAt: now
    };
    const result = await prisma.materia.create({ data: { json: JSON.stringify(doc) } });
    res.status(201).json({ id: result.id, ...doc });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.patch("/api/admin/materias/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, nivel, activa } = req.body ?? {};
    if (!id) {
      res.status(400).json({ error: "invalid id" });
      return;
    }
    const existing = await prisma.materia.findFirst({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "not found" });
      return;
    }
    let doc: Record<string, unknown> = {};
    try { doc = JSON.parse(existing.json); } catch { /* ignore */ }
    if (typeof nombre === "string" && nombre.trim()) doc.nombre = nombre.trim();
    if (typeof descripcion === "string") doc.descripcion = descripcion.trim();
    if (typeof nivel === "string") doc.nivel = nivel.trim();
    if (typeof activa === "boolean") doc.activa = activa;
    doc.updatedAt = new Date().toISOString();
    await prisma.materia.updateMany({ where: { id }, data: { json: JSON.stringify(doc) } });
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});
