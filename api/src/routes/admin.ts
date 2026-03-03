import { Router } from "express";
import { getDb } from "../lib/db";
import { requireAdmin } from "../lib/admin-auth";

export const adminRouter = Router();

adminRouter.get("/api/admin/usuarios", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const limit = Math.min(Number(req.query.limit ?? 50), 200);
    const offset = Number(req.query.offset ?? 0);
    const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const roleFilter = typeof req.query.role === "string" ? req.query.role.trim() : "";

    const filter: Record<string, unknown> = { isDeleted: { $ne: true } };
    if (roleFilter) filter.role = roleFilter;
    if (q) {
      filter.$or = [
        { username: { $regex: q, $options: "i" } },
        { fullName: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } }
      ];
    }

    const items = await db
      .collection("usuarios")
      .find(filter)
      .project({ _id: 1, fullName: 1, username: 1, email: 1, role: 1, isActive: 1, createdAt: 1, isBanned: 1, warningCount: 1, createdBy: 1 })
      .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
      .limit(Number.isNaN(limit) || limit <= 0 ? 50 : limit)
      .sort({ createdAt: -1 })
      .toArray();
    const usuarios = items.map((item) => ({
      id: item._id?.toString?.() ?? "",
      nombre: (item.fullName ?? item.username ?? "Sin nombre") as string,
      username: (item.username ?? "") as string,
      email: (item.email ?? "") as string,
      rol: (item.role ?? "USER") as string,
      estado: item.isActive === false ? "Inactivo" : "Activo",
      isBanned: item.isBanned === true,
      warningCount: typeof item.warningCount === "number" ? item.warningCount : 0,
      createdAt: item.createdAt ? new Date(item.createdAt as string).toISOString() : ""
    }));
    res.json(usuarios);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/usuarios/:id/modulos-completados", requireAdmin, async (req, res) => {
  try {
    const { toObjectId } = await import("../lib/ids");
    const userId = req.params.id;
    const db = await getDb();
    const progresoItems = await db
      .collection("progreso_modulos")
      .find({ usuarioId: userId, status: "completado" })
      .project({ moduloId: 1 })
      .toArray();
    const moduloIds = progresoItems.map((p) => p.moduloId as string).filter(Boolean);
    if (!moduloIds.length) {
      return res.json({ publicos: 0, privados: 0, total: 0 });
    }
    const modulos = await db
      .collection("modulos")
      .find({ $or: [
        { id: { $in: moduloIds } },
        { _id: { $in: moduloIds.map((id) => toObjectId(id)).filter(Boolean) } }
      ]})
      .project({ id: 1, _id: 1, visibility: 1 })
      .toArray();
    const visibilityMap = new Map<string, string>();
    for (const m of modulos) {
      const key = (m.id ?? m._id?.toString?.()) as string;
      if (key) visibilityMap.set(key, (m.visibility ?? "privado") as string);
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
    const db = await getDb();
    const actor = res.locals.adminUser as { _id?: unknown; createdBy?: unknown } | undefined;
    const actorDoc = actor?._id
      ? await db.collection("usuarios").findOne({ _id: actor._id })
      : null;
    const isBootstrap = actorDoc && (actorDoc.createdBy === null || actorDoc.createdBy === undefined);
    if (!isBootstrap) {
      return res.status(403).json({
        error: "Solo el administrador principal puede promover directamente. Usa gobernanza.",
        requiresGovernance: true
      });
    }
    const { toObjectId } = await import("../lib/ids");
    const objectId = toObjectId(String(req.params.id));
    if (!objectId) return res.status(400).json({ error: "invalid id" });
    const target = await db.collection("usuarios").findOne({ _id: objectId, isDeleted: { $ne: true } });
    if (!target) return res.status(404).json({ error: "usuario no encontrado" });
    await db.collection("usuarios").updateOne(
      { _id: objectId },
      { $set: { role, updatedAt: new Date().toISOString() } }
    );
    await db.collection("moderacion_eventos").insertOne({
      usuarioId: objectId,
      tipo: "role_change",
      motivo: `Rol cambiado a ${role}`,
      actorId: actor?._id,
      metadata: { prevRole: target.role, newRole: role, timestamp: new Date() },
      createdAt: new Date()
    });
    res.json({ ok: true, role });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/stats", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const usuariosArr = await db.collection("usuarios").find({ isDeleted: { $ne: true } }).toArray();
    const escuelasArr = await db.collection("escuelas").find({ isDeleted: { $ne: true } }).toArray();
    const modulosArr = await db.collection("modulos").find({ visibility: "publico", isDeleted: { $ne: true } }).toArray();
    const eventosArr = await db.collection("moderacion_eventos").find({
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    }).toArray();
    res.json({
      totalUsuarios: usuariosArr.length,
      escuelasActivas: escuelasArr.length,
      modulosPublicos: modulosArr.length,
      eventosModeracion: eventosArr.length
    });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/reportes-global", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const dias = Number(req.query.dias ?? 30);
    const desde = new Date(Date.now() - dias * 24 * 60 * 60 * 1000);

    const usuariosRecientes = await db.collection("usuarios").find({
      isDeleted: { $ne: true },
      createdAt: { $gte: desde }
    }).project({ createdAt: 1, role: 1 }).toArray();
    const todosUsuarios = await db.collection("usuarios").find({ isDeleted: { $ne: true } }).toArray();
    const usuariosActivos = await db.collection("usuarios").find({ isDeleted: { $ne: true }, isActive: { $ne: false } }).toArray();
    const usuariosTotales = todosUsuarios.length;
    const totalActivos = usuariosActivos.length;
    const eventosRecientes = await db.collection("moderacion_eventos").find({
      createdAt: { $gte: desde }
    }).sort({ createdAt: -1 }).limit(20).toArray();
    const topModulos = await db.collection("progreso_modulos").find({ status: "completado" })
      .project({ moduloId: 1 }).toArray();

    const countByModulo = new Map<string, number>();
    for (const p of topModulos) {
      const key = p.moduloId as string;
      if (key) countByModulo.set(key, (countByModulo.get(key) ?? 0) + 1);
    }
    const topModuloIds = [...countByModulo.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id]) => id);
    const modulosDocs = topModuloIds.length > 0
      ? await db.collection("modulos").find({ $or: [
          { id: { $in: topModuloIds } },
          { _id: { $in: topModuloIds } }
        ]}).project({ id: 1, _id: 1, title: 1, visibility: 1 }).toArray()
      : [];
    const moduloNombres = new Map(modulosDocs.map((m) => [(m.id ?? m._id?.toString?.()) as string, (m.title ?? "Sin título") as string]));
    const topModulosResult = topModuloIds.map((id) => ({
      moduloId: id,
      titulo: moduloNombres.get(id) ?? "Sin título",
      completados: countByModulo.get(id) ?? 0
    }));

    res.json({
      registro: {
        periodo: dias,
        total: usuariosRecientes.length,
        porRol: usuariosRecientes.reduce((acc: Record<string, number>, u: Record<string, unknown>) => {
          const r = (u["role"] ?? "USER") as string;
          acc[r] = (acc[r] ?? 0) + 1;
          return acc;
        }, {})
      },
      usuarios: { total: usuariosTotales, activos: totalActivos, inactivos: usuariosTotales - totalActivos },
      topModulos: topModulosResult,
      eventosModeracion: eventosRecientes.map((e: Record<string, unknown>) => ({
        tipo: e["tipo"] as string,
        motivo: (e["motivo"] ?? "") as string,
        createdAt: e["createdAt"] ? new Date(e["createdAt"] as string).toISOString() : ""
      }))
    });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/cursos", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const limit = Math.min(Number(req.query.limit ?? 50), 200);
    const offset = Number(req.query.offset ?? 0);
    const items = await db
      .collection("cursos")
      .find({ isDeleted: { $ne: true } })
      .project({ _id: 1, id: 1, name: 1, title: 1, status: 1, enrollments: 1, studentCount: 1 })
      .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
      .limit(Number.isNaN(limit) || limit <= 0 ? 50 : limit)
      .sort({ createdAt: -1 })
      .toArray();
    const cursos = items.map((item) => ({
      id: (item.id ?? item._id?.toString?.()) ?? "",
      titulo: (item.title ?? item.name ?? "Curso sin nombre") as string,
      estado: (item.status ?? "Activo") as string,
      estudiantes:
        typeof item.studentCount === "number"
          ? item.studentCount
          : Array.isArray(item.enrollments)
            ? item.enrollments.length
            : 0
    }));
    res.json(cursos);
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.get("/api/admin/materias", requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    const items = await db
      .collection("materias")
      .find({})
      .sort({ nombre: 1 })
      .toArray();
    const materias = items.map((item) => ({
      id: item._id?.toString?.() ?? "",
      nombre: (item.nombre ?? item.name ?? "Sin nombre") as string,
      descripcion: (item.descripcion ?? item.description ?? "") as string,
      nivel: (item.nivel ?? item.level ?? "") as string,
      activa: item.activa !== false
    }));
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
    const db = await getDb();
    const now = new Date().toISOString();
    const doc = {
      nombre: nombre.trim(),
      descripcion: typeof descripcion === "string" ? descripcion.trim() : "",
      nivel: typeof nivel === "string" ? nivel.trim() : "",
      activa: true,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("materias").insertOne(doc);
    res.status(201).json({ id: result.insertedId.toString(), ...doc });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

adminRouter.patch("/api/admin/materias/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, nivel, activa } = req.body ?? {};
    const db = await getDb();
    const { toObjectId } = await import("../lib/ids");
    const objectId = toObjectId(id as string);
    if (!objectId) {
      res.status(400).json({ error: "invalid id" });
      return;
    }
    const update: Record<string, unknown> = { updatedAt: new Date().toISOString() };
    if (typeof nombre === "string" && nombre.trim()) update.nombre = nombre.trim();
    if (typeof descripcion === "string") update.descripcion = descripcion.trim();
    if (typeof nivel === "string") update.nivel = nivel.trim();
    if (typeof activa === "boolean") update.activa = activa;
    const result = await db
      .collection("materias")
      .updateOne({ _id: objectId }, { $set: update });
    if (result.matchedCount === 0) {
      res.status(404).json({ error: "not found" });
      return;
    }
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});
