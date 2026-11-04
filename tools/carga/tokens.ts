/**
 * L16 — genera tokens de acceso para los alumnos de carga con el JWT_SECRET de la instancia de prueba
 * (variable de entorno, nunca la de producción). Escribe un JSON con los tokens en la ruta del argumento.
 */
import { writeFileSync } from "node:fs";
import { createAccessToken } from "../../api/src/lib/auth-token";

const n = Number(process.argv[2] ?? 500);
const salida = process.argv[3] ?? "tokens.json";
const tokens = Array.from({ length: n }, (_, i) => {
  const id = `carga-${String(i + 1).padStart(4, "0")}`;
  return createAccessToken({ id, email: `${id}@carga.invalid`, username: id, role: "USER", roles: ["USER"], schoolId: "esc-0001" }).token;
});
writeFileSync(salida, JSON.stringify(tokens));
console.log(`${tokens.length} tokens`);
