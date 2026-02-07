import crypto from "node:crypto";
import type { Request } from "express";
import { ENV } from "./env";
import { toObjectId } from "./ids";

type TokenType = "access" | "refresh";

export type TokenClaims = {
  sub: string;
  email?: string;
  username?: string;
  role?: string;
  guestOnboardingStatus?: string | null;
  schoolId?: string | null;
  escuelaId?: string | null;
  fullName?: string | null;
  iss?: string;
  aud?: string;
  iat: number;
  exp: number;
  typ?: TokenType;
};

export type TokenUser = {
  id: string;
  email?: string;
  username?: string;
  role?: string;
  guestOnboardingStatus?: string | null;
  schoolId?: string | null;
  escuelaId?: string | null;
  fullName?: string | null;
};

const ACCESS_TTL_SECONDS = ENV.JWT_ACCESS_TTL_SECONDS;
const REFRESH_TTL_SECONDS = ENV.JWT_REFRESH_TTL_SECONDS;

const base64UrlEncode = (input: Buffer | string) => Buffer.from(input).toString("base64url");
const base64UrlDecode = (input: string) => Buffer.from(input, "base64url").toString("utf8");

const sign = (data: string, secret: string) =>
  crypto.createHmac("sha256", secret).update(data).digest("base64url");

const timingSafeEquals = (a: string, b: string) => {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
};

const buildToken = (payload: TokenClaims, secret: string) => {
  const header = { alg: "HS256", typ: "JWT" };
  const headerPart = base64UrlEncode(JSON.stringify(header));
  const payloadPart = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${headerPart}.${payloadPart}`;
  const signature = sign(signingInput, secret);
  return `${signingInput}.${signature}`;
};

const parseToken = (token: string) => {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [headerPart, payloadPart, signature] = parts;
  try {
    const header = JSON.parse(base64UrlDecode(headerPart)) as { alg?: string; typ?: string };
    const payload = JSON.parse(base64UrlDecode(payloadPart)) as TokenClaims;
    return { header, payload, signature, signingInput: `${headerPart}.${payloadPart}` };
  } catch {
    return null;
  }
};

export const extractTokenFromRequest = (req: Request): string | null => {
  const authorization = req.header("authorization");
  if (!authorization) return null;
  const [scheme, token] = authorization.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !token) return null;
  return token.trim();
};

export const verifyToken = (token: string, expectedType?: TokenType) => {
  if (!token) {
    return { ok: false as const, error: "Missing authentication token" };
  }
  const parsed = parseToken(token);
  if (!parsed || parsed.header?.alg !== "HS256") {
    return { ok: false as const, error: "Invalid authentication token" };
  }
  const expectedSignature = sign(parsed.signingInput, ENV.JWT_SECRET);
  if (!timingSafeEquals(parsed.signature, expectedSignature)) {
    return { ok: false as const, error: "Invalid authentication token" };
  }
  const { payload } = parsed;
  if (!payload || typeof payload.exp !== "number") {
    return { ok: false as const, error: "Invalid authentication token" };
  }
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp <= now) {
    return { ok: false as const, error: "Authentication token expired" };
  }
  if (ENV.JWT_ISSUER && payload.iss !== ENV.JWT_ISSUER) {
    return { ok: false as const, error: "Invalid token issuer" };
  }
  if (ENV.JWT_AUDIENCE && payload.aud !== ENV.JWT_AUDIENCE) {
    return { ok: false as const, error: "Invalid token audience" };
  }
  if (expectedType && payload.typ !== expectedType) {
    return { ok: false as const, error: "Invalid authentication token" };
  }
  return { ok: true as const, payload };
};

export const createAccessToken = (user: TokenUser) => {
  const now = Math.floor(Date.now() / 1000);
  const exp = now + ACCESS_TTL_SECONDS;
  const resolvedSchoolId = user.schoolId ?? user.escuelaId ?? null;
  const payload: TokenClaims = {
    sub: user.id,
    email: user.email,
    username: user.username,
    role: user.role,
    guestOnboardingStatus: user.guestOnboardingStatus ?? null,
    schoolId: resolvedSchoolId,
    escuelaId: resolvedSchoolId,
    fullName: user.fullName ?? null,
    iat: now,
    exp,
    typ: "access",
    ...(ENV.JWT_ISSUER ? { iss: ENV.JWT_ISSUER } : {}),
    ...(ENV.JWT_AUDIENCE ? { aud: ENV.JWT_AUDIENCE } : {})
  };
  const token = buildToken(payload, ENV.JWT_SECRET);
  return {
    token,
    expiresAt: new Date(exp * 1000).toISOString(),
    expiresIn: ACCESS_TTL_SECONDS
  };
};

export const createRefreshToken = (user: TokenUser) => {
  if (REFRESH_TTL_SECONDS <= 0) return null;
  const now = Math.floor(Date.now() / 1000);
  const exp = now + REFRESH_TTL_SECONDS;
  const payload: TokenClaims = {
    sub: user.id,
    iat: now,
    exp,
    typ: "refresh",
    ...(ENV.JWT_ISSUER ? { iss: ENV.JWT_ISSUER } : {}),
    ...(ENV.JWT_AUDIENCE ? { aud: ENV.JWT_AUDIENCE } : {})
  };
  const token = buildToken(payload, ENV.JWT_REFRESH_SECRET || ENV.JWT_SECRET);
  return {
    token,
    expiresAt: new Date(exp * 1000).toISOString(),
    expiresIn: REFRESH_TTL_SECONDS
  };
};

export const buildUserContextFromClaims = (claims: TokenClaims) => {
  const resolvedSchoolId = claims.schoolId ?? claims.escuelaId ?? null;
  const objectId = toObjectId(claims.sub);
  return {
    _id: objectId ?? undefined,
    id: claims.sub,
    role: claims.role,
    guestOnboardingStatus: claims.guestOnboardingStatus ?? null,
    schoolId: resolvedSchoolId,
    escuelaId: resolvedSchoolId,
    email: claims.email,
    username: claims.username,
    fullName: claims.fullName
  };
};
