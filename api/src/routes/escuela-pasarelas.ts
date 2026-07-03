/**
 * PLAN-B Fase 5 — conexión de pasarela por escuela (onboarding). Antes
 * de esta fase `EscuelaPasarela` sólo se leía (checkout, Fase 3); acá se
 * agrega el CRUD para que la escuela cargue su cuenta conectada
 * (`cuentaConectadaId`) y credenciales, que el server cifra
 * (`lib/pasarelas-crypto.ts`) antes de persistir. Nunca se devuelven
 * credenciales en claro ni cifradas al cliente — sólo si "configurada".
 */
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { cifrarCredencial } from "../lib/pasarelas-crypto";
import { EscuelaPasarelaConectarSchema, EscuelaPasarelaActualizarSchema } from "../schema/cobros";

export const escuelaPasarelas = Router();

type ReqUser = {
  id?: string;
  role?: string;
  roles?: string[];
  schoolId?: string | null;
};

const puedeGestionarEscuela = (user: ReqUser | undefined, escuelaId: string): boolean => {
  if (hasRole(user, "ADMIN")) return true;
  return hasRole(user, "DIRECTIVO") && user?.schoolId === escuelaId;
};

const now = () => new Date().toISOString();
const genId = () => `escpas-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const aPublico = (row: {
  provider: string;
  cuentaConectadaId: string | null;
  activa: boolean;
  credencialesCifradas: string | null;
  updatedAt: string;
}) => ({
  provider: row.provider,
  cuentaConectadaId: row.cuentaConectadaId,
  activa: row.activa,
  configurada: Boolean(row.credencialesCifradas),
  updatedAt: row.updatedAt
});

// GET /api/escuelas/:escuelaId/pasarelas — lista las pasarelas conectadas
// (sin exponer credenciales, ni cifradas).
escuelaPasarelas.get("/api/escuelas/:escuelaId/pasarelas", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  if (!puedeGestionarEscuela(user, escuelaId)) {
    return res.status(403).json({ error: "Sin permiso" });
  }
  const rows = await prisma.escuelaPasarela.findMany({ where: { escuelaId } });
  return res.json({ items: rows.map(aPublico) });
});

// POST /api/escuelas/:escuelaId/pasarelas — conecta (o actualiza) una
// pasarela. Upsert manual por (escuelaId, provider) — evita depender del
// shorthand de clave compuesta de Prisma (no soportado por el shim de
// tests in-memory, y así ambos caminos quedan iguales).
escuelaPasarelas.post("/api/escuelas/:escuelaId/pasarelas", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  if (!puedeGestionarEscuela(user, escuelaId)) {
    return res.status(403).json({ error: "Sin permiso" });
  }
  const parsed = EscuelaPasarelaConectarSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "datos inválidos", detalles: parsed.error.flatten() });
  }
  const { provider, cuentaConectadaId, credenciales, activa } = parsed.data;

  const existente = await prisma.escuelaPasarela.findFirst({ where: { escuelaId, provider } });
  const nowIso = now();
  const credencialesCifradas = credenciales ? cifrarCredencial(JSON.stringify(credenciales)) : undefined;

  if (existente) {
    const actualizado = await prisma.escuelaPasarela.update({
      where: { id: existente.id },
      data: {
        cuentaConectadaId: cuentaConectadaId ?? existente.cuentaConectadaId,
        ...(credencialesCifradas ? { credencialesCifradas } : {}),
        activa: activa ?? existente.activa,
        updatedAt: nowIso
      }
    });
    return res.json(aPublico(actualizado));
  }

  const creado = await prisma.escuelaPasarela.create({
    data: {
      id: genId(),
      escuelaId,
      provider,
      cuentaConectadaId: cuentaConectadaId ?? null,
      credencialesCifradas: credencialesCifradas ?? null,
      activa: activa ?? true,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });
  return res.status(201).json(aPublico(creado));
});

// PATCH /api/escuelas/:escuelaId/pasarelas/:provider — activar/desactivar
// sin tener que reenviar credenciales.
escuelaPasarelas.patch("/api/escuelas/:escuelaId/pasarelas/:provider", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  const provider = req.params.provider as string;
  if (!puedeGestionarEscuela(user, escuelaId)) {
    return res.status(403).json({ error: "Sin permiso" });
  }
  const parsed = EscuelaPasarelaActualizarSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "datos inválidos" });
  }
  const existente = await prisma.escuelaPasarela.findFirst({ where: { escuelaId, provider } });
  if (!existente) return res.status(404).json({ error: "pasarela no conectada" });

  const actualizado = await prisma.escuelaPasarela.update({
    where: { id: existente.id },
    data: { activa: parsed.data.activa, updatedAt: now() }
  });
  return res.json(aPublico(actualizado));
});
