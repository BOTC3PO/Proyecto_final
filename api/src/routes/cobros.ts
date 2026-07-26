import { randomUUID } from "node:crypto";
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { bloquearSiNoVerificada, puedeEmitirCobros, esDirectivoPrincipal } from "../lib/escuela-verificacion";
import { recordAuditLog } from "../lib/audit-log";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { whereSoloAlumnosReales } from "../lib/inscripcion-prueba";
import { ENV } from "../lib/env";
import { getProvider } from "../lib/pasarelas";
import { accessTokenDesdeCredenciales } from "../lib/mercadopago-oauth";
import { confirmarPago } from "../lib/cobros-confirmacion";
import { CobroCreateSchema, CobroPublicarSchema } from "../schema/cobros";

export const cobros = Router();

type ReqUser = {
  id?: string;
  _id?: { toString?: () => string } | string;
  role?: string;
  roles?: string[];
  schoolId?: string | null;
};

const getRequesterId = (user?: ReqUser): string | null => {
  if (typeof user?.id === "string") return user.id;
  if (typeof user?._id === "string") return user._id;
  if (user?._id && typeof (user._id as { toString?: () => string }).toString === "function") {
    return (user._id as { toString: () => string }).toString();
  }
  return null;
};

// PLAN-B Fase 2 — quién puede crear/publicar cobros para una escuela:
// ADMIN (cualquier escuela) o DIRECTIVO de esa MISMA escuela. TEACHER no
// gestiona cobros (es un tema administrativo/directivo, no docente).
const puedeGestionarEscuela = (user: ReqUser | undefined, escuelaId: string): boolean => {
  if (hasRole(user, "ADMIN")) return true;
  return hasRole(user, "DIRECTIVO") && user?.schoolId === escuelaId;
};

const now = () => new Date().toISOString();

// POST /api/cobros — crear un cobro en estado "borrador".
// Body: CobroCreateSchema + `escuelaId` (requerido para ADMIN; un
// DIRECTIVO siempre crea para su propia escuela, ignora escuelaId del body).
cobros.post("/api/cobros", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const requesterId = getRequesterId(user);
  if (!requesterId) return res.status(401).json({ error: "no autenticado" });
  // Gate de rol ANTES de resolver escuelaId: un rol sin autoridad sobre
  // ningún cobro (ej. TEACHER) debe recibir 403, no un 400 por "faltó
  // escuelaId" (nunca iba a tener uno válido de todos modos).
  if (!hasRole(user, "ADMIN") && !hasRole(user, "DIRECTIVO")) {
    return res.status(403).json({ error: "forbidden" });
  }

  const escuelaId = hasRole(user, "DIRECTIVO") ? (user?.schoolId ?? null) : typeof req.body?.escuelaId === "string" ? req.body.escuelaId : null;
  if (!escuelaId) {
    return res.status(400).json({ error: "escuelaId requerido (o el usuario no tiene escuela asignada)" });
  }
  if (!puedeGestionarEscuela(user, escuelaId)) {
    return res.status(403).json({ error: "forbidden" });
  }

  const parsed = CobroCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "payload inválido", issues: parsed.error.issues });
  }

  const nowIso = now();
  const cobro = await prisma.cobroEscuela.create({
    data: {
      id: randomUUID(),
      escuelaId,
      concepto: parsed.data.concepto,
      descripcion: parsed.data.descripcion ?? null,
      montoUnitario: parsed.data.montoUnitario,
      moneda: parsed.data.moneda ?? "ARS",
      vencimiento: parsed.data.vencimiento ?? null,
      estado: "borrador",
      createdBy: requesterId,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });
  res.status(201).json(cobro);
});

// GET /api/cobros — cobros de la escuela del requester (DIRECTIVO) o de
// `?escuelaId=` (ADMIN).
cobros.get("/api/cobros", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  if (!hasRole(user, "ADMIN") && !hasRole(user, "DIRECTIVO")) {
    return res.status(403).json({ error: "forbidden" });
  }
  const queryEscuelaId = typeof req.query.escuelaId === "string" ? req.query.escuelaId : null;
  const escuelaId = hasRole(user, "DIRECTIVO") ? (user?.schoolId ?? null) : queryEscuelaId;
  if (!escuelaId) {
    return res.status(400).json({ error: "escuelaId requerido" });
  }
  if (!puedeGestionarEscuela(user, escuelaId)) {
    return res.status(403).json({ error: "forbidden" });
  }
  const items = await prisma.cobroEscuela.findMany({
    where: { escuelaId },
    orderBy: { createdAt: "desc" }
  });
  res.json({ items });
});

