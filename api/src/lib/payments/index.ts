import { randomUUID, createHmac, timingSafeEqual } from "crypto";
import type { Db, ObjectId } from "mongodb";

export const PAYMENT_STATUSES = ["PENDING", "PAID", "FAILED"] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export type Invoice = {
  _id?: ObjectId;
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
  _id?: ObjectId;
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

export const createInvoice = async (db: Db, input: CreateInvoiceInput) => {
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
  await db.collection<Invoice>("invoices").insertOne(invoice);
  return invoice;
};

export const updateInvoiceStatus = async (
  db: Db,
  invoice: Invoice,
  status: PaymentStatus,
  updates?: Partial<Invoice>
) => {
  const updatedAt = new Date().toISOString();
  const nextInvoice: Invoice = {
    ...invoice,
    ...updates,
    status,
    updatedAt
  };
  await db
    .collection<Invoice>("invoices")
    .updateOne({ invoiceId: invoice.invoiceId }, { $set: nextInvoice });
  return nextInvoice;
};

export const createReceiptForInvoice = async (
  db: Db,
  invoice: Invoice,
  payload: PaymentWebhookPayload
) => {
  const existing = await db
    .collection<Receipt>("receipts")
    .findOne({ invoiceId: invoice.invoiceId });
  if (existing) return existing;
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
  await db.collection<Receipt>("receipts").insertOne(receipt);
  await db
    .collection<Invoice>("invoices")
    .updateOne(
      { invoiceId: invoice.invoiceId },
      { $set: { receiptId: receipt.receiptId, updatedAt: new Date().toISOString() } }
    );
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
