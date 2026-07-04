import * as dotenv from "dotenv";
dotenv.config();
const parseBool = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  return ["true", "1", "yes", "on"].includes(value.toLowerCase());
};
export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT ?? 5050),
  // URL pública del front; back_url de MercadoPago cae acá si no se pasa una explícita.
  APP_URL: process.env.APP_URL ?? "http://localhost:5173",
  DB_KIND: (process.env.DB_KIND ?? "sqlite").toLowerCase(),
  SQLITE_PATH: process.env.SQLITE_PATH ?? "./src/diccionarios/Diccionario.sqlite",
SQLITE_READONLY: parseBool(process.env.SQLITE_READONLY, false),
  SQLITE_CACHE_KB: Number(process.env.SQLITE_CACHE_KB ?? 65536),
  CORS_ORIGIN: (process.env.CORS_ORIGIN ?? "http://localhost:5173").split(","),
  MAX_PAGE_MB: Number(process.env.MAX_PAGE_MB ?? 30),
  MONGO_TLS: parseBool(process.env.MONGO_TLS, false),
  MONGO_REQUIRE_TLS: parseBool(process.env.MONGO_REQUIRE_TLS, true),
  MONGO_CA_FILE: process.env.MONGO_CA_FILE ?? "",
  MONGO_CERT_FILE: process.env.MONGO_CERT_FILE ?? "",
  MONGO_APP_NAME: process.env.MONGO_APP_NAME ?? "educational-platform-api",
  MONGO_MAX_POOL_SIZE: Number(process.env.MONGO_MAX_POOL_SIZE ?? 10),
  MONGO_MIN_POOL_SIZE: Number(process.env.MONGO_MIN_POOL_SIZE ?? 0),
  MONGO_SERVER_SELECTION_MS: Number(process.env.MONGO_SERVER_SELECTION_MS ?? 5000),
  MONGO_REQUIRE_AUTH: parseBool(process.env.MONGO_REQUIRE_AUTH, true),
  PAYMENTS_WEBHOOK_SECRET: process.env.PAYMENTS_WEBHOOK_SECRET ?? "",
  BOOTSTRAP_ADMIN_KEY: process.env.BOOTSTRAP_ADMIN_KEY ?? "",
  JWT_SECRET:
    process.env.JWT_SECRET ??
    (() => {
      if ((process.env.NODE_ENV ?? "development") === "production") {
        throw new Error("JWT_SECRET must be defined when NODE_ENV is production");
      }
      return "dev-secret";
    })(),
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET ?? "",
  JWT_ISSUER: process.env.JWT_ISSUER ?? "",
  JWT_AUDIENCE: process.env.JWT_AUDIENCE ?? "",
  JWT_ACCESS_TTL_SECONDS: Number(process.env.JWT_ACCESS_TTL_SECONDS ?? 60 * 60),
  // QA-FIX-11: refresh token TTL. Con 0 (default previo) el servicio
  // NUNCA emitía refresh tokens (createRefreshToken en auth-token.ts:148
  // retornaba null), así que a la 1h el access vencía y el front
  // expulsaba al usuario sin poder renovar. 7 días (604800s) es el
  // balance estándar: acceso corto (1h) + refresh largo con rotación
  // (cada uso emite un nuevo refresh — ver auth.ts:339). El front
  // (api.ts:187-189) guarda el nuevo refresh si viene en la respuesta.
  // Si el refresh se roba, la rotación reduce la ventana de exposición
  // (el refresh viejo sigue válido hasta su exp, pero el próximo uso
  // legítimo emite otro). No logueamos tokens ni emitimos tokens eternos.
  JWT_REFRESH_TTL_SECONDS: Number(process.env.JWT_REFRESH_TTL_SECONDS ?? 7 * 24 * 60 * 60),
  BILLING_PAST_DUE_DAYS: Number(process.env.BILLING_PAST_DUE_DAYS ?? 7),
  BILLING_SUSPEND_DAYS: Number(process.env.BILLING_SUSPEND_DAYS ?? 30),
  BILLING_DELINQUENCY_JOB_INTERVAL_MINUTES: Number(
    process.env.BILLING_DELINQUENCY_JOB_INTERVAL_MINUTES ?? 60
  ),
  BILLING_DELINQUENCY_JOB_ENABLED: parseBool(process.env.BILLING_DELINQUENCY_JOB_ENABLED, true),
  GOV_CONTENT_MIN_YES: Number(process.env.GOV_CONTENT_MIN_YES ?? 1),
  GOV_CONTENT_YES_GT_NO: parseBool(process.env.GOV_CONTENT_YES_GT_NO, true),
  GOV_GOVERNANCE_RULE: (process.env.GOV_GOVERNANCE_RULE ?? "SUPERMAJORITY_2_3").toUpperCase(),
  // PLAN-C §7 (gap #1 de docs/gobernanza-diseno.md): mínimo de votos
  // emitidos (approve+reject+abstain) para que una propuesta pueda
  // aprobarse, además de la mayoría/regla de nivel. 0 = sin quórum
  // mínimo (comportamiento previo, default).
  GOV_MIN_QUORUM: Number(process.env.GOV_MIN_QUORUM ?? 0),
  ENABLE_SEED_ENDPOINT: parseBool(process.env.ENABLE_SEED_ENDPOINT, false),
  AUTH_RATE_LIMIT_DISABLED: parseBool(process.env.AUTH_RATE_LIMIT_DISABLED, false),
  // MercadoPago
  MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN ?? "",
  MP_PUBLIC_KEY: process.env.MP_PUBLIC_KEY ?? "",
  MP_WEBHOOK_SECRET: process.env.MP_WEBHOOK_SECRET ?? "",
  // Pagos habilitados (false para sistemas autogestionados)
  PAYMENTS_ENABLED: parseBool(process.env.PAYMENTS_ENABLED, true),
  // Pagos enterprise (invoices/receipts). Deshabilitado por default: el modelo
  // de persistencia (Invoice/Receipt en Prisma) todavía no existe, así que
  // iniciar un cobro no quedaría registrado. Ver api/src/lib/payments/index.ts.
  ENABLE_ENTERPRISE_PAYMENTS: parseBool(process.env.ENABLE_ENTERPRISE_PAYMENTS, false),
  // Precios en ARS
  PRECIO_ALUMNO_MENSUAL: Number(process.env.PRECIO_ALUMNO_MENSUAL ?? 1000),
  PRECIO_STAFF_MENSUAL: Number(process.env.PRECIO_STAFF_MENSUAL ?? 300),
  PRECIO_EXPANSION_PROFESOR: Number(process.env.PRECIO_EXPANSION_PROFESOR ?? 150),
  // PLAN-B Fase 3 — pasarelas para cobros escuela→familias. Credenciales
  // de PLATAFORMA de VB (el split/comisión); las de cada escuela se
  // conectan por OAuth y quedan en `EscuelaPasarela` (cifradas con
  // PASARELAS_ENCRYPTION_KEY). Vacías por default: sin credenciales, los
  // adaptadores de provider responden "no configurado" en vez de
  // intentar pegarle a la API real.
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ?? "",
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET ?? "",
  STRIPE_CONNECT_CLIENT_ID: process.env.STRIPE_CONNECT_CLIENT_ID ?? "",
  CRYPTOMUS_MERCHANT_ID: process.env.CRYPTOMUS_MERCHANT_ID ?? "",
  CRYPTOMUS_API_KEY: process.env.CRYPTOMUS_API_KEY ?? "",
  // Clave simétrica (32 bytes, base64 o hex) para cifrar
  // EscuelaPasarela.credencialesCifradas. Sin ella en dev cae a una fija
  // NO apta para producción (arranca igual, pero avisa por consola).
  PASARELAS_ENCRYPTION_KEY: process.env.PASARELAS_ENCRYPTION_KEY ?? "",
  // PLAN-B Fase 4 — job de reconciliación: reintenta contra el provider
  // los `Pago` en `pendiente`/`en_proceso` más viejos que el umbral, por
  // si el webhook nunca llegó. Apagado por default en tests/dev (mismo
  // patrón que BILLING_DELINQUENCY_JOB_ENABLED).
  RECONCILIACION_JOB_ENABLED: parseBool(process.env.RECONCILIACION_JOB_ENABLED, false),
  RECONCILIACION_JOB_INTERVAL_MINUTES: Number(process.env.RECONCILIACION_JOB_INTERVAL_MINUTES ?? 15),
  RECONCILIACION_PAGO_MAX_AGE_MINUTES: Number(process.env.RECONCILIACION_PAGO_MAX_AGE_MINUTES ?? 30),
};
