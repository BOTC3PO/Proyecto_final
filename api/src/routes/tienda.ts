import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { checkModoAula } from "../lib/modo-aula-middleware";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";

export const tienda = Router();

type TiendaItem = {
  id: string;
  tipo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  moneda: string;
  asset_id: string | null;
  preview_css: string | null;
  activo: number;
  orden: number;
  created_at: string;
};

type UsuarioItem = {
  id: string;
  usuario_id: string;
  item_id: string;
  comprado_at: string;
  origen: string;
};

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

// ── GET /api/tienda ─────────────────────────────────────────
// Catálogo completo de items activos
tienda.get("/api/tienda", requireUser, (req, res) => {
  const db = openContentDb();
  const tipo = typeof req.query.tipo === "string"
    ? req.query.tipo : null;

  let query = "SELECT * FROM tienda_items WHERE activo = 1";
  const params: string[] = [];
  if (tipo) { query += " AND tipo = ?"; params.push(tipo); }
  query += " ORDER BY tipo ASC, orden ASC";

  const items = db.prepare(query).all(...params) as TiendaItem[];
  return res.json({ items });
});

// ── GET /api/tienda/mis-items ───────────────────────────────
// Items que tiene el usuario actual
tienda.get("/api/tienda/mis-items", requireUser, (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const db = openContentDb();
  const items = db.prepare(`
    SELECT ui.item_id, ui.comprado_at, ui.origen,
           ti.tipo, ti.nombre, ti.asset_id
    FROM usuario_items ui
    JOIN tienda_items ti ON ti.id = ui.item_id
    WHERE ui.usuario_id = ?
    ORDER BY ui.comprado_at DESC
  `).all(userId) as Array<UsuarioItem & Partial<TiendaItem>>;

  return res.json({ items });
});

// ── POST /api/tienda/comprar ────────────────────────────────
// Comprar un item con monedas de la economía
tienda.post("/api/tienda/comprar", requireUser, checkModoAula("tienda"), async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { itemId } = req.body as { itemId?: string };
  if (!itemId) return res.status(400).json({ error: "itemId requerido" });

  const sqliteDb = openContentDb();

  // Verificar que el item existe
  const item = sqliteDb.prepare(
    "SELECT * FROM tienda_items WHERE id = ? AND activo = 1"
  ).get(itemId) as TiendaItem | undefined;

  if (!item) return res.status(404).json({ error: "item no encontrado" });

  // Verificar que no lo tiene ya
  const yaComprado = sqliteDb.prepare(`
    SELECT id FROM usuario_items
    WHERE usuario_id = ? AND item_id = ?
  `).get(userId, itemId);

  if (yaComprado) {
    return res.status(409).json({ error: "ya tenés este item" });
  }

  // Si el precio es 0, dar gratis
  if (item.precio === 0) {
    const id = `ui-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    sqliteDb.prepare(`
      INSERT INTO usuario_items (id, usuario_id, item_id, comprado_at, origen)
      VALUES (?, ?, ?, ?, 'inicial')
    `).run(id, userId, itemId, new Date().toISOString());
    return res.status(201).json({ ok: true, gratis: true });
  }

  // Verificar saldo en economía (Prisma/PostgreSQL)
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

    const now = new Date().toISOString();

    // Descontar saldo en PostgreSQL
    await prisma.economiaSaldo.upsert({
      where: { usuarioId: userId },
      update: { saldo: saldoActual - item.precio, updatedAt: now },
      create: { usuarioId: userId, saldo: saldoActual - item.precio, moneda: item.moneda, updatedAt: now },
    });

    // Registrar transacción
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

    // Registrar compra en SQLite
    const id = `ui-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    sqliteDb.prepare(`
      INSERT INTO usuario_items (id, usuario_id, item_id, comprado_at, origen)
      VALUES (?, ?, ?, ?, 'compra')
    `).run(id, userId, itemId, now);

    return res.status(201).json({
      ok: true,
      saldoRestante: saldoActual - item.precio,
    });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error al procesar compra",
    });
  }
});

// ── POST /api/tienda/items (admin) ──────────────────────────
// Admin agrega un nuevo item a la tienda
tienda.post("/api/tienda/items", requireAdmin, (req, res) => {
  const {
    tipo, nombre, descripcion, precio,
    assetId, previewCss, orden
  } = req.body as Record<string, unknown>;

  if (!tipo || !nombre) {
    return res.status(400).json({ error: "tipo y nombre requeridos" });
  }

  const db = openContentDb();
  const id = `item-${String(tipo)}-${Date.now()}`;
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO tienda_items
      (id, tipo, nombre, descripcion, precio, asset_id,
       preview_css, activo, orden, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
  `).run(
    id,
    String(tipo),
    String(nombre),
    typeof descripcion === "string" ? descripcion : "",
    typeof precio === "number" ? precio : 0,
    typeof assetId === "string" ? assetId : null,
    typeof previewCss === "string" ? previewCss : null,
    typeof orden === "number" ? orden : 99,
    now,
  );

  return res.status(201).json({ id, ok: true });
});

// ── PATCH /api/tienda/items/:id (admin) ─────────────────────
tienda.patch("/api/tienda/items/:id", requireAdmin, (req, res) => {
  const db = openContentDb();
  const { nombre, descripcion, precio, activo, orden } =
    req.body as Record<string, unknown>;

  const updates: string[] = [];
  const params: unknown[] = [];

  if (typeof nombre === "string") { updates.push("nombre = ?"); params.push(nombre); }
  if (typeof descripcion === "string") { updates.push("descripcion = ?"); params.push(descripcion); }
  if (typeof precio === "number") { updates.push("precio = ?"); params.push(precio); }
  if (typeof activo === "number") { updates.push("activo = ?"); params.push(activo); }
  if (typeof orden === "number") { updates.push("orden = ?"); params.push(orden); }

  if (!updates.length) return res.status(400).json({ error: "nada que actualizar" });

  params.push(req.params.id);
  db.prepare(`UPDATE tienda_items SET ${updates.join(", ")} WHERE id = ?`)
    .run(...params);

  return res.json({ ok: true });
});
