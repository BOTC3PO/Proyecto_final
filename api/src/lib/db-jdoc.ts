// JsonDocCollection: JSON-document fallback for collections that don't have
// a real schema table (pages, invoices, encuestas, etc.).
// Schema: CREATE TABLE t (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)

import Database from "better-sqlite3";
import { randomUUID } from "crypto";
import type { Doc, WhereClause } from "./db-types";
import { jsonPath } from "./db-open";
import { buildJsonWhere } from "./db-where";
import { applyProjection, processPipeline } from "./db-pipeline";

// ── Row → Doc conversion ──────────────────────────────────────────────────────

export function jdocRowToDoc<T>(row: { _id: string; doc: string }): T {
  const parsed = JSON.parse(row.doc) as Doc;
  parsed._id = row._id;
  return parsed as unknown as T;
}

// ── Cursor ────────────────────────────────────────────────────────────────────

class JdocCursor<T> {
  private _skip = 0;
  private _limit = 0;
  private _sort: Record<string, number> | null = null;
  private _proj: Record<string, unknown> | null = null;

  constructor(
    private db: InstanceType<typeof Database>,
    private table: string,
    private where: WhereClause
  ) {}

  skip(n: number): this  { this._skip  = n; return this; }
  limit(n: number): this { this._limit = n; return this; }
  sort(spec: Record<string, number>): this   { this._sort = spec; return this; }
  project(spec: Record<string, unknown>): this { this._proj = spec; return this; }

  toArray(): T[] {
    let sql = `SELECT _id, doc FROM "${this.table}" WHERE ${this.where.sql}`;
    if (this._sort) {
      const parts = Object.entries(this._sort).map(
        ([f, d]) => `${jsonPath(f)} ${d === -1 ? "DESC" : "ASC"}`
      );
      if (parts.length) sql += ` ORDER BY ${parts.join(", ")}`;
    }
    if (this._limit > 0) sql += ` LIMIT ${this._limit}`;
    if (this._skip  > 0) sql += ` OFFSET ${this._skip}`;
    let rows = (
      this.db.prepare(sql).all(...this.where.params) as Array<{ _id: string; doc: string }>
    ).map((r) => jdocRowToDoc<Doc>(r));
    if (this._proj) rows = rows.map((d) => applyProjection(d, this._proj!));
    return rows as unknown as T[];
  }

  next(): T | null {
    const items = this.limit(1).toArray();
    return items.length > 0 ? items[0] : null;
  }
}

// ── BulkOp ────────────────────────────────────────────────────────────────────

class UnorderedBulkOp<T extends Doc = Doc> {
  private ops: Array<{ filter: Doc; update: Doc }> = [];
  constructor(private coll: JsonDocCollection<T>) {}

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

// ── JsonDocCollection ─────────────────────────────────────────────────────────

export class JsonDocCollection<T extends Doc = Doc> {
  constructor(private db: InstanceType<typeof Database>, private table: string) {
    db.exec(`CREATE TABLE IF NOT EXISTS "${table}" (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)`);
  }

  findOne(
    filter: Doc,
    options?: { projection?: Record<string, unknown>; sort?: Record<string, unknown> }
  ): T | null {
    const wh = buildJsonWhere(filter);
    let sql = `SELECT _id, doc FROM "${this.table}" WHERE ${wh.sql}`;
    if (options?.sort) {
      const parts = Object.entries(options.sort).map(
        ([k, v]) => `json_extract(doc,'$.${k}') ${Number(v) >= 0 ? "ASC" : "DESC"}`
      );
      if (parts.length) sql += ` ORDER BY ${parts.join(", ")}`;
    }
    sql += " LIMIT 1";
    const row = this.db.prepare(sql).get(...wh.params) as { _id: string; doc: string } | undefined;
    if (!row) return null;
    let doc = jdocRowToDoc<Doc>(row);
    if (options?.projection) doc = applyProjection(doc, options.projection);
    return doc as T;
  }

  find(filter: Doc = {}): JdocCursor<T> {
    return new JdocCursor<T>(this.db, this.table, buildJsonWhere(filter));
  }

  insertOne(input: Doc): { insertedId: string; acknowledged: boolean } {
    const doc = { ...input };
    const id = doc._id != null ? String(doc._id) : randomUUID();
    delete doc._id;
    this.db.prepare(`INSERT INTO "${this.table}" (_id, doc) VALUES (?, ?)`).run(id, JSON.stringify(doc));
    return { insertedId: id, acknowledged: true };
  }

