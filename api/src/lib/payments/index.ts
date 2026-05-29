import { randomUUID, createHmac, timingSafeEqual } from "crypto";

// NOTE: Invoice and Receipt collections have no Prisma model yet.
// These functions currently operate without persistence (return the
// constructed object). Add Prisma models for invoices/receipts to
// make the payment flow durable.
//
// PREREQUISITO para habilitar pagos enterprise: mientras no exista esa
// persistencia, POST /api/payments/initiate queda gateado detrás del flag
// ENV.ENABLE_ENTERPRISE_PAYMENTS (default false). Recién al persistir
// Invoice/Receipt en Prisma tiene sentido prender el flag. Ver
// api/src/routes/payments.ts y docs/pagos/enterprise.md.

export const PAYMENT_STATUSES = ["PENDING", "PAID", "FAILED"] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export type Invoice = {
  invoiceId: string;
  schoolId: string;
  billingCycleId?: string | null;
  amount: number;
  currency: string;
  status: PaymentStatus;
  provider: string;
  externalReference?: string | null;
  receiptId?: string | null;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown> | null;
};

export type Receipt = {
  receiptId: string;
  invoiceId: string;
  schoolId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  provider: string;
  externalReference?: string | null;
  issuedAt: string;
  paidAt?: string | null;
  metadata?: Record<string, unknown> | null;
};

export type CreateInvoiceInput = {
  schoolId: string;
  billingCycleId?: string | null;
  amount: number;
  currency?: string;
  provider?: string;
  externalReference?: string | null;
  metadata?: Record<string, unknown> | null;
};

export type PaymentWebhookPayload = {
  invoiceId: string;
  status: PaymentStatus;
  amount?: number;
  currency?: string;
  paidAt?: string;
  provider?: string;
  externalReference?: string | null;
  metadata?: Record<string, unknown> | null;
};

export const createInvoice = async (input: CreateInvoiceInput): Promise<Invoice> => {
  const now = new Date().toISOString();
  const invoice: Invoice = {
    invoiceId: randomUUID(),
    schoolId: input.schoolId,
    billingCycleId: input.billingCycleId ?? null,
    amount: input.amount,
    currency: input.currency ?? "USD",
    status: "PENDING",
    provider: input.provider ?? "manual",
    externalReference: input.externalReference ?? null,
    receiptId: null,
    createdAt: now,
    updatedAt: now,
    metadata: input.metadata ?? null
  };
  // TODO: persist to a Prisma Invoice model when available
  console.warn("[payments] createInvoice: no Prisma model – invoice not persisted", invoice.invoiceId);
  return invoice;
};

export const updateInvoiceStatus = async (
  invoice: Invoice,
  status: PaymentStatus,
  updates?: Partial<Invoice>
): Promise<Invoice> => {
  const updatedAt = new Date().toISOString();
  const nextInvoice: Invoice = {
    ...invoice,
    ...updates,
    status,
    updatedAt
  };
  // TODO: persist to a Prisma Invoice model when available
  console.warn("[payments] updateInvoiceStatus: no Prisma model – status not persisted", invoice.invoiceId);
  return nextInvoice;
};

export const createReceiptForInvoice = async (
  invoice: Invoice,
  payload: PaymentWebhookPayload
): Promise<Receipt> => {
  const receipt: Receipt = {
    receiptId: randomUUID(),
    invoiceId: invoice.invoiceId,
    schoolId: invoice.schoolId,
    amount: typeof payload.amount === "number" ? payload.amount : invoice.amount,
    currency: payload.currency ?? invoice.currency,
    status: payload.status,
    provider: payload.provider ?? invoice.provider,
    externalReference: payload.externalReference ?? invoice.externalReference ?? null,
    issuedAt: new Date().toISOString(),
    paidAt: payload.paidAt ?? new Date().toISOString(),
    metadata: payload.metadata ?? null
  };
  // TODO: persist to a Prisma Receipt model when available
  console.warn("[payments] createReceiptForInvoice: no Prisma model – receipt not persisted", receipt.receiptId);
  return receipt;
};

export const buildWebhookSignature = (payload: string, secret: string) =>
  createHmac("sha256", secret).update(payload).digest("hex");

export const validateWebhookSignature = (payload: string, signature: string, secret: string) => {
  if (!secret) return false;
  const expected = buildWebhookSignature(payload, secret);
  if (signature.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
};
