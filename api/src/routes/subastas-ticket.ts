import { Router } from "express";
import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { requireUser } from "../lib/user-auth";
import { requirePolicy } from "../lib/authorization";
import { hasRole } from "../lib/roles";
import { assertClassroomWritable } from "../lib/classroom";
import { acreditarSaldo, bloquearClave, debitarSaldo, SaldoInsuficienteError } from "../lib/economia-saldo";
import {
  COMISION_REVENTA,
  MAX_TICKETS_TENENCIA,
  cupoTickets,
  repartoReventa,
} from "../lib/examen-tickets";
import { economiaDelAula } from "../lib/subasta-precio";
import {
  billeterasDelModulo,
  libresDe,
  parseJson,
  type BilleteraJson,
  type ExamenJson,
} from "../lib/tickets-billetera";
import { cargarAula } from "./economia";

/**
 * Subastas por ticket y reventa entre alumnos.
 *
 * - El docente crea las subastas de un módulo de examen, una por ticket, con un botón; el precio
 *   inicial lo calcula el servidor (ver `lib/subasta-precio.ts`) y el límite de subastas es la
 *   oferta de tickets del aula: 50% de los alumnos, mínimo 2.
 * - Un alumno puede revender un ticket que no usó a un compañero. La comisión (10%) se descuenta
 *   del precio y se quema.
 */
export const subastasTicket = Router();

class ReglaError extends Error {
  constructor(public readonly status: number, public readonly codigo: string, public readonly extra: Record<string, unknown> = {}) {
    super(codigo);
  }
}

const userIdOf = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?._id?.toString?.() ?? req.user?.id ?? "";

type Reventa = {
  id: string;
  tipo: "ticket";
  aulaId: string;
  schoolId: string;
  moduloId: string;
  creadorId: string; // vendedor
  receptorId: string; // comprador
  monto: number;
  moneda: string;
  estado: "pendiente" | "aceptado" | "cancelado";
  moderacion: { estado: "aprobado"; updatedAt: string };
  riesgoScore: number;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
};

async function subastasDelModulo(aulaId: string, moduloId: string): Promise<ExamenJson[]> {
  return (await prisma.economiaExamen.findMany({ where: {} }))
    .map((r) => parseJson<ExamenJson | null>(r.json, null))
    .filter((e): e is ExamenJson => !!e && e.modo === "ticket" && e.aulaId === aulaId && e.moduloId === moduloId);
}

/** Quién puede administrar subastas del aula: un miembro del aula con rol de personal, o el admin. */
function puedeAdministrar(
  user: { role?: string; roles?: string[] } | undefined,
  aula: { members?: Array<{ userId?: string }> } | null,
  userId: string
) {
  if (hasRole(user as never, "ADMIN")) return true;
  return !!aula?.members?.some((m) => m.userId === userId);
}

// GET /api/economia/subastas-ticket/estado?aulaId=&moduloId= — para el botón del docente.
subastasTicket.get("/api/economia/subastas-ticket/estado", requireUser, requirePolicy("economia/mint"), async (req, res) => {
  const aulaId = String(req.query.aulaId ?? "");
  const moduloId = String(req.query.moduloId ?? "");
  if (!aulaId || !moduloId) return res.status(400).json({ error: "aulaId y moduloId son requeridos" });
  const userId = userIdOf(req as never);
  const aula = await cargarAula(aulaId);
  if (!aula) return res.status(404).json({ error: "aula not found" });
  if (!puedeAdministrar(req.user as never, aula, userId)) return res.status(403).json({ error: "forbidden" });

  const eco = await economiaDelAula(prisma, aulaId);
  const limite = cupoTickets(eco.alumnosAula);
  const creadas = (await subastasDelModulo(aulaId, moduloId)).length;
  return res.json({
    limite,
    creadas,
    restantes: Math.max(0, limite - creadas),
    puedeCrear: creadas < limite,
    ...eco
  });
});

