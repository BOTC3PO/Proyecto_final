// SchemaCollection: MongoDB-compatible collection backed by a real SQL table.
// Uses PRAGMA table_info to discover columns at startup; silently skips
// any camelCase field from routes that has no matching snake_case column.

import Database from "better-sqlite3";
import { randomUUID } from "crypto";
import type { Doc, Param, WhereClause } from "./db-types";
import { fieldToCol, colToField, toParam } from "./db-open";
import { buildSchemaWhere } from "./db-where";
import { applyProjection, processPipeline } from "./db-pipeline";

// ── Cursor ────────────────────────────────────────────────────────────────────

class SchemaCursor<T extends Doc = Doc> {
  private _skip = 0;
  private _limit = 0;
  private _sort: Record<string, number> | null = null;
  private _proj: Record<string, unknown> | null = null;

  constructor(private coll: SchemaCollection<T>, private where: WhereClause) {}

  skip(n: number): this  { this._skip  = n; return this; }
  limit(n: number): this { this._limit = n; return this; }
  sort(spec: Record<string, number>): this   { this._sort = spec; return this; }
  project(spec: Record<string, unknown>): this { this._proj = spec; return this; }

  toArray(): T[] {
    let docs = this.coll._fetchDocs(this.where, this._sort, this._limit, this._skip);
    if (this._proj) docs = docs.map((d) => applyProjection(d as Doc, this._proj!));
    return docs as unknown as T[];
  }

  next(): T | null {
    const items = this.limit(1).toArray();
    return items.length > 0 ? items[0] : null;
  }
}

// ── BulkOp ────────────────────────────────────────────────────────────────────

class UnorderedBulkOpSchema<T extends Doc = Doc> {
  private ops: Array<{ filter: Doc; update: Doc }> = [];
  constructor(private coll: SchemaCollection<T>) {}

  find(filter: Doc): { updateOne(update: Doc): void } {
    const ops = this.ops;
    const f = filter;
    return { updateOne(update: Doc) { ops.push({ filter: f, update }); } };
  }

  async execute(): Promise<{ ok: number; nModified: number }> {
    let n = 0;
    for (const op of this.ops) {
      const r = this.coll.updateOne(op.filter, op.update);
      n += r.modifiedCount;
    }
    return { ok: 1, nModified: n };
  }
}

// ── SchemaCollection ──────────────────────────────────────────────────────────

export class SchemaCollection<T extends Doc = Doc> {
  /** Set of actual column names discovered via PRAGMA table_info */
  readonly cols: Set<string>;

  constructor(
    private db: InstanceType<typeof Database>,
    private table: string,
    private collName: string
  ) {
    const info = db.pragma(`table_info(${table})`) as Array<{ name: string }>;
    this.cols = new Set(info.map((r) => r.name));
  }

  // ── Internal helpers ────────────────────────────────────────────────────────

  private wh(filter: Doc): WhereClause {
    return buildSchemaWhere(this.collName, filter, this.cols);
  }

  /**
   * Convert a DB row (snake_case columns) → camelCase JS doc.
   * For `usuarios`: also reconstructs the `consents` object and adds a
   * `schoolId` alias mirroring `escuelaId` for backward-compat.
   */
  private rowToDoc(row: Record<string, unknown>): Doc {
    const doc: Doc = {};
    for (const [col, val] of Object.entries(row)) {
      doc[colToField(col)] = val;
    }
    // schoolId alias for collections tied to escuelas
    if (
      this.collName === "usuarios" ||
      this.collName === "clases"   ||
      this.collName === "aulas"
    ) {
      if (doc.escuelaId !== undefined) doc.schoolId = doc.escuelaId;
    }
    // Reconstruct nested consents object expected by auth routes
    if (this.collName === "usuarios") {
      if (doc.privacyConsent !== undefined || doc.termsAccepted !== undefined) {
        doc.consents = {
          privacyConsent: doc.privacyConsent,
          termsAccepted:  doc.termsAccepted,
          consentedAt:    doc.consentedAt,
        };
      }
    }
    return doc;
  }

