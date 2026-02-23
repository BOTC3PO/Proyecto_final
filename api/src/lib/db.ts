import Database from "better-sqlite3";
import { randomUUID } from "crypto";
import path from "path";
import fs from "fs";
import { ENV } from "./env";

// ── Internal types ─────────────────────────────────────────────────────────

type Doc = Record<string, unknown>;
type Param = string | number | null;

// ── SQLite singleton ───────────────────────────────────────────────────────

let _sqlite: InstanceType<typeof Database> | null = null;

export function openSqlite(): InstanceType<typeof Database> {
  if (_sqlite) return _sqlite;
  const dbPath = path.isAbsolute(ENV.SQLITE_PATH)
    ? ENV.SQLITE_PATH
    : path.resolve(process.cwd(), ENV.SQLITE_PATH);
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  _sqlite = new Database(dbPath);
  _sqlite.pragma("journal_mode = WAL");
  _sqlite.pragma("foreign_keys = ON");
  _sqlite.pragma("busy_timeout = 5000");
  return _sqlite;
}

// ── Query helpers ──────────────────────────────────────────────────────────

function jsonPath(field: string): string {
  if (field === "_id") return "_id";
  return `json_extract(doc, '$.${field}')`;
}

function toParam(v: unknown): Param {
  if (v === true) return 1;
  if (v === false) return 0;
  if (v === null || v === undefined) return null;
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "object") {
    const s = v as { toString?: () => string };
    if (typeof s.toString === "function") return s.toString();
  }
  return v as Param;
}

function isOpObject(val: unknown): val is Record<string, unknown> {
  if (!val || typeof val !== "object" || Array.isArray(val) || val instanceof Date) return false;
  return Object.keys(val as object).some((k) => k.startsWith("$"));
}

type WhereClause = { sql: string; params: Param[] };

function buildWhere(filter: Doc): WhereClause {
  if (!filter || Object.keys(filter).length === 0) return { sql: "1=1", params: [] };
  const clauses: string[] = [];
  const params: Param[] = [];

  for (const [key, value] of Object.entries(filter)) {
    if (key === "$or") {
      const subs = (value as Doc[]).map((s) => buildWhere(s));
      clauses.push(`(${subs.map((s) => `(${s.sql})`).join(" OR ")})`);
      for (const s of subs) params.push(...s.params);
      continue;
    }
    if (key === "$and") {
      const subs = (value as Doc[]).map((s) => buildWhere(s));
      clauses.push(`(${subs.map((s) => `(${s.sql})`).join(" AND ")})`);
      for (const s of subs) params.push(...s.params);
      continue;
    }

    const col = jsonPath(key);

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
          case "$elemMatch": {
            const sub = opVal as Doc;
            const elemClauses: string[] = [];
            for (const [ek, ev] of Object.entries(sub)) {
              const ep = `json_extract(elem.value, '$.${ek}')`;
              if (isOpObject(ev)) {
                for (const [eop, eov] of Object.entries(ev as Record<string, unknown>)) {
                  if (eop === "$in") {
                    const arr = eov as unknown[];
                    if (arr.length > 0) {
                      elemClauses.push(`${ep} IN (${arr.map(() => "?").join(",")})`);
                      for (const item of arr) params.push(toParam(item));
                    }
                  } else if (eop === "$ne") {
                    elemClauses.push(`(${ep} IS NULL OR ${ep} != ?)`);
                    params.push(toParam(eov));
                  } else {
                    elemClauses.push(`${ep} = ?`);
                    params.push(toParam(eov));
                  }
                }
              } else {
                elemClauses.push(`${ep} = ?`);
                params.push(toParam(ev));
              }
            }
            if (elemClauses.length > 0) {
              clauses.push(
                `EXISTS (SELECT 1 FROM json_each(json_extract(doc,'$.${key}')) AS elem WHERE ${elemClauses.join(" AND ")})`
              );
            }
            break;
          }
          default: break;
        }
      }
      continue;
    }

    if (value === null || value === undefined) {
      clauses.push(`${col} IS NULL`);
    } else {
      clauses.push(`${col} = ?`);
      params.push(toParam(value));
    }
  }

  return { sql: clauses.length > 0 ? clauses.join(" AND ") : "1=1", params };
}

