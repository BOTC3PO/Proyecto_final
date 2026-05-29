/**
 * Stub de `src/lib/mercadopago` para los tests de integración del webhook de
 * suscripciones. Reemplaza el módulo en el require-cache ANTES de que la ruta
 * `suscripciones` lo importe (igual que setup.ts hace con prisma).
 *
 * IMPORTANTE: importar este módulo DESPUÉS de `./setup` y ANTES de la ruta:
 *
 *   import { ... } from "./_helpers/setup";
 *   import { mpState } from "./_helpers/mp-stub";
 *   import { suscripciones } from "../../src/routes/suscripciones";
 *
 * `mpState.status` controla qué devuelve getPreapproval en cada test.
 */
import path from "node:path";
import Module from "node:module";

export type MpStatus =
  | "pending"
  | "authorized"
  | "paused"
  | "cancelled"
  | "expired";

export const mpState: { status: MpStatus; nextPaymentDate?: string } = {
  status: "authorized",
  nextPaymentDate: undefined,
};

const apiSrc = path.resolve(__dirname, "..", "..", "..", "src");
const mpPath = path.join(apiSrc, "lib", "mercadopago.ts");

const stub = {
  // Firma válida siempre en tests.
  verificarWebhookMP: () => true,
  getPreapproval: async (id: string) => ({
    id,
    status: mpState.status,
    payer_email: "payer@test.local",
    external_reference: "ref",
    init_point: "https://mp.test/init",
    next_payment_date: mpState.nextPaymentDate,
  }),
  crearPreapproval: async () => ({
    id: "pre-stub",
    status: "pending",
    payer_email: "payer@test.local",
    external_reference: "ref",
    init_point: "https://mp.test/init",
  }),
  cancelarPreapproval: async () => {},
};

// @ts-expect-error — internal require cache surface.
Module._cache = Module._cache || {};
// @ts-expect-error — same.
Module._cache[mpPath] = {
  id: mpPath,
  filename: mpPath,
  loaded: true,
  exports: stub,
  children: [],
  paths: [],
};