  /**
   * Convert a camelCase doc (from routes) → { column: param } map for SQL.
   * - Flattens `consents` object into flat columns for `usuarios`.
   * - Skips `schoolId` (alias handled via `escuelaId`).
   * - Silently skips any field whose mapped column doesn't exist in the table.
   */
  private docToCols(input: Doc): Record<string, Param> {
    const result: Record<string, Param> = {};

    // Flatten consents for usuarios
    if (this.collName === "usuarios" && input.consents && typeof input.consents === "object") {
      const c = input.consents as Doc;
      if (c.privacyConsent !== undefined && this.cols.has("privacy_consent"))
        result.privacy_consent = toParam(c.privacyConsent);
      if (c.termsAccepted !== undefined && this.cols.has("terms_accepted"))
        result.terms_accepted = toParam(c.termsAccepted);
      if (c.consentedAt !== undefined && this.cols.has("consented_at"))
        result.consented_at = toParam(c.consentedAt);
    }

    for (const [field, val] of Object.entries(input)) {
      if (field === "consents" || field === "schoolId") continue;
      const col = fieldToCol(this.collName, field);
      if (!this.cols.has(col)) continue;
      result[col] = toParam(val);
    }
    return result;
  }

  /**
   * Resolves the rowid-or-id reference for a single-row SELECT (used by
   * updateOne / deleteOne).  Returns null when no row matches.
   */
  private getRowRef(filter: Doc): { col: "id" | "rowid"; val: string | number } | null {
    const w = this.wh(filter);
    if (this.cols.has("id")) {
      const row = this.db
        .prepare(`SELECT id FROM "${this.table}" WHERE ${w.sql} LIMIT 1`)
        .get(...w.params) as { id: string } | undefined;
      return row ? { col: "id", val: row.id } : null;
    }
    const row = this.db
      .prepare(`SELECT rowid FROM "${this.table}" WHERE ${w.sql} LIMIT 1`)
      .get(...w.params) as { rowid: number } | undefined;
    return row ? { col: "rowid", val: row.rowid } : null;
  }

  // ── Public helpers used by SchemaCursor ─────────────────────────────────────

  _fetchDocs(
    where: WhereClause,
    sort: Record<string, number> | null,
    limit: number,
    skip: number
  ): Doc[] {
    let sql = `SELECT * FROM "${this.table}" WHERE ${where.sql}`;
    if (sort) {
      const parts = Object.entries(sort)
        .map(([f, d]) => {
          const col = fieldToCol(this.collName, f);
          return this.cols.has(col) ? `"${col}" ${d === -1 ? "DESC" : "ASC"}` : null;
        })
        .filter(Boolean);
      if (parts.length) sql += ` ORDER BY ${parts.join(", ")}`;
    }
    if (limit > 0) sql += ` LIMIT ${limit}`;
    if (skip  > 0) sql += ` OFFSET ${skip}`;
    return (
      this.db.prepare(sql).all(...where.params) as Record<string, unknown>[]
    ).map((r) => this.rowToDoc(r));
  }

  // ── MongoDB-compatible API ──────────────────────────────────────────────────

  findOne(
    filter: Doc,
    options?: { projection?: Record<string, unknown>; sort?: Record<string, unknown> }
  ): T | null {
    const w = this.wh(filter);
    let sql = `SELECT * FROM "${this.table}" WHERE ${w.sql}`;
    if (options?.sort) {
      const parts = Object.entries(options.sort)
        .map(([f, d]) => {
          const col = fieldToCol(this.collName, f);
          return this.cols.has(col) ? `"${col}" ${Number(d) >= 0 ? "ASC" : "DESC"}` : null;
        })
        .filter(Boolean);
      if (parts.length) sql += ` ORDER BY ${parts.join(", ")}`;
    }
    sql += " LIMIT 1";
    const row = this.db.prepare(sql).get(...w.params) as Record<string, unknown> | undefined;
    if (!row) return null;
    let doc = this.rowToDoc(row);
    if (options?.projection) doc = applyProjection(doc, options.projection);
    return doc as T;
  }

