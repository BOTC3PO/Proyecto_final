import { randomUUID } from "crypto";

/**
 * Validates and returns the string ID, or null if empty/invalid.
 * Replaces the old MongoDB ObjectId-based toObjectId.
 */
export const toObjectId = (value: string | null | undefined): string | null => {
  if (!value || typeof value !== "string" || value.trim() === "") return null;
  return value.trim();
};

/**
 * Generates a new unique string ID (UUID v4).
 */
export const generateId = (): string => randomUUID();