// POST /api/economia/subastas-ticket { aulaId, moduloId, fechaExamen, nombre? }
subastasTicket.post("/api/economia/subastas-ticket", requireUser, requirePolicy("economia/mint"), async (req, res) => {
  const userId = userIdOf(req as never);
  const { aulaId, moduloId, fechaExamen, nombre } = (req.body ?? {}) as Record<string, unknown>;
  if (typeof aulaId !== "string" || !aulaId || typeof moduloId !== "string" || !moduloId) {
    return res.status(400).json({ error: "aulaId y moduloId son requeridos" });
  }
  const fecha = typeof fechaExamen === "string" ? new Date(fechaExamen) : null;
  if (!fecha || Number.isNaN(fecha.getTime()) || fecha.getTime() <= Date.now()) {
    return res.status(400).json({ error: "fechaExamen debe ser una fecha futura" });
  }

  try {
    const salida = await prisma.$transaction(async (tx) => {
      // El control del límite y el alta van bajo un mismo bloqueo: dos clics seguidos no lo superan.
      await bloquearClave(tx, `subastas-ticket:${aulaId}:${moduloId}`);

      const aula = await cargarAula(aulaId);
      if (!aula) throw new ReglaError(404, "aula not found");
      if (!puedeAdministrar(req.user as never, aula, userId)) throw new ReglaError(403, "forbidden");
      const modulo = await tx.modulo.findFirst({ where: { id: moduloId, isDeleted: { not: true } } });
      if (!modulo) throw new ReglaError(400, "moduloId no existe");

      const eco = await economiaDelAula(tx, aulaId);
      const limite = cupoTickets(eco.alumnosAula);
      const existentes = (await tx.economiaExamen.findMany({ where: {} }))
        .map((r) => parseJson<ExamenJson | null>(r.json, null))
        .filter((e): e is ExamenJson => !!e && e.modo === "ticket" && e.aulaId === aulaId && e.moduloId === moduloId);
      if (existentes.length >= limite) {
        throw new ReglaError(409, "limite_de_subastas", { limite, creadas: existentes.length });
      }

      const ahora = new Date().toISOString();
      const examen = {
        id: `sub-${randomUUID()}`,
        aulaId,
        moduloId,
        modo: "ticket",
        nombre: typeof nombre === "string" && nombre.trim() ? nombre.trim() : `Ticket ${existentes.length + 1}`,
        fechaExamen: fecha.toISOString(),
        estado: "anunciado",
        subastaActiva: true,
        maxCompra: MAX_TICKETS_TENENCIA,
        impuestoTasa: 0,
        ...eco, // alumnosAula, monedasAula y precioInicial: lo fija el servidor
        updatedAt: ahora
      };
      await tx.economiaExamen.create({ data: { id: examen.id, json: JSON.stringify(examen), createdAt: ahora } });
      return {
        id: examen.id,
        precioInicial: eco.precioInicial,
        limite,
        creadas: existentes.length + 1,
        restantes: limite - existentes.length - 1
      };
    });
    return res.status(201).json(salida);
  } catch (err) {
    if (err instanceof ReglaError) return res.status(err.status).json({ error: err.codigo, ...err.extra });
    console.error("[subastas-ticket] alta", err);
    return res.status(500).json({ error: "error interno" });
  }
});

// ── Reventa entre alumnos ──────────────────────────────────────────────────

const moneda = async () => {
  const fila = await prisma.economiaConfig.findFirst({ where: { id: "default" } });
  const codigo = parseJson<{ moneda?: { codigo?: string } }>(fila?.json, {}).moneda?.codigo;
  return codigo ?? "PF";
};

const esAlumnoDelAula = (aula: { members?: Array<{ userId?: string }> } | null, id: string) =>
  !!aula?.members?.some((m) => m.userId === id);

