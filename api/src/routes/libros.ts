import express, { Router } from "express";
import { isStaffRole } from "../lib/authorization";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { BookSchema, BookVisibilitySchema, type BookVisibility } from "../schema/libro";

export const libros = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const DEFAULT_PAGE_SIZE = 12;
const MAX_PAGE_SIZE = 50;

// SEC-LIBRO — usuario autenticado tal como lo arma `requireUser`.
type AuthUser = { _id?: string; role?: string; schoolId?: string | null };

// SEC-LIBRO — fila tal como sale de Prisma. `ownerUserId`/`schoolId`
// son nullable porque los libros viejos no tienen dueño (ver
// migración 20260617030000_sec_libro_ownership).
type LibroRow = {
  id: string;
  ownerUserId: string | null;
  schoolId: string | null;
  visibility: string;
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
  if (user.role === "ADMIN") return true;
  const userId = user._id ?? null;
  if (libro.ownerUserId && userId && libro.ownerUserId === userId) return true;
  if (
    libro.visibility === "escuela" &&
    libro.schoolId &&
    user.schoolId &&
    libro.schoolId === user.schoolId &&
    isStaffRole(user.role)
  ) {
    return true;
  }
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
      if (!isStaffRole(user.role)) {
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
    const rawQuery = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const rawId = typeof req.query.id === "string" ? req.query.id.trim() : "";
    const page = Math.max(1, Number(req.query.page ?? 1));
    const pageSize = Math.max(1, Math.min(MAX_PAGE_SIZE, Number(req.query.pageSize ?? DEFAULT_PAGE_SIZE)));

    const allItems = await prisma.libro.findMany();
    const allDocs = allItems.map((r) => {
      try { return { ...JSON.parse(r.json), id: r.id }; } catch { return { id: r.id }; }
    }) as Array<Record<string, unknown>>;

    let filtered = allDocs;
    if (rawId) {
      filtered = allDocs.filter((d) => d.id === rawId);
    } else if (rawQuery) {
      const lower = rawQuery.toLowerCase();
      filtered = allDocs.filter(
        (d) =>
          (typeof d.id === "string" && d.id.toLowerCase().includes(lower)) ||
          (typeof d.title === "string" && d.title.toLowerCase().includes(lower))
      );
    }

    // sort by updatedAt desc, then createdAt desc, then id asc
    filtered.sort((a, b) => {
      const ua = String(a.updatedAt ?? "");
      const ub = String(b.updatedAt ?? "");
      if (ub !== ua) return ub < ua ? -1 : 1;
      const ca = String(a.createdAt ?? "");
      const cb = String(b.createdAt ?? "");
      if (cb !== ca) return cb < ca ? -1 : 1;
      return String(a.id ?? "") < String(b.id ?? "") ? -1 : 1;
    });

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const currentPage = Math.min(page, totalPages);
    const items = filtered
      .slice((currentPage - 1) * pageSize, currentPage * pageSize)
      .map(({ id, title, createdAt, updatedAt }) => ({ id, title, createdAt, updatedAt }));

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