// GET /api/cobros/:id/cuotas — roster de cuotas de un cobro (seguimiento
// pagada/pendiente/vencida). Sólo staff de la escuela del cobro.
cobros.get("/api/cobros/:id/cuotas", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const cobro = await prisma.cobroEscuela.findFirst({ where: { id: req.params.id as string } });
  if (!cobro) return res.status(404).json({ error: "cobro no encontrado" });
  if (!puedeGestionarEscuela(user, cobro.escuelaId)) {
    return res.status(403).json({ error: "forbidden" });
  }
  const cuotas = await prisma.cuotaAlumno.findMany({ where: { cobroId: cobro.id } });
  const alumnoIds = cuotas.map((c) => c.alumnoId);
  const usuarios = alumnoIds.length
    ? await prisma.usuario.findMany({
        where: { id: { in: alumnoIds } },
        select: { id: true, fullName: true, username: true }
      })
    : [];
  const nombrePorId = new Map(usuarios.map((u) => [u.id, u.fullName || u.username || u.id]));
  res.json({
    cobro,
    cuotas: cuotas.map((c) => ({ ...c, alumnoNombre: nombrePorId.get(c.alumnoId) ?? c.alumnoId }))
  });
});

// POST /api/cobros/:id/publicar — genera una CuotaAlumno por cada
// destinatario (alumnos STUDENT de un aula, y/o una lista explícita de
// alumnoIds) y pasa el cobro a "publicado". Sólo desde "borrador"
// (no re-publicable: agregar destinatarios a un cobro ya publicado queda
// para una iteración futura, evita choques con el índice único).
cobros.post("/api/cobros/:id/publicar", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const cobro = await prisma.cobroEscuela.findFirst({ where: { id: req.params.id as string } });
  if (!cobro) return res.status(404).json({ error: "cobro no encontrado" });
  if (!puedeGestionarEscuela(user, cobro.escuelaId)) {
    return res.status(403).json({ error: "forbidden" });
  }
  if (cobro.estado !== "borrador") {
    return res.status(409).json({ error: `el cobro ya está en estado ${cobro.estado}` });
  }
  // Publicar es emitir cuotas a familias: exige escuela verificada Y que
  // quien publica sea el directivo principal o tenga la delegación.
  if (await bloquearSiNoVerificada(res, cobro.escuelaId)) return;
  if (!(await puedeEmitirCobros(user, cobro.escuelaId))) {
    return res.status(403).json({ error: "sin permiso de cobro en esta escuela", code: "SIN_DELEGACION_COBROS" });
  }

  const parsed = CobroPublicarSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "payload inválido", issues: parsed.error.issues });
  }

  const alumnoIds = new Set<string>(parsed.data.alumnoIds ?? []);
  if (parsed.data.aulaId) {
    const miembros = await prisma.claseMiembro.findMany({
      where: { claseId: parsed.data.aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() },
      select: { usuarioId: true }
    });
    miembros.forEach((m) => alumnoIds.add(m.usuarioId));
  }
  if (alumnoIds.size === 0) {
    return res.status(400).json({ error: "no se resolvió ningún alumno destinatario" });
  }

  // Auto-resolver `pagadorId`: si el alumno tiene un vínculo padre/madre
  // aprobado, la cuota queda visible directamente para ese padre además
  // del propio alumno (GET /api/cuotas/mias).
  const vinculos = await prisma.progresoModuloVinculo.findMany({
    where: { childId: { in: [...alumnoIds] }, estado: "aprobado" }
  });
  const pagadorPorAlumno = new Map(vinculos.map((v) => [v.childId, v.parentId]));

  const nowIso = now();
  const montosPersonalizados = parsed.data.montosPersonalizados ?? {};
  const cuotas = await Promise.all(
    [...alumnoIds].map((alumnoId) =>
      prisma.cuotaAlumno.create({
        data: {
          id: randomUUID(),
          cobroId: cobro.id,
          alumnoId,
          pagadorId: pagadorPorAlumno.get(alumnoId) ?? null,
          estado: "pendiente",
          montoFinal: montosPersonalizados[alumnoId] ?? cobro.montoUnitario,
          createdAt: nowIso,
          updatedAt: nowIso
        }
      })
    )
  );

  await prisma.cobroEscuela.update({
    where: { id: cobro.id },
    data: { estado: "publicado", updatedAt: nowIso }
  });

  res.json({ ok: true, cobroId: cobro.id, cuotasCreadas: cuotas.length });
});