function rowToDoc<T>(row: { _id: string; doc: string }): T {
  const parsed = JSON.parse(row.doc) as Doc;
  parsed._id = row._id;
  return parsed as unknown as T;
}

function applyProjection(doc: Doc, proj: Record<string, unknown>): Doc {
  const isExclusion = Object.values(proj).some((v) => v === 0);
  if (isExclusion) {
    const result = { ...doc };
    for (const [k, v] of Object.entries(proj)) if (v === 0) delete result[k];
    return result;
  }
  const result: Doc = {};
  if (!("_id" in proj) || proj._id !== 0) result._id = doc._id;
  for (const [k, v] of Object.entries(proj)) {
    if (k === "_id") continue;
    if (v === 1) result[k] = doc[k];
  }
  return result;
}

// ── Cursor ─────────────────────────────────────────────────────────────────

class SqliteCursor<T> {
  private _skip = 0;
  private _limit = 0;
  private _sort: Record<string, number> | null = null;
  private _proj: Record<string, unknown> | null = null;

  constructor(
    private db: InstanceType<typeof Database>,
    private table: string,
    private where: WhereClause
  ) {}

  skip(n: number): this { this._skip = n; return this; }
  limit(n: number): this { this._limit = n; return this; }
  sort(spec: Record<string, number>): this { this._sort = spec; return this; }
  project(spec: Record<string, unknown>): this { this._proj = spec; return this; }

  toArray(): T[] {
    let sql = `SELECT _id, doc FROM "${this.table}" WHERE ${this.where.sql}`;
    if (this._sort) {
      const parts = Object.entries(this._sort).map(([f, d]) => `${jsonPath(f)} ${d === -1 ? "DESC" : "ASC"}`);
      if (parts.length) sql += ` ORDER BY ${parts.join(", ")}`;
    }
    if (this._limit > 0) sql += ` LIMIT ${this._limit}`;
    if (this._skip > 0) sql += ` OFFSET ${this._skip}`;
    let rows = (this.db.prepare(sql).all(...this.where.params) as Array<{ _id: string; doc: string }>).map((r) => rowToDoc<Doc>(r));
    if (this._proj) rows = rows.map((d) => applyProjection(d, this._proj!));
    return rows as unknown as T[];
  }

  next(): T | null {
    const items = this.limit(1).toArray();
    return items.length > 0 ? items[0] : null;
  }
}

// ── Aggregation ────────────────────────────────────────────────────────────

function resolveRef(doc: Doc, ref: string): unknown {
  const p = ref.startsWith("$") ? ref.slice(1) : ref;
  let cur: unknown = doc;
  for (const part of p.split(".")) {
    if (cur === null || cur === undefined) return undefined;
    cur = (cur as Doc)[part];
  }
  return cur;
}

function evalExpr(doc: Doc, expr: unknown): unknown {
  if (typeof expr === "string" && expr.startsWith("$")) return resolveRef(doc, expr);
  if (typeof expr !== "object" || expr === null) return expr;
  const e = expr as Doc;
  if ("$ifNull" in e) {
    const [a, b] = e.$ifNull as [unknown, unknown];
    const v = evalExpr(doc, a);
    return v !== null && v !== undefined ? v : evalExpr(doc, b);
  }
  if ("$cond" in e) {
    const cond = e.$cond;
    if (Array.isArray(cond)) return evalExpr(doc, cond[0]) ? evalExpr(doc, cond[1]) : evalExpr(doc, cond[2]);
    const c = cond as Doc;
    return evalExpr(doc, c.if) ? evalExpr(doc, c.then) : evalExpr(doc, c.else);
  }
  if ("$eq" in e) { const [a, b] = e.$eq as [unknown, unknown]; return evalExpr(doc, a) === evalExpr(doc, b); }
  if ("$ne" in e) { const [a, b] = e.$ne as [unknown, unknown]; return evalExpr(doc, a) !== evalExpr(doc, b); }
  if ("$in" in e) {
    const [v, arr] = e.$in as [unknown, unknown];
    const val = evalExpr(doc, v);
    const a = Array.isArray(arr) ? arr : (evalExpr(doc, arr) as unknown[]);
    return Array.isArray(a) && a.includes(val);
  }
  if ("$size" in e) { const v = evalExpr(doc, e.$size); return Array.isArray(v) ? v.length : 0; }
  if ("$dateToString" in e) {
    const spec = e.$dateToString as Doc;
    const val = evalExpr(doc, spec.date);
    if (!val) return null;
    const d = val instanceof Date ? val : new Date(String(val));
    return isNaN(d.valueOf()) ? null : d.toISOString().slice(0, 10);
  }
  return expr;
}

