/**
 * Auditoría 11/2026 — la API arrancaba con las claves de ejemplo del repositorio (solo se rechazaba
 * "dev-secret"), y un token firmado con ellas era válido.
 */
import assert from "node:assert/strict";
import { test } from "node:test";
import { validarSecreto } from "./env";

test("rechaza los valores de ejemplo del repositorio en cualquier entorno", () => {
  for (const v of ["dev-secret", "cambiar-en-produccion", "replace-me-with-a-strong-random-secret", "coloca-una-clave-segura"]) {
    for (const nodeEnv of ["development", "production"]) {
      assert.throws(() => validarSecreto("JWT_SECRET", v, { nodeEnv }), /JWT_SECRET/, `${v} en ${nodeEnv}`);
    }
  }
});

test("obligatorio vacío falla; opcional vacío pasa", () => {
  assert.throws(() => validarSecreto("JWT_SECRET", undefined, { nodeEnv: "development" }));
  assert.equal(validarSecreto("BOOTSTRAP_ADMIN_KEY", "", { opcional: true, nodeEnv: "production" }), "");
  assert.throws(() => validarSecreto("BOOTSTRAP_ADMIN_KEY", "cambiar-en-produccion", { opcional: true, nodeEnv: "production" }));
});

test("en producción exige al menos 32 bytes", () => {
  assert.throws(() => validarSecreto("JWT_SECRET", "x".repeat(31), { nodeEnv: "production" }));
  assert.equal(validarSecreto("JWT_SECRET", "x".repeat(32), { nodeEnv: "production" }), "x".repeat(32));
  assert.equal(validarSecreto("JWT_SECRET", "corta", { nodeEnv: "development" }), "corta");
});
