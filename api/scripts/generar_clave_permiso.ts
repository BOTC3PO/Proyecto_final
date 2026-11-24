/**
 * L8 — genera el par de claves Ed25519 que firma los permisos de la app sin conexión.
 *
 *   npx tsx scripts/generar_clave_permiso.ts /ruta/fuera/del/repo/permiso-offline.pem
 *
 * Guarda la clave privada en ese archivo (permisos 600; no la muestra) y muestra la pública, que va en
 * `VITE_OFFLINE_CLAVE_PUBLICA` al compilar la app. No pisa un archivo que ya existe: cambiar la clave invalida
 * los permisos de todos los dispositivos.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import { clavePublicaCruda } from "../src/lib/permiso-offline";

const destino = process.argv[2];
if (!destino) {
  console.error("Uso: npx tsx scripts/generar_clave_permiso.ts RUTA_DEL_PEM");
  process.exit(1);
}
if (fs.existsSync(destino)) {
  console.error(`${destino} ya existe; no se pisa.`);
  process.exit(1);
}
const { privateKey } = crypto.generateKeyPairSync("ed25519");
fs.writeFileSync(destino, privateKey.export({ type: "pkcs8", format: "pem" }), { mode: 0o600 });
console.log(`Clave privada guardada en ${destino}`);
console.log(`VITE_OFFLINE_CLAVE_PUBLICA=${clavePublicaCruda(privateKey)}`);