// GET /api/cuotas/mias — la familia ve sus cuotas: propias (alumno) o de
// sus hijos vinculados (padre/madre aprobado), o donde figure como
// pagador explícito.
cobros.get("/api/cuotas/mias", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const requesterId = getRequesterId(user);
  if (!requesterId) return res.status(401).json({ error: "no autenticado" });

  const vinculos = await prisma.progresoModuloVinculo.findMany({
    where: { parentId: requesterId, estado: "aprobado" },
    select: { childId: true }
  });
  const childIds = vinculos.map((v) => v.childId);

  const cuotas = await prisma.cuotaAlumno.findMany({
    where: {
      OR: [
        { alumnoId: requesterId },
        { pagadorId: requesterId },
        ...(childIds.length > 0 ? [{ alumnoId: { in: childIds } }] : [])
      ]
    },
    orderBy: { createdAt: "desc" }
  });
  const cobroIds = [...new Set(cuotas.map((c) => c.cobroId))];
  const cobrosDocs = cobroIds.length
    ? await prisma.cobroEscuela.findMany({ where: { id: { in: cobroIds } } })
    : [];
  const cobroPorId = new Map(cobrosDocs.map((c) => [c.id, c]));

  res.json({
    items: cuotas.map((c) => ({
      ...c,
      cobro: cobroPorId.get(c.cobroId) ?? null
    }))
  });
});

// POST /api/cuotas/:id/checkout — crea (o reutiliza) el intento de pago
// de una cuota. Si la escuela conectó una pasarela (`EscuelaPasarela`
// activa), usa su `createCheckout` real (Fase 3: MP/Cryptomus) y
// devuelve la `url` para redirigir a la familia. Si no, cae a
// `provider: "manual"` (sin url — el flujo se confirma a mano, staff-only,
// vía `POST .../confirmar-pago`) para no bloquear el cobro.
cobros.post("/api/cuotas/:id/checkout", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const requesterId = getRequesterId(user);
  if (!requesterId) return res.status(401).json({ error: "no autenticado" });

  const cuota = await prisma.cuotaAlumno.findFirst({ where: { id: req.params.id as string } });
  if (!cuota) return res.status(404).json({ error: "cuota no encontrada" });

  const esAlumno = cuota.alumnoId === requesterId;
  const esPagador = cuota.pagadorId === requesterId;
  let esPadreVinculado = false;
  if (!esAlumno && !esPagador) {
    const vinculo = await prisma.progresoModuloVinculo.findFirst({
      where: { parentId: requesterId, childId: cuota.alumnoId, estado: "aprobado" }
    });
    esPadreVinculado = Boolean(vinculo);
  }
  if (!esAlumno && !esPagador && !esPadreVinculado) {
    return res.status(403).json({ error: "forbidden" });
  }
  if (cuota.estado === "pagada" || cuota.estado === "anulada") {
    return res.status(409).json({ error: `la cuota ya está ${cuota.estado}` });
  }

  const cobro = await prisma.cobroEscuela.findFirst({ where: { id: cuota.cobroId } });
  if (!cobro) return res.status(404).json({ error: "cobro no encontrado" });

  const preferido = typeof req.body?.provider === "string" ? req.body.provider : null;
  const pasarelaCruda = await prisma.escuelaPasarela.findFirst({
    where: { escuelaId: cobro.escuelaId, activa: true, ...(preferido ? { provider: preferido } : {}) }
  });
  // Cryptomus sólo si el admin de plataforma lo habilitó para ESTA escuela:
  // es el único camino donde VB custodia fondos de terceros (liquida con
  // comisión pero dentro de su propia cuenta, y paga a la escuela a mano).
  // Si no está habilitado, el cobro cae a "manual" en vez de usarlo.
  const escuelaDelCobro = await prisma.escuela.findFirst({ where: { id: cobro.escuelaId } });
  const pasarela =
    pasarelaCruda?.provider === "cryptomus" && !escuelaDelCobro?.cryptomusHabilitado
      ? null
      : pasarelaCruda;

  // Arma un checkout contra el provider real (o cae a "manual" si no hay
  // pasarela / falla). MP no persiste la `url` de la preferencia — hay que
  // volver a pedirla cada vez que el cliente la necesita.
  const armarCheckout = async (): Promise<{ provider: string; providerRef: string; url: string | null }> => {
    let provider = "manual";
    let providerRef = `manual-${randomUUID()}`;
    let url: string | null = null;
    if (pasarela) {
      const adapter = getProvider(pasarela.provider);
      const escuela = adapter ? await prisma.escuela.findFirst({ where: { id: cobro.escuelaId } }) : null;
      if (adapter && escuela) {
        try {
          const checkout = await adapter.createCheckout({
            cuota: { id: cuota.id, montoFinal: cuota.montoFinal, moneda: cobro.moneda, concepto: cobro.concepto },
            escuela: {
              id: escuela.id,
              nombre: escuela.name,
              comisionPct: escuela.comisionPct ?? 0,
              cuentaConectadaId: pasarela.cuentaConectadaId,
              accessToken: accessTokenDesdeCredenciales(pasarela.credencialesCifradas)
            },
            backUrl: typeof req.body?.backUrl === "string" ? req.body.backUrl : ENV.APP_URL
          });
          provider = adapter.nombre;
          providerRef = checkout.providerRef;
          url = checkout.url;
        } catch (err) {
          // Un provider mal configurado (sin credenciales, escuela sin
          // conectar) no debe bloquear el cobro — cae a manual.
          console.warn(`[cobros] checkout con ${pasarela.provider} falló, cae a manual:`, err);
        }
      }
    }
    return { provider, providerRef, url };
  };

  // Idempotencia: si ya hay un Pago pendiente/en_proceso vigente para esta
  // cuota, no creamos otro — pero si es de un provider real (no "manual")
  // hay que regenerar la `url` (no se persiste) y actualizar el
  // `providerRef` en el mismo Pago para que el webhook/reconciliación
  // sigan encontrándolo.
  if (cuota.pagoId) {
    const existente = await prisma.pago.findFirst({ where: { id: cuota.pagoId } });
    if (existente && (existente.estado === "pendiente" || existente.estado === "en_proceso")) {
      if (existente.provider === "manual") {
        return res.json({ pago: existente, url: null });
      }
      const fresh = await armarCheckout();
      if (!fresh.url) {
        return res.json({ pago: existente, url: null });
      }
      const actualizado = await prisma.pago.update({
        where: { id: existente.id },
        data: { providerRef: fresh.providerRef, updatedAt: now() }
      });
      return res.json({ pago: actualizado, url: fresh.url });
    }
  }

  const { provider, providerRef, url } = await armarCheckout();
  const nowIso = now();
  const pago = await prisma.pago.create({
    data: {
      id: randomUUID(),
      provider,
      providerRef,
      estado: "pendiente",
      montoBruto: cuota.montoFinal,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });
  await prisma.cuotaAlumno.update({
    where: { id: cuota.id },
    data: { pagoId: pago.id, estado: "en_proceso", updatedAt: nowIso }
  });

  res.status(201).json({ pago, url });
});

