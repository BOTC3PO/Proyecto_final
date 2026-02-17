import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { ENV } from "./env";
import { verifyToken, type TokenClaims } from "./auth-token";

const sign = (data: string, secret: string) =>
  crypto.createHmac("sha256", secret).update(data).digest("base64url");

const buildToken = (payload: TokenClaims, secret: string) => {
  const headerPart = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payloadPart = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signingInput = `${headerPart}.${payloadPart}`;
  return `${signingInput}.${sign(signingInput, secret)}`;
};

test("verifyToken accepts access and refresh tokens when secrets are equal", () => {
  const originalSecret = ENV.JWT_SECRET;
  const originalRefreshSecret = ENV.JWT_REFRESH_SECRET;

  ENV.JWT_SECRET = "same-secret";
  ENV.JWT_REFRESH_SECRET = "same-secret";

  try {
    const now = Math.floor(Date.now() / 1000);
    const accessToken = buildToken({ sub: "user-1", iat: now, exp: now + 60, typ: "access" }, ENV.JWT_SECRET);
    const refreshToken = buildToken({ sub: "user-1", iat: now, exp: now + 60, typ: "refresh" }, ENV.JWT_REFRESH_SECRET || ENV.JWT_SECRET);

    const accessResult = verifyToken(accessToken, "access");
    const refreshResult = verifyToken(refreshToken, "refresh");

    assert.equal(accessResult.ok, true);
    assert.equal(refreshResult.ok, true);
  } finally {
    ENV.JWT_SECRET = originalSecret;
    ENV.JWT_REFRESH_SECRET = originalRefreshSecret;
  }
});

test("verifyToken uses dedicated refresh secret when secrets are different", () => {
  const originalSecret = ENV.JWT_SECRET;
  const originalRefreshSecret = ENV.JWT_REFRESH_SECRET;

  ENV.JWT_SECRET = "access-secret-A";
  ENV.JWT_REFRESH_SECRET = "refresh-secret-B";

  try {
    const now = Math.floor(Date.now() / 1000);
    const accessToken = buildToken({ sub: "user-2", iat: now, exp: now + 60, typ: "access" }, ENV.JWT_SECRET);
    const refreshToken = buildToken({ sub: "user-2", iat: now, exp: now + 60, typ: "refresh" }, ENV.JWT_REFRESH_SECRET || ENV.JWT_SECRET);

    const accessResult = verifyToken(accessToken, "access");
    const refreshResult = verifyToken(refreshToken, "refresh");

    assert.equal(accessResult.ok, true);
    assert.equal(refreshResult.ok, true);

    const wrongTypeResult = verifyToken(refreshToken, "access");
    assert.deepEqual(wrongTypeResult, { ok: false, error: "Invalid authentication token" });
  } finally {
    ENV.JWT_SECRET = originalSecret;
    ENV.JWT_REFRESH_SECRET = originalRefreshSecret;
  }
});

test("verifyToken keeps consistent error messages for invalid and expired tokens", () => {
  const originalSecret = ENV.JWT_SECRET;
  const originalRefreshSecret = ENV.JWT_REFRESH_SECRET;

  ENV.JWT_SECRET = "access-secret";
  ENV.JWT_REFRESH_SECRET = "refresh-secret";

  try {
    const now = Math.floor(Date.now() / 1000);
    const expiredAccess = buildToken(
      {
        sub: "user-3",
        iat: now - 20,
        exp: now - 10,
        typ: "access"
      },
      ENV.JWT_SECRET
    );

    const expiredResult = verifyToken(expiredAccess, "access");
    assert.deepEqual(expiredResult, { ok: false, error: "Authentication token expired" });

    const invalidSignatureToken = `${expiredAccess.slice(0, -1)}x`;
    const invalidResult = verifyToken(invalidSignatureToken, "access");
    assert.deepEqual(invalidResult, { ok: false, error: "Invalid authentication token" });
  } finally {
    ENV.JWT_SECRET = originalSecret;
    ENV.JWT_REFRESH_SECRET = originalRefreshSecret;
  }
});
