/**
 * Interés por mora configurable por escuela y comisión escalonada (2026-10-28).
 *
 * Cubre:
 *  - El cálculo de la mora: tasa mensual o anual prorrateada por día, días de gracia, tope por período, y que
 *    las cooperadoras y los aportes solidarios no generen interés.
 *  - La comisión escalonada: 6 % de base, −1 por cuota de más de $100.000, −1 con 30 alumnos, −1 con 350,
 *    mínimo 3 % y tope de $40.000 por cuota; acuerdo particular, aportes (0 a 1 %) e internacional.
 *  - Las rutas: la dirección configura la mora con tope, la familia ve el interés antes de pagar, el pago
 *    congela cuota + interés y la comisión se calcula sin el interés.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { calcularMora, MORA_TASA_MAX, topesMora } from "../../src/lib/mora";
import { calcularComision, pctEscalonado, normalizarParamsComision } from "../../src/lib/comisiones";

const DIA = 24 * 60 * 60 * 1000;
const VENCE = "2026-10-01T00:00:00.000Z";
const despuesDe = (dias: number) => new Date(new Date(VENCE).getTime() + dias * DIA + 1000);
const mora = (extra: Partial<{ moraTasa: number; moraPeriodo: string; moraDiasGracia: number }> = {}) => ({
  moraActiva: true,
  moraTasa: 2,
  moraPeriodo: "mensual",
  moraDiasGracia: 0,
  ...extra
});

// ── Cálculo de la mora ────────────────────────────────────────────

test("mora: antes del vencimiento no hay interés", () => {
  const r = calcularMora(100_000, VENCE, mora(), { ahora: new Date("2026-09-30T12:00:00Z") });
  assert.deepEqual(r, { vencida: false, diasAtraso: 0, interesMora: 0, montoAPagar: 100_000 });
});

test("mora: 2 % mensual durante 15 días es el 1 % de la cuota", () => {
  const r = calcularMora(100_000, VENCE, mora(), { ahora: despuesDe(15) });
  assert.equal(r.diasAtraso, 15);
  assert.equal(r.interesMora, 1000);
  assert.equal(r.montoAPagar, 101_000);
});

test("mora: la tasa anual se prorratea sobre 365 días", () => {
  const r = calcularMora(100_000, VENCE, mora({ moraTasa: 24, moraPeriodo: "anual" }), { ahora: despuesDe(30) });
  assert.equal(r.interesMora, 1972.6);
});

test("mora: los días de gracia no se cobran", () => {
  const r = calcularMora(100_000, VENCE, mora({ moraDiasGracia: 10 }), { ahora: despuesDe(15) });
  assert.equal(r.diasAtraso, 5);
  assert.equal(r.interesMora, 333.33);
});

test("mora: una tasa guardada por encima del tope se recorta al tope del período", () => {
  const r = calcularMora(100_000, VENCE, mora({ moraTasa: 20 }), { ahora: despuesDe(30) });
  assert.equal(r.interesMora, 100_000 * (MORA_TASA_MAX.mensual / 100));
});

test("mora: el tope es 60 % anual o 2 veces la inflación anual, lo que sea mayor", () => {
  assert.deepEqual(topesMora(24), { anual: 60, mensual: 5 });
  assert.deepEqual(topesMora(120), { anual: 240, mensual: 20 });
  const r = calcularMora(100_000, VENCE, mora({ moraTasa: 20 }), { ahora: despuesDe(30), topes: topesMora(120) });
  assert.equal(r.interesMora, 20_000, "con inflación alta se permite más");
});

test("mora: cooperadora y aporte solidario vencen pero no generan interés", () => {
  for (const tipo of ["cooperadora", "aporte_solidario"]) {
    const r = calcularMora(10_000, VENCE, mora(), { tipo, ahora: despuesDe(40) });
    assert.equal(r.vencida, true);
    assert.equal(r.interesMora, 0);
  }
});

test("mora: con la mora apagada la cuota solo queda vencida", () => {
  const r = calcularMora(10_000, VENCE, { ...mora(), moraActiva: false }, { ahora: despuesDe(40) });
  assert.equal(r.vencida, true);
  assert.equal(r.montoAPagar, 10_000);
});

// ── Comisión escalonada ───────────────────────────────────────────

const SIN_ACUERDO = { comisionPct: null, comisionPctIntl: null };

test("comisión: 6 % de base y un punto menos por cada condición, con mínimo 3 %", () => {
  assert.equal(pctEscalonado(80_000, 10), 6);
  assert.equal(pctEscalonado(150_000, 10), 5);
  assert.equal(pctEscalonado(80_000, 30), 5);
  assert.equal(pctEscalonado(80_000, 350), 4);
  assert.equal(pctEscalonado(150_000, 350), 3);
  assert.equal(pctEscalonado(150_000, 350, normalizarParamsComision({ basePct: 5 })), 3);
});

test("comisión: nunca supera $40.000 por cuota", () => {
  const r = calcularComision(1_500_000, "mercadopago", SIN_ACUERDO, { alumnos: 0 });
  assert.equal(r.comisionPct, 5);
  assert.equal(r.comisionVB, 40_000);
  assert.equal(r.montoNeto, 1_460_000);
});

test("comisión: el acuerdo particular del administrador reemplaza la escalonada (sin bajar del 3 %)", () => {
  assert.equal(calcularComision(10_000, "manual", { comisionPct: 4, comisionPctIntl: null }).comisionVB, 400);
  assert.equal(calcularComision(10_000, "manual", { comisionPct: 1, comisionPctIntl: null }).comisionPct, 3);
});

test("comisión: cooperadoras y aportes usan el 0 a 1 % que eligió la institución", () => {
  const escuela = { ...SIN_ACUERDO, comisionPctAportes: 0.5 };
  assert.equal(calcularComision(10_000, "mercadopago", escuela, { tipo: "cooperadora" }).comisionVB, 50);
  assert.equal(calcularComision(10_000, "mercadopago", SIN_ACUERDO, { tipo: "aporte_solidario" }).comisionVB, 0);
});

test("comisión: los pagos internacionales siguen con su tarifa", () => {
  assert.equal(calcularComision(10_000, "cryptomus", SIN_ACUERDO).comisionPct, 1.5);
});

// ── Rutas ─────────────────────────────────────────────────────────

const ESCUELA = "esc-mora";
const DIRECTIVO = "directivo-mora";
const TEACHER = "teacher-mora";
const ALUMNO = "alumno-mora";
const AULA = "aula-mora";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { cobros } = await import("../../src/routes/cobros");
  const server = await startServer([cobros]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({
    estadoVerificacion: "verificada",
    id: ESCUELA,
    name: "Escuela Mora",
    isDeleted: false,
    comisionPct: null,
    comisionPctIntl: null,
    moraActiva: false,
    moraTasa: 2,
    moraPeriodo: "mensual",
    moraDiasGracia: 0,
    comisionPctAportes: 0,
    topeAporteLegal: null,
    createdAt: nowIso
  });
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  seedUser({ id: ALUMNO, role: "USER", schoolId: ESCUELA });
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: ESCUELA,
    name: "Aula mora",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DIRECTIVO,
    createdAt: nowIso
  });
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: ALUMNO, rolEnClase: "STUDENT" });
});

const tokenDirectivo = () => tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
const tokenAlumno = () => tokenFor({ id: ALUMNO, role: "USER", schoolId: ESCUELA });

const configurar = (body: Record<string, unknown>, token = tokenDirectivo()) =>
  jsonRequest(baseUrl, "PUT", `/api/escuelas/${ESCUELA}/config-cobros`, { token, body });

/** Cuota de $100.000 que venció hace `dias` días. */
const cuotaVencida = async (dias: number) => {
  const vencimiento = new Date(Date.now() - dias * DIA - 60_000).toISOString();
  const cobro = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token: tokenDirectivo(),
    body: { concepto: "Cuota septiembre", montoUnitario: 100_000, vencimiento }
  });
  assert.equal(cobro.status, 201, JSON.stringify(cobro.body));
  const id = (cobro.body as { id: string }).id;
  await jsonRequest(baseUrl, "POST", `/api/cobros/${id}/publicar`, { token: tokenDirectivo(), body: { aulaId: AULA } });
  return prisma.cuotaAlumno.rows.find((c) => c.alumnoId === ALUMNO)!;
};

