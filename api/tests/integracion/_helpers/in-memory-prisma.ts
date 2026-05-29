/**
 * In-memory Prisma stub used by Sprint 7 integration tests.
 *
 * Only implements the subset of the Prisma client API actually exercised by
 * `api/src/routes/plantillas.ts` and `api/src/routes/vblang-datasets.ts`:
 *
 *  - findMany / findUnique / findFirst / create / update / count / aggregate
 *  - createMany / delete
 *  - $transaction (sequential, no rollback semantics)
 *
 * Filter support: `equals` (default), `in`, `not`/`NOT`, `contains` (case-insensitive),
 * `AND`, `OR`, and nested combinations.
 *
 * The store is per-instance, so each test gets a fresh DB via `new InMemoryPrisma()`.
 */

type Row = Record<string, unknown>;

type WhereClause = Record<string, unknown> | undefined;

function matchScalar(value: unknown, condition: unknown): boolean {
  if (condition === null || condition === undefined) {
    return value === condition || (value === null && condition === undefined);
  }
  if (typeof condition !== "object" || Array.isArray(condition)) {
    return value === condition;
  }
  const cond = condition as Record<string, unknown>;
  if ("equals" in cond) {
    if (cond.equals !== value) return false;
  }
  if ("not" in cond) {
    if (cond.not === value) return false;
  }
  if ("in" in cond) {
    const arr = cond.in as readonly unknown[];
    if (!arr.includes(value)) return false;
  }
  if ("notIn" in cond) {
    const arr = cond.notIn as readonly unknown[];
    if (arr.includes(value)) return false;
  }
  if ("contains" in cond) {
    if (typeof value !== "string") return false;
    const needle = String(cond.contains);
    if (cond.mode === "insensitive") {
      if (!value.toLowerCase().includes(needle.toLowerCase())) return false;
    } else if (!value.includes(needle)) return false;
  }
  return true;
}

function rowMatches(row: Row, where: WhereClause): boolean {
  if (!where) return true;
  for (const [key, val] of Object.entries(where)) {
    if (key === "AND") {
      const arr = (Array.isArray(val) ? val : [val]) as WhereClause[];
      if (!arr.every((w) => rowMatches(row, w))) return false;
      continue;
    }
    if (key === "OR") {
      const arr = (Array.isArray(val) ? val : [val]) as WhereClause[];
      if (!arr.some((w) => rowMatches(row, w))) return false;
      continue;
    }
    if (key === "NOT") {
      if (rowMatches(row, val as WhereClause)) return false;
      continue;
    }
    if (!matchScalar(row[key], val)) return false;
  }
  return true;
}

type OrderBy = Record<string, "asc" | "desc"> | Array<Record<string, "asc" | "desc">>;

function compareRows(a: Row, b: Row, orderBy: OrderBy): number {
  const list = Array.isArray(orderBy) ? orderBy : [orderBy];
  for (const ob of list) {
    for (const [key, dir] of Object.entries(ob)) {
      const av = a[key];
      const bv = b[key];
      if (av === bv) continue;
      if (av === null || av === undefined) return 1;
      if (bv === null || bv === undefined) return -1;
      const cmp = (av as number | string) < (bv as number | string) ? -1 : 1;
      return dir === "desc" ? -cmp : cmp;
    }
  }
  return 0;
}

type CountSelect = { select?: Record<string, true> } | undefined;

class Table<TRow extends Row> {
  rows: TRow[] = [];
  // model name (for child relation counts)
  constructor(public name: string) {}

  async findMany(args?: {
    where?: WhereClause;
    orderBy?: OrderBy;
    take?: number;
    skip?: number;
    include?: Record<string, CountSelect | true>;
    select?: Record<string, true>;
  }): Promise<TRow[]> {
    let out = this.rows.filter((r) => rowMatches(r, args?.where));
    if (args?.orderBy) {
      const ob = args.orderBy;
      out = [...out].sort((a, b) => compareRows(a, b, ob));
    }
    if (args?.skip) out = out.slice(args.skip);
    if (args?.take !== undefined) out = out.slice(0, args.take);
    if (args?.include) {
      // Only support `_count: { select: { <rel>: true } }`, hooked up externally.
      out = out.map((r) => ({ ...r }));
    }
    return out.map((r) => ({ ...r }));
  }

  async findUnique(args: { where: Record<string, unknown> }): Promise<TRow | null> {
    return this.findFirst({ where: args.where });
  }

  async findFirst(args: { where?: WhereClause }): Promise<TRow | null> {
    const found = this.rows.find((r) => rowMatches(r, args?.where));
    return found ? ({ ...found } as TRow) : null;
  }

