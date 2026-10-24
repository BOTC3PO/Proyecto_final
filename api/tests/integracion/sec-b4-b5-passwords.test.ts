/**
 * B4 / B5 / H16 — contraseñas.
 *
 *  - B4: el hash es asíncrono, de 600.000 iteraciones (aquí 1.000 por velocidad), y los hashes
 *    viejos se verifican y se re-hashean solos al iniciar sesión.
 *  - B5: contraseñas nuevas de al menos 10 caracteres, sin las comunes ni el nombre de usuario.
 *  - H16: el login de un usuario inexistente hace el mismo trabajo que el de uno real.
 */

process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret-passwords";
process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "test-refresh-secret";
process.env.NODE_ENV = "test";

// El helper fija PASSWORD_HASH_ITERATIONS: tiene que cargarse antes que `passwords`.
import { prisma, startServer, jsonRequest } from "./_helpers/setup";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { after, before, describe, test } from "node:test";
import {
  hashPassword,
  passwordNeedsRehash,
  verificarContraFalso,
  verifyPassword,
} from "../../src/lib/passwords";
import { motivoPasswordDebil } from "../../src/lib/password-policy";

/** Hash con el formato y los parámetros viejos (PBKDF2-SHA256, 100.000 iteraciones por defecto). */
const hashViejo = (password: string, iteraciones = 100_000) => {
  const salt = crypto.randomBytes(16);
  const derived = crypto.pbkdf2Sync(password, salt, iteraciones, 64, "sha256").toString("hex");
  return `pbkdf2$${iteraciones}$${salt.toString("hex")}$${derived}`;
};

describe("hash de contraseñas", () => {
  test("hashPassword es asíncrono y se verifica", async () => {
    const pendiente = hashPassword("una-clave-larga-1");
    assert.ok(pendiente instanceof Promise);
    const h = await pendiente;
    assert.match(h, /^pbkdf2\$\d+\$[0-9a-f]+\$[0-9a-f]+$/);
    assert.equal(await verifyPassword("una-clave-larga-1", h), true);
    assert.equal(await verifyPassword("otra-clave-larga", h), false);
  });

  test("un hash viejo con menos iteraciones se sigue verificando y pide re-hash", async () => {
    const viejo = hashViejo("clave-vieja-123", 500);
    assert.equal(await verifyPassword("clave-vieja-123", viejo), true);
    assert.equal(passwordNeedsRehash(viejo), true);
    assert.equal(passwordNeedsRehash(await hashPassword("x-clave-nueva-12")), false);
  });

  test("basura o formatos desconocidos no verifican ni piden re-hash", async () => {
    for (const malo of ["", "abc", "bcrypt$10$x$y", "pbkdf2$0$aa$bb", null, undefined]) {
      assert.equal(await verifyPassword("x", malo as never), false);
      assert.equal(passwordNeedsRehash(malo), false);
    }
  });

  test("verificarContraFalso no falla", async () => {
    await verificarContraFalso("lo-que-sea");
  });
});

describe("política de contraseñas nuevas", () => {
  const ok = (p: string, ctx = {}) => assert.equal(motivoPasswordDebil(p, ctx), null, p);
  const mal = (p: string, ctx = {}) => assert.ok(motivoPasswordDebil(p, ctx), p);

  test("mínimo de 10 caracteres", () => {
    mal("corta123");
    mal("123456789"); // 9
    ok("una-frase-larga");
  });

  test("rechaza las comunes (con o sin mayúsculas, tildes y espacios)", () => {
    for (const p of ["1234567890", "Password123", "contraseña123", "CONTRASENA123", "qwertyuiop", "1q2w3e4r5t"]) mal(p);
  });

  test("rechaza un solo carácter repetido", () => mal("aaaaaaaaaaaa"));

  test("no puede contener el usuario ni el correo", () => {
    mal("maria.lopez2024", { username: "maria.lopez" });
    mal("xxsofia_garcia01", { email: "sofia_garcia@escuela.test" });
    ok("maria.lopez2024", { username: "pedro" });
    ok("pedro-y-luna-1", { username: "ab" }); // usuarios muy cortos no se comparan
  });
});

describe("registro y login", () => {
  let baseUrl: string;
  let close: () => Promise<void>;

  before(async () => {
    const { auth } = await import("../../src/routes/auth");
    const srv = await startServer([auth]);
    baseUrl = srv.baseUrl;
    close = srv.close;
  });
  after(async () => { if (close) await close(); });

  const registrar = (password: string, username = "usuariopw", email = "usuariopw@test.local") =>
    jsonRequest(baseUrl, "POST", "/api/auth/register", {
      body: { username, email, fullName: "Usuario Prueba", password },
    });
  const login = (identifier: string, password: string) =>
    jsonRequest(baseUrl, "POST", "/api/auth/login", { body: { identifier, password } });

  test("el mensaje de una contraseña rechazada es legible (no un JSON de Zod)", async () => {
    const corta = await registrar("corta12");
    assert.equal((corta.body as { error: string }).error, "La contraseña debe tener al menos 10 caracteres.");
    const comun = await registrar("password123");
    assert.match((comun.body as { error: string }).error, /demasiado común/);
    const conUsuario = await registrar("usuariopw-123");
    assert.match((conUsuario.body as { error: string }).error, /nombre de usuario/);
  });

  test("el registro rechaza contraseñas débiles y acepta una buena", async () => {
    for (const p of ["corta12", "password123", "usuariopw-123"]) {
      const r = await registrar(p);
      assert.equal(r.status, 400, p);
    }
    const buena = await registrar("una-frase-muy-larga", "usuariopw2", "usuariopw2@test.local");
    assert.equal(buena.status, 201, JSON.stringify(buena.body));
  });

  test("login con hash viejo: entra y el hash se actualiza solo", async () => {
    prisma.usuario.rows.push({
      id: "pw-viejo", username: "pwviejo", email: "pwviejo@test.local", fullName: "PW Viejo", role: "STUDENT",
      roles: ["STUDENT"], escuelaId: null, isDeleted: false, passwordHash: hashViejo("clave-de-hace-años", 500),
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    });
    const mal = await login("pwviejo", "no-es-esa-clave");
    assert.equal(mal.status, 401);
    const r = await login("pwviejo", "clave-de-hace-años");
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const fila = prisma.usuario.rows.find((u) => (u as { id: string }).id === "pw-viejo") as { passwordHash: string };
    assert.equal(passwordNeedsRehash(fila.passwordHash), false);
    assert.match(fila.passwordHash, /^pbkdf2\$1000\$/);
    // y la contraseña sigue siendo la misma
    assert.equal((await login("pwviejo", "clave-de-hace-años")).status, 200);
  });

  test("login de un usuario inexistente → 401 igual que una clave mala", async () => {
    const r = await login("nadie-existe", "cualquier-cosa-1");
    assert.equal(r.status, 401);
    assert.deepEqual(r.body, { error: "Invalid credentials" });
  });
});