function filterMatches(doc: Doc, filter: Doc): boolean {
  for (const [key, value] of Object.entries(filter)) {
    if (key === "$or") return (value as Doc[]).some((s) => filterMatches(doc, s));
    if (key === "$and") return (value as Doc[]).every((s) => filterMatches(doc, s));
    const dv = resolveRef(doc, key);
    if (isOpObject(value)) {
      for (const [op, ov] of Object.entries(value as Record<string, unknown>)) {
        switch (op) {
          case "$eq":  if (dv !== ov) return false; break;
          case "$ne":  if (dv === ov) return false; break;
          case "$gt":  if (!(dv !== null && dv !== undefined && (dv as number) > (ov as number))) return false; break;
          case "$gte": if (!(dv !== null && dv !== undefined && (dv as number) >= (ov as number))) return false; break;
          case "$lt":  if (!(dv !== null && dv !== undefined && (dv as number) < (ov as number))) return false; break;
          case "$lte": if (!(dv !== null && dv !== undefined && (dv as number) <= (ov as number))) return false; break;
          case "$in":  if (!(ov as unknown[]).includes(dv)) return false; break;
          case "$nin": if ((ov as unknown[]).includes(dv)) return false; break;
          case "$elemMatch":
            if (!Array.isArray(dv) || !dv.some((el) => filterMatches(el as Doc, ov as Doc))) return false;
            break;
        }
      }
    } else if (dv !== value) return false;
  }
  return true;
}

function groupStage(docs: Doc[], spec: Doc): Doc[] {
  const gId = spec._id;
  const groups = new Map<string, Doc[]>();
  for (const doc of docs) {
    let key: string;
    if (gId === null) key = "__null__";
    else if (typeof gId === "string" && gId.startsWith("$")) key = String(resolveRef(doc, gId) ?? "__null__");
    else if (typeof gId === "object" && gId !== null) {
      const kObj: Doc = {};
      for (const [k, v] of Object.entries(gId as Doc)) kObj[k] = typeof v === "string" && v.startsWith("$") ? resolveRef(doc, v) : v;
      key = JSON.stringify(kObj);
    } else key = String(gId);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(doc);
  }

  const results: Doc[] = [];
  for (const [key, grp] of groups) {
    const out: Doc = {};
    if (gId === null) out._id = null;
    else if (typeof gId === "string" && gId.startsWith("$")) out._id = resolveRef(grp[0], gId);
    else if (typeof gId === "object" && gId !== null) out._id = JSON.parse(key);
    else out._id = gId;

    for (const [field, accExpr] of Object.entries(spec)) {
      if (field === "_id") continue;
      if (typeof accExpr !== "object" || accExpr === null) continue;
      const acc = accExpr as Doc;
      if ("$sum" in acc) {
        const sv = acc.$sum;
        if (typeof sv === "number") out[field] = grp.length * sv;
        else if (sv === 1) out[field] = grp.length;
        else if (typeof sv === "string") out[field] = grp.reduce((s, d) => { const v = resolveRef(d, sv); return s + (typeof v === "number" ? v : 0); }, 0);
        else if (typeof sv === "object" && sv !== null) out[field] = grp.reduce((s, d) => s + Number(evalExpr(d, sv) || 0), 0);
      } else if ("$avg" in acc) {
        const sv = acc.$avg as string;
        const vals = grp.map((d) => resolveRef(d, sv)).filter((v): v is number => typeof v === "number");
        out[field] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
      } else if ("$min" in acc) {
        const sv = acc.$min as string;
        const vals = grp.map((d) => resolveRef(d, sv)).filter((v) => v !== null && v !== undefined);
        out[field] = vals.length ? vals.reduce((mn, v) => (v < mn ? v : mn)) : null;
      } else if ("$max" in acc) {
        const sv = acc.$max as string;
        const vals = grp.map((d) => resolveRef(d, sv)).filter((v) => v !== null && v !== undefined);
        out[field] = vals.length ? vals.reduce((mx, v) => (v > mx ? v : mx)) : null;
      } else if ("$addToSet" in acc) {
        const sv = acc.$addToSet as string;
        const set = new Set(grp.map((d) => resolveRef(d, sv)).filter((v) => v !== null && v !== undefined).map(String));
        out[field] = Array.from(set);
      } else if ("$first" in acc) {
        out[field] = grp.length > 0 ? resolveRef(grp[0], acc.$first as string) : null;
      }
    }
    results.push(out);
  }
  return results;
}

