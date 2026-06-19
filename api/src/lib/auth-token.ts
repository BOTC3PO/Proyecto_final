import crypto from "node:crypto";
import type { Request } from "express";
import { ENV } from "./env";
import { toObjectId } from "./ids";
import { resolvePrimaryRole, resolveRoles } from "./roles";

type TokenType = "access" | "refresh";

export type TokenClaims = {
  sub: string;
  email?: string;
  username?: string;
  // MULTIROL-01 (Fase 1): el JWT lleva `roles[]` (fuente de verdad nueva)
  // y `role` singular (compat con código viejo que aún no consume
  // `roles[]`). `role` = el rol de mayor jerarquía del array para que
  // `req.user.role === "TEACHER"` siga significando lo mismo. Cuando
  // Fase 3 retire `role`, el código viejo que lo lee ya estará
  // migrado a `roles`.
  role?: string;
  roles?: string[];
  // FASE 2 — trazabilidad del switch de cuenta. Contiene el `id` del
  // usuario ORIGEN (el que inició el switch). Nunca se usa para
  // conceder permisos; es solo auditoría.
  switchedFrom?: string;
  guestOnboardingStatus?: string | null;
  schoolId?: string | null;
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
  // MULTIROL-01 (Fase 1): array de roles del usuario. Se prefiere
  // sobre `role` cuando está presente. Si solo llega `role` (código
  // viejo), `createAccessToken` lo promueve a `roles = [role]` para
  // mantener compat.
  roles?: string[];
  // FASE 2 — ver TokenClaims.switchedFrom.
  switchedFrom?: string;
  guestOnboardingStatus?: string | null;
  schoolId?: string | null;
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

const isTokenType = (value: unknown): value is TokenType => value === "access" || value === "refresh";

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
  const payloadType = parsed.payload?.typ;
  if (expectedType && payloadType && (!isTokenType(payloadType) || payloadType !== expectedType)) {
    return { ok: false as const, error: "Invalid authentication token" };
  }

  const resolvedType: TokenType =
    expectedType ?? (payloadType === "refresh" ? "refresh" : "access");
  const verificationSecret =
    resolvedType === "refresh" ? ENV.JWT_REFRESH_SECRET || ENV.JWT_SECRET : ENV.JWT_SECRET;
  const expectedSignature = sign(parsed.signingInput, verificationSecret);
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
  // MULTIROL-01: el JWT lleva `roles[]` (preferido) y `role` (compat).
  // `role` = el de mayor jerarquía del array, así que el código viejo
  // que lee `req.user.role` sigue viendo el rol principal del usuario
  // (ej. un TEACHER+USER se serializa como role=TEACHER).
  const roles = resolveRoles(user);
  const primaryRole = resolvePrimaryRole(user) ?? user.role ?? null;
  const payload: TokenClaims = {
    sub: user.id,
    email: user.email,
    username: user.username,
    role: primaryRole ?? undefined,
    roles: roles.length > 0 ? roles : undefined,
    ...(user.switchedFrom ? { switchedFrom: user.switchedFrom } : {}),
    guestOnboardingStatus: user.guestOnboardingStatus ?? null,
    schoolId: user.schoolId ?? null,
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
  const objectId = toObjectId(claims.sub);
  // MULTIROL-01: derivar `roles` desde el JWT. Si el token viene sin
  // `roles` (token viejo emitido antes de Fase 1), promovemos el
  // `role` singular a array de un elemento para mantener compat.
  const roles = resolveRoles({ role: claims.role, roles: claims.roles });
  return {
    _id: objectId ?? undefined,
    id: claims.sub,
    role: claims.role,
    roles: roles.length > 0 ? roles : undefined,
    guestOnboardingStatus: claims.guestOnboardingStatus ?? null,
    schoolId: claims.schoolId ?? null,
    email: claims.email,
    username: claims.username,
    fullName: claims.fullName
  };
};
