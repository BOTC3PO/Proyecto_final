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
import { bloquearSiNoVerificada, esDirectivoPrincipal } from "../lib/escuela-verificacion";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { ENV } from "../lib/env";
import { cifrarCredencial } from "../lib/pasarelas-crypto";
import { recordAuditLog } from "../lib/audit-log";
import { buildAuthorizationUrl, verifyState, intercambiarCode } from "../lib/mercadopago-oauth";
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

const getActorId = (user: ReqUser | undefined) => user?.id ?? "desconocido";

/**
 * Rastro de cambios de pasarela. `cuentaConectadaId` es literalmente a qué
 * cuenta va a parar la plata de la escuela: cambiarlo es la forma más
 * directa de desviar cobros, así que queda registrado con antes/después.
 * Nunca se loguean credenciales, sólo si se tocaron.
 */
const auditarPasarela = (
  actorId: string,
  action: string,
  escuelaId: string,
  provider: string,
  metadata: Record<string, unknown>
) =>
  recordAuditLog({
    actorId,
    action,
    targetType: "EscuelaPasarela",
    targetId: `${escuelaId}:${provider}`,
    metadata: { escuelaId, provider, ...metadata }
  });

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
  // Conectar la pasarela es decidir a qué cuenta va la plata: verificada o nada.
  if (await bloquearSiNoVerificada(res, escuelaId)) return;
  // Tocar la pasarela decide A QUÉ CUENTA va la plata de la escuela: queda
  // reservado al directivo principal, el que la registró. Un directivo
  // delegado puede emitir cobros, no redirigir el dinero.
  if (!(await esDirectivoPrincipal(user, escuelaId))) {
    return res.status(403).json({ error: "sólo el directivo principal puede tocar la pasarela", code: "SOLO_DIRECTIVO_PRINCIPAL" });
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
    await auditarPasarela(getActorId(user), "pasarela.actualizada", escuelaId, provider, {
      cuentaConectadaIdAntes: existente.cuentaConectadaId,
      cuentaConectadaIdDespues: actualizado.cuentaConectadaId,
      credencialesReemplazadas: Boolean(credencialesCifradas),
      activa: actualizado.activa
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
  await auditarPasarela(getActorId(user), "pasarela.conectada", escuelaId, provider, {
    cuentaConectadaId: creado.cuentaConectadaId,
    conCredenciales: Boolean(credencialesCifradas),
    activa: creado.activa
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
  if (await bloquearSiNoVerificada(res, escuelaId)) return;
  // Tocar la pasarela decide A QUÉ CUENTA va la plata de la escuela: queda
  // reservado al directivo principal, el que la registró. Un directivo
  // delegado puede emitir cobros, no redirigir el dinero.
  if (!(await esDirectivoPrincipal(user, escuelaId))) {
    return res.status(403).json({ error: "sólo el directivo principal puede tocar la pasarela", code: "SOLO_DIRECTIVO_PRINCIPAL" });
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
  await auditarPasarela(getActorId(user), "pasarela.activa_cambiada", escuelaId, provider, {
    antes: existente.activa,
    despues: actualizado.activa
  });
  return res.json(aPublico(actualizado));
});

// GET /api/escuelas/:escuelaId/pasarelas/mercadopago/authorize — arma la URL
// de autorización de MP para que la escuela conecte su cuenta. Requisito
// real de MP: sin esto, `marketplace_fee` rechaza el `collector_id` de la
// escuela con "collector_id invalid".
escuelaPasarelas.get("/api/escuelas/:escuelaId/pasarelas/mercadopago/authorize", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  if (!puedeGestionarEscuela(user, escuelaId)) {
    return res.status(403).json({ error: "Sin permiso" });
  }
  if (await bloquearSiNoVerificada(res, escuelaId)) return;
  // Tocar la pasarela decide A QUÉ CUENTA va la plata de la escuela: queda
  // reservado al directivo principal, el que la registró. Un directivo
  // delegado puede emitir cobros, no redirigir el dinero.
  if (!(await esDirectivoPrincipal(user, escuelaId))) {
    return res.status(403).json({ error: "sólo el directivo principal puede tocar la pasarela", code: "SOLO_DIRECTIVO_PRINCIPAL" });
  }
  if (!ENV.MP_CLIENT_ID) {
    return res.status(503).json({ error: "MP_CLIENT_ID no configurado en la plataforma" });
  }
  return res.json({ url: buildAuthorizationUrl(escuelaId) });
});

// GET /api/escuelas/pasarelas/mercadopago/callback — MP redirige el
// navegador acá tras el approve. Público a propósito (no manda el JWT del
// usuario): el `state` es lo que liga este callback a una escuela.
escuelaPasarelas.get("/api/escuelas/pasarelas/mercadopago/callback", async (req, res) => {
  const code = typeof req.query.code === "string" ? req.query.code : "";
  const state = typeof req.query.state === "string" ? req.query.state : "";
  const verified = state ? verifyState(state) : null;
  if (!code || !verified) {
    return res.redirect(`${ENV.APP_URL}/enterprise/cobros?mp=error`);
  }
  const tokens = await intercambiarCode(code);
  if (!tokens) {
    return res.redirect(`${ENV.APP_URL}/enterprise/cobros?mp=error`);
  }

  const nowIso = now();
  const credencialesCifradas = cifrarCredencial(
    JSON.stringify({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken })
  );
  const existente = await prisma.escuelaPasarela.findFirst({
    where: { escuelaId: verified.escuelaId, provider: "mercadopago" }
  });
  if (existente) {
    await prisma.escuelaPasarela.update({
      where: { id: existente.id },
      data: { cuentaConectadaId: tokens.userId, credencialesCifradas, activa: true, updatedAt: nowIso }
    });
  } else {
    await prisma.escuelaPasarela.create({
      data: {
        id: genId(),
        escuelaId: verified.escuelaId,
        provider: "mercadopago",
        cuentaConectadaId: tokens.userId,
        credencialesCifradas,
        activa: true,
        createdAt: nowIso,
        updatedAt: nowIso
      }
    });
  }
  // El callback es público (lo abre MP, no lleva JWT): el actor es el
  // `state` firmado, no un usuario. Igual queda el rastro de cuándo esa
  // escuela pasó a apuntar a esta cuenta de MP.
  await auditarPasarela("system:oauth:mercadopago", "pasarela.oauth_autorizada", verified.escuelaId, "mercadopago", {
    cuentaConectadaId: tokens.userId,
    reemplazoExistente: Boolean(existente)
  });
  return res.redirect(`${ENV.APP_URL}/enterprise/cobros?mp=conectado`);
});