// POST /api/economia/tickets/reventa { aulaId, moduloId, receptorId, precio } — el vendedor ofrece un ticket.
subastasTicket.post("/api/economia/tickets/reventa", requireUser, async (req, res) => {
  const vendedorId = userIdOf(req as never);
  const { aulaId, moduloId, receptorId, precio } = (req.body ?? {}) as Record<string, unknown>;
  if (typeof aulaId !== "string" || typeof moduloId !== "string" || typeof receptorId !== "string" || !aulaId || !moduloId || !receptorId) {
    return res.status(400).json({ error: "aulaId, moduloId y receptorId son requeridos" });
  }
  if (typeof precio !== "number" || !Number.isFinite(precio) || precio <= 0 || precio > ENV.INSTRUMENTOS_MONTO_MAX) {
    return res.status(400).json({ error: "precio inválido" });
  }
  if (receptorId === vendedorId) return res.status(400).json({ error: "receptorId debe ser distinto al vendedor" });

  const aula = await cargarAula(aulaId);
  if (!aula) return res.status(404).json({ error: "aula not found" });
  if (!assertClassroomWritable(res, aula)) return;
  if (!esAlumnoDelAula(aula, vendedorId) || !esAlumnoDelAula(aula, receptorId)) {
    return res.status(403).json({ error: "vendedor y comprador deben pertenecer al aula" });
  }

  const libres = (await billeterasDelModulo(prisma, moduloId, vendedorId)).reduce((a, b) => a + libresDe(b.billetera), 0);
  const pendientes = (await prisma.economiaIntercambio.findMany({ where: {} }))
    .map((r) => parseJson<Reventa | null>(r.json, null))
    .filter((d): d is Reventa => !!d && d.tipo === "ticket" && d.creadorId === vendedorId && d.moduloId === moduloId && d.estado === "pendiente");
  if (libres - pendientes.length < 1) {
    return res.status(409).json({ error: "no tenés tickets sin usar para ofrecer", libres, ofertasPendientes: pendientes.length });
  }

  const ahora = new Date().toISOString();
  const reventa: Reventa = {
    id: `rev-${randomUUID()}`,
    tipo: "ticket",
    aulaId,
    schoolId: aula.schoolId ?? "",
    moduloId,
    creadorId: vendedorId,
    receptorId,
    monto: Math.round(precio * 100) / 100,
    moneda: await moneda(),
    estado: "pendiente",
    moderacion: { estado: "aprobado", updatedAt: ahora },
    riesgoScore: 0,
    createdAt: ahora,
    updatedAt: ahora
  };
  await prisma.economiaIntercambio.create({ data: { id: reventa.id, json: JSON.stringify(reventa), createdAt: ahora } });
  const { comision, neto } = repartoReventa(reventa.monto);
  return res.status(201).json({ id: reventa.id, precio: reventa.monto, comision, netoParaElVendedor: neto, comisionPorcentaje: COMISION_REVENTA * 100 });
});

// GET /api/economia/tickets/reventa — mis ofertas pendientes (como vendedor o como comprador).
subastasTicket.get("/api/economia/tickets/reventa", requireUser, async (req, res) => {
  const userId = userIdOf(req as never);
  const items = (await prisma.economiaIntercambio.findMany({ where: {} }))
    .map((r) => parseJson<Reventa | null>(r.json, null))
    .filter((d): d is Reventa => !!d && d.tipo === "ticket" && d.estado === "pendiente" && (d.creadorId === userId || d.receptorId === userId))
    .map((d) => ({ ...d, ...repartoReventa(d.monto) }));
  return res.json({ items });
});

