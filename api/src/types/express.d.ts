import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id?: { toString(): string } | string;
        id?: string;
        role?: string;
        schoolId?: string | null;
        guestOnboardingStatus?: string | null;
        [key: string]: unknown;
      };
      rawBody?: Buffer | string;
    }
  }
}

export {};
