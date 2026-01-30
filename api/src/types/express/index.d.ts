import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id?:
          | import("mongodb").ObjectId
          | { toString(): string }
          | string;
        role?: string;
        escuelaId?: unknown;
        schoolId?: string | null;
        [key: string]: unknown;
      };
    }
  }
}

export {};
