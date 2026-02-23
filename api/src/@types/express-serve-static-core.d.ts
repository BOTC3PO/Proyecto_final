import "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    rawBody?: Buffer;
    user?: {
      _id?: string | { toString(): string };
      role?: string;
      schoolId?: string | null;
      [key: string]: unknown;
    };
  }
}

export {};
