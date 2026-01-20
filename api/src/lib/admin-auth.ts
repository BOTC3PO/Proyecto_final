import type { NextFunction, Request, Response } from "express";
import { getDb } from "./db";
import { toObjectId } from "./ids";

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userIdHeader = req.header("x-user-id");
    const emailHeader = req.header("x-user-email");
    const usernameHeader = req.header("x-user-username");
    if (!userIdHeader && !emailHeader && !usernameHeader) {
      res.status(401).json({ error: "Missing admin authentication" });
      return;
    }

    const db = await getDb();
    const query: Record<string, unknown> = {
      role: "ADMIN",
      isDeleted: { $ne: true }
    };

    if (userIdHeader) {
      const objectId = toObjectId(userIdHeader);
      if (objectId) {
        query._id = objectId;
      } else {
        res.status(400).json({ error: "Invalid admin identifier" });
        return;
      }
    } else if (emailHeader) {
      query.email = emailHeader;
    } else if (usernameHeader) {
      query.username = usernameHeader;
    }

    const adminUser = await db.collection("usuarios").findOne(query);
    if (!adminUser) {
      res.status(403).json({ error: "Admin role required" });
      return;
    }

    res.locals.adminUser = adminUser;
    next();
  } catch (error) {
    res.status(500).json({ error: "Admin authentication failed" });
  }
};
