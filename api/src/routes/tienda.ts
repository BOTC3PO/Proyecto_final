import { randomUUID } from "node:crypto";
import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { checkModoAula } from "../lib/modo-aula-middleware";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { TiendaComprarSchema, TiendaItemCrearSchema, TiendaItemEditarSchema } from "../schema/escrituras";
import { validarCuerpo } from "../lib/validar";
import { debitarSaldo, SaldoInsuficienteError } from "../lib/economia-saldo";

export const tienda = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

// ── GET /api/tienda ─────────────────────────────────────────
tienda.get("/api/tienda", requireUser, async (req, res) => {
  const tipo = typeof req.query.tipo === "string" ? req.query.tipo : undefined;

  const items = await prisma.tiendaItem.findMany({
    where: { activo: 1, ...(tipo ? { tipo } : {}) },
    orderBy: [{ tipo: "asc" }, { orden: "asc" }],
    take: 500,
  });
  return res.json({
    items: items.map((item) => ({
      id: item.id,
      tipo: item.tipo,
      nombre: item.nombre,
      descripcion: item.descripcion,
      precio: item.precio,
      moneda: item.moneda,
      asset_id: item.assetId,
      preview_css: item.previewCss,
      activo: item.activo,
      orden: item.orden,
    })),
  });
});

// ── GET /api/tienda/mis-items ───────────────────────────────
tienda.get("/api/tienda/mis-items", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  // FIX-STAFF-TEMAS-BLOQUEADOS — TEACHER/DIRECTIVO/ADMIN no tienen ruta
  // propia a /tienda-temas (esa página vive bajo AlumnoLayout, sólo
  // PLAN-multirol Fase 3 — antes acá se mergeaban las compras de la cuenta
  // espejo. Ya no hace falta: la persona es una sola cuenta.
  const usuarioIds = [userId];

  const items = await prisma.usuarioItem.findMany({
    where: { usuarioId: { in: usuarioIds } },
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

  const pedido = validarCuerpo(TiendaComprarSchema, req, res);
  if (!pedido) return;
  const { itemId } = pedido;

  const item = await prisma.tiendaItem.findFirst({
    where: { id: itemId, activo: 1 },
  });
  if (!item) return res.status(404).json({ error: "item no encontrado" });

  const yaComprado = await prisma.usuarioItem.findFirst({
    where: { usuarioId: userId, itemId },
  });
  if (yaComprado) return res.status(409).json({ error: "ya tenés este item" });

  const now = new Date().toISOString();
  const uid = `ui-${randomUUID()}`;

  // Si precio es 0, dar gratis sin verificar saldo
  if (item.precio === 0) {
    await prisma.usuarioItem.create({
      data: { id: uid, usuarioId: userId, itemId, compradoAt: now, origen: "inicial" },
    });
    return res.status(201).json({ ok: true, gratis: true });
  }

  try {
    // E7: débito condicional + alta del ítem en una sola transacción, así dos compras
    // simultáneas no gastan el mismo saldo y un fallo no deja cobro sin ítem.
    await prisma.$transaction(async (tx) => {
      await debitarSaldo(tx, {
        usuarioId: userId,
        monto: item.precio,
        moneda: item.moneda,
        motivo: `tienda:${item.tipo}:${item.nombre}`,
        referenciaId: itemId,
        now,
      });
      await tx.usuarioItem.create({
        data: { id: uid, usuarioId: userId, itemId, compradoAt: now, origen: "compra" },
      });
    });

    const saldoRestante = (await prisma.economiaSaldo.findFirst({ where: { usuarioId: userId } }))?.saldo ?? 0;
    return res.status(201).json({ ok: true, saldoRestante });
  } catch (err) {
    // P2002: otro pedido simultáneo ya entregó este ítem; la transacción deshizo el débito.
    if ((err as { code?: string })?.code === "P2002") {
      return res.status(409).json({ error: "ya tenés este item" });
    }
    if (err instanceof SaldoInsuficienteError) {
      return res.status(400).json({
        error: "saldo_insuficiente",
        saldo: err.saldo,
        precio: item.precio,
        mensaje: `Necesitás ${item.precio} PF pero tenés ${err.saldo}.`,
      });
    }
    console.error("[tienda] compra", err);
    return res.status(500).json({ error: "error al procesar compra" });
  }
});

// ── POST /api/tienda/items (admin) ──────────────────────────
tienda.post("/api/tienda/items", requireAdmin, async (req, res) => {
  const item = validarCuerpo(TiendaItemCrearSchema, req, res);
  if (!item) return;
  const { tipo, nombre, descripcion, precio, assetId, previewCss, orden } = item;

  const id = `item-${tipo}-${randomUUID()}`;
  const now = new Date().toISOString();

  await prisma.tiendaItem.create({
    data: {
      id,
      tipo,
      nombre,
      descripcion: descripcion ?? "",
      precio: precio ?? 0,
      assetId: assetId ?? null,
      previewCss: previewCss ?? null,
      activo: 1,
      orden: orden ?? 99,
      createdAt: now,
    },
  });

  return res.status(201).json({ id, ok: true });
});

// ── PATCH /api/tienda/items/:id (admin) ─────────────────────
tienda.patch("/api/tienda/items/:id", requireAdmin, async (req, res) => {
  const cambios = validarCuerpo(TiendaItemEditarSchema, req, res);
  if (!cambios) return;
  const { nombre, descripcion, precio, activo, orden } = cambios;

  const data: Record<string, unknown> = {};
  if (nombre !== undefined) data.nombre = nombre;
  if (descripcion !== undefined) data.descripcion = descripcion;
  if (precio !== undefined) data.precio = precio;
  if (activo !== undefined) data.activo = activo;
  if (orden !== undefined) data.orden = orden;

  if (!Object.keys(data).length) return res.status(400).json({ error: "nada que actualizar" });

  await prisma.tiendaItem.update({ where: { id: String(req.params.id) }, data });
  return res.json({ ok: true });
});