  find(filter: Doc = {}): SchemaCursor<T> {
    return new SchemaCursor<T>(this, this.wh(filter));
  }

  insertOne(input: Doc): { insertedId: string; acknowledged: boolean } {
    const cols = this.docToCols(input);
    // Ensure id column is populated when the table has one
    if (this.cols.has("id") && !cols.id) {
      cols.id = input._id != null ? String(input._id) : randomUUID();
    }
    const insertedId =
      cols.id != null ? String(cols.id) :
      input._id != null ? String(input._id) :
      randomUUID();

    const colNames = Object.keys(cols);
    if (colNames.length > 0) {
      const sql = `INSERT INTO "${this.table}" (${colNames.map((c) => `"${c}"`).join(", ")}) VALUES (${colNames.map(() => "?").join(", ")})`;
      this.db.prepare(sql).run(...Object.values(cols));
    }
    return { insertedId, acknowledged: true };
  }

  insertMany(inputs: Doc[]): { insertedIds: string[]; acknowledged: boolean } {
    const ids: string[] = [];
    this.db.transaction(() => {
      for (const input of inputs) ids.push(this.insertOne(input).insertedId);
    })();
    return { insertedIds: ids, acknowledged: true };
  }

  updateOne(
    filter: Doc,
    update: Doc,
    options?: { upsert?: boolean }
  ): { matchedCount: number; modifiedCount: number; acknowledged: boolean; upsertedId?: string | null } {
    const ref = this.getRowRef(filter);
    if (!ref) {
      if (options?.upsert) {
        const merged: Doc = {};
        for (const [k, v] of Object.entries(filter)) if (!k.startsWith("$")) merged[k] = v;
        for (const [k, v] of Object.entries((update.$set ?? {}) as Doc)) merged[k] = v;
        const r = this.insertOne(merged);
        return { matchedCount: 0, modifiedCount: 0, acknowledged: true, upsertedId: r.insertedId };
      }
      return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
    }

    const setCols: string[] = [];
    const setParams: Param[] = [];

    if (update.$set) {
      for (const [c, v] of Object.entries(this.docToCols(update.$set as Doc))) {
        setCols.push(`"${c}" = ?`);
        setParams.push(v);
      }
    }
    if (update.$inc) {
      for (const [field, delta] of Object.entries(update.$inc as Doc)) {
        const col = fieldToCol(this.collName, field);
        if (this.cols.has(col)) {
          setCols.push(`"${col}" = COALESCE("${col}", 0) + ?`);
          setParams.push(toParam(delta));
        }
      }
    }
    if (update.$unset) {
      for (const field of Object.keys(update.$unset as Doc)) {
        const col = fieldToCol(this.collName, field);
        if (this.cols.has(col)) setCols.push(`"${col}" = NULL`);
      }
    }

    if (setCols.length === 0) return { matchedCount: 1, modifiedCount: 0, acknowledged: true };

    this.db
      .prepare(`UPDATE "${this.table}" SET ${setCols.join(", ")} WHERE "${ref.col}" = ?`)
      .run(...setParams, ref.val);
    return { matchedCount: 1, modifiedCount: 1, acknowledged: true };
  }

