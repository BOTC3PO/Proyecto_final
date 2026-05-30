import { Router } from "express";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import {
  createInvoice,
  createReceiptForInvoice,
  PAYMENT_STATUSES,
  validateWebhookSignature,
  type Invoice,
  type PaymentStatus,
  type PaymentWebhookPayload,
  type Receipt
} from "../lib/payments";
import { recordAuditLog } from "../lib/audit-log";
import { ENTERPRISE_FEATURES, requireEnterpriseFeature, resolveSchoolIdFromRequest } from "../lib/entitlements";
import { requireUser } from "../lib/user-auth";

export const payments = Router();

const resolveSchoolId = (req: { user?: { schoolId?: string | null } }, res: any) => {
  const schoolId = resolveSchoolIdFromRequest(req);
  if (!schoolId) {
    res.status(403).json({ error: "School not assigned" });
    return null;
  }
  return schoolId;
};

const parsePaymentStatus = (value: unknown): PaymentStatus | null => {
  if (typeof value !== "string") return null;
  return PAYMENT_STATUSES.includes(value as PaymentStatus) ? (value as PaymentStatus) : null;
};

payments.post(
  "/api/payments/initiate",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CONTRACTS),
  async (req, res) => {
    // Gateado: sin un modelo de persistencia (Invoice/Receipt en Prisma), iniciar
    // un cobro no quedaría registrado → riesgo de cobrar sin rastro. Hasta que
    // exista esa persistencia el endpoint queda deshabilitado por flag.
    // Ver docs/pagos/enterprise.md y api/src/lib/payments/index.ts.
    if (!ENV.ENABLE_ENTERPRISE_PAYMENTS) {
      res.status(501).json({
        error: "enterprise_payments_no_disponible",
        mensaje:
          "Los pagos enterprise no están disponibles aún (falta persistencia de invoices/receipts).",
      });
      return;
    }
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const billingCycleId = typeof req.body?.billingCycleId === "string" ? req.body.billingCycleId : null;
    let billingCycle: { id?: string; schoolId?: string; total?: number } | null = null;
    if (billingCycleId) {
      const row = await prisma.enterpriseBillingCycle.findFirst({ where: { id: billingCycleId } });
      if (row) {
        try {
          billingCycle = { id: row.id, ...JSON.parse(row.json) };
        } catch {
          billingCycle = { id: row.id };
        }
      }
      if (!billingCycle || (billingCycle.schoolId && billingCycle.schoolId !== schoolId)) {
        res.status(404).json({ error: "billing cycle not found" });
        return;
      }
    }
    const amount = typeof req.body?.amount === "number" ? req.body.amount : (billingCycle as any)?.total ?? 0;
    if (!Number.isFinite(amount) || amount <= 0) {
      res.status(400).json({ error: "amount is required" });
      return;
    }
    const invoice = await createInvoice({
      schoolId,
      billingCycleId: billingCycle?.id ?? billingCycleId,
      amount,
      currency: typeof req.body?.currency === "string" ? req.body.currency : "USD",
      provider: typeof req.body?.provider === "string" ? req.body.provider : "manual",
      externalReference:
        typeof req.body?.externalReference === "string" ? req.body.externalReference : null,
      metadata: typeof req.body?.metadata === "object" && req.body?.metadata ? req.body.metadata : null
    });
    res.status(201).json(invoice);
  }
);

