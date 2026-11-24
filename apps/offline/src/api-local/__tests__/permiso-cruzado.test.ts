/**
 * El permiso que firma el servidor (api/src/lib/permiso-offline.ts) lo verifica la app, con la clave pública en crudo
 * que muestra generar_clave_permiso.ts. Si cambia el formato de un lado, esta prueba falla.
 */
import crypto from "node:crypto";
import { expect, it } from "vitest";
import { verificarPermiso } from "../permiso";

it("lo que firma el servidor lo verifica la app", async () => {
  // env.ts del servidor exige JWT_SECRET al importarse; acá no se usa.
  process.env.JWT_SECRET ??= "prueba-permiso-cruzado";
  const { clavePublicaCruda, firmarPermiso } = await import("../../../../../api/src/lib/permiso-offline");
  const { privateKey } = crypto.generateKeyPairSync("ed25519");
  const datos = {
    v: 1, sub: "u-1", username: "ñandú", nombre: "Ñandú Pérez", email: null, roles: ["USER"], schoolId: null, menor: true,
    dispositivo: "d".repeat(32), emitido: "2026-11-04T00:00:00.000Z", vence: "2027-02-02T00:00:00.000Z",
  };
  const { permiso, firma } = firmarPermiso(datos, privateKey);
  expect(await verificarPermiso(clavePublicaCruda(privateKey), permiso, firma)).toEqual(datos);
  expect(await verificarPermiso(clavePublicaCruda(privateKey), permiso, `${firma.slice(0, -2)}AA`)).toBeNull();
});