// POST /api/cuotas/:id/confirmar-pago — reemplazo MANUAL (staff-only) del
// webhook del provider mientras la escuela no tiene pasarela conectada.
cobros.post("/api/cuotas/:id/confirmar-pago", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const cuota = await prisma.cuotaAlumno.findFirst({ where: { id: req.params.id as string } });
  if (!cuota) return res.status(404).json({ error: "cuota no encontrada" });
  const cobro = await prisma.cobroEscuela.findFirst({ where: { id: cuota.cobroId } });
  if (!cobro) return res.status(404).json({ error: "cobro no encontrado" });
  if (!puedeGestionarEscuela(user, cobro.escuelaId)) {
    return res.status(403).json({ error: "forbidden" });
  }
  if (await bloquearSiNoVerificada(res, cobro.escuelaId)) return;
  if (!(await puedeEmitirCobros(user, cobro.escuelaId))) {
    return res.status(403).json({ error: "sin permiso de cobro en esta escuela", code: "SIN_DELEGACION_COBROS" });
  }
  if (!cuota.pagoId) {
    return res.status(409).json({ error: "la cuota no tiene un pago iniciado (POST checkout primero)" });
  }
  const pago = await prisma.pago.findFirst({ where: { id: cuota.pagoId } });
  if (!pago) return res.status(404).json({ error: "pago no encontrado" });

  // Sin `montoReportado`: acá no hay pasarela que reporte nada, el staff
  // afirma que la plata entró por afuera. Por eso queda auditado con el
  // id real de quien lo afirma — es la ruta que más se presta a marcar
  // como pagada una cuota que nadie pagó.
  const resultado = await confirmarPago(pago, cuota, cobro, {
    actorId: getRequesterId(user) ?? "staff:desconocido"
  });
  res.json({ ok: true, ...resultado });
});

