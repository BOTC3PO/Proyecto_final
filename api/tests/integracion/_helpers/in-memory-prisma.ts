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

import { randomUUID } from "node:crypto";

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
  // MULTIROL-01: operador `has` para `String[]` (Prisma 5+). Lo
  // usamos en `requireAdmin` para chequear pertenencia a `roles`.
  if ("has" in cond) {
    if (!Array.isArray(value)) return false;
    if (!value.includes(cond.has)) return false;
  }
  if ("hasEvery" in cond) {
    if (!Array.isArray(value)) return false;
    const needles = Array.isArray(cond.hasEvery) ? cond.hasEvery : [cond.hasEvery];
    for (const n of needles) {
      if (!value.includes(n)) return false;
    }
  }
  if ("hasSome" in cond) {
    if (!Array.isArray(value)) return false;
    const needles = Array.isArray(cond.hasSome) ? cond.hasSome : [cond.hasSome];
    let any = false;
    for (const n of needles) {
      if (value.includes(n)) { any = true; break; }
    }
    if (!any) return false;
  }
  return true;
}

/**
 * FIX-CALENDARIO: walker de `where` con soporte para el filtro de
 * relación `miembros: { some: { ... } }` (criterio canónico de
 * "docente del aula" — QA-FIX-05). El stub genérico trata `some`
 * como no-op y rompe el OR del feed unificado de calendario. Esta
 * función es el reemplazo que usa el override de `clase.findMany`.
 */
