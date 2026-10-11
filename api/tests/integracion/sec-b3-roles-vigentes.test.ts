/**
 * B3 — los roles de cada pedido salen de la base, no del token.
 *
 * Quitar un rol o una membresía surte efecto en el pedido siguiente (antes, hasta que vencía el
 * token de 1 hora). Un token con menos roles que la persona (actuando con uno solo) se respeta, y
 * un token nunca puede dar más de lo que la base concede.
 */

process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import express from "express";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-b3-a";
const ESC_B = "esc-b3-b";
const U = "b3-usuario";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { requireUser } = await import("../../src/lib/user-auth");
  const router = express.Router();
  // Devuelve lo que `requireUser` le dejó al pedido.
  router.get("/api/quien", requireUser, (req, res) => {
    const u = req.user as { role?: string; roles?: string[]; schoolId?: string | null };
    res.json({ role: u.role ?? null, roles: u.roles ?? [], schoolId: u.schoolId ?? null });
  });
  const srv = await startServer([router]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

const quien = (token: string) => jsonRequest(baseUrl, "GET", "/api/quien", { token });
const membresia = (escuelaId: string, rol: string, estado = "activa") =>
  prisma.membresia.rows.push({ usuarioId: U, escuelaId, rol, estado, fechaAlta: nowIso() } as never);
const fila = () => prisma.usuario.rows.find((u) => (u as { id: string }).id === U) as Record<string, unknown>;

describe("roles vigentes", () => {
  beforeEach(() => {
    resetPrisma();
    for (const id of [ESC_A, ESC_B]) {
      prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
    }
  });

  test("sin cambios, el pedido lleva los roles del token", async () => {
    seedUser({ id: U, role: "TEACHER", schoolId: ESC_A });
    membresia(ESC_A, "TEACHER");
    const r = await quien(tokenFor({ id: U, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC_A }));
    assert.deepEqual(r.body, { role: "TEACHER", roles: ["TEACHER"], schoolId: ESC_A });
  });

  test("si se le quita el rol de docente, el token todavía vigente ya no lo concede", async () => {
    seedUser({ id: U, role: "TEACHER", schoolId: ESC_A });
    membresia(ESC_A, "TEACHER");
    const token = tokenFor({ id: U, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC_A });
    assert.equal(((await quien(token)).body as { role: string }).role, "TEACHER");
    // Lo degradan a alumno: la membresía cambia de rol.
    prisma.membresia.rows[0].rol = "STUDENT";
    const r = (await quien(token)).body as { role: string; roles: string[] };
    assert.equal(r.roles.includes("TEACHER"), false);
    assert.equal(r.role === "TEACHER", false);
  });

  test("si se da de baja la membresía, pierde el rol de esa escuela", async () => {
    seedUser({ id: U, role: "DIRECTIVO", schoolId: ESC_A });
    membresia(ESC_A, "DIRECTIVO");
    membresia(ESC_B, "STUDENT");
    const token = tokenFor({ id: U, role: "DIRECTIVO", roles: ["DIRECTIVO"], schoolId: ESC_A });
    assert.equal(((await quien(token)).body as { roles: string[] }).roles[0], "DIRECTIVO");
    prisma.membresia.rows[0].estado = "baja";
    const r = (await quien(token)).body as { roles: string[]; schoolId: string };
    assert.equal(r.roles.includes("DIRECTIVO"), false);
    assert.equal(r.schoolId, ESC_B, "la sesión vuelve a una escuela donde sigue siendo miembro");
  });

  test("un token no puede dar más de lo que concede la base (rol inventado)", async () => {
    seedUser({ id: U, role: "USER", schoolId: ESC_A });
    membresia(ESC_A, "STUDENT");
    const r = (await quien(tokenFor({ id: U, role: "ADMIN", roles: ["ADMIN", "USER"], schoolId: ESC_A }))).body as { roles: string[] };
    assert.deepEqual(r.roles, ["USER"]);
  });

  test("un token con menos roles (actuando como alumno siendo también padre) se respeta", async () => {
    seedUser({ id: U, role: "PARENT", roles: ["PARENT", "USER"], schoolId: ESC_A });
    membresia(ESC_A, "PARENT");
    membresia(ESC_A, "STUDENT");
    const r = (await quien(tokenFor({ id: U, role: "USER", roles: ["USER"], schoolId: ESC_A }))).body as { role: string; roles: string[] };
    assert.deepEqual([r.role, r.roles], ["USER", ["USER"]]);
  });

  test("el rol de plataforma (ADMIN) no depende de membresías y se conserva", async () => {
    seedUser({ id: U, role: "ADMIN", schoolId: null });
    const r = (await quien(tokenFor({ id: U, role: "ADMIN", roles: ["ADMIN"], schoolId: null }))).body as { roles: string[] };
    assert.deepEqual(r.roles, ["ADMIN"]);
  });

  test("si se le quita ADMIN al usuario, el token deja de concederlo", async () => {
    seedUser({ id: U, role: "ADMIN", schoolId: null });
    const token = tokenFor({ id: U, role: "ADMIN", roles: ["ADMIN"], schoolId: null });
    fila().roles = ["USER"];
    const r = (await quien(token)).body as { roles: string[] };
    assert.equal(r.roles.includes("ADMIN"), false);
  });
});
