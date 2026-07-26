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
  // URL pública de ESTE server — la necesita el OAuth de MP para el redirect_uri
  // del callback (tiene que ser un endpoint del backend, no del front).
  API_URL: process.env.API_URL ?? "http://localhost:5050",
  // Storage de media (uploads de /api/media) — "local" (disco, default,
  // válido para 1 sola instancia) o "s3" (cualquier endpoint
  // S3-compatible: AWS S3, Cloudflare R2, Backblaze B2, MinIO — necesario
  // para correr 2+ instancias del API, ver tareas_pendientes/
  // PLAN-escalabilidad-api.md).
  MEDIA_STORAGE: (process.env.MEDIA_STORAGE ?? "local").toLowerCase(),
  MEDIA_S3_BUCKET: process.env.MEDIA_S3_BUCKET ?? "",
  MEDIA_S3_ENDPOINT: process.env.MEDIA_S3_ENDPOINT ?? "",
  MEDIA_S3_REGION: process.env.MEDIA_S3_REGION ?? "auto",
  MEDIA_S3_ACCESS_KEY_ID: process.env.MEDIA_S3_ACCESS_KEY_ID ?? "",
  MEDIA_S3_SECRET_ACCESS_KEY: process.env.MEDIA_S3_SECRET_ACCESS_KEY ?? "",
  // Si el bucket está detrás de un dominio/CDN público, GET /api/media/:x
  // redirige ahí en vez de proxyear el archivo entero a través del API.
  MEDIA_S3_PUBLIC_URL: process.env.MEDIA_S3_PUBLIC_URL ?? "",
  // Redis para rate limiting distribuido — vacío (default) = MemoryStore
  // por proceso (correcto con 1 sola instancia del API). Con 2+
  // instancias, sin esto el límite efectivo se vuelve limit×instancias
  // (cada proceso cuenta por su cuenta). Ver rate-limit.ts.
  REDIS_URL: process.env.REDIS_URL ?? "",
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
  CRYPTOMUS_MERCHANT_ID: process.env.CRYPTOMUS_MERCHANT_ID ?? "",
  CRYPTOMUS_API_KEY: process.env.CRYPTOMUS_API_KEY ?? "",
  // App de MP en developers.mercadopago.com (sección OAuth/Configuración
  // avanzada) — Client ID/Secret, para que cada escuela autorice a VB como
  // marketplace (requisito real de MP para que `collector_id` sea válido
  // en `marketplace_fee`; ver lib/pasarelas/mercadopago-oauth.ts).
  MP_CLIENT_ID: process.env.MP_CLIENT_ID ?? "",
  MP_CLIENT_SECRET: process.env.MP_CLIENT_SECRET ?? "",
  // Clave simétrica (32 bytes, base64 o hex) para cifrar
  // EscuelaPasarela.credencialesCifradas. Sin ella se cae a una clave
  // fija y pública (pasarelas-crypto.ts) — por eso `assertSecretosDePago`
  // (abajo) impide arrancar si hay CUALQUIER pasarela configurada y esta
  // clave falta, sin importar NODE_ENV.
  PASARELAS_ENCRYPTION_KEY: process.env.PASARELAS_ENCRYPTION_KEY ?? "",
  // PLAN-B Fase 4 — job de reconciliación: reintenta contra el provider
  // los `Pago` en `pendiente`/`en_proceso` más viejos que el umbral, por
  // si el webhook nunca llegó. Apagado por default en tests/dev (mismo
  // patrón que BILLING_DELINQUENCY_JOB_ENABLED).
  RECONCILIACION_JOB_ENABLED: parseBool(process.env.RECONCILIACION_JOB_ENABLED, false),
  RECONCILIACION_JOB_INTERVAL_MINUTES: Number(process.env.RECONCILIACION_JOB_INTERVAL_MINUTES ?? 15),
  RECONCILIACION_PAGO_MAX_AGE_MINUTES: Number(process.env.RECONCILIACION_PAGO_MAX_AGE_MINUTES ?? 30),
  // Deja arrancar en local con pasarelas configuradas pero sin
  // MP_WEBHOOK_SECRET / PASARELAS_ENCRYPTION_KEY. Ver assertSecretosDePago.
  PAGOS_DEV_SIN_SECRETOS: parseBool(process.env.PAGOS_DEV_SIN_SECRETOS, false),
};

/**
 * Chequeo de arranque de los secretos de pago (endurecimiento
 * 2026-07-25). El disparador es "¿hay alguna pasarela configurada?", NO
 * `NODE_ENV`: los fallbacks de dev (webhook sin firma, clave de cifrado
 * fija) son inofensivos en una instalación sin pagos y catastróficos en
 * una con pagos, y confiar en que `NODE_ENV` diga exactamente
 * "production" es demasiado frágil para el único lugar donde eso separa
 * "seguro" de "cualquiera puede acreditar un pago".
 *
 * Se llama en el arranque del server (index.ts) — que reviente al
 * levantar es preferible a descubrirlo cuando entra un webhook falso.
 */
export const assertSecretosDePago = () => {
  const mpConfigurado = Boolean(ENV.MP_ACCESS_TOKEN || ENV.MP_CLIENT_ID || ENV.MP_CLIENT_SECRET);
  const cryptomusConfigurado = Boolean(ENV.CRYPTOMUS_MERCHANT_ID || ENV.CRYPTOMUS_API_KEY);
  if (!mpConfigurado && !cryptomusConfigurado) return;

  const faltantes: string[] = [];
  if (mpConfigurado && !ENV.MP_WEBHOOK_SECRET) faltantes.push("MP_WEBHOOK_SECRET");
  // Sin esta clave, los tokens OAuth de TODAS las escuelas quedan
  // cifrados con una clave pública conocida (ver pasarelas-crypto.ts).
  if (!ENV.PASARELAS_ENCRYPTION_KEY) faltantes.push("PASARELAS_ENCRYPTION_KEY");

  if (faltantes.length === 0) return;

  // Escape hatch explícito para desarrollo. Es a propósito una variable
  // aparte y no un `NODE_ENV !== production`: dejar pasar esto tiene que
  // ser un acto deliberado y visible en el `.env`, no algo que ocurra
  // solo porque una env quedó mal seteada en un deploy. En producción no
  // se puede desactivar de ninguna manera.
  if (ENV.PAGOS_DEV_SIN_SECRETOS && ENV.NODE_ENV !== "production") {
    console.warn(
      `⚠️  PAGOS_DEV_SIN_SECRETOS activo: faltan ${faltantes.join(", ")}. ` +
        "Los webhooks de pago NO se verifican y las credenciales de las escuelas " +
        "se cifran con una clave pública. Sólo para desarrollo local."
    );
    return;
  }

  throw new Error(
    `Hay pasarelas de pago configuradas pero faltan secretos obligatorios: ${faltantes.join(", ")}. ` +
      "Cargalos en api/.env, quitá las credenciales de pasarela para levantar sin pagos, " +
      "o poné PAGOS_DEV_SIN_SECRETOS=true si estás en local y no vas a cobrar de verdad."
  );
};
