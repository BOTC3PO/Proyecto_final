// WHERE-clause builders for both JsonDocCollection and SchemaCollection

import type { Doc, Param, WhereClause } from "./db-types";
import { fieldToCol, jsonPath, isOpObject, toParam } from "./db-open";

// ── Shared column-level condition builder ─────────────────────────────────────

/**
 * Appends SQL conditions for a single column given a filter value.
 * Handles scalar equality and all MongoDB-style operators ($eq, $ne, $gt, …).
 */
export function buildColCondition(
  col: string,
  value: unknown,
  clauses: string[],
  params: Param[]
): void {
  if (isOpObject(value)) {
    for (const [op, opVal] of Object.entries(value as Record<string, unknown>)) {
      switch (op) {
        case "$eq":
          if (opVal === null || opVal === undefined) clauses.push(`${col} IS NULL`);
          else { clauses.push(`${col} = ?`); params.push(toParam(opVal)); }
          break;
        case "$ne":
          if (opVal === null || opVal === undefined) clauses.push(`${col} IS NOT NULL`);
          else { clauses.push(`(${col} IS NULL OR ${col} != ?)`); params.push(toParam(opVal)); }
          break;
        case "$gt":  clauses.push(`${col} > ?`);  params.push(toParam(opVal)); break;
        case "$gte": clauses.push(`${col} >= ?`); params.push(toParam(opVal)); break;
        case "$lt":  clauses.push(`${col} < ?`);  params.push(toParam(opVal)); break;
        case "$lte": clauses.push(`${col} <= ?`); params.push(toParam(opVal)); break;
        case "$in": {
          const arr = opVal as unknown[];
          if (arr.length === 0) { clauses.push("0"); break; }
          clauses.push(`${col} IN (${arr.map(() => "?").join(",")})`);
          for (const item of arr) params.push(toParam(item));
          break;
        }
        case "$nin": {
          const arr = opVal as unknown[];
          if (arr.length > 0) {
            clauses.push(`(${col} IS NULL OR ${col} NOT IN (${arr.map(() => "?").join(",")}))`);
            for (const item of arr) params.push(toParam(item));
          }
          break;
        }
        case "$exists":
          clauses.push(opVal ? `${col} IS NOT NULL` : `${col} IS NULL`);
          break;
        default: break;
      }
    }
  } else if (value === null || value === undefined) {
    clauses.push(`${col} IS NULL`);
  } else {
    clauses.push(`${col} = ?`);
    params.push(toParam(value));
  }
}

// ── JsonDocCollection: json_extract-based WHERE ───────────────────────────────

export function buildJsonWhere(filter: Doc): WhereClause {
  if (!filter || Object.keys(filter).length === 0) return { sql: "1=1", params: [] };
  const clauses: string[] = [];
  const params: Param[] = [];

  for (const [key, value] of Object.entries(filter)) {
    if (key === "$or") {
      const subs = (value as Doc[]).map((s) => buildJsonWhere(s));
      clauses.push(`(${subs.map((s) => `(${s.sql})`).join(" OR ")})`);
      for (const s of subs) params.push(...s.params);
      continue;
    }
    if (key === "$and") {
      const subs = (value as Doc[]).map((s) => buildJsonWhere(s));
      clauses.push(`(${subs.map((s) => `(${s.sql})`).join(" AND ")})`);
      for (const s of subs) params.push(...s.params);
      continue;
    }
    buildColCondition(jsonPath(key), value, clauses, params);
  }

  return { sql: clauses.length > 0 ? clauses.join(" AND ") : "1=1", params };
}

// ── SchemaCollection: real-column-based WHERE ─────────────────────────────────

/**
 * Builds a WHERE clause using the table's actual columns.
 * Unknown fields (not in knownCols after camelCase→snake_case conversion) are
 * silently skipped so that routes can query with MongoDB-style field names
 * even when the schema doesn't have every field (e.g. passwordResetRequired).
 */
export function buildSchemaWhere(
  collName: string,
  filter: Doc,
  knownCols: Set<string>
): WhereClause {
  if (!filter || Object.keys(filter).length === 0) return { sql: "1=1", params: [] };
  const clauses: string[] = [];
  const params: Param[] = [];

  for (const [key, value] of Object.entries(filter)) {
    if (key === "$or") {
      const subs = (value as Doc[])
        .map((s) => buildSchemaWhere(collName, s, knownCols))
        .filter((s) => s.sql !== "1=1");
      if (subs.length > 0) {
        clauses.push(`(${subs.map((s) => `(${s.sql})`).join(" OR ")})`);
        for (const s of subs) params.push(...s.params);
      }
      continue;
    }
    if (key === "$and") {
      const subs = (value as Doc[]).map((s) => buildSchemaWhere(collName, s, knownCols));
      for (const s of subs) {
        if (s.sql !== "1=1") { clauses.push(`(${s.sql})`); params.push(...s.params); }
      }
      continue;
    }
    const col = fieldToCol(collName, key);
    if (!knownCols.has(col)) continue; // silently skip unknown fields
    buildColCondition(col, value, clauses, params);
  }

  return { sql: clauses.length > 0 ? clauses.join(" AND ") : "1=1", params };
}
