import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { checkModoAula } from "../lib/modo-aula-middleware";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";

export const tienda = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

// ── GET /api/tienda ─────────────────────────────────────────
tienda.get("/api/tienda", requireUser, async (req, res) => {
  const tipo = typeof req.query.tipo === "string" ? req.query.tipo : undefined;

  const items = await prisma.tiendaItem.findMany({
    where: { activo: 1, ...(tipo ? { tipo } : {}) },
    orderBy: [{ tipo: "asc" }, { orden: "asc" }],
  });
  return res.json({ items });
});

// ── GET /api/tienda/mis-items ───────────────────────────────
tienda.get("/api/tienda/mis-items", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const items = await prisma.usuarioItem.findMany({
    where: { usuarioId: userId },
    include: {
      item: { select: { tipo: true, nombre: true, assetId: true } },
    },
    orderBy: { compradoAt: "desc" },
  });

  return res.json({
    items: items.map((ui) => ({
      item_id: ui.itemId,
      comprado_at: ui.compradoAt,
      origen: ui.origen,
      tipo: ui.item.tipo,
      nombre: ui.item.nombre,
      asset_id: ui.item.assetId,
    })),
  });
});

// ── POST /api/tienda/comprar ────────────────────────────────
tienda.post("/api/tienda/comprar", requireUser, checkModoAula("tienda"), async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { itemId } = req.body as { itemId?: string };
  if (!itemId) return res.status(400).json({ error: "itemId requerido" });

  const item = await prisma.tiendaItem.findFirst({
    where: { id: itemId, activo: 1 },
  });
  if (!item) return res.status(404).json({ error: "item no encontrado" });

  const yaComprado = await prisma.usuarioItem.findFirst({
    where: { usuarioId: userId, itemId },
  });
  if (yaComprado) return res.status(409).json({ error: "ya tenés este item" });

  const now = new Date().toISOString();
  const uid = `ui-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  // Si precio es 0, dar gratis sin verificar saldo
  if (item.precio === 0) {
    await prisma.usuarioItem.create({
      data: { id: uid, usuarioId: userId, itemId, compradoAt: now, origen: "inicial" },
    });
    return res.status(201).json({ ok: true, gratis: true });
  }

  try {
    const saldoDoc = await prisma.economiaSaldo.findFirst({ where: { usuarioId: userId } });
    const saldoActual = saldoDoc?.saldo ?? 0;

    if (saldoActual < item.precio) {
      return res.status(400).json({
        error: "saldo_insuficiente",
        saldo: saldoActual,
        precio: item.precio,
        mensaje: `Necesitás ${item.precio} PF pero tenés ${saldoActual}.`,
      });
    }

    await prisma.economiaSaldo.upsert({
      where: { usuarioId: userId },
      update: { saldo: saldoActual - item.precio, updatedAt: now },
      create: { usuarioId: userId, saldo: saldoActual - item.precio, moneda: item.moneda, updatedAt: now },
    });

    await prisma.economiaTransaccion.create({
      data: {
        usuarioId: userId,
        aulaId: "",
        schoolId: "",
        tipo: "debito",
        monto: item.precio,
        moneda: item.moneda,
        motivo: `tienda:${item.tipo}:${item.nombre}`,
        referenciaId: itemId,
        createdAt: now,
      },
    });

    await prisma.usuarioItem.create({
      data: { id: uid, usuarioId: userId, itemId, compradoAt: now, origen: "compra" },
    });

    return res.status(201).json({ ok: true, saldoRestante: saldoActual - item.precio });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error al procesar compra" });
  }
});

// ── POST /api/tienda/items (admin) ──────────────────────────
tienda.post("/api/tienda/items", requireAdmin, async (req, res) => {
  const { tipo, nombre, descripcion, precio, assetId, previewCss, orden } =
    req.body as Record<string, unknown>;

  if (!tipo || !nombre) {
    return res.status(400).json({ error: "tipo y nombre requeridos" });
  }

  const id = `item-${String(tipo)}-${Date.now()}`;
  const now = new Date().toISOString();

  await prisma.tiendaItem.create({
    data: {
      id,
      tipo: String(tipo),
      nombre: String(nombre),
      descripcion: typeof descripcion === "string" ? descripcion : "",
      precio: typeof precio === "number" ? precio : 0,
      assetId: typeof assetId === "string" ? assetId : null,
      previewCss: typeof previewCss === "string" ? previewCss : null,
      activo: 1,
      orden: typeof orden === "number" ? orden : 99,
      createdAt: now,
    },
  });

  return res.status(201).json({ id, ok: true });
});

// ── PATCH /api/tienda/items/:id (admin) ─────────────────────
tienda.patch("/api/tienda/items/:id", requireAdmin, async (req, res) => {
  const { nombre, descripcion, precio, activo, orden } = req.body as Record<string, unknown>;

  const data: Record<string, unknown> = {};
  if (typeof nombre === "string") data.nombre = nombre;
  if (typeof descripcion === "string") data.descripcion = descripcion;
  if (typeof precio === "number") data.precio = precio;
  if (typeof activo === "number") data.activo = activo;
  if (typeof orden === "number") data.orden = orden;

  if (!Object.keys(data).length) return res.status(400).json({ error: "nada que actualizar" });

  await prisma.tiendaItem.update({ where: { id: String(req.params.id) }, data });
  return res.json({ ok: true });
});
