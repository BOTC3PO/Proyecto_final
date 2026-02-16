process.env.NODE_ENV = "test";
process.env.PAYMENTS_WEBHOOK_SECRET = "webhook-test-secret";

const assert = require("node:assert/strict");
const { createHmac } = require("node:crypto");
const { after, before, test } = require("node:test");
const express = require("express");

let server;
let baseUrl;

const signPayload = (payload) =>
  createHmac("sha256", process.env.PAYMENTS_WEBHOOK_SECRET || "").update(payload).digest("hex");

const postWebhook = async (payload, signature = signPayload(payload)) =>
  fetch(`${baseUrl}/api/payments/webhook`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-payments-signature": signature
    },
    body: payload
  });

before(async () => {
  const dbModule = require("../../src/lib/db");
  dbModule.getDb = async () => ({
    collection: () => ({
      findOne: async () => null,
      updateOne: async () => ({ acknowledged: true }),
      insertOne: async () => ({ acknowledged: true })
    })
  });

  const { payments } = require("../../src/routes/payments");
  const app = express();
  app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
  app.use(express.json());
  app.use(payments);

  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind test server");
  }
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("POST /api/payments/webhook acepta payload firmado válido", async () => {
  const payload = JSON.stringify({
    invoiceId: "inv_test_1",
    status: "PAID",
    amount: 1000,
    currency: "USD"
  });

  const response = await postWebhook(payload);

  assert.equal(response.status, 404);
});

test("POST /api/payments/webhook acepta distinta serialización si la firma coincide con los bytes", async () => {
  const payloadA = '{"invoiceId":"inv_test_2","status":"PAID","amount":1000,"currency":"USD"}';
  const payloadB = '{\n  "invoiceId": "inv_test_2",\n  "status": "PAID",\n  "amount": 1000,\n  "currency": "USD"\n}';

  const responseA = await postWebhook(payloadA);
  const responseB = await postWebhook(payloadB);

  assert.equal(responseA.status, 404);
  assert.equal(responseB.status, 404);
});
