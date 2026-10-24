/**
 * Endurecimiento de los caminos de plata (2026-07-25). Cubre los tres
 * controles nuevos de `confirmarPago` — el único lugar donde una cuota
 * pasa a "pagada" — más el anti-replay del webhook de MP.
 *
 * Lo que se protege acá: que un pago parcial no salde una cuota entera,
 * que dos confirmaciones simultáneas no asienten la comisión dos veces,
 * que toda confirmación deje rastro, y que una firma de MP capturada no
 * sirva para siempre.
 */
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { beforeEach, test } from "node:test";
import { ENV } from "../../src/lib/env";
import { prisma, resetPrisma } from "./_helpers/setup";
import { confirmarPago } from "../../src/lib/cobros-confirmacion";
import { verificarWebhookMP } from "../../src/lib/mercadopago";

const ESCUELA = "esc-endurecimiento";
const nowIso = () => new Date().toISOString();

const seedPago = (opts: { id: string; estado?: string; montoFinal?: number }) => {
  const montoFinal = opts.montoFinal ?? 1000;
  const cobro = { id: `cobro-${opts.id}`, escuelaId: ESCUELA };
  const pago = {
    id: opts.id,
    provider: "cryptomus",
    providerRef: `ref-${opts.id}`,
    estado: opts.estado ?? "pendiente",
    montoBruto: montoFinal,
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
  const cuota = {
    id: `cuota-${opts.id}`,
    cobroId: cobro.id,
    alumnoId: "alumno-1",
    montoFinal,
    estado: "en_proceso",
    pagoId: pago.id,
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
  prisma.cobroEscuela.rows.push(cobro as never);
  prisma.pago.rows.push(pago as never);
  prisma.cuotaAlumno.rows.push(cuota as never);
  return { pago, cuota, cobro };
};

beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({ estadoVerificacion: "verificada",
    id: ESCUELA,
    name: "Escuela Endurecimiento",
    isDeleted: false,
    comisionPct: 6,
    comisionPctIntl: 1.5,
    createdAt: nowIso()
  });
});

test("un pago por menos de lo debido NO salda la cuota: queda en revisión y auditado", async () => {
  const { pago, cuota, cobro } = seedPago({ id: "pago-parcial", montoFinal: 1000 });

  const resultado = await confirmarPago(pago, cuota, cobro, {
    montoReportado: 400,
    actorId: "system:webhook:cryptomus"
  });

  assert.equal(resultado.montoInsuficiente, true);
  assert.equal(resultado.transaccion, null, "no se asienta comisión sobre un pago que no entró completo");
  assert.equal(prisma.pago.rows.find((p) => p.id === pago.id)?.estado, "en_revision");
  assert.notEqual(
    prisma.cuotaAlumno.rows.find((c) => c.id === cuota.id)?.estado,
    "pagada",
    "la cuota sigue impaga"
  );
  assert.equal(prisma.transaccionEscuela.rows.length, 0);

  const log = prisma.auditLog.rows.find((l) => l.action === "pago.monto_insuficiente");
  assert.ok(log, "el pago parcial tiene que quedar registrado");
  assert.equal(log?.actorId, "system:webhook:cryptomus");
});

test("cobrar de más sí confirma (el excedente no es motivo para dejar la cuota impaga)", async () => {
  const { pago, cuota, cobro } = seedPago({ id: "pago-excedente", montoFinal: 1000 });

  const resultado = await confirmarPago(pago, cuota, cobro, { montoReportado: 1200 });

  assert.equal(resultado.montoInsuficiente, undefined);
  assert.equal(prisma.cuotaAlumno.rows.find((c) => c.id === cuota.id)?.estado, "pagada");
});

test("una diferencia de centavos no manda a revisión (redondeo de la pasarela)", async () => {
  const { pago, cuota, cobro } = seedPago({ id: "pago-centavos", montoFinal: 1000 });

  await confirmarPago(pago, cuota, cobro, { montoReportado: 999.995 });

  assert.equal(prisma.cuotaAlumno.rows.find((c) => c.id === cuota.id)?.estado, "pagada");
});

test("dos confirmaciones del mismo pago asientan la comisión UNA sola vez", async () => {
  const { pago, cuota, cobro } = seedPago({ id: "pago-doble", montoFinal: 1000 });

  // Webhook y job de reconciliación llegando a la vez: ambos leyeron el
  // pago en "pendiente" antes de que ninguno lo actualizara.
  const [a, b] = await Promise.all([
    confirmarPago({ ...pago }, cuota, cobro, { actorId: "system:webhook:cryptomus" }),
    confirmarPago({ ...pago }, cuota, cobro, { actorId: "system:reconciliacion" })
  ]);

  assert.equal(prisma.transaccionEscuela.rows.length, 1, "una sola comisión asentada");
  assert.equal(
    [a, b].filter((r) => r.alreadyConfirmed).length,
    1,
    "exactamente una de las dos tiene que perder el compare-and-swap"
  );
  assert.equal(
    prisma.auditLog.rows.filter((l) => l.action === "pago.confirmado").length,
    1
  );
});

test("la confirmación manual del staff queda auditada con el id de quien la hizo", async () => {
  const { pago, cuota, cobro } = seedPago({ id: "pago-manual", montoFinal: 1000 });

  await confirmarPago(pago, cuota, cobro, { actorId: "directivo-42" });

  const log = prisma.auditLog.rows.find((l) => l.action === "pago.confirmado");
  assert.equal(log?.actorId, "directivo-42");
  assert.equal(log?.targetId, pago.id);
});

// ── Anti-replay del webhook de MP ────────────────────────────────

const firmaMP = (dataId: string, requestId: string, ts: number) => {
  const manifest = `id:${dataId};request-id:${requestId};ts:${ts};`;
  const v1 = createHmac("sha256", ENV.MP_WEBHOOK_SECRET).update(manifest).digest("hex");
  return `ts=${ts},v1=${v1}`;
};

test("verificarWebhookMP rechaza una firma válida pero vieja (replay)", () => {
  const secretoPrevio = ENV.MP_WEBHOOK_SECRET;
  ENV.MP_WEBHOOK_SECRET = "secreto-de-test";
  try {
    const ahora = Math.floor(Date.now() / 1000);
    assert.equal(verificarWebhookMP(firmaMP("1", "req-1", ahora), "req-1", "1"), true);

    // Misma firma, legítima en su momento, capturada hace media hora.
    const vieja = ahora - 30 * 60;
    assert.equal(verificarWebhookMP(firmaMP("1", "req-1", vieja), "req-1", "1"), false);
  } finally {
    ENV.MP_WEBHOOK_SECRET = secretoPrevio;
  }
});

test("verificarWebhookMP rechaza todo si MP está configurado pero falta el secreto", () => {
  const secretoPrevio = ENV.MP_WEBHOOK_SECRET;
  const tokenPrevio = ENV.MP_ACCESS_TOKEN;
  ENV.MP_WEBHOOK_SECRET = "";
  ENV.MP_ACCESS_TOKEN = "token-de-mp-cargado";
  try {
    // Antes esto devolvía `true` fuera de producción: un deploy con la
    // env mal seteada aceptaba cualquier webhook sin firma.
    assert.equal(verificarWebhookMP("ts=1,v1=loquesea", "req-1", "1"), false);
  } finally {
    ENV.MP_WEBHOOK_SECRET = secretoPrevio;
    ENV.MP_ACCESS_TOKEN = tokenPrevio;
  }
});
