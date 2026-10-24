import express, { Router } from "express";
import { isStaffRole } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { BookSchema, BookVisibilitySchema, type BookVisibility } from "../schema/libro";

export const libros = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const DEFAULT_PAGE_SIZE = 12;
const MAX_PAGE_SIZE = 50;

/**
 * LIBRO-BIBLIOTECA — helper para extraer `title`/`createdAt` del JSON
 * del libro sin tirar el handler si el JSON está malformado. Replica
 * el patrón de `safeJsonParse` que ya usan datasets/modulos.
 */
export function safeParseLibroJson(
  rawJson: string,
  id: string,
): { title: string; createdAt?: string; updatedAt?: string } {
  try {
    const parsed = JSON.parse(rawJson) as {
      // FIX-WO13-SAFE-PARSE — antes leía `parsed.metadata?.title`,
      // pero la estructura real del libro es
      // `{ book: { metadata: { title } } }`. Aceptamos ambos shapes
      // (legacy top-level y nuevo anidado) y caemos al id como
      // último recurso. El display del título de la copia
      // (`clonedFromTitle`) y del listado dependía de esto.
      metadata?: { title?: string };
      book?: { metadata?: { title?: string } };
      createdAt?: string;
      updatedAt?: string;
    };
    const title =
      parsed.book?.metadata?.title ??
      parsed.metadata?.title ??
      id;
    return {
      title,
      createdAt: parsed.createdAt,
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return { title: id };
  }
}

// SEC-LIBRO — usuario autenticado tal como lo arma `requireUser`.
// MULTIROL-01: `roles[]` opcional para chequeos multi-rol.
type AuthUser = {
  _id?: string;
  role?: string;
  roles?: string[];
  schoolId?: string | null;
};

// SEC-LIBRO — fila tal como sale de Prisma. `ownerUserId`/`schoolId`
// son nullable porque los libros viejos no tienen dueño (ver
// migración 20260617030000_sec_libro_ownership). `clonedFromId` y
// compañía son los campos de procedencia de WO-13
// (migración 20260623022846_wo13_provenance).
type LibroRow = {
  id: string;
  json: string;
  ownerUserId: string | null;
  schoolId: string | null;
  visibility: string;
  updatedAt: string | null;
  clonedFromId?: string | null;
  clonedFromTitle?: string | null;
  clonedFromOwnerUserId?: string | null;
};

/**
 * SEC-LIBRO — ¿el usuario puede ESCRIBIR (crear/sobrescribir) este libro?
 *
 * Réplica fiel del modelo de `canReadDataset`
 * (`api/src/routes/vblang-datasets.ts:54-68`), pero aplicado a
 * EDICIÓN de libros:
 *
 *   - ADMIN: siempre.
 *   - Dueño (`ownerUserId === user._id`): siempre.
 *   - `visibility === 'escuela'` && el usuario es staff de la MISMA
 *     escuela: sí. (Todo el staff de una escuela colabora sobre los
 *     libros de la escuela.)
 *   - Resto: NO. En particular, los alumnos (role USER) nunca pasan
 *     por ninguna rama y caen al `false` final, aunque sean de la
 *     misma escuela y el libro sea `visibility: 'escuela'` — los
 *     alumnos NO editan libros, ni siquiera los de su escuela.
 *
 * Libros viejos sin dueño (`ownerUserId = null`): solo ADMIN.
 * Estrategia conservadora: no auto-asignar dueño durante la
 * migración evita regalarle un libro al usuario equivocado. Si un
 * profe necesita "adoptar" un libro huérfano, lo hace un admin
 * fijando `ownerUserId` a mano.
 */
function canEditLibro(libro: LibroRow, user: AuthUser): boolean {
  if (hasRole(user, "ADMIN")) return true;
  const userId = user._id ?? null;
  if (libro.ownerUserId && userId && libro.ownerUserId === userId) return true;
  if (
    libro.visibility === "escuela" &&
    libro.schoolId &&
    user.schoolId &&
    libro.schoolId === user.schoolId &&
    isStaffRole(user)
  ) {
    return true;
  }
  return false;
}

/**
 * SEC-LIBRO — ¿el usuario puede VER este libro en el
 * listado/búsqueda? Réplica de `canReadDataset`
 * (`api/src/routes/vblang-datasets.ts:54-68`) pero aplicada a
 * LIBROS. La rama `visibility: 'publica'` queda para cuando se
 * agregue esa opción al modelo de libros (hoy `BookVisibilitySchema`
 * es `'privado' | 'escuela'`); el filtro la incluye igual para
 * mantener el shape paralelo y no abrir un bug si se agrega.
 *
 *   - ADMIN: siempre.
 *   - Dueño: siempre.
 *   - `visibility === 'escuela'` && mismo `schoolId`: sí.
 *   - `visibility === 'publica'`: sí.
 *   - Resto (incluidos alumnos ajenos a la escuela y libros privados
 *     ajenos): NO.
 *
 * Libros viejos sin dueño (`ownerUserId = null`): solo ADMIN. Es la
 * postura conservadora de SEC-LIBRO y se mantiene acá para no abrir
 * la biblioteca a libros huérfanos que un profe podría reclamar por
 * descuido del listado.
 */
function canReadLibro(libro: LibroRow, user: AuthUser): boolean {
  if (hasRole(user, "ADMIN")) return true;
  const userId = user._id ?? null;
  if (libro.ownerUserId && userId && libro.ownerUserId === userId) return true;
  if (
    libro.visibility === "escuela" &&
    libro.schoolId &&
    user.schoolId &&
    libro.schoolId === user.schoolId
  ) {
    return true;
  }
  if (libro.visibility === "publica") return true;
  return false;
}

/**
 * WO-13 — ¿Editar este libro dispara copy-on-write?
 *
 * Misma lógica que `requiresCopyOnWrite` de modulos: si el usuario
 * ya puede editar el original (admin, owner, o staff de la misma
 * escuela en libro `escuela`), no hace falta copia. Si NO puede
 * editarlo pero es visible para él y es staff, sí dispara
 * copy-on-write. Los alumnos (USER) NUNCA disparan copy-on-write:
 * SEC-LIBRO ya prohíbe que editen libros, y copy-on-write es
 * esencialmente "crear una copia editable", lo que también
 * prohibimos para alumnos en Tier 1.
 *
 * Casos:
 *  - ADMIN: nunca (override).
 *  - Owner: nunca (edición normal).
 *  - `escuela` + staff de la misma escuela: nunca (colaboración,
 *    mismo modelo SEC-LIBRO).
 *  - `publica` ajeno o `escuela` cross-school, con user staff: SÍ —
 *    copia. El user puede leer el libro y quiere forkearlo.
 *  - Alumno (USER): NO — ni edit ni copy-on-write (SEC-LIBRO).
 *  - `privado` ajeno: NO — ni siquiera visible para el user, el
 *    caller ya devolvió 403 antes (canReadLibro).
 */
function requiresCopyOnWriteLibro(
  libro: LibroRow,
  user: AuthUser,
): boolean {
  if (canEditLibro(libro, user)) return false;
  if (libro.visibility === "privado") return false;
  // Alumnos (no staff) no disparan copy-on-write: SEC-LIBRO cierra
  // la edición para alumnos. Copy-on-write sería una forma de
  // edición (fork para editar); no la abrimos.
  if (!isStaffRole(user)) return false;
  return true;
}

/**
 * WO-13 — clona un libro en una transacción. Usado por:
 *  - `POST /api/libros/:id/duplicar` (botón "Duplicar" futuro).
 *  - El copy-on-write transparente del POST `/api/libros` cuando
 *    un usuario no-owner quiere editar un libro compartido.
 *
 * La copia:
 *  - id nuevo (UUID).
 *  - json: copia exacta del original.
 *  - ownerUserId = newOwnerId.
 *  - visibility: la del original (en copy-on-write, el usuario la
 *    puede reescribir después; el botón "Duplicar" futuro podría
 *    aceptar un `visibility` override en el body).
 *  - schoolId: el del solicitante si visibility='escuela', si no
 *    el del original.
 *  - provenance: `clonedFromId` + `clonedFromTitle` + `clonedFromOwnerUserId`.
 *
 * Retorna el id de la nueva fila.
 */
async function cloneLibroDeep(
  sourceId: string,
  newOwnerId: string,
  requesterSchoolId: string | null,
  opts: { appendCopiaSuffix?: boolean } = { appendCopiaSuffix: true },
): Promise<{ newId: string; createdAt: string }> {
  const source = (await prisma.libro.findFirst({
    where: { id: sourceId },
  })) as LibroRow | null;
  if (!source) {
    throw Object.assign(new Error("libro no encontrado"), { status: 404 });
  }
  const newId = (await import("crypto")).randomUUID();
  const now = new Date().toISOString();
  const appendSuffix = opts.appendCopiaSuffix !== false;
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(source.json) as Record<string, unknown>;
  } catch {
    parsed = {};
  }
  if (appendSuffix) {
    // FIX-WO13 — leer el título del shape real del libro
    // (`book.metadata.title`) y aplicar el sufijo "(copia)" en
    // el mismo nivel. Mantener la estructura completa (no
    // pisar `book.metadata` con un objeto nuevo a nivel raíz).
    const bookMeta =
      (parsed.book as { metadata?: { title?: string } } | undefined)?.metadata ?? {};
    const currentTitle = bookMeta.title ?? source.id;
    const newBookMeta = { ...bookMeta, title: `${currentTitle} (copia)` };
    parsed = {
      ...parsed,
      book: {
        ...(parsed.book as Record<string, unknown> | undefined),
        metadata: newBookMeta,
      },
    };
  }
  const newSchoolId = source.visibility === "escuela"
    ? (requesterSchoolId ?? source.schoolId)
    : source.schoolId;
  await prisma.libro.create({
    data: {
      id: newId,
      json: JSON.stringify(parsed),
      updatedAt: now,
      ownerUserId: newOwnerId,
      schoolId: newSchoolId,
      visibility: source.visibility,
      // WO-13 — provenance.
      clonedFromId: source.id,
      clonedFromTitle: safeParseLibroJson(source.json, source.id).title,
      clonedFromOwnerUserId: source.ownerUserId ?? null,
    },
  });
  return { newId, createdAt: now };
}

