/**
 * PLAN-B Fase 3 — factory de providers. `routes/cobros.ts` sólo conoce
 * esta función; agregar un provider nuevo no debería tocar las rutas.
 */
import { MercadoPagoProvider } from "./mercadopago-provider";
import { CryptomusProvider } from "./cryptomus-provider";
import type { PaymentProvider } from "./provider";

export * from "./provider";

const PROVIDERS: Record<PaymentProvider["nombre"], PaymentProvider> = {
  mercadopago: new MercadoPagoProvider(),
  cryptomus: new CryptomusProvider()
};

export const PROVIDER_NAMES = Object.keys(PROVIDERS) as Array<PaymentProvider["nombre"]>;

export const getProvider = (nombre: string): PaymentProvider | null => {
  if (nombre === "mercadopago" || nombre === "cryptomus") {
    return PROVIDERS[nombre];
  }
  return null;
};