payments.post("/api/payments/webhook", async (req, res) => {
  const signature = typeof req.headers["x-payments-signature"] === "string" ? req.headers["x-payments-signature"] : "";
  const rawPayload = Buffer.isBuffer(req.body)
    ? req.body
    : Buffer.isBuffer(req.rawBody)
      ? req.rawBody
      : null;

  if (!rawPayload) {
    res.status(400).json({ error: "invalid payload" });
    return;
  }

  const payloadString = rawPayload.toString("utf8");
  if (!validateWebhookSignature(payloadString, signature, ENV.PAYMENTS_WEBHOOK_SECRET)) {
    res.status(401).json({ error: "invalid signature" });
    return;
  }

  let payload: PaymentWebhookPayload;
  try {
    payload = JSON.parse(payloadString) as PaymentWebhookPayload;
  } catch {
    res.status(400).json({ error: "invalid payload" });
    return;
  }
  if (!payload?.invoiceId || typeof payload.invoiceId !== "string") {
    res.status(400).json({ error: "invoiceId required" });
    return;
  }
  const status = parsePaymentStatus(payload.status);
  if (!status) {
    res.status(400).json({ error: "invalid status" });
    return;
  }
  const invoiceRow = await prisma.enterpriseContrato.findFirst({ where: { id: payload.invoiceId } });
  if (!invoiceRow) {
    res.status(404).json({ error: "invoice not found" });
    return;
  }
  let invoice: Invoice;
  try {
    invoice = { ...JSON.parse(invoiceRow.json), invoiceId: invoiceRow.id } as Invoice;
  } catch {
    res.status(500).json({ error: "invalid invoice data" });
    return;
  }
  const updates: Partial<Invoice> = {
    provider: typeof payload.provider === "string" ? payload.provider : invoice.provider,
    externalReference:
      typeof payload.externalReference === "string" ? payload.externalReference : invoice.externalReference ?? null,
    metadata: typeof payload.metadata === "object" && payload.metadata ? payload.metadata : invoice.metadata ?? null,
    amount: typeof payload.amount === "number" ? payload.amount : invoice.amount,
    currency: typeof payload.currency === "string" ? payload.currency : invoice.currency
  };
  const updatedInvoice: Invoice = { ...invoice, ...updates, status, updatedAt: new Date().toISOString() };
  await prisma.enterpriseContrato.updateMany({
    where: { id: payload.invoiceId },
    data: { json: JSON.stringify(updatedInvoice) }
  });
  if (status === "PAID") {
    await createReceiptForInvoice(updatedInvoice, payload);
  }
  res.json({ ok: true });
});

payments.get(
  "/api/enterprise/payments",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CONTRACTS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const limit = Math.min(Number(req.query.limit ?? 20) || 20, 100);
    const offset = Number(req.query.offset ?? 0) || 0;
    const status = parsePaymentStatus(req.query.status);
    const allRows = await prisma.enterpriseContrato.findMany({ where: { schoolId } });
    let invoices = allRows.map((r) => {
      try { return { ...JSON.parse(r.json), id: r.id, invoiceId: r.id } as Invoice; } catch { return null; }
    }).filter((inv): inv is Invoice => inv !== null);
    if (status) {
      invoices = invoices.filter((inv) => inv.status === status);
    }
    invoices.sort((a, b) => (String(b.createdAt ?? "") < String(a.createdAt ?? "") ? -1 : 1));
    const pagedInvoices = invoices.slice(offset, offset + limit);
    const invoiceIds = pagedInvoices.map((inv) => inv.invoiceId);
    // Receipts are stored in enterprise_reportes (closest available json blob)
    const receiptRows = invoiceIds.length
      ? await prisma.enterpriseReporte.findMany()
      : [];
    const receipts = receiptRows
      .map((r) => { try { return JSON.parse(r.json) as Receipt; } catch { return null; } })
      .filter((r): r is Receipt => r !== null && invoiceIds.includes((r as any).invoiceId));
    const actorId =
      typeof req.user?.id === "string"
        ? req.user.id
        : typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : "unknown";
    await recordAuditLog({
      actorId,
      action: "enterprise.payments.view",
      targetType: "invoice",
      targetId: invoiceIds[0] ?? null,
      metadata: { schoolId, count: pagedInvoices.length, status: status ?? "all" }
    });
    res.json({ invoices: pagedInvoices, receipts, limit, offset });
  }
);