test("config-cobros: la dirección elige tasa mensual o anual, dentro del tope", async () => {
  const mensual = await configurar({ moraActiva: true, moraTasa: 2, moraPeriodo: "mensual" });
  assert.equal(mensual.status, 200, JSON.stringify(mensual.body));
  assert.equal((mensual.body as { moraTasa: number }).moraTasa, 2);

  const anual = await configurar({ moraTasa: 24, moraPeriodo: "anual" });
  assert.equal(anual.status, 200);
  assert.equal((anual.body as { moraPeriodo: string }).moraPeriodo, "anual");

  const excesiva = await configurar({ moraTasa: 6, moraPeriodo: "mensual" });
  assert.equal(excesiva.status, 422);
  assert.equal((excesiva.body as { code: string }).code, "MORA_TASA_EXCEDIDA");

  const aportes = await configurar({ comisionPctAportes: 1.5 });
  assert.equal(aportes.status, 400, "la comisión de aportes no puede pasar del 1 %");
});

test("config-cobros: un docente no puede cambiarla", async () => {
  const res = await configurar({ moraActiva: true }, tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA }));
  assert.equal(res.status, 403);
});

test("cuotas/mias: la familia ve la cuota vencida con el interés del día", async () => {
  await configurar({ moraActiva: true, moraTasa: 2, moraPeriodo: "mensual" });
  const cuota = await cuotaVencida(15);
  const res = await jsonRequest(baseUrl, "GET", "/api/cuotas/mias", { token: tokenAlumno() });
  assert.equal(res.status, 200);
  const item = (res.body as { items: Array<{ id: string; estado: string; interesMora: number; montoAPagar: number }> })
    .items[0];
  assert.equal(item.estado, "vencida");
  assert.equal(item.interesMora, 1000);
  assert.equal(item.montoAPagar, 101_000);
  assert.equal(prisma.cuotaAlumno.rows.find((c) => c.id === cuota.id)?.estado, "vencida", "queda marcada en la base");
});

