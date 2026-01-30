import type { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "./db";
import { toObjectId } from "./ids";

type AuthenticatedUser = Record<string, unknown> & {
  _id?: ObjectId;
  role?: string;
  escuelaId?: unknown;
  schoolId?: string | null;
};

type AuthQueryResult =
  | { query: Record<string, unknown> }
  | { error: { status: number; message: string } };

export const normalizeSchoolId = (escuelaId: unknown) => {
  if (!escuelaId) return null;
  if (typeof escuelaId === "string") return escuelaId;
  if (escuelaId instanceof ObjectId) return escuelaId.toString();
  const maybeToString = escuelaId as { toString?: () => string };
  if (typeof maybeToString.toString === "function") return maybeToString.toString();
  return null;
};

const buildAuthQuery = (req: Request): AuthQueryResult => {
  const usuarioId = req.header("x-usuario-id") ?? req.header("x-user-id");
  const email = req.header("x-user-email");
  const username = req.header("x-user-username");
  if (usuarioId) {
    const objectId = toObjectId(usuarioId);
    if (!objectId) {
      return { error: { status: 400, message: "Invalid user identifier" } };
    }
    return { query: { _id: objectId } };
  }
  if (email) return { query: { email } };
  if (username) return { query: { username } };
  return { error: { status: 401, message: "Missing authentication" } };
};

export const requireUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const queryResult = buildAuthQuery(req);
    if ("error" in queryResult) {
      res.status(queryResult.error.status).json({ error: queryResult.error.message });
      return;
    }
    const db = await getDb();
    const user = (await db
      .collection("usuarios")
      .findOne({ ...queryResult.query, isDeleted: { $ne: true } })) as AuthenticatedUser | null;
    if (!user) {
      res.status(403).json({ error: "User not found" });
      return;
    }
    const schoolId = normalizeSchoolId(user.escuelaId);
    const userContext: AuthenticatedUser = { ...user, schoolId };
    (req as { user?: AuthenticatedUser }).user = userContext;
    res.locals.user = userContext;
    next();
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
};