// POST /api/pasarelas/webhook/:provider — webhook real de cada pasarela
// (Fase 3). Necesita el body CRUDO para verificar la firma — ver el
// `express.raw` montado en index.ts para este prefijo antes de
// `express.json()` global.
cobros.post("/api/pasarelas/webhook/:provider", async (req, res) => {
  const adapter = getProvider(req.params.provider as string);
  if (!adapter) return res.status(404).json({ error: "provider desconocido" });

  const rawBody = Buffer.isBuffer(req.body)
    ? req.body.toString("utf8")
    : typeof req.body === "string"
      ? req.body
      : null;
  if (rawBody === null) return res.status(400).json({ error: "invalid payload" });

  const evento = adapter.verifyWebhook(rawBody, req.headers as Record<string, string | string[] | undefined>);
  if (!evento) return res.status(401).json({ error: "invalid signature" });

  const pago = await prisma.pago.findFirst({
    where: { provider: adapter.nombre, providerRef: evento.providerRef }
  });
  if (!pago) return res.status(404).json({ error: "pago no encontrado para ese providerRef" });

  if (evento.estado === "pagada") {
    const cuota = await prisma.cuotaAlumno.findFirst({ where: { pagoId: pago.id } });
    const cobro = cuota ? await prisma.cobroEscuela.findFirst({ where: { id: cuota.cobroId } }) : null;
    if (cuota && cobro) {
      // `montoBruto` es lo que la pasarela dice haber cobrado — si no
      // llega a `cuota.montoFinal`, confirmarPago manda el pago a
      // revisión en vez de saldar la cuota (pago parcial).
      await confirmarPago(pago, cuota, cobro, {
        montoReportado: evento.montoBruto,
        actorId: `system:webhook:${adapter.nombre}`
      });
    }
  } else if (evento.estado === "fallida") {
    await prisma.pago.update({ where: { id: pago.id }, data: { estado: "fallida", updatedAt: now() } });
  }

  res.json({ ok: true });
});

// PATCH /api/escuelas/:escuelaId/delegacion-cobros — el directivo PRINCIPAL
// habilita o quita el permiso de cobrar a otro directivo de su escuela.
//
// Hasta acá `Membresia.puedeCobrar` sólo se podía cambiar por SQL. La
// delegación habilita EMITIR y CONFIRMAR; conectar la pasarela sigue siendo
// exclusivo del principal, así que un delegado nunca puede redirigir la plata.
cobros.patch("/api/escuelas/:escuelaId/delegacion-cobros", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  const usuarioId = typeof req.body?.usuarioId === "string" ? req.body.usuarioId : "";
  const puedeCobrar = req.body?.puedeCobrar === true;
  if (!usuarioId) return res.status(400).json({ error: "usuarioId requerido" });

  if (!(await esDirectivoPrincipal(user, escuelaId))) {
    return res.status(403).json({
      error: "sólo el directivo principal delega cobros",
      code: "SOLO_DIRECTIVO_PRINCIPAL"
    });
  }

  const { count } = await prisma.membresia.updateMany({
    where: { usuarioId, escuelaId, rol: "DIRECTIVO", estado: "activa" },
    data: { puedeCobrar, updatedAt: now() }
  });
  if (count === 0) {
    return res.status(422).json({
      error: "el usuario no es directivo activo de esa escuela",
      code: "NO_ES_DIRECTIVO"
    });
  }

  await recordAuditLog({
    actorId: getRequesterId(user) ?? "desconocido",
    action: puedeCobrar ? "cobros.delegacion_otorgada" : "cobros.delegacion_revocada",
    targetType: "Membresia",
    targetId: `${usuarioId}:${escuelaId}`,
    metadata: { escuelaId, usuarioId }
  });
  return res.json({ ok: true, puedeCobrar });
});

// PATCH /api/escuelas/:escuelaId/cryptomus — el admin de plataforma elige con
// qué escuelas asume la custodia de fondos que implica Cryptomus.
cobros.patch("/api/escuelas/:escuelaId/cryptomus", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  if (!hasRole(user, "ADMIN")) {
    return res.status(403).json({ error: "sólo el admin de plataforma", code: "SOLO_ADMIN" });
  }
  const escuelaId = req.params.escuelaId as string;
  const habilitado = req.body?.habilitado === true;

  const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
  if (!escuela) return res.status(404).json({ error: "escuela no encontrada" });

  await prisma.escuela.update({
    where: { id: escuelaId },
    data: { cryptomusHabilitado: habilitado, updatedAt: now() }
  });
  await recordAuditLog({
    actorId: getRequesterId(user) ?? "admin",
    action: habilitado ? "escuela.cryptomus_habilitado" : "escuela.cryptomus_deshabilitado",
    targetType: "Escuela",
    targetId: escuelaId,
    metadata: { antes: escuela.cryptomusHabilitado }
  });
  return res.json({ ok: true, cryptomusHabilitado: habilitado });
});