test("checkout + confirmar: el pago lleva cuota + interés y la comisión es solo sobre la cuota", async () => {
  await configurar({ moraActiva: true, moraTasa: 2, moraPeriodo: "mensual" });
  const cuota = await cuotaVencida(15);
  const checkout = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenAlumno() });
  assert.equal(checkout.status, 201, JSON.stringify(checkout.body));
  const pago = (checkout.body as { pago: { montoBruto: number; montoOriginal: number; interesMora: number } }).pago;
  assert.equal(pago.montoBruto, 101_000);
  assert.equal(pago.montoOriginal, 100_000);
  assert.equal(pago.interesMora, 1000);

  const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/confirmar-pago`, { token: tokenDirectivo() });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const tx = (res.body as { transaccion: { comisionVB: number; montoNeto: number } }).transaccion;
  // 6 % de $100.000 (escuela chica, cuota de $100.000 justos): el interés de $1.000 queda entero para la escuela.
  assert.equal(tx.comisionVB, 6000);
  assert.equal(tx.montoNeto, 95_000);
});

test("cobros: un aporte voluntario no puede superar el tope legal cargado", async () => {
  await configurar({ topeAporteLegal: 5000 });
  const res = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token: tokenDirectivo(),
    body: { tipo: "aporte_solidario", concepto: "Aporte solidario", montoUnitario: 8000 }
  });
  assert.equal(res.status, 422);
  assert.equal((res.body as { code: string }).code, "SUPERA_TOPE_APORTE");
});

test("config-cobros: con inflación alta cargada por el administrador, el tope sube", async () => {
  prisma.comisionConfig.rows.push({ id: "default", json: JSON.stringify({ inflacionAnualPct: 120 }), updatedAt: new Date().toISOString() } as never);
  const r = await configurar({ moraActiva: true, moraTasa: 15, moraPeriodo: "mensual" });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.equal((r.body as { limites: { moraTasaMax: { mensual: number } } }).limites.moraTasaMax.mensual, 20);
});