function matchesClaseWhere(
  row: Row,
  where: Record<string, unknown> | undefined,
  self: InMemoryPrisma
): boolean {
  if (!where) return true;
  for (const [k, v] of Object.entries(where)) {
    if (k === "AND") {
      const arr = (Array.isArray(v) ? v : [v]) as WhereClause[];
      if (!arr.every((w) => matchesClaseWhere(row, w as Record<string, unknown>, self))) return false;
      continue;
    }
    if (k === "OR") {
      const arr = (Array.isArray(v) ? v : [v]) as WhereClause[];
      if (!arr.some((w) => matchesClaseWhere(row, w as Record<string, unknown>, self))) return false;
      continue;
    }
    if (k === "NOT") {
      if (matchesClaseWhere(row, v as Record<string, unknown>, self)) return false;
      continue;
    }
    if (k === "miembros") {
      const cond = v as { some?: Record<string, unknown> } | null | undefined;
      if (!cond || typeof cond !== "object" || !("some" in cond) || !cond.some) {
        // Sin `some`, el genérico debería haber filtrado. Si llegamos
        // acá, devolvemos false para no incluir la fila.
        return false;
      }
      const matches = self.claseMiembro.rows.some(
        (m) => m.claseId === row.id && rowMatches(m as Row, cond.some as WhereClause)
      );
      if (!matches) return false;
      continue;
    }
    if (!rowMatches(row, { [k]: v })) return false;
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

  async updateMany(args: {
    where: Record<string, unknown>;
    data: Partial<TRow>;
  }): Promise<{ count: number }> {
    let count = 0;
    for (let i = 0; i < this.rows.length; i++) {
      if (rowMatches(this.rows[i], args.where)) {
        this.rows[i] = { ...this.rows[i], ...args.data } as TRow;
        count++;
      }
    }
    return { count };
  }

  async delete(args: { where: Record<string, unknown> }): Promise<TRow> {
    const idx = this.rows.findIndex((r) => rowMatches(r, args.where));
    if (idx === -1) throw new Error(`Record not found in ${this.name}`);
    const [removed] = this.rows.splice(idx, 1);
    return { ...removed };
  }

  async deleteMany(args: { where: Record<string, unknown> }): Promise<{ count: number }> {
    const before = this.rows.length;
    this.rows = this.rows.filter((r) => !rowMatches(r, args.where)) as TRow[];
    return { count: before - this.rows.length };
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

  // FIX-PANEL-EVALUACIONES — soporte mínimo de `groupBy` para el
  // endpoint `/api/profesor/menu`, que llama
  // `prisma.claseMiembro.groupBy({ by: ["claseId"], _count: { ... } })`
  // dentro del cálculo de `weeklyPlan`. Sin este stub el endpoint
  // tira 500 en tests aunque la lógica de recentEvaluaciones esté
  // bien. La implementación es suficiente para los casos de uso
  // actuales: agrupar por 1+ campos y devolver `_count` de un campo
  // (o todas las filas si se omite el `_count`).
  async groupBy(args: {
    by: string | string[];
    where?: WhereClause;
    _count?: { _all?: true } | Record<string, true>;
  }): Promise<Array<Record<string, unknown>>> {
    const by = Array.isArray(args.by) ? args.by : [args.by];
    const subset = this.rows.filter((r) => rowMatches(r, args?.where));
    const groups = new Map<string, Record<string, unknown>>();
    for (const row of subset) {
      const key = by.map((field) => String((row as Record<string, unknown>)[field] ?? "")).join("|");
      if (!groups.has(key)) {
        const entry: Record<string, unknown> = {};
        for (const field of by) entry[field] = (row as Record<string, unknown>)[field];
        // _count pedido por el route: o `_count.usuarioId` o `_all`.
        if (args._count && "_all" in args._count) {
          entry._count = { _all: 0, ...(Object.keys(args._count).filter((k) => k !== "_all").reduce((acc, k) => ({ ...acc, [k]: 0 }), {})) };
        } else if (args._count) {
          entry._count = Object.fromEntries(Object.keys(args._count).map((k) => [k, 0]));
        } else {
          entry._count = { _all: 0 };
        }
        groups.set(key, entry);
      }
      const entry = groups.get(key)!;
      const cnt = entry._count as Record<string, number>;
      if ("_all" in cnt) cnt._all = (cnt._all ?? 0) + 1;
      // El route usa `_count: { usuarioId: true }` — sumamos sobre
      // cada campo pedido (que no sea `_all`).
      if (args._count) {
        for (const field of Object.keys(args._count)) {
          if (field === "_all") continue;
          cnt[field] = (cnt[field] ?? 0) + 1;
        }
      }
    }
    return Array.from(groups.values());
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
  // MULTIROL-01: la fila tiene `roles` además de `role`. Los seeds
  // preexistentres lo promueven a `[role]` (ver setup.ts).
  roles: string[];
  escuelaId: string | null;
  isDeleted: boolean;
  // FASE 1 — marcador de cuenta espejo. `null` para cuentas reales,
  // "ESPEJO_ALUMNO" para los espejos alumno del staff. Nullable
  // aditiva: la columna se agregó en
  // 20260619000000_cuenta_espejo_vinculada sin tocar filas previas.
  // Opcional en el stub: los tests preexistentes (que no la settean)
  // siguen compilando; el servicio la setea explícitamente al crear
  // un espejo. La producción la persiste con NOT NULL DEFAULT vacía
  // (columna nullable en el schema, sin default).
  tipoCuenta?: string | null;
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

export type ClaseRow = {
  id: string;
  escuelaId: string;
  name: string;
  grade: string;
  code?: string | null;
  classCode?: string | null;
  allowComments?: boolean;
  isDeleted: boolean;
  status: string;
  createdBy?: string | null;
  teacherId?: string | null;
  teacherOfRecord?: string | null;
  deletedAt?: string | null;
  deletedBy?: string | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type ClaseMiembroRow = {
  claseId: string;
  usuarioId: string;
  rolEnClase: string;
};

export type ClaseModuloRow = {
  claseId: string;
  moduloId: string;
  assignedAt?: string | null;
  required: boolean;
};

// PLAN-V §1 — períodos académicos declarados en el aula.
export type ClasePeriodoRow = {
  id: string;
  claseId: string;
  nombre: string;
  desde: string;
  hasta: string;
  orden: number;
  createdAt: string;
  updatedAt: string;
};

export type ActividadAulaRow = {
  id: string;
  aulaId: string;
  tipo: string;
  titulo: string;
  descripcion?: string | null;
  fecha: string;
  fechaFin?: string | null;
  createdBy: string;
  createdAt: string;
  isDeleted: boolean;
};

export type CalendarioEscuelaRow = {
  id: string;
  escuelaId: string;
  // FIX-CALENDARIO-B: nullable. null = global; con valor = acotado a
  // un aula específica. Ver migración
  // 20260617000000_calendario_escuela_aula_id.
  aulaId?: string | null;
  tipo: string;
  titulo: string;
  descripcion?: string | null;
  fechaInicio: string;
  fechaFin: string;
  createdBy: string;
  createdAt: string;
  isDeleted: boolean;
};

export type ModuloRow = {
  id: string;
  slug?: string | null;
  titulo: string;
  descripcion?: string | null;
  // FIX-MODULO-CRASH: materia. Nullable en la columna real; el
  // helper del test no fuerza la presencia.
  subject?: string | null;
  // FIX-GUARDADO: teoría como contenido embebido (JSON serializado).
  // Nullable en la columna real; el helper del test no fuerza la
  // presencia.
  theoryItems?: string | null;
  // FIX-MODULO-CRASH-LEVEL: nivel educativo. Nullable en la columna
  // real; el helper del test no fuerza la presencia.
  level?: string | null;
  visibility: string;
  schoolId?: string | null;
  ownerUserId: string;
  dependencies?: string | null;
  // PLAN-X §7 — oculto de los listados generales salvo dueño/invitado/aula.
  descatalogado?: boolean;
  createdAt: string;
  updatedAt: string;
};

// PLAN-X §7 — invitación individual a un módulo descatalogado.
export type ModuloInvitacionRow = {
  moduloId: string;
  usuarioId: string;
  invitedBy?: string | null;
  createdAt: string;
};

export type QuizRow = {
  id: string;
  // PLAN-CORRECCIONES C2 — nullable: quiz standalone sin módulo.
  moduleId?: string | null;
  ownerUserId?: string | null;
  title?: string | null;
  currentVersionId?: string | null;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type QuizVersionRow = {
  id: string;
  quizId: string;
  versionNumber: number;
  questions: string | unknown[];
  generatorId?: string | null;
  generatorVersion?: string | null;
  params?: string | null;
  count?: number | null;
  seedPolicy: number;
  fixedSeed?: string | null;
  settings: string | Record<string, unknown>;
  createdAt: string;
  createdBy: string;
};

export type ProgresoModuloRow = {
  id: string;
  usuarioId: string;
  moduloId: string;
  aulaId: string | null;
  status: string;
  score?: number | null;
  attempts: number;
  completedAt?: string | null;
  updatedAt: string;
};

export type QuizAttemptRow = {
  id: string;
  quizId: string;
  quizVersionId: string;
  userId: string;
  status: string;
  startedAt: string;
  submittedAt: string | null;
  score: number | null;
  maxScore: number | null;
  answers: string;
  feedback?: string | null;
  grading?: string | null;
  seed?: string | null;
  seedPolicy: number;
  attemptNo?: number | null;
};

export type QuizUmbralRow = {
  quizId: string;
  moduloId: string;
  umbral: number;
  creadoBy: string;
  createdAt: string;
};

export type EncuestaRow = {
  id: string;
  classroomId: string;
  title: string;
  description: string;
  type: string;
  status: string;
  options: string;
  maxOptions?: number | null;
  startAt: string;
  endAt: string;
  showResultsBeforeClose?: boolean | null;
  showResultsRealtime?: boolean | null;
  responsesCount?: number | null;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string | null;
  classroomName?: string | null;
};

export type EncuestaRespuestaRow = {
  id?: string;
  surveyId: string;
  classroomId: string;
  usuarioId: string;
  optionId?: string | null;
  scores?: string | null;
  ranking?: string | null;
  createdAt: string;
};

export type BloqueJsonRow = {
  id: string;
  schemaVersion: number;
  content: string;
  contentHash?: string | null;
  createdAt: string;
  updatedAt: string;
};

// PLAN-G §1 (item 25) — "material guardado" (mapa/timeline/interactivo/
// presentacion), patrón padre+version igual a Quiz/QuizVersion.
export type MaterialRow = {
  id: string;
  tipo: string;
  titulo: string;
  ownerUserId: string;
  schoolId?: string | null;
  visibility: string;
  currentVersionId?: string | null;
  isDeleted?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type MaterialVersionRow = {
  id: string;
  materialId: string;
  versionNumber: number;
  schemaVersion: number;
  contenido: string;
  contentHash?: string | null;
  createdAt: string;
  createdBy?: string | null;
};

// SEC-LIBRO — fila de `libros` para el rig de tests. Tiene los
// campos de ownership que agregó la migración
// 20260617030000_sec_libro_ownership. Nullable para reflejar libros
// "huérfanos" (sin dueño) que el handler trata como solo-admin.
export type LibroRow = {
  id: string;
  json: string;
  ownerUserId: string | null;
  schoolId: string | null;
  visibility: string;
  updatedAt: string | null;
};

export type ConfigModuloRow = {
  id: string;
  items: string;
  updatedAt: string;
};

export type AuditLogRow = {
  id: string;
  actorId: string;
  action: string;
  targetType: string;
  targetId: string | null;
  timestamp: string;
  metadata: string | null;
};

// FASE 1 — fila de `membresias` (la tabla ya existía en el schema
// desde la migración inicial, pero el stub in-memory no la modelaba
// porque ningún test anterior la ejercitaba). Necesaria para los
// tests de Fase 1 porque `provisionarEspejoAlumno` crea una
// `Membresia` STUDENT para el espejo.
export type MembresiaRow = {
  usuarioId: string;
  escuelaId: string;
  rol: string;
  estado: string;
  fechaAlta: string;
  fechaBaja?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

// FASE 1 — fila de `cuentas_vinculadas` (tabla puente simétrica
// introducida por la migración 20260619000000_cuenta_espejo_vinculada).
// Las dos FKs son equivalentes; la aplicación inserta siempre con
// `min(a,b), max(a,b)` para que la unicidad del par no dependa del
// orden.
export type CuentaVinculadaRow = {
  id: string;
  usuarioAId: string;
  usuarioBId: string;
  createdAt: string;
};

// FASE 5 — fila de `vinculos_padre_hijo` (`ProgresoModuloVinculo`).
// Une padre↔hijo (personas DISTINTAS, solo monitoreo). NO confundir
// con `cuentaVinculada` (misma persona, switchable).
export type ProgresoModuloVinculoRow = {
  id: string;
  parentId: string;
  childId: string;
  estado: string;
  nombre?: string | null;
  usuario?: string | null;
  grado?: string | null;
  escuela?: string | null;
  notas?: string | null;
  permisos?: string | null;
  solicitadoAt?: string | null;
  createdAt: string;
  updatedAt: string;
};

// FASE 6 — fila de `suggestions` (panel de gobernanza). El endpoint
// `POST /api/solicitar-rol` crea una `Suggestion` con
// `suggestionType = "CAMBIO_ROL"`. El stub la necesitaba para que
// el test de no-regresión de `solicitar-rol` no devolviera 500.
export type SuggestionRow = {
  id: string;
  suggestionType: string;
  targetType: string;
  targetId: string;
  title: string;
  body: string;
  createdBy: string;
  createdAt: string;
  status: string;
};

// FASE 7 — fila de `modo_aula` (restricciones activas por aula).
// El middleware `checkModoAula("tienda" | "economia")` lo consulta
// para decidir si bloquea a un USER puro. Solo importa para los
// tests de endurecimiento: la columna real es nullable y se setea
// desde la app de staff, no por autoservicio.
export type ModoAulaRow = {
  id: string;
  aulaId: string;
  activo: boolean;
  restricciones: string;
  createdAt: string;
  updatedAt: string;
};

export class InMemoryPrisma {
  plantillaEjercicio = new Table<PlantillaRow>("plantillaEjercicio");
  plantillaEjercicioVersion = new Table<PlantillaVersionRow>("plantillaEjercicioVersion");
  usuario = new Table<UsuarioRow>("usuario");
  encuesta = new Table<EncuestaRow>("encuesta");
  encuestaRespuesta = new Table<EncuestaRespuestaRow>("encuestaRespuesta");
  bloqueJson = new Table<BloqueJsonRow>("bloqueJson");
  material = new Table<MaterialRow>("material");
  materialVersion = new Table<MaterialVersionRow>("materialVersion");
  configModulo = new Table<ConfigModuloRow>("configModulo");
  // SEC-LIBRO — modelo `libro` (tabla `libros`). El handler usa
  // `prisma.libro.findFirst`, `findMany`, `create`, `updateMany`.
  libro = new Table<LibroRow>("libro");
  vblangDataset = new Table<DatasetRow>("vblangDataset");
  vblangDatasetFila = new Table<FilaRow>("vblangDatasetFila");
  formula = new Table<Row>("formula");
  suscripcion = new Table<Row>("suscripcion");
  historialPago = new Table<Row>("historialPago");
  limiteEscuela = new Table<Row>("limiteEscuela");
  escuela = new Table<Row>("escuela");
  transaccionEscuela = new Table<Row>("transaccionEscuela");
  liquidacionEscuela = new Table<Row>("liquidacionEscuela");
  clase = new Table<ClaseRow>("clase");
  claseMiembro = new Table<ClaseMiembroRow>("claseMiembro");
  claseModulo = new Table<ClaseModuloRow>("claseModulo");
  clasePeriodo = new Table<ClasePeriodoRow>("clasePeriodo");
  actividadAula = new Table<ActividadAulaRow>("actividadAula");
  calendarioEscuela = new Table<CalendarioEscuelaRow>("calendarioEscuela");
  modulo = new Table<ModuloRow>("modulo");
  moduloInvitacion = new Table<ModuloInvitacionRow>("moduloInvitacion");
  quiz = new Table<QuizRow>("quiz");
  quizVersion = new Table<QuizVersionRow>("quizVersion");
  quizAttempt = new Table<QuizAttemptRow>("quizAttempt");
  quizUmbral = new Table<QuizUmbralRow>("quizUmbral");
  progresoModulo = new Table<ProgresoModuloRow>("progresoModulo");
  // FASE 1 — tablas necesarias para provisionarEspejoAlumno:
  //   - `membresia` ya existía en el schema pero el stub no la
  //     modelaba. La agregamos para que el servicio pueda crear y
  //     consultar membresias STUDENT del espejo.
  //   - `cuentaVinculada` es la tabla puente simétrica nueva.
  membresia = new Table<MembresiaRow>("membresia");
  cuentaVinculada = new Table<CuentaVinculadaRow>("cuentaVinculada");
  // FASE 5 — vínculo padre↔hijo. El handler crea filas SIN `id`
  // (la columna es `@default(uuid())` en el schema), así que el
  // constructor parchea `create` para autogenerarlo.
  progresoModuloVinculo = new Table<ProgresoModuloVinculoRow>("progresoModuloVinculo");
  auditLog = new Table<AuditLogRow>("auditLog");
  // FASE 6 — `suggestions` (gobernanza + `solicitar-rol`).
  suggestion = new Table<SuggestionRow>("suggestion");
  // FASE 7 — `modoAula` (restricciones tienda/economia por aula).
  // Usado por `checkModoAula` (api/src/lib/modo-aula-middleware.ts).
  modoAula = new Table<ModoAulaRow>("modoAula");
  // PLAN-A §2 — `publicacion`/`comentario` (routes/publicaciones.ts). No
  // existían en el stub; los tests de esa ruta usaban Mongo real y hoy
  // ni corren en `pnpm test`. Tablas genéricas, igual que `suscripcion`.
  publicacion = new Table<Row>("publicacion");
  comentario = new Table<Row>("comentario");
  moderacionEvento = new Table<Row>("moderacionEvento");
  // PLAN-A §3 — persistencia de asistencia (routes/asistencia.ts).
  asistencia = new Table<Row>("asistencia");
  // PLAN-A §3.4 — log de eventos para reportes del padre (routes/asistencia.ts).
  eventoReportePadre = new Table<Row>("eventoReportePadre");
  // PLAN-B Fase 2 — núcleo de cobros escuela→familias (routes/cobros.ts).
  cobroEscuela = new Table<Row>("cobroEscuela");
  cuotaAlumno = new Table<Row>("cuotaAlumno");
  pago = new Table<Row>("pago");
  // PLAN-B Fase 3 — conexión escuela↔pasarela.
  escuelaPasarela = new Table<Row>("escuelaPasarela");
  // PLAN-B Fase 6 — saldo inicial de alumno (lib/economia-alta.ts).
  economiaTransaccion = new Table<Row>("economiaTransaccion");
  economiaSaldo = new Table<Row>("economiaSaldo");
  economiaConfig = new Table<Row>("economiaConfig");
  // FIX-MENSAJERIA-ESCUELA-EFECTIVA — mensajeria.ts (hilos 1:1 y avisos)
  // no tenía ninguna tabla stubeada; la ruta nunca había tenido tests
  // de integración.
  hilo = new Table<Row>("hilo");
  mensajeDirecto = new Table<Row>("mensajeDirecto");
  aviso = new Table<Row>("aviso");
  avisoLeido = new Table<Row>("avisoLeido");

  // override findMany on vblangDataset to support _count include.
  constructor() {
    // FASE 5 — autogenerar `id` en los inserts de vínculo padre↔hijo
    // (el handler no lo pasa; el schema lo deriva con @default(uuid())).
    const vinculoCreate = this.progresoModuloVinculo.create.bind(this.progresoModuloVinculo);
    this.progresoModuloVinculo.create = async (args) => {
      const data = args.data as ProgresoModuloVinculoRow;
      if (!data.id) data.id = randomUUID();
      return vinculoCreate({ data });
    };

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

    // Tarea 16b: findFirst/findMany on `clase` con `include: { miembros: true }`
    // (usado por authorizeDocenteOAula en routes/aulas.ts).
    const applyClaseInclude = (row: Record<string, unknown>) => {
      const miembros = this.claseMiembro.rows
        .filter((m) => m.claseId === row.id)
        .map((m) => ({ ...m }));
      row.miembros = miembros;
    };
    const claseFindFirst = this.clase.findFirst.bind(this.clase);
    this.clase.findFirst = async (args) => {
      const row = await claseFindFirst(args);
      if (row && (args as { include?: Record<string, unknown> } | undefined)?.include) {
        applyClaseInclude(row as Record<string, unknown>);
      }
      return row;
    };
    const claseFindMany = this.clase.findMany.bind(this.clase);
    this.clase.findMany = async (args) => {
      // FIX-CALENDARIO: soporte de `where: { miembros: { some: { ... } } }`
      // (criterio canónico de "docente del aula" — QA-FIX-05). Sin esto,
      // el OR con `miembros.some` se ignora y el filtro de TEACHER en
      // `routes/calendario.ts:83-100` no descarta los aulas donde el
      // usuario no es miembro.
      //
      // Estrategia: post-procesamos el resultado del `findMany`
      // genérico re-evaluando el `where` con un walker que conoce el
      // filtro de relación. El genérico ya filtra correctamente por
      // las claves escalares; nosotros sobreescribimos solo el manejo
      // de `miembros.some` (y devolvemos false si no hay match).
      const genericRows = await claseFindMany(args);
      const where = (args as { where?: Record<string, unknown> } | undefined)?.where;
      const rows = where ? genericRows.filter((r) => matchesClaseWhere(r, where, this)) : genericRows;
      if ((args as { include?: Record<string, unknown> } | undefined)?.include) {
        for (const r of rows) applyClaseInclude(r as Record<string, unknown>);
      }
      return rows;
    };
  }

  async $transaction<T>(fn: (tx: this) => Promise<T>): Promise<T> {
    // Sequential, no rollback (sufficient for happy/sad path tests).
    return fn(this);
  }
}
