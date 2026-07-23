/**
 * PLAN-B — OAuth de vendedor para MercadoPago (roadmap v2, ahora
 * implementado). Sin esto, `marketplace_fee` rechaza cualquier
 * `collector_id` que no haya autorizado explícitamente a esta aplicación
 * (confirmado contra la API real de MP: "collector_id invalid"). El flujo
 * es el Authorization Code estándar de MP: la escuela autoriza en
 * auth.mercadopago.com, MP redirige acá con un `code`, lo canjeamos por el
 * access_token/user_id del vendedor y lo guardamos en `EscuelaPasarela`.
 *
 * `state` liga el callback a la escuela sin depender de sesión/cookies —
 * MP redirige el navegador directo, no manda el JWT del usuario logueado.
 * Es un HMAC corto con expiración, firmado con JWT_SECRET (no agrega un
 * secreto nuevo a la config).
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { ENV } from "./env";
import { descifrarCredencial } from "./pasarelas-crypto";

const STATE_TTL_SECONDS = 15 * 60; // alcanza para loguearse + aprobar en MP

const sign = (data: string) => createHmac("sha256", ENV.JWT_SECRET).update(data).digest("base64url");

export const signState = (escuelaId: string): string => {
  const exp = Math.floor(Date.now() / 1000) + STATE_TTL_SECONDS;
  const payload = `${escuelaId}.${exp}`;
  return `${payload}.${sign(payload)}`;
};

export const verifyState = (state: string): { escuelaId: string } | null => {
  const parts = state.split(".");
  if (parts.length !== 3) return null;
  const [escuelaId, expStr, signature] = parts;
  const payload = `${escuelaId}.${expStr}`;
  const expected = sign(payload);
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp <= Math.floor(Date.now() / 1000)) return null;
  return { escuelaId };
};

export const MP_OAUTH_REDIRECT_URI = () => `${ENV.API_URL}/api/escuelas/pasarelas/mercadopago/callback`;

export const buildAuthorizationUrl = (escuelaId: string): string => {
  const params = new URLSearchParams({
    client_id: ENV.MP_CLIENT_ID,
    response_type: "code",
    platform_id: "mp",
    redirect_uri: MP_OAUTH_REDIRECT_URI(),
    state: signState(escuelaId)
  });
  return `https://auth.mercadopago.com/authorization?${params.toString()}`;
};

export type MPOAuthTokens = {
  accessToken: string;
  refreshToken: string | null;
  userId: string;
  publicKey?: string;
};

export const intercambiarCode = async (code: string): Promise<MPOAuthTokens | null> => {
  const response = await fetch("https://api.mercadopago.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: ENV.MP_CLIENT_ID,
      client_secret: ENV.MP_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: MP_OAUTH_REDIRECT_URI(),
      // Genera un access_token de sandbox en vez de uno real — no requiere
      // credenciales de producción activadas del lado del vendedor que
      // autoriza (aunque client_id/client_secret sí salen de la app).
      test_token: ENV.NODE_ENV !== "production"
    })
  });
  if (!response.ok) return null;
  const data = (await response.json()) as {
    access_token?: string;
    refresh_token?: string;
    user_id?: number;
    public_key?: string;
  };
  if (!data.access_token || !data.user_id) return null;
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? null,
    userId: String(data.user_id),
    publicKey: data.public_key
  };
};

/**
 * Decodifica el access_token propio del vendedor guardado en
 * `EscuelaPasarela.credencialesCifradas` (ver escuela-pasarelas.ts, el
 * callback de OAuth). Null si la escuela no autorizó todavía.
 */
export const accessTokenDesdeCredenciales = (credencialesCifradas: string | null | undefined): string | null => {
  if (!credencialesCifradas) return null;
  try {
    const parsed = JSON.parse(descifrarCredencial(credencialesCifradas)) as { accessToken?: string };
    return parsed.accessToken ?? null;
  } catch {
    return null;
  }
};
