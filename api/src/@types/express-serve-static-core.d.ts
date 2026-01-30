import "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      _id?:
        | string
        | { toString(): string }
        | import("mongodb").ObjectId;
      role?: string;
      escuelaId?: unknown;
      schoolId?: string | null;
      [key: string]: unknown;
    };
  }
}

export {};
