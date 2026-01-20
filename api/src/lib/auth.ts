import type { NextFunction, Request, Response } from "express";

const ADMIN_ROLE = "ADMIN";

const extractRole = (req: Request): string | undefined => {
  const headerRole = req.header("x-user-role") ?? req.header("x-role");
  if (headerRole) return headerRole;
  const maybeUser = (req as { user?: { role?: string } }).user;
  if (maybeUser?.role) return maybeUser.role;
  if (typeof req.body?.role === "string") return req.body.role;
  return undefined;
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const role = extractRole(req);
  if (role !== ADMIN_ROLE) {
    res.status(403).json({ error: "admin role required" });
    return;
  }
  next();
};
