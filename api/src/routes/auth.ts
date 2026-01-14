import { Router } from "express";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { hashPassword, verifyPassword } from "../lib/passwords";
import { LoginSchema, RegisterSchema } from "../schema/auth";

export const auth = Router();

auth.post("/api/auth/register", async (req, res) => {
  try {
    const parsed = RegisterSchema.parse(req.body);
    const db = await getDb();
    const now = new Date();
    const doc = {
      username: parsed.username,
      email: parsed.email,
      fullName: parsed.fullName,
      role: "USER",
      escuelaId: parsed.escuelaId ? toObjectId(parsed.escuelaId) : null,
      birthdate: parsed.birthdate ? new Date(parsed.birthdate) : null,
      passwordHash: hashPassword(parsed.password),
      consents: parsed.consents
        ? {
            ...parsed.consents,
            consentedAt: parsed.consents.consentedAt ? new Date(parsed.consents.consentedAt) : now
          }
        : undefined,
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("usuarios").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

auth.post("/api/auth/login", async (req, res) => {
  try {
    const parsed = LoginSchema.parse(req.body);
    const db = await getDb();
    const user = await db.collection("usuarios").findOne({
      $or: [{ email: parsed.identifier }, { username: parsed.identifier }],
      isDeleted: { $ne: true }
    });
    if (!user || typeof user.passwordHash !== "string") {
      res.status(401).json({ error: "Credenciales inválidas" });
      return;
    }
    const isValid = verifyPassword(parsed.password, user.passwordHash);
    if (!isValid) {
      res.status(401).json({ error: "Credenciales inválidas" });
      return;
    }
    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: user.role
    });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