  async create(args: { data: TRow }): Promise<TRow> {
    const copy = { ...args.data } as TRow;
    this.rows.push(copy);
    return { ...copy };
  }

  async createMany(args: { data: TRow[] }): Promise<{ count: number }> {
    for (const d of args.data) this.rows.push({ ...d });
    return { count: args.data.length };
  }

  async update(args: {
    where: Record<string, unknown>;
    data: Partial<TRow>;
  }): Promise<TRow> {
    const idx = this.rows.findIndex((r) => rowMatches(r, args.where));
    if (idx === -1) throw new Error(`Record not found in ${this.name}`);
    const merged = { ...this.rows[idx], ...args.data } as TRow;
    this.rows[idx] = merged;
    return { ...merged };
  }

  async delete(args: { where: Record<string, unknown> }): Promise<TRow> {
    const idx = this.rows.findIndex((r) => rowMatches(r, args.where));
    if (idx === -1) throw new Error(`Record not found in ${this.name}`);
    const [removed] = this.rows.splice(idx, 1);
    return { ...removed };
  }

  async upsert(args: {
    where: Record<string, unknown>;
    create: TRow;
    update: Partial<TRow>;
  }): Promise<TRow> {
    const idx = this.rows.findIndex((r) => rowMatches(r, args.where));
    if (idx === -1) {
      const copy = { ...args.create } as TRow;
      this.rows.push(copy);
      return { ...copy };
    }
    const merged = { ...this.rows[idx], ...args.update } as TRow;
    this.rows[idx] = merged;
    return { ...merged };
  }

  async count(args?: { where?: WhereClause }): Promise<number> {
    return this.rows.filter((r) => rowMatches(r, args?.where)).length;
  }

  async aggregate(args: {
    where?: WhereClause;
    _max?: Record<string, true>;
  }): Promise<{ _max: Record<string, number | null> }> {
    const subset = this.rows.filter((r) => rowMatches(r, args?.where));
    const max: Record<string, number | null> = {};
    if (args._max) {
      for (const key of Object.keys(args._max)) {
        let m: number | null = null;
        for (const r of subset) {
          const v = r[key];
          if (typeof v === "number") {
            if (m === null || v > m) m = v;
          }
        }
        max[key] = m;
      }
    }
    return { _max: max };
  }
}

export type PlantillaRow = {
  id: string;
  ownerUserId: string;
  schoolId: string | null;
  visibility: string;
  nombre: string;
  descripcion: string | null;
  materia: string | null;
  tags: string | null;
  codigoDsl: string;
  version: number;
  basadoEn: string | null;
  publicAprobado: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PlantillaVersionRow = {
  id: string;
  plantillaId: string;
  version: number;
  codigoDsl: string;
  changelog: string | null;
  createdAt: string;
  createdBy: string;
};

export type UsuarioRow = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
  escuelaId: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DatasetRow = {
  id: string;
  ownerUserId: string;
  schoolId: string | null;
  visibility: string;
  nombre: string;
  descripcion: string | null;
  columnas: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type FilaRow = {
  id: string;
  datasetId: string;
  orden: number;
  datos: string;
  createdAt: string;
};

export class InMemoryPrisma {
  plantillaEjercicio = new Table<PlantillaRow>("plantillaEjercicio");
  plantillaEjercicioVersion = new Table<PlantillaVersionRow>("plantillaEjercicioVersion");
  usuario = new Table<UsuarioRow>("usuario");
  vblangDataset = new Table<DatasetRow>("vblangDataset");
  vblangDatasetFila = new Table<FilaRow>("vblangDatasetFila");
  suscripcion = new Table<Row>("suscripcion");
  historialPago = new Table<Row>("historialPago");
  limiteEscuela = new Table<Row>("limiteEscuela");

  // override findMany on vblangDataset to support _count include.
  constructor() {
    const filas = this.vblangDatasetFila;
    const dsFindMany = this.vblangDataset.findMany.bind(this.vblangDataset);
    this.vblangDataset.findMany = async (args) => {
      const rows = await dsFindMany(args);
      if (args?.include && (args.include as { _count?: unknown })._count) {
        for (const r of rows) {
          const count = filas.rows.filter((f) => f.datasetId === r.id).length;
          (r as Record<string, unknown>)._count = { filas: count };
        }
      }
      return rows;
    };
  }

  async $transaction<T>(fn: (tx: this) => Promise<T>): Promise<T> {
    // Sequential, no rollback (sufficient for happy/sad path tests).
    return fn(this);
  }
}