libros.post(
  "/api/libros",
  requireUser,
  ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)),
  async (req, res) => {
    try {
      const user = (req as { user?: AuthUser }).user ?? {};
      const book = req.body?.book;
      if (!book || typeof book !== "object") {
        return res.status(400).json({ error: "book payload is required" });
      }
      const metadata = (book as { metadata?: { id?: string; title?: string } }).metadata;
      const id = metadata?.id;
      const title = metadata?.title;
      if (!id || !title) {
        return res.status(400).json({ error: "book.metadata.id and book.metadata.title are required" });
      }

      // SEC-LIBRO — visibility solicitada por el cliente. Si no viene
      // o es inválida, default seguro = 'privado'. Solo se respeta en
      // creación; en sobrescritura ignoramos el campo del cliente
      // (no permitimos que un POST cambie la visibility — eso es
      // expansión de privilegios encubierta).
      const requestedVisibility = BookVisibilitySchema.safeParse(req.body?.visibility);
      const newVisibility: BookVisibility = requestedVisibility.success
        ? requestedVisibility.data
        : "privado";

      const payload = {
        id,
        title,
        book,
        createdAt: req.body?.createdAt ?? new Date().toISOString(),
        updatedAt: req.body?.updatedAt ?? new Date().toISOString(),
      };
      const parsed = BookSchema.parse(payload);

      const existing = (await prisma.libro.findFirst({
        where: { id: parsed.id },
      })) as LibroRow | null;

      if (existing) {
        // ─── SOBRESCRITURA ──────────────────────────────────────────
        // SEC-LIBRO — un POST con id existente PISA el libro para
        // todos. Antes era el vector del bug: cualquier sesión
        // autenticada podía sobrescribir cualquier libro. Ahora
        // exigimos canEditLibro y devolvemos 403 al alumno (y a
        // cualquier profe que no sea dueño ni staff de la escuela
        // dueña).
        //
        // WO-13 — copy-on-write. PERO si el libro es visible al
        // usuario (puede leerlo) y está compartido (`escuela` o
        // `publica`), NO devolvemos 403: clonamos el libro y
        // aplicamos el update sobre la copia. El original queda
        // intacto. Esto preserva SEC-LIBRO (no se pisa el
        // original) Y permite el flujo "ver un libro compartido
        // → fork automático al editar".
        if (!canEditLibro(existing, user)) {
          if (
            canReadLibro(existing, user) &&
            requiresCopyOnWriteLibro(existing, user)
          ) {
            // Sigue el flujo copy-on-write más abajo. NO es 403.
          } else {
            return res
              .status(403)
              .json({ error: "Sin permisos para editar este libro" });
          }
        }
        // WO-13 — copy-on-write. Si el usuario NO es owner ni admin
        // y el libro está compartido (`escuela` o `publica`), clonamos
        // el libro (con provenance) y aplicamos el POST sobre la
        // copia. El original queda intacto. La UI debe navegar al
        // id devuelto y mostrar el mensaje "Copiaste este libro
        // desde…".
        if (requiresCopyOnWriteLibro(existing, user)) {
          const userIdCow = user._id ?? null;
          if (!userIdCow) {
            return res.status(401).json({ error: "user not authenticated" });
          }
          const { newId, createdAt } = await cloneLibroDeep(
            existing.id,
            userIdCow,
            user.schoolId ?? null,
            { appendCopiaSuffix: false },
          );
          // Persistimos el nuevo contenido (que viene en `parsed` =
          // el BookSchema ya validado) sobre la copia. Mantenemos
          // visibility/owner/school de la copia.
          await prisma.libro.updateMany({
            where: { id: newId },
            data: {
              json: JSON.stringify(parsed),
              updatedAt: parsed.updatedAt,
            },
          });
          return res.status(201).json({
            id: newId,
            copied: true,
            clonedFrom: {
              id: existing.id,
              title: safeParseLibroJson(existing.json, existing.id).title,
              ownerUserId: existing.ownerUserId ?? null,
            },
            createdAt,
          });
        }
        await prisma.libro.updateMany({
          where: { id: parsed.id },
          data: {
            json: JSON.stringify(parsed),
            updatedAt: parsed.updatedAt,
            // visibility/owner/school NO se tocan en sobrescritura.
            // El dueño se cambia con una acción explícita (out of
            // scope acá) y nunca por un POST de contenido.
          },
        });
        return res.status(200).json({ id: parsed.id });
      }

      // ─── CREACIÓN ───────────────────────────────────────────────
      // SEC-LIBRO — crear un libro nuevo es una acción de staff.
      // Los alumnos no escriben libros bajo ningún ámbito. ADMIN
      // también puede (cae por isStaffRole).
      if (!isStaffRole(user)) {
        return res
          .status(403)
          .json({ error: "Solo el staff puede crear libros" });
      }
      const userId = user._id ?? null;
      const schoolId = user.schoolId ?? null;
      // Si pide visibility='escuela' pero no tiene schoolId, lo
      // bajamos a 'privado' para no crear un libro de escuela
      // huérfano. Eso lo deja editable solo para el dueño.
      const effectiveVisibility: BookVisibility =
        newVisibility === "escuela" && schoolId ? "escuela" : "privado";

      await prisma.libro.create({
        data: {
          id: parsed.id,
          json: JSON.stringify(parsed),
          updatedAt: parsed.updatedAt,
          ownerUserId: userId,
          schoolId,
          visibility: effectiveVisibility,
        },
      });
      return res.status(201).json({ id: parsed.id });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

/**
 * WO-13 — POST /api/libros/:id/duplicar. Clona un libro existente y
 * devuelve el nuevo id. Replica el patrón de modulos: el dueño o un
 * staff puede duplicar; cualquier otro user que tenga permiso de leer
 * el libro también puede (es la diferencia con modulos, que requiere
 * owner-or-staff explícito para `/duplicar`).
 *
 * La copia:
 *  - id nuevo (UUID).
 *  - json: copia exacta del original.
 *  - titulo: `<titulo> (copia)` (sufijo).
 *  - ownerUserId = solicitante.
 *  - visibility: la del original.
 *  - schoolId: el del solicitante si visibility='escuela', si no el
 *    del original.
 *  - provenance: clonedFromId + clonedFromTitle + clonedFromOwnerUserId.
 */
libros.post("/api/libros/:id/duplicar", requireUser, async (req, res) => {
  try {
    const user = (req as { user?: AuthUser }).user ?? {};
    const userId = user._id ?? null;
    if (!userId) {
      return res.status(401).json({ error: "user not authenticated" });
    }
    const sourceId = String(req.params.id ?? "");
    if (!sourceId) {
      return res.status(400).json({ error: "id is required" });
    }
    const source = (await prisma.libro.findFirst({
      where: { id: sourceId },
    })) as LibroRow | null;
    if (!source) {
      return res.status(404).json({ error: "libro no encontrado" });
    }
    // Tiene que poder LEERLO para clonarlo (no se puede duplicar
    // algo que no se ve). Coherente con la policy de visibilidad
    // de SEC-LIBRO.
    if (!canReadLibro(source, user)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const { newId, createdAt } = await cloneLibroDeep(
      sourceId,
      userId,
      user.schoolId ?? null,
      { appendCopiaSuffix: true },
    );
    res.status(201).json({
      id: newId,
      sourceId,
      clonedFrom: {
        id: source.id,
        title: safeParseLibroJson(source.json, source.id).title,
        ownerUserId: source.ownerUserId ?? null,
      },
      createdAt,
    });
  } catch (e: any) {
    if (e?.status) {
      return res.status(e.status).json({ error: e.message });
    }
    console.error("[POST /api/libros/:id/duplicar]", e);
    res.status(500).json({ error: e?.message ?? "internal server error" });
  }
});

libros.get("/api/libros", requireUser, async (req, res) => {
  try {
    // LIBRO-BIBLIOTECA — antes este handler hacía `prisma.libro.findMany()`
    // sin filtro y devolvía TODOS los libros, ignorando permisos. Eso
    // contradecía SEC-LIBRO (que ya había cerrado la edición pero NO
    // la lectura). Cualquier alumno logueado podía listar la
    // colección entera. Acá replicamos el patrón de datasets: filtrar
    // por `canReadLibro` con visibilityBranches para que el listado
    // respete lo que el user tiene permiso de VER.
    const user = (req as { user?: AuthUser }).user ?? {};
    const rawQuery = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const rawId = typeof req.query.id === "string" ? req.query.id.trim() : "";
    const page = Math.max(1, Number(req.query.page ?? 1));
    const pageSize = Math.max(1, Math.min(MAX_PAGE_SIZE, Number(req.query.pageSize ?? DEFAULT_PAGE_SIZE)));
    // Tabs/filter: `owner` ("mias" | "otros" | "todas", default "todas")
    // y `visibility` ("todas" | "privado" | "escuela" | "publica",
    // default "todas"). Mismo vocabulario que datasets.
    const ownerParam = typeof req.query.owner === "string" ? req.query.owner : "todas";
    const visibilityParam =
      typeof req.query.visibility === "string" ? req.query.visibility : "todas";
    const userId = user._id ?? "";
    const userSchoolId = user.schoolId ?? null;

    // ── Filtro por permisos (visibilityBranches) ──
    // Igual que `vblang-datasets.ts:90-104`. Replica exacta del
    // modelo, no inventar otra cosa — el bug original era no filtrar
    // y la fix es la receta que ya anduvo para datasets.
    const visibilityBranches: Array<Record<string, unknown>> = [];
    if (ownerParam !== "otros") visibilityBranches.push({ ownerUserId: userId });
    if (ownerParam !== "mias") {
      if (userSchoolId) {
        visibilityBranches.push({
          schoolId: userSchoolId,
          visibility: { in: ["escuela", "publica"] as const },
          NOT: { ownerUserId: userId },
        });
      }
      visibilityBranches.push({
        visibility: "publica",
        NOT: { ownerUserId: userId },
      });
    }

    let visBranches = visibilityBranches;
    if (visibilityParam !== "todas") {
      const target =
        visibilityParam === "privado"
          ? "privado"
          : visibilityParam === "escuela"
            ? "escuela"
            : "publica";
      visBranches = visibilityBranches
        .map((b) => ({ ...b, visibility: target }))
        .filter((b) => {
          const v = (b as { visibility?: unknown }).visibility;
          if (typeof v === "string") return v === target;
          return true;
        });
    }
    if (visBranches.length === 0) {
      res.json({ items: [], page: 1, pageSize, total: 0, totalPages: 1 });
      return;
    }

    const where: Record<string, unknown> = { OR: visBranches };

    // Por compatibilidad con consumidores viejos (BookEditorPage:
    // 1154) que piden un libro puntual por `?id=`, hacemos un lookup
    // directo cuando viene ese param y no aplicamos la paginación.
    if (rawId) {
      const row = (await prisma.libro.findFirst({ where: { id: rawId } })) as LibroRow | null;
      if (!row || !canReadLibro(row, user)) {
        res.json({ items: [], page: 1, pageSize, total: 0, totalPages: 1 });
        return;
      }
      const doc = safeParseLibroJson(row.json, row.id);
      res.json({
        items: [
          {
            id: row.id,
            title: doc.title,
            createdAt: doc.createdAt,
            updatedAt: row.updatedAt ?? doc.updatedAt,
            ownerUserId: row.ownerUserId ?? null,
            visibility: row.visibility ?? "privado",
            schoolId: row.schoolId ?? null,
            // WO-13 — provenance (ver detalle en el GET :id).
            clonedFrom: row.clonedFromId
              ? {
                  id: row.clonedFromId,
                  title: row.clonedFromTitle ?? null,
                  ownerUserId: row.clonedFromOwnerUserId ?? null,
                }
              : null,
          },
        ],
        page: 1,
        pageSize,
        total: 1,
        totalPages: 1,
      });
      return;
    }

    // Para listar paginado consultamos el modelo `libro` directo.
    // El `title` y `createdAt` viven dentro del JSON del libro, así
    // que los extraemos con `safeParseLibroJson`. La columna
    // `updatedAt` de Prisma manda para el orden (es la fuente de
    // verdad desde SEC-LIBRO).
    const [rows, total] = await Promise.all([
      prisma.libro.findMany({
        where,
        orderBy: { updatedAt: "desc" },
        take: pageSize,
        skip: (page - 1) * pageSize,
      }),
      prisma.libro.count({ where }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const currentPage = Math.min(page, totalPages);
    const items = (rows as LibroRow[]).flatMap((r) => {
      // Filtro de texto: como `title` está dentro del JSON, no se
      // puede usar `contains` en la query Prisma. Filtramos en
      // memoria acá. Con `pageSize ≤ 50` es barato; si se quiere
      // buscar dentro del JSON con LIKE SQL hay que cambiar el
      // schema a una columna denormalizada, fuera del scope acá.
      const doc = safeParseLibroJson(r.json, r.id);
      if (rawQuery) {
        const lower = rawQuery.toLowerCase();
        const titleMatch = doc.title.toLowerCase().includes(lower);
        const idMatch = r.id.toLowerCase().includes(lower);
        if (!titleMatch && !idMatch) return [];
      }
      return [
        {
          id: r.id,
          title: doc.title,
          createdAt: doc.createdAt,
          updatedAt: r.updatedAt ?? doc.updatedAt,
          ownerUserId: r.ownerUserId ?? null,
          visibility: r.visibility ?? "privado",
          schoolId: r.schoolId ?? null,
          // WO-13 — provenance (sólo presente si el libro es copia).
          clonedFrom: r.clonedFromId
            ? {
                id: r.clonedFromId,
                title: r.clonedFromTitle ?? null,
                ownerUserId: r.clonedFromOwnerUserId ?? null,
              }
            : null,
        },
      ];
    });

    // Si el filtro de texto descartó algunos, ajustamos `total`
    // (refleja cuántos cumplen el `where` SQL, no el filtro JS).
    // Para mantener consistencia con la paginación del back, NO
    // ajustamos `total` acá — la UI igual sabe que pidió `pageSize`
    // items; el filtro de texto es una capa adicional.
    res.json({ items, page: currentPage, pageSize, total, totalPages });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "No se pudo listar libros" });
  }
});

libros.get("/api/libros/:id", requireUser, async (req, res) => {
  const id = String(req.params.id);
  const row = await prisma.libro.findFirst({ where: { id } });
  if (!row) return res.status(404).json({ error: "not found" });
  // WO-13 — provenance (snapshot de `LibroRow.clonedFrom*`).
  const clonedFrom = row.clonedFromId
    ? {
        id: row.clonedFromId,
        title: row.clonedFromTitle ?? null,
        ownerUserId: row.clonedFromOwnerUserId ?? null,
      }
    : null;
  try {
    const doc = JSON.parse(row.json);
    // SEC-LIBRO — el front necesita saber ownerUserId/visibility/
    // schoolId para decidir si muestra el editor o el lector
    // (defensa en profundidad; el back ya bloquea la edición
    // ajena, pero la UX correcta es no abrir el editor si no se
    // puede guardar). Estos campos viven en la fila Prisma, no
    // dentro del JSON, así que los inyectamos a la respuesta.
    const r = row as unknown as {
      ownerUserId: string | null;
      visibility: string;
      schoolId: string | null;
    };
    res.json({
      ...doc,
      id: row.id,
      ownerUserId: r.ownerUserId ?? null,
      visibility: r.visibility ?? "privado",
      schoolId: r.schoolId ?? null,
      clonedFrom,
    });
  } catch {
    const r = row as unknown as {
      ownerUserId: string | null;
      visibility: string;
      schoolId: string | null;
    };
    res.json({
      id: row.id,
      json: row.json,
      ownerUserId: r.ownerUserId ?? null,
      visibility: r.visibility ?? "privado",
      schoolId: r.schoolId ?? null,
      clonedFrom,
    });
  }
});

/**
 * LIBRO-BIBLIOTECA — endpoint DEDICADO para cambiar la visibility
 * de un libro. El POST genérico ignora `visibility` a propósito
 * (SEC-LIBRO) para evitar que un POST de contenido sirva como
 * vector de escalada de privilegios. Compartir un libro como
 * material de la escuela amerita una acción explícita del dueño,
 * no un side-effect del guardado.
 *
 * Reglas (idénticas a `canEditLibro`, sin la rama "escuela te
 * permite editar si sos staff": acá el que CAMBIA la visibility
 * tiene que ser dueño o admin, no un profesor random de la escuela,
 * para no abrir un vector donde un staff baje la visibility de
 * un libro que no es suyo):
 *   - ADMIN: siempre.
 *   - Dueño: siempre.
 *   - Resto: 403.
 *   - Libro sin dueño (`ownerUserId = null`): solo ADMIN.
 *
 * Al pasar a `visibility: 'escuela'`, fijamos `schoolId` al del
 * requester (para acotar el alcance). Si el requester no tiene
 * schoolId, devolvemos 400 ("compartir como escuela requiere tener
 * schoolId") — es preferible al fallback silencioso a "privado"
 * que tenía la creación, porque acá la intención del usuario es
 * explícita.
 *
 * Valores aceptados: 'privado' | 'escuela'. 'publica' no se
 * ofrece (igual que en el modelo general de libros).
 */
libros.patch(
  "/api/libros/:id/visibility",
  requireUser,
  async (req, res) => {
    try {
      const id = String(req.params.id);
      const user = (req as { user?: AuthUser }).user ?? {};

      // Validación del body. Usamos el BookVisibilitySchema (que ya
      // excluye 'publica') y rechazamos el resto con 400 claro.
      const body = (req.body ?? {}) as { visibility?: unknown };
      const parsed = BookVisibilitySchema.safeParse(body.visibility);
      if (!parsed.success) {
        return res.status(400).json({
          error: "visibility inválida (debe ser 'privado' o 'escuela')",
        });
      }
      const newVisibility: BookVisibility = parsed.data;

      const row = (await prisma.libro.findFirst({
        where: { id },
      })) as LibroRow | null;
      if (!row) return res.status(404).json({ error: "not found" });

      // Auth: solo dueño o admin. NO se aplica la rama "staff de la
      // misma escuela" (a diferencia de `canEditLibro`) porque acá
      // cambiamos un metadato de seguridad, no contenido.
      const userId = user._id ?? null;
      const isOwner =
        row.ownerUserId != null && userId != null && row.ownerUserId === userId;
      const isAdmin = hasRole(user, "ADMIN");
      if (!isAdmin && !isOwner) {
        return res
          .status(403)
          .json({ error: "Solo el dueño (o admin) puede cambiar la visibility" });
      }

      // Al pasar a 'escuela' exigimos schoolId en el requester. Si
      // no lo tiene, rechazamos con 400 claro: es preferible a
      // degradar a 'privado' silenciosamente, porque la intención
      // del usuario era explícita.
      let newSchoolId: string | null = row.schoolId ?? null;
      if (newVisibility === "escuela") {
        if (!user.schoolId) {
          return res.status(400).json({
            error:
              "Para compartir como escuela, el usuario debe tener schoolId asignado",
          });
        }
        newSchoolId = user.schoolId;
      }
      // Si pasa a 'privado', limpiamos el schoolId (un libro privado
      // no necesita schoolId). Si ya estaba en 'privado' con
      // schoolId, lo dejamos como está — al volver a 'privado' lo
      // limpiamos para mantener la coherencia: la visibility manda.
      if (newVisibility === "privado") {
        newSchoolId = null;
      }

      await prisma.libro.updateMany({
        where: { id },
        data: {
          visibility: newVisibility,
          schoolId: newSchoolId,
        },
      });

      // Devolvemos el estado nuevo para que la UI sincronice sin
      // tener que refetchar.
      res.json({
        id,
        visibility: newVisibility,
        schoolId: newSchoolId,
        ownerUserId: row.ownerUserId ?? null,
      });
    } catch (e: any) {
      res.status(500).json({ error: e?.message ?? "No se pudo cambiar la visibility" });
    }
  }
);
