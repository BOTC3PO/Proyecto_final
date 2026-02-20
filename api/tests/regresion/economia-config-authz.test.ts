process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `economia_config_authz_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, test } from "node:test";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { createAccessToken } from "../../src/lib/auth-token";

let client: MongoClient;
let server: Server;
let baseUrl: string;
let schoolId: string;
let adminId: ObjectId;
let studentId: ObjectId;

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  schoolId = "school-config-authz";
  adminId = new ObjectId();
  studentId = new ObjectId();

  await db.collection("escuelas").insertOne({
    _id: schoolId,
    plan: "ENTERPRISE_PLUS",
    subscriptionStatus: "ACTIVE"
  });

  await db.collection("usuarios").insertMany([
    {
      _id: adminId,
      email: "admin@escuela.com",
      role: "ADMIN",
      escuelaId: schoolId
    },
    {
      _id: studentId,
      email: "student@escuela.com",
      role: "STUDENT",
      escuelaId: schoolId
    }
  ]);

  await db.collection("economia_config").insertOne({
    id: "general",
    moneda: {
      codigo: "TOK",
      nombre: "Tokens",
      simbolo: "T"
    },
    tasas: {
      pf: 0,
      fci: 0
    },
    limites: {
      emisionDiaria: 1000,
      recompensaMaxima: 100,
      recompensaDiaria: 500
    },
    inflacion: {
      tasa: 0,
      activa: false
    },
    hiperinflacion: {
      tasa: 0,
      activa: false,
      aceleracion: 2
    },
    deflacion: {
      tasa: 0,
      activa: false
    },
    rankingFactors: [1, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5],
    updatedAt: new Date().toISOString()
  });

  const { economia } = await import("../../src/routes/economia");
  const app = express();
  app.use(express.json());
  app.use(economia);

  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Failed to bind test server");
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  if (client) {
    await client.db(process.env.DB_NAME).dropDatabase();
    await client.close();
  }
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("PATCH /api/economia/config requiere autenticación", async () => {
  const response = await fetch(`${baseUrl}/api/economia/config`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ inflacion: { activa: true, tasa: 0.1 } })
  });

  const body = await response.json();
  assert.equal(response.status, 401);
  assert.equal(body?.error, "Missing admin authentication");
});

test("PATCH /api/economia/config rechaza usuarios no admin", async () => {
  const studentToken = createAccessToken({
    id: studentId.toString(),
    role: "STUDENT",
    schoolId
  }).token;

  const response = await fetch(`${baseUrl}/api/economia/config`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${studentToken}`
    },
    body: JSON.stringify({ inflacion: { activa: true, tasa: 0.1 } })
  });

  const body = await response.json();
  assert.equal(response.status, 403);
  assert.equal(body?.error, "Admin role required");
});

test("PATCH /api/economia/config permite actualización para admin", async () => {
  const adminToken = createAccessToken({
    id: adminId.toString(),
    role: "ADMIN",
    schoolId
  }).token;

  const response = await fetch(`${baseUrl}/api/economia/config`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${adminToken}`
    },
    body: JSON.stringify({
      moneda: {
        codigo: "NXT",
        nombre: "Next Token",
        simbolo: "N"
      },
      inflacion: {
        activa: true,
        tasa: 0.15
      }
    })
  });

  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body?.moneda?.codigo, "NXT");
  assert.equal(body?.inflacion?.activa, true);
  assert.equal(body?.inflacion?.tasa, 0.15);
});
