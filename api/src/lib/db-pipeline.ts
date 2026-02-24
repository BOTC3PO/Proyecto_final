// In-memory aggregation pipeline: $match, $group, $sort, $limit, $skip,
// $unwind, $project, $count.  Shared by both SchemaCollection and JsonDocCollection.

import type { Doc } from "./db-types";
import { isOpObject } from "./db-open";

// ── Ref / expression evaluation ───────────────────────────────────────────────

export function resolveRef(doc: Doc, ref: string): unknown {
  const p = ref.startsWith("$") ? ref.slice(1) : ref;
  let cur: unknown = doc;
  for (const part of p.split(".")) {
    if (cur === null || cur === undefined) return undefined;
    cur = (cur as Doc)[part];
  }
  return cur;
}

export function evalExpr(doc: Doc, expr: unknown): unknown {
  if (typeof expr === "string" && expr.startsWith("$")) return resolveRef(doc, expr);
  if (typeof expr !== "object" || expr === null) return expr;
  const e = expr as Doc;

  if ("$ifNull" in e) {
    const [a, b] = e.$ifNull as [unknown, unknown];
    const v = evalExpr(doc, a);
    return (v !== null && v !== undefined) ? v : evalExpr(doc, b);
  }
  if ("$cond" in e) {
    const cond = e.$cond;
    if (Array.isArray(cond))
      return evalExpr(doc, cond[0]) ? evalExpr(doc, cond[1]) : evalExpr(doc, cond[2]);
    const c = cond as Doc;
    return evalExpr(doc, c.if) ? evalExpr(doc, c.then) : evalExpr(doc, c.else);
  }
  if ("$eq"   in e) { const [a, b] = e.$eq as [unknown, unknown]; return evalExpr(doc, a) === evalExpr(doc, b); }
  if ("$ne"   in e) { const [a, b] = e.$ne as [unknown, unknown]; return evalExpr(doc, a) !== evalExpr(doc, b); }
  if ("$in"   in e) {
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

// ── In-memory filter (for $match after the first stage) ──────────────────────

export function filterMatches(doc: Doc, filter: Doc): boolean {
  for (const [key, value] of Object.entries(filter)) {
    if (key === "$or") return (value as Doc[]).some((s) => filterMatches(doc, s));
    if (key === "$and") return (value as Doc[]).every((s) => filterMatches(doc, s));

    const dv = resolveRef(doc, key);
    if (isOpObject(value)) {
      for (const [op, ov] of Object.entries(value as Record<string, unknown>)) {
        switch (op) {
          case "$eq":      if (dv !== ov) return false; break;
          case "$ne":      if (dv === ov) return false; break;
          case "$gt":      if (!(dv != null && (dv as number) >  (ov as number))) return false; break;
          case "$gte":     if (!(dv != null && (dv as number) >= (ov as number))) return false; break;
          case "$lt":      if (!(dv != null && (dv as number) <  (ov as number))) return false; break;
          case "$lte":     if (!(dv != null && (dv as number) <= (ov as number))) return false; break;
          case "$in":      if (!(ov as unknown[]).includes(dv)) return false; break;
          case "$nin":     if ( (ov as unknown[]).includes(dv)) return false; break;
          case "$elemMatch":
            if (!Array.isArray(dv) || !dv.some((el) => filterMatches(el as Doc, ov as Doc)))
              return false;
            break;
        }
      }
    } else if (dv !== value) return false;
  }
  return true;
}

// ── Projection helper (shared between cursor and pipeline) ────────────────────

export function applyProjection(doc: Doc, proj: Record<string, unknown>): Doc {
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

// ── Pipeline stage implementations ───────────────────────────────────────────

function groupStage(docs: Doc[], spec: Doc): Doc[] {
  const gId = spec._id;
  const groups = new Map<string, Doc[]>();

  for (const doc of docs) {
    let key: string;
    if (gId === null) {
      key = "__null__";
    } else if (typeof gId === "string" && gId.startsWith("$")) {
      key = String(resolveRef(doc, gId) ?? "__null__");
    } else if (typeof gId === "object" && gId !== null) {
      const kObj: Doc = {};
      for (const [k, v] of Object.entries(gId as Doc))
        kObj[k] = typeof v === "string" && v.startsWith("$") ? resolveRef(doc, v) : v;
      key = JSON.stringify(kObj);
    } else {
      key = String(gId);
    }
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
      if (field === "_id" || typeof accExpr !== "object" || accExpr === null) continue;
      const acc = accExpr as Doc;

      if ("$sum" in acc) {
        const sv = acc.$sum;
        if (sv === 1 || typeof sv === "number") {
          out[field] = grp.length * (typeof sv === "number" ? sv : 1);
        } else if (typeof sv === "string") {
          out[field] = grp.reduce((s, d) => {
            const v = resolveRef(d, sv);
            return s + (typeof v === "number" ? v : 0);
          }, 0);
        } else if (typeof sv === "object" && sv !== null) {
          out[field] = grp.reduce((s, d) => s + Number(evalExpr(d, sv) || 0), 0);
        }
      } else if ("$avg" in acc) {
        const sv = acc.$avg as string;
        const vals = grp.map((d) => resolveRef(d, sv)).filter((v): v is number => typeof v === "number");
        out[field] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
      } else if ("$min" in acc) {
        const sv = acc.$min as string;
        const vals = grp.map((d) => resolveRef(d, sv)).filter((v) => v != null);
        out[field] = vals.length ? vals.reduce((mn, v) => (v < mn ? v : mn)) : null;
      } else if ("$max" in acc) {
        const sv = acc.$max as string;
        const vals = grp.map((d) => resolveRef(d, sv)).filter((v) => v != null);
        out[field] = vals.length ? vals.reduce((mx, v) => (v > mx ? v : mx)) : null;
      } else if ("$addToSet" in acc) {
        const sv = acc.$addToSet as string;
        const set = new Set(
          grp.map((d) => resolveRef(d, sv)).filter((v) => v != null).map(String)
        );
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

// ── Main pipeline runner ──────────────────────────────────────────────────────

export function processPipeline(docs: Doc[], pipeline: Doc[], startIdx = 0): Doc[] {
  for (let i = startIdx; i < pipeline.length; i++) {
    const stage = pipeline[i];

    if      (stage.$match)   { docs = docs.filter((d) => filterMatches(d, stage.$match as Doc)); }
    else if (stage.$group)   { docs = groupStage(docs, stage.$group as Doc); }
    else if (stage.$sort) {
      const s = stage.$sort as Record<string, number>;
      docs = [...docs].sort((a, b) => {
        for (const [f, dir] of Object.entries(s)) {
          const av = resolveRef(a, f), bv = resolveRef(b, f);
          if (av === bv) continue;
          if (av == null) return  dir;
          if (bv == null) return -dir;
          return av < bv ? -dir : dir;
        }
        return 0;
      });
    }
    else if (stage.$limit)   { docs = docs.slice(0, stage.$limit as number); }
    else if (stage.$skip)    { docs = docs.slice(stage.$skip as number); }
    else if (stage.$unwind) {
      const spec  = stage.$unwind as string | Doc;
      const fp    = typeof spec === "string" ? spec : (spec as Doc).path as string;
      const field = fp.startsWith("$") ? fp.slice(1) : fp;
      const expanded: Doc[] = [];
      for (const doc of docs) {
        const arr = resolveRef(doc, field);
        if (Array.isArray(arr)) arr.forEach((item) => expanded.push({ ...doc, [field]: item }));
        else expanded.push(doc);
      }
      docs = expanded;
    }
    else if (stage.$project) { docs = projectStage(docs, stage.$project as Doc); }
    else if (stage.$count)   { docs = [{ [stage.$count as string]: docs.length }]; }
  }
  return docs;
}
