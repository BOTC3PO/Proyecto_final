process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `governance_authz_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, beforeEach, test } from "node:test";
import express from "express";
import { MongoClient } from "mongodb";

let client: MongoClient;
let app: express.Express;
let server: Server;
let baseUrl: string;

const studentId = "student-1";
const parentId = "parent-1";
const adminId = "admin-1";
const governanceProposalId = "proposal-governance";

const postJson = (path: string, body: unknown) =>
  fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");

  const { governance } = await import("../../src/routes/governance");
  app = express();
  app.use(express.json());
  app.use(governance);

  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Failed to bind test server");
  baseUrl = `http://127.0.0.1:${address.port}`;
});

beforeEach(async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("proposals").deleteMany({});
  await db.collection("votes").deleteMany({});
  await db.collection("usuarios").deleteMany({});

  await db.collection("usuarios").insertMany([
    { id: studentId, rol: "USER" },
    { id: parentId, rol: "PARENT" },
    { id: adminId, rol: "ADMIN" }
  ]);

  await db.collection("proposals").insertOne({
    id: governanceProposalId,
    targetType: "POLICY",
    targetId: "school-1",
    proposalType: "GOVERNANCE_UPDATE_POLICY",
    payload: { key: "value" },
    level: "GOVERNANCE",
    createdBy: adminId,
    createdAt: new Date().toISOString(),
    status: "OPEN"
  });
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

test("STUDENT no puede crear propuesta de gobernanza crítica", async () => {
  const response = await postJson("/api/proposals", {
    targetType: "POLICY",
    targetId: "school-1",
    proposalType: "GOVERNANCE_UPDATE_POLICY",
    payload: { enabled: true },
    createdBy: studentId,
    level: "CONTENT"
  });

  assert.equal(response.status, 403);
  const body = await response.json();
  assert.equal(body?.error, "permission denied");
});

test("PARENT no puede crear propuesta de gobernanza crítica", async () => {
  const response = await postJson("/api/proposals", {
    targetType: "GOVERNANCE",
    targetId: "school-1",
    proposalType: "UPDATE_CONFIG",
    payload: { id: "config", items: [1] },
    createdBy: parentId,
    level: "CONTENT"
  });

  assert.equal(response.status, 403);
  const body = await response.json();
  assert.equal(body?.error, "permission denied");
});

test("STUDENT no puede votar una propuesta de nivel GOVERNANCE", async () => {
  const response = await postJson(`/api/proposals/${governanceProposalId}/vote`, {
    voterId: studentId,
    vote: "APPROVE"
  });

  assert.equal(response.status, 403);
  const body = await response.json();
  assert.equal(body?.error, "permission denied");

  const votes = await client.db(process.env.DB_NAME).collection("votes").find({ proposalId: governanceProposalId }).toArray();
  assert.equal(votes.length, 0);
});

test("PARENT no puede votar una propuesta de nivel GOVERNANCE", async () => {
  const response = await postJson(`/api/proposals/${governanceProposalId}/vote`, {
    voterId: parentId,
    vote: "REJECT"
  });

  assert.equal(response.status, 403);
  const body = await response.json();
  assert.equal(body?.error, "permission denied");

  const votes = await client.db(process.env.DB_NAME).collection("votes").find({ proposalId: governanceProposalId }).toArray();
  assert.equal(votes.length, 0);
});