  insertMany(inputs: Doc[]): { insertedIds: string[]; acknowledged: boolean } {
    const ids: string[] = [];
    const stmt = this.db.prepare(`INSERT INTO "${this.table}" (_id, doc) VALUES (?, ?)`);
    this.db.transaction(() => {
      for (const input of inputs) {
        const doc = { ...input };
        const id = doc._id != null ? String(doc._id) : randomUUID();
        delete doc._id;
        stmt.run(id, JSON.stringify(doc));
        ids.push(id);
      }
    })();
    return { insertedIds: ids, acknowledged: true };
  }

  updateOne(
    filter: Doc,
    update: Doc,
    options?: { upsert?: boolean }
  ): { matchedCount: number; modifiedCount: number; acknowledged: boolean; upsertedId?: string | null } {
    const wh = buildJsonWhere(filter);
    const row = this.db
      .prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${wh.sql} LIMIT 1`)
      .get(...wh.params) as { _id: string; doc: string } | undefined;

    if (!row) {
      if (options?.upsert) {
        const newDoc: Doc = {};
        for (const [k, v] of Object.entries({ ...filter, ...(update.$set ?? {}) as Doc }))
          if (!k.startsWith("$")) newDoc[k] = v;
        const id = newDoc._id != null ? String(newDoc._id) : randomUUID();
        delete newDoc._id;
        this.db.prepare(`INSERT INTO "${this.table}" (_id, doc) VALUES (?, ?)`).run(id, JSON.stringify(newDoc));
        return { matchedCount: 0, modifiedCount: 0, acknowledged: true, upsertedId: id };
      }
      return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
    }

    const existing = JSON.parse(row.doc) as Doc;
    const setObj = update.$set as Doc | undefined;
    this.db
      .prepare(`UPDATE "${this.table}" SET doc = ? WHERE _id = ?`)
      .run(JSON.stringify(setObj ? { ...existing, ...setObj } : existing), row._id);
    return { matchedCount: 1, modifiedCount: 1, acknowledged: true };
  }

  updateMany(
    filter: Doc,
    update: Doc
  ): { matchedCount: number; modifiedCount: number; acknowledged: boolean } {
    const wh = buildJsonWhere(filter);
    const rows = this.db
      .prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${wh.sql}`)
      .all(...wh.params) as Array<{ _id: string; doc: string }>;
    if (!rows.length) return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
    const stmt = this.db.prepare(`UPDATE "${this.table}" SET doc = ? WHERE _id = ?`);
    const setObj = update.$set as Doc | undefined;
    this.db.transaction(() => {
      for (const row of rows) {
        const existing = JSON.parse(row.doc) as Doc;
        stmt.run(JSON.stringify(setObj ? { ...existing, ...setObj } : existing), row._id);
      }
    })();
    return { matchedCount: rows.length, modifiedCount: rows.length, acknowledged: true };
  }

  deleteOne(filter: Doc): { deletedCount: number; acknowledged: boolean } {
    const wh = buildJsonWhere(filter);
    const row = this.db
      .prepare(`SELECT _id FROM "${this.table}" WHERE ${wh.sql} LIMIT 1`)
      .get(...wh.params) as { _id: string } | undefined;
    if (!row) return { deletedCount: 0, acknowledged: true };
    this.db.prepare(`DELETE FROM "${this.table}" WHERE _id = ?`).run(row._id);
    return { deletedCount: 1, acknowledged: true };
  }

  deleteMany(filter: Doc): { deletedCount: number; acknowledged: boolean } {
    const wh = buildJsonWhere(filter);
    const r = this.db.prepare(`DELETE FROM "${this.table}" WHERE ${wh.sql}`).run(...wh.params);
    return { deletedCount: r.changes, acknowledged: true };
  }

  countDocuments(filter: Doc = {}): number {
    const wh = buildJsonWhere(filter);
    return (
      this.db
        .prepare(`SELECT COUNT(*) AS c FROM "${this.table}" WHERE ${wh.sql}`)
        .get(...wh.params) as { c: number }
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
      const wh = buildJsonWhere(pipeline[0].$match as Doc);
      docs = (
        this.db.prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${wh.sql}`)
          .all(...wh.params) as Array<{ _id: string; doc: string }>
      ).map(jdocRowToDoc<Doc>);
      startIdx = 1;
    } else {
      docs = (
        this.db.prepare(`SELECT _id, doc FROM "${this.table}"`).all() as Array<{ _id: string; doc: string }>
      ).map(jdocRowToDoc<Doc>);
    }
    const result = processPipeline(docs, pipeline, startIdx);
    return { toArray: () => result as unknown as R[] };
  }

  createIndexes(_specs: unknown[]): void {}

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

  initializeUnorderedBulkOp(): UnorderedBulkOp<T> {
    return new UnorderedBulkOp<T>(this);
  }
}