function projectStage(docs: Doc[], spec: Doc): Doc[] {
  return docs.map((doc) => {
    const out: Doc = {};
    for (const [key, val] of Object.entries(spec)) {
      if (val === 0) continue;
      if (val === 1) out[key] = resolveRef(doc, key);
      else if (typeof val === "string" && val.startsWith("$")) out[key] = resolveRef(doc, val);
      else out[key] = evalExpr(doc, val);
    }
    if (!("_id" in spec) || spec._id !== 0) out._id = doc._id;
    return out;
  });
}

class AggCursor<T> {
  constructor(
    private db: InstanceType<typeof Database>,
    private table: string,
    private pipeline: Doc[]
  ) {}

  toArray(): T[] {
    let docs: Doc[] = [];
    let startIdx = 0;
    if (this.pipeline.length > 0 && this.pipeline[0].$match) {
      const where = buildWhere(this.pipeline[0].$match as Doc);
      docs = (this.db.prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${where.sql}`).all(...where.params) as Array<{ _id: string; doc: string }>).map(rowToDoc<Doc>);
      startIdx = 1;
    } else {
      docs = (this.db.prepare(`SELECT _id, doc FROM "${this.table}"`).all() as Array<{ _id: string; doc: string }>).map(rowToDoc<Doc>);
    }

    for (let i = startIdx; i < this.pipeline.length; i++) {
      const stage = this.pipeline[i];
      if (stage.$match) docs = docs.filter((d) => filterMatches(d, stage.$match as Doc));
      else if (stage.$group) docs = groupStage(docs, stage.$group as Doc);
      else if (stage.$sort) {
        const s = stage.$sort as Record<string, number>;
        docs = [...docs].sort((a, b) => {
          for (const [f, dir] of Object.entries(s)) {
            const av = resolveRef(a, f), bv = resolveRef(b, f);
            if (av === bv) continue;
            if (av === null || av === undefined) return dir;
            if (bv === null || bv === undefined) return -dir;
            return av < bv ? -dir : dir;
          }
          return 0;
        });
      } else if (stage.$limit) docs = docs.slice(0, stage.$limit as number);
      else if (stage.$skip) docs = docs.slice(stage.$skip as number);
      else if (stage.$unwind) {
        const spec = stage.$unwind as string | Doc;
        const fp = typeof spec === "string" ? spec : (spec as Doc).path as string;
        const field = fp.startsWith("$") ? fp.slice(1) : fp;
        const expanded: Doc[] = [];
        for (const doc of docs) {
          const arr = resolveRef(doc, field);
          if (Array.isArray(arr)) arr.forEach((item) => expanded.push({ ...doc, [field]: item }));
          else expanded.push(doc);
        }
        docs = expanded;
      } else if (stage.$project) docs = projectStage(docs, stage.$project as Doc);
      else if (stage.$count) docs = [{ [stage.$count as string]: docs.length }];
    }
    return docs as unknown as T[];
  }
}

// ── Bulk op ──────────────────────────────────────────────────────────────────

class BulkEntry {
  constructor(private ops: Array<{ filter: Doc; update: Doc }>, private filter: Doc) {}
  updateOne(update: Doc): void { this.ops.push({ filter: this.filter, update }); }
}

class UnorderedBulkOp {
  private ops: Array<{ filter: Doc; update: Doc }> = [];
  constructor(private coll: SqliteCollection) {}
  find(filter: Doc): BulkEntry { return new BulkEntry(this.ops, filter); }
  async execute(): Promise<{ ok: number; nModified: number }> {
    let n = 0;
    for (const op of this.ops) { const r = this.coll.updateOne(op.filter, op.update); n += r.modifiedCount; }
    return { ok: 1, nModified: n };
  }
}

// ── Collection ───────────────────────────────────────────────────────────────

class SqliteCollection<T extends Doc = Doc> {
  constructor(private db: InstanceType<typeof Database>, private table: string) {
    db.exec(`CREATE TABLE IF NOT EXISTS "${table}" (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)`);
  }

  findOne(filter: Doc, options?: { projection?: Record<string, unknown>; sort?: Record<string, unknown> }): T | null {
    const where = buildWhere(filter);
    let orderBy = "";
    if (options?.sort) {
      const parts = Object.entries(options.sort).map(([k, v]) => {
        const dir = Number(v) >= 0 ? "ASC" : "DESC";
        return `json_extract(doc, '$.${k}') ${dir}`;
      });
      if (parts.length > 0) orderBy = ` ORDER BY ${parts.join(", ")}`;
    }
    const row = this.db.prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${where.sql}${orderBy} LIMIT 1`).get(...where.params) as { _id: string; doc: string } | undefined;
    if (!row) return null;
    let doc = rowToDoc<Doc>(row);
    if (options?.projection) doc = applyProjection(doc, options.projection);
    return doc as T;
  }

  find(filter: Doc = {}): SqliteCursor<T> {
    return new SqliteCursor<T>(this.db, this.table, buildWhere(filter));
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
    this.db.transaction(() => { for (const input of inputs) { const doc = { ...input }; const id = doc._id != null ? String(doc._id) : randomUUID(); delete doc._id; stmt.run(id, JSON.stringify(doc)); ids.push(id); } })();
    return { insertedIds: ids, acknowledged: true };
  }

  updateOne(filter: Doc, update: Doc, options?: { upsert?: boolean }): { matchedCount: number; modifiedCount: number; acknowledged: boolean; upsertedId?: string | null } {
    const where = buildWhere(filter);
    const row = this.db.prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${where.sql} LIMIT 1`).get(...where.params) as { _id: string; doc: string } | undefined;
    if (!row) {
      if (options?.upsert) {
        const setObj = (update.$set ?? {}) as Doc;
        const newDoc: Doc = {};
        for (const [k, v] of Object.entries({ ...filter, ...setObj })) { if (!k.startsWith("$")) newDoc[k] = v; }
        const id = newDoc._id != null ? String(newDoc._id) : randomUUID();
        delete newDoc._id;
        this.db.prepare(`INSERT INTO "${this.table}" (_id, doc) VALUES (?, ?)`).run(id, JSON.stringify(newDoc));
        return { matchedCount: 0, modifiedCount: 0, acknowledged: true, upsertedId: id };
      }
      return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
    }
    const existing = JSON.parse(row.doc) as Doc;
    const setObj = update.$set as Doc | undefined;
    const updated = setObj ? { ...existing, ...setObj } : existing;
    this.db.prepare(`UPDATE "${this.table}" SET doc = ? WHERE _id = ?`).run(JSON.stringify(updated), row._id);
    return { matchedCount: 1, modifiedCount: 1, acknowledged: true };
  }

  updateMany(filter: Doc, update: Doc): { matchedCount: number; modifiedCount: number; acknowledged: boolean } {
    const where = buildWhere(filter);
    const rows = this.db.prepare(`SELECT _id, doc FROM "${this.table}" WHERE ${where.sql}`).all(...where.params) as Array<{ _id: string; doc: string }>;
    if (rows.length === 0) return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
    const stmt = this.db.prepare(`UPDATE "${this.table}" SET doc = ? WHERE _id = ?`);
    const setObj = update.$set as Doc | undefined;
    this.db.transaction(() => { for (const row of rows) { const existing = JSON.parse(row.doc) as Doc; stmt.run(JSON.stringify(setObj ? { ...existing, ...setObj } : existing), row._id); } })();
    return { matchedCount: rows.length, modifiedCount: rows.length, acknowledged: true };
  }

  deleteOne(filter: Doc): { deletedCount: number; acknowledged: boolean } {
    const where = buildWhere(filter);
    const row = this.db.prepare(`SELECT _id FROM "${this.table}" WHERE ${where.sql} LIMIT 1`).get(...where.params) as { _id: string } | undefined;
    if (!row) return { deletedCount: 0, acknowledged: true };
    this.db.prepare(`DELETE FROM "${this.table}" WHERE _id = ?`).run(row._id);
    return { deletedCount: 1, acknowledged: true };
  }

  deleteMany(filter: Doc): { deletedCount: number; acknowledged: boolean } {
    const where = buildWhere(filter);
    const r = this.db.prepare(`DELETE FROM "${this.table}" WHERE ${where.sql}`).run(...where.params);
    return { deletedCount: r.changes, acknowledged: true };
  }

  countDocuments(filter: Doc = {}): number {
    const where = buildWhere(filter);
    return (this.db.prepare(`SELECT COUNT(*) AS c FROM "${this.table}" WHERE ${where.sql}`).get(...where.params) as { c: number }).c;
  }

  count(filter: Doc = {}): number { return this.countDocuments(filter); }

  estimatedDocumentCount(): number {
    return (this.db.prepare(`SELECT COUNT(*) AS c FROM "${this.table}"`).get() as { c: number }).c;
  }

  aggregate<R extends Doc = Doc>(pipeline: Doc[]): AggCursor<R> {
    return new AggCursor<R>(this.db, this.table, pipeline);
  }

  createIndexes(_specs: unknown[]): void { /* managed by schema migrations */ }

  bulkWrite(ops: Array<{ updateOne?: { filter: Doc; update: Doc; upsert?: boolean }; insertOne?: { document: Doc }; deleteOne?: { filter: Doc } }>): { modifiedCount: number; upsertedCount: number; insertedCount: number; deletedCount: number } {
    let modifiedCount = 0; let upsertedCount = 0; let insertedCount = 0; let deletedCount = 0;
    this.db.transaction(() => {
      for (const op of ops) {
        if (op.updateOne) {
          const r = this.updateOne(op.updateOne.filter, op.updateOne.update, { upsert: op.updateOne.upsert });
          modifiedCount += r.modifiedCount;
          if (r.upsertedId) upsertedCount += 1;
        } else if (op.insertOne) {
          this.insertOne(op.insertOne.document);
          insertedCount += 1;
        } else if (op.deleteOne) {
          const r = this.deleteMany(op.deleteOne.filter);
          deletedCount += r.deletedCount;
        }
      }
    })();
    return { modifiedCount, upsertedCount, insertedCount, deletedCount };
  }

  initializeUnorderedBulkOp(): UnorderedBulkOp {
    return new UnorderedBulkOp(this as unknown as SqliteCollection);
  }
}

// ── Database facade ──────────────────────────────────────────────────────────

class SqliteDb {
  constructor(private sqlite: InstanceType<typeof Database>) {}
  collection<T extends Doc = Doc>(name: string): SqliteCollection<T> {
    return new SqliteCollection<T>(this.sqlite, name);
  }
  command(_cmd: Doc): Doc { return { ok: 1 }; }
}

// Export Db type alias for files that import `Db` as a type
export type { SqliteDb as Db };

// ── Singleton ────────────────────────────────────────────────────────────────

let _instance: SqliteDb | null = null;

export async function getDb(): Promise<SqliteDb> {
  if (_instance) return _instance;
  _instance = new SqliteDb(openSqlite());
  return _instance;
}
