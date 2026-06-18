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
function safeParseLibroJson(
  rawJson: string,
  id: string,
): { title: string; createdAt?: string; updatedAt?: string } {
  try {
    const parsed = JSON.parse(rawJson) as {
      metadata?: { title?: string };
      createdAt?: string;
      updatedAt?: string;
    };
    return {
      title: parsed.metadata?.title ?? "(sin título)",
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
// migración 20260617030000_sec_libro_ownership).
type LibroRow = {
  id: string;
  json: string;
  ownerUserId: string | null;
  schoolId: string | null;
  visibility: string;
  updatedAt: string | null;
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
 * LIBRO-BIBLIOTECA — ¿el usuario puede VER este libro en el
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
        if (!canEditLibro(existing, user)) {
          return res
            .status(403)
            .json({ error: "Sin permisos para editar este libro" });
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