// POST /api/economia/tickets/reventa/:id/aceptar — el comprador acepta y paga.
subastasTicket.post("/api/economia/tickets/reventa/:id/aceptar", requireUser, async (req, res) => {
  const compradorId = userIdOf(req as never);
  const id = String(req.params.id);
  try {
    const salida = await prisma.$transaction(async (tx) => {
      const fila = await tx.economiaIntercambio.findFirst({ where: { id } });
      const reventa = parseJson<Reventa | null>(fila?.json, null);
      if (!fila || !reventa || reventa.tipo !== "ticket") throw new ReglaError(404, "reventa not found");
      if (reventa.receptorId !== compradorId) throw new ReglaError(403, "solo el comprador puede aceptar");
      if (reventa.estado !== "pendiente") throw new ReglaError(409, "la oferta ya no está disponible");

      // Bloqueos de ambos alumnos, siempre en el mismo orden, para no trabarse entre sí.
      for (const clave of [`tickets:${reventa.creadorId}`, `tickets:${compradorId}`].sort()) await bloquearClave(tx, clave);

      const aula = await cargarAula(reventa.aulaId);
      if (!aula) throw new ReglaError(404, "aula not found");
      if (!esAlumnoDelAula(aula, reventa.creadorId) || !esAlumnoDelAula(aula, compradorId)) {
        throw new ReglaError(403, "vendedor y comprador deben pertenecer al aula");
      }

      const ahora = new Date().toISOString();
      // Se "reclama" la oferta comparando su JSON tal como se leyó: un doble pedido no la cumple dos veces.
      const reclamo = await tx.economiaIntercambio.updateMany({
        where: { id, json: fila.json },
        data: { json: JSON.stringify({ ...reventa, estado: "aceptado", updatedAt: ahora, resolvedAt: ahora }) }
      });
      if (reclamo.count !== 1) throw new ReglaError(409, "la oferta ya no está disponible");

      // El ticket pasa de una billetera del vendedor (con tickets sin usar) a la del comprador.
      const delVendedor = (await billeterasDelModulo(tx, reventa.moduloId, reventa.creadorId)).find((b) => libresDe(b.billetera) >= 1);
      if (!delVendedor) throw new ReglaError(409, "el vendedor ya no tiene tickets sin usar");
      const delComprador = await billeterasDelModulo(tx, reventa.moduloId, compradorId);
      const tenencia = delComprador.reduce((a, b) => a + Math.floor(b.billetera.tickets ?? 0), 0);
      if (tenencia + 1 > MAX_TICKETS_TENENCIA) {
        throw new ReglaError(409, "superás el máximo de tickets por examen", { maximo: MAX_TICKETS_TENENCIA });
      }

      await tx.economiaExamenPunto.updateMany({
        where: { id: delVendedor.fila.id },
        data: {
          json: JSON.stringify({ ...delVendedor.billetera, tickets: Math.floor(delVendedor.billetera.tickets ?? 0) - 1, updatedAt: ahora }),
          updatedAt: ahora
        }
      });
      const mismaSubasta = delComprador.find((b) => b.examen.id === delVendedor.examen.id);
      if (mismaSubasta) {
        await tx.economiaExamenPunto.updateMany({
          where: { id: mismaSubasta.fila.id },
          data: {
            json: JSON.stringify({ ...mismaSubasta.billetera, tickets: Math.floor(mismaSubasta.billetera.tickets ?? 0) + 1, updatedAt: ahora }),
            updatedAt: ahora
          }
        });
      } else {
        const nueva: BilleteraJson = { usuarioId: compradorId, examenId: delVendedor.examen.id, tickets: 1, canjeados: 0, puntos: 0, updatedAt: ahora };
        await tx.economiaExamenPunto.create({
          data: { id: randomUUID(), examenId: delVendedor.examen.id, json: JSON.stringify(nueva), updatedAt: ahora }
        });
      }

      // Dinero: el comprador paga el precio completo; el vendedor cobra el neto y la comisión se quema.
      const { comision, neto } = repartoReventa(reventa.monto);
      const base = { aulaId: reventa.aulaId, schoolId: reventa.schoolId, moneda: reventa.moneda, referenciaId: reventa.id, now: ahora };
      await debitarSaldo(tx, { ...base, usuarioId: compradorId, monto: neto, motivo: `reventa_ticket:${reventa.id}:compra` });
      if (comision > 0) {
        await debitarSaldo(tx, { ...base, usuarioId: compradorId, monto: comision, motivo: `comision_quemada:reventa_ticket:${reventa.id}` });
      }
      await acreditarSaldo(tx, { ...base, usuarioId: reventa.creadorId, monto: neto, motivo: `reventa_ticket:${reventa.id}:venta` });

      return { ok: true, precio: reventa.monto, comisionQuemada: comision, netoParaElVendedor: neto };
    });
    return res.json(salida);
  } catch (err) {
    if (err instanceof SaldoInsuficienteError) return res.status(400).json({ error: "saldo insuficiente", saldo: err.saldo });
    if (err instanceof ReglaError) return res.status(err.status).json({ error: err.codigo, ...err.extra });
    console.error("[subastas-ticket] reventa", err);
    return res.status(500).json({ error: "error interno" });
  }
});
