import { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import {
  createInvoice,
  createReceiptForInvoice,
  PAYMENT_STATUSES,
  validateWebhookSignature,
  type PaymentStatus,
  type PaymentWebhookPayload
} from "../lib/payments";
import { recordAuditLog } from "../lib/audit-log";
import { ENTERPRISE_FEATURES, requireEnterpriseFeature, resolveSchoolIdFromRequest } from "../lib/entitlements";
import { requireUser } from "../lib/user-auth";

export const payments = Router();

const resolveSchoolId = (req: { user?: { schoolId?: string | null; escuelaId?: unknown } }, res: any) => {
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
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null; escuelaId?: unknown } }, res);
    if (!schoolId) return;
    const billingCycleId = typeof req.body?.billingCycleId === "string" ? req.body.billingCycleId : null;
    const db = await getDb();
    let billingCycle: { _id?: { toString?: () => string }; schoolId?: string; total?: number } | null = null;
    if (billingCycleId) {
      const billingCycleObjectId = toObjectId(billingCycleId);
      billingCycle = await db
        .collection("enterprise_billing_cycles")
        .findOne(billingCycleObjectId ? { _id: billingCycleObjectId } : { _id: billingCycleId });
      if (!billingCycle || (billingCycle.schoolId && billingCycle.schoolId !== schoolId)) {
        res.status(404).json({ error: "billing cycle not found" });
        return;
      }
    }
    const amount = typeof req.body?.amount === "number" ? req.body.amount : billingCycle?.total ?? 0;
    if (!Number.isFinite(amount) || amount <= 0) {
      res.status(400).json({ error: "amount is required" });
      return;
    }
    const invoice = await createInvoice(db, {
      schoolId,
      billingCycleId: billingCycle?._id?.toString?.() ?? billingCycleId,
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
  const payloadString = JSON.stringify(req.body ?? {});
  if (!validateWebhookSignature(payloadString, signature, ENV.PAYMENTS_WEBHOOK_SECRET)) {
    res.status(401).json({ error: "invalid signature" });
    return;
  }
  const payload = req.body as PaymentWebhookPayload;
  if (!payload?.invoiceId || typeof payload.invoiceId !== "string") {
    res.status(400).json({ error: "invoiceId required" });
    return;
  }
  const status = parsePaymentStatus(payload.status);
  if (!status) {
    res.status(400).json({ error: "invalid status" });
    return;
  }
  const db = await getDb();
  const invoice = await db.collection("invoices").findOne({ invoiceId: payload.invoiceId });
  if (!invoice) {
    res.status(404).json({ error: "invoice not found" });
    return;
  }
  const updates = {
    provider: typeof payload.provider === "string" ? payload.provider : invoice.provider,
    externalReference:
      typeof payload.externalReference === "string" ? payload.externalReference : invoice.externalReference ?? null,
    metadata: typeof payload.metadata === "object" && payload.metadata ? payload.metadata : invoice.metadata ?? null,
    amount: typeof payload.amount === "number" ? payload.amount : invoice.amount,
    currency: typeof payload.currency === "string" ? payload.currency : invoice.currency
  };
  await db
    .collection("invoices")
    .updateOne(
      { invoiceId: payload.invoiceId },
      { $set: { ...updates, status, updatedAt: new Date().toISOString() } }
    );
  if (status === "PAID") {
    await createReceiptForInvoice(db, { ...invoice, ...updates }, payload);
  }
  res.json({ ok: true });
});

payments.get(
  "/api/enterprise/payments",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CONTRACTS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null; escuelaId?: unknown } }, res);
    if (!schoolId) return;
    const limit = Math.min(Number(req.query.limit ?? 20) || 20, 100);
    const offset = Number(req.query.offset ?? 0) || 0;
    const status = parsePaymentStatus(req.query.status);
    const db = await getDb();
    const invoiceFilter = {
      schoolId,
      ...(status ? { status } : {})
    };
    const invoices = await db
      .collection("invoices")
      .find(invoiceFilter)
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray();
    const invoiceIds = invoices.map((invoice) => invoice.invoiceId);
    const receipts = invoiceIds.length
      ? await db.collection("receipts").find({ invoiceId: { $in: invoiceIds } }).toArray()
      : [];
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
      metadata: { schoolId, count: invoices.length, status: status ?? "all" }
    });
    res.json({ invoices, receipts, limit, offset });
  }
);
