/**
 * MULTIROL-01 (Fase 1) — el JWT lleva `roles[]` (nuevo) y `role`
 * (compat). El código viejo que lee `role` debe seguir andando.
 */

import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { ENV } from "./env";
import { buildUserContextFromClaims, createAccessToken, verifyToken, type TokenClaims } from "./auth-token";

const sign = (data: string, secret: string) =>
  crypto.createHmac("sha256", secret).update(data).digest("base64url");

const buildToken = (payload: TokenClaims, secret: string) => {
  const headerPart = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payloadPart = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signingInput = `${headerPart}.${payloadPart}`;
  return `${signingInput}.${sign(signingInput, secret)}`;
};

const decodePayload = (token: string): Record<string, unknown> => {
  const [, payloadPart] = token.split(".");
  return JSON.parse(Buffer.from(payloadPart, "base64url").toString("utf8"));
};

test("MULTIROL-01: createAccessToken con roles[] emite el array en el JWT", () => {
  const access = createAccessToken({ id: "u1", role: "TEACHER", roles: ["TEACHER", "USER"] });
  const payload = decodePayload(access.token);
  assert.deepEqual(payload.roles, ["TEACHER", "USER"]);
  // role compat: TEACHER (mayor jerarquía del array)
  assert.equal(payload.role, "TEACHER");
});

test("MULTIROL-01: createAccessToken sin roles[] promueve role al array", () => {
  const access = createAccessToken({ id: "u2", role: "ADMIN" });
  const payload = decodePayload(access.token);
  assert.deepEqual(payload.roles, ["ADMIN"]);
  assert.equal(payload.role, "ADMIN");
});

test("MULTIROL-01: createAccessToken con role=USER + roles=[TEACHER,USER] → role compat = TEACHER", () => {
  const access = createAccessToken({ id: "u3", role: "USER", roles: ["TEACHER", "USER"] });
  const payload = decodePayload(access.token);
  // El role compat es la mayor jerarquía, NO el singular entrante.
  assert.equal(payload.role, "TEACHER");
  assert.deepEqual(payload.roles, ["TEACHER", "USER"]);
});

test("MULTIROL-01: buildUserContextFromClaims propaga roles[]", () => {
  const ctx = buildUserContextFromClaims({
    sub: "u4",
    iat: 1,
    exp: 2,
    role: "TEACHER",
    roles: ["TEACHER", "USER"]
  });
  assert.deepEqual(ctx.roles, ["TEACHER", "USER"]);
  assert.equal(ctx.role, "TEACHER");
});

test("MULTIROL-01: buildUserContextFromClaims promueve role a roles[] si solo viene el singular", () => {
  const ctx = buildUserContextFromClaims({
    sub: "u5",
    iat: 1,
    exp: 2,
    role: "ADMIN"
  });
  assert.deepEqual(ctx.roles, ["ADMIN"]);
  assert.equal(ctx.role, "ADMIN");
});

test("MULTIROL-01: buildUserContextFromClaims con token viejo (sin roles) sigue funcionando", () => {
  // Simula un JWT emitido antes de Fase 1: solo tiene `role`.
  const ctx = buildUserContextFromClaims({
    sub: "u6",
    iat: 1,
    exp: 2,
    role: "USER"
  });
  // Compat: el código viejo que lee ctx.role sigue viendo "USER".
  assert.equal(ctx.role, "USER");
  // Y las funciones que miran roles[] encuentran ["USER"].
  assert.deepEqual(ctx.roles, ["USER"]);
});

test("MULTIROL-01: verifyToken acepta un JWT con roles[]", () => {
  const now = Math.floor(Date.now() / 1000);
  const token = buildToken(
    {
      sub: "u7",
      iat: now,
      exp: now + 60,
      typ: "access",
      role: "TEACHER",
      roles: ["TEACHER", "USER"]
    },
    ENV.JWT_SECRET
  );
  const result = verifyToken(token, "access");
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.payload.role, "TEACHER");
    assert.deepEqual(result.payload.roles, ["TEACHER", "USER"]);
  }
});