  updateMany(
    filter: Doc,
    update: Doc
  ): { matchedCount: number; modifiedCount: number; acknowledged: boolean } {
    const w = this.wh(filter);
    const setCols: string[] = [];
    const setParams: Param[] = [];

    if (update.$set) {
      for (const [c, v] of Object.entries(this.docToCols(update.$set as Doc))) {
        setCols.push(`"${c}" = ?`); setParams.push(v);
      }
    }
    if (update.$inc) {
      for (const [field, delta] of Object.entries(update.$inc as Doc)) {
        const col = fieldToCol(this.collName, field);
        if (this.cols.has(col)) {
          setCols.push(`"${col}" = COALESCE("${col}", 0) + ?`);
          setParams.push(toParam(delta));
        }
      }
    }

    if (setCols.length === 0) return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
    const r = this.db
      .prepare(`UPDATE "${this.table}" SET ${setCols.join(", ")} WHERE ${w.sql}`)
      .run(...setParams, ...w.params);
    return { matchedCount: r.changes, modifiedCount: r.changes, acknowledged: true };
  }

  deleteOne(filter: Doc): { deletedCount: number; acknowledged: boolean } {
    const ref = this.getRowRef(filter);
    if (!ref) return { deletedCount: 0, acknowledged: true };
    this.db.prepare(`DELETE FROM "${this.table}" WHERE "${ref.col}" = ?`).run(ref.val);
    return { deletedCount: 1, acknowledged: true };
  }

  deleteMany(filter: Doc): { deletedCount: number; acknowledged: boolean } {
    const w = this.wh(filter);
    const r = this.db.prepare(`DELETE FROM "${this.table}" WHERE ${w.sql}`).run(...w.params);
    return { deletedCount: r.changes, acknowledged: true };
  }

  countDocuments(filter: Doc = {}): number {
    const w = this.wh(filter);
    return (
      this.db
        .prepare(`SELECT COUNT(*) AS c FROM "${this.table}" WHERE ${w.sql}`)
        .get(...w.params) as { c: number }
    ).c;
  }

  count(filter: Doc = {}): number { return this.countDocuments(filter); }

  estimatedDocumentCount(): number {
    return (
      this.db.prepare(`SELECT COUNT(*) AS c FROM "${this.table}"`).get() as { c: number }
    ).c;
  }

  aggregate<R extends Doc = Doc>(pipeline: Doc[]): { toArray(): R[] } {
    let docs: Doc[];
    let startIdx = 0;
    if (pipeline.length > 0 && pipeline[0].$match) {
      docs = this._fetchDocs(
        buildSchemaWhere(this.collName, pipeline[0].$match as Doc, this.cols),
        null, 0, 0
      );
      startIdx = 1;
    } else {
      docs = this._fetchDocs({ sql: "1=1", params: [] }, null, 0, 0);
    }
    const result = processPipeline(docs, pipeline, startIdx);
    return { toArray: () => result as unknown as R[] };
  }

  createIndexes(_specs: unknown[]): void { /* schema manages indexes */ }

  bulkWrite(
    ops: Array<{
      updateOne?: { filter: Doc; update: Doc; upsert?: boolean };
      insertOne?: { document: Doc };
      deleteOne?: { filter: Doc };
    }>
  ): { modifiedCount: number; upsertedCount: number; insertedCount: number; deletedCount: number } {
    let modifiedCount = 0, upsertedCount = 0, insertedCount = 0, deletedCount = 0;
    this.db.transaction(() => {
      for (const op of ops) {
        if (op.updateOne) {
          const r = this.updateOne(op.updateOne.filter, op.updateOne.update, { upsert: op.updateOne.upsert });
          modifiedCount += r.modifiedCount;
          if (r.upsertedId) upsertedCount++;
        } else if (op.insertOne) {
          this.insertOne(op.insertOne.document); insertedCount++;
        } else if (op.deleteOne) {
          const r = this.deleteMany(op.deleteOne.filter); deletedCount += r.deletedCount;
        }
      }
    })();
    return { modifiedCount, upsertedCount, insertedCount, deletedCount };
  }

  initializeUnorderedBulkOp(): UnorderedBulkOpSchema<T> {
    return new UnorderedBulkOpSchema<T>(this);
  }
}
