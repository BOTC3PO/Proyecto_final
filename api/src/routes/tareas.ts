/**
 * L2 — tareas del aula y entregas de los alumnos.
 *
 * Docente del aula (o dirección):  crear, editar, cerrar y borrar tareas; ver las entregas y corregirlas.
 * Alumno del aula:                 ver las tareas, entregar (texto y un enlace opcional) y volver a entregar
 *                                  mientras la tarea esté abierta y no esté corregida.
 * Después del vencimiento se puede entregar igual, pero la entrega queda marcada «tarde».
 *
 * `GET /api/tareas` (resumen del alumno para el inicio y la página Tareas) mantiene su forma de antes.
 */
import { randomUUID } from "node:crypto";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { esMiembroDeAula, idDe, puedeGestionarAula, type UsuarioAula } from "../lib/aula-permisos";
import { enviarPush } from "../lib/push";

export const tareasRouter = Router();

const ahora = () => new Date().toISOString();
const usuario = (req: { user?: unknown }) => req.user as UsuarioAula | undefined;

const TareaSchema = z.object({
  titulo: z.string().trim().min(1).max(200),
  consigna: z.string().trim().min(1).max(10_000),
  vence: z.string().datetime().nullish(),
  puntajeMax: z.number().positive().max(1000).nullish()
});
const TareaPatchSchema = TareaSchema.partial().extend({ estado: z.enum(["publicada", "cerrada"]).optional() });
const EntregaSchema = z.object({
  texto: z.string().trim().min(1).max(20_000),
  enlace: z.string().url().max(1000).nullish()
});
const CorreccionSchema = z.object({
  nota: z.number().min(0).max(1000).nullable(),
  devolucion: z.string().trim().max(5000).nullish()
});

const formatoFecha = (iso: string | null) => {
  if (!iso) return "Sin fecha";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
};

const tareaVisible = async (id: string) => prisma.tareaAula.findFirst({ where: { id, isDeleted: { not: true } } });

// ── Docente ──────────────────────────────────────────────────

tareasRouter.post("/api/aulas/:aulaId/tareas", requireUser, async (req, res) => {
  const aulaId = req.params.aulaId as string;
  if (!(await puedeGestionarAula(usuario(req), aulaId))) return res.status(403).json({ error: "forbidden" });
  const parsed = TareaSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "payload inválido", issues: parsed.error.issues });
  const t = ahora();
  const tarea = await prisma.tareaAula.create({
    data: {
      id: randomUUID(),
      claseId: aulaId,
      titulo: parsed.data.titulo,
      consigna: parsed.data.consigna,
      vence: parsed.data.vence ?? null,
      puntajeMax: parsed.data.puntajeMax ?? null,
      estado: "publicada",
      isDeleted: false,
      creadaPor: idDe(usuario(req)) ?? "desconocido",
      createdAt: t,
      updatedAt: t
    }
  });
  const alumnos = await prisma.claseMiembro.findMany({ where: { claseId: aulaId, rolEnClase: "STUDENT" }, select: { usuarioId: true } });
  void enviarPush(alumnos.map((a) => a.usuarioId), {
    titulo: "Virtual Book",
    cuerpo: "Tenés una tarea nueva.",
    data: { pantalla: "tareas", tareaId: tarea.id }
  });
  res.status(201).json(tarea);
});

tareasRouter.patch("/api/tareas/:id", requireUser, async (req, res) => {
  const tarea = await tareaVisible(req.params.id as string);
  if (!tarea) return res.status(404).json({ error: "tarea no encontrada" });
  if (!(await puedeGestionarAula(usuario(req), tarea.claseId))) return res.status(403).json({ error: "forbidden" });
  const parsed = TareaPatchSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "payload inválido", issues: parsed.error.issues });
  const d = parsed.data;
  const actualizada = await prisma.tareaAula.update({
    where: { id: tarea.id },
    data: {
      ...(d.titulo !== undefined ? { titulo: d.titulo } : {}),
      ...(d.consigna !== undefined ? { consigna: d.consigna } : {}),
      ...(d.vence !== undefined ? { vence: d.vence ?? null } : {}),
      ...(d.puntajeMax !== undefined ? { puntajeMax: d.puntajeMax ?? null } : {}),
      ...(d.estado !== undefined ? { estado: d.estado } : {}),
      updatedAt: ahora()
    }
  });
  res.json(actualizada);
});

tareasRouter.delete("/api/tareas/:id", requireUser, async (req, res) => {
  const tarea = await tareaVisible(req.params.id as string);
  if (!tarea) return res.status(404).json({ error: "tarea no encontrada" });
  if (!(await puedeGestionarAula(usuario(req), tarea.claseId))) return res.status(403).json({ error: "forbidden" });
  // No se borra: las entregas quedan como registro.
  await prisma.tareaAula.update({ where: { id: tarea.id }, data: { isDeleted: true, updatedAt: ahora() } });
  res.status(204).send();
});

tareasRouter.get("/api/tareas/:id/entregas", requireUser, async (req, res) => {
  const tarea = await tareaVisible(req.params.id as string);
  if (!tarea) return res.status(404).json({ error: "tarea no encontrada" });
  if (!(await puedeGestionarAula(usuario(req), tarea.claseId))) return res.status(403).json({ error: "forbidden" });
  const [alumnos, entregas] = await Promise.all([
    prisma.claseMiembro.findMany({ where: { claseId: tarea.claseId, rolEnClase: "STUDENT", esPrueba: false }, select: { usuarioId: true } }),
    prisma.entregaTarea.findMany({ where: { tareaId: tarea.id } })
  ]);
  const ids = [...new Set([...alumnos.map((a) => a.usuarioId), ...entregas.map((e) => e.alumnoId)])];
  const usuarios = ids.length
    ? await prisma.usuario.findMany({ where: { id: { in: ids } }, select: { id: true, fullName: true, username: true } })
    : [];
  const nombre = new Map(usuarios.map((u) => [u.id, u.fullName || u.username || u.id]));
  const porAlumno = new Map(entregas.map((e) => [e.alumnoId, e]));
  // Una fila por alumno del aula: con su entrega o sin ella (así el docente ve quién falta).
  const filas = ids
    .map((id) => ({ alumnoId: id, alumnoNombre: nombre.get(id) ?? id, entrega: porAlumno.get(id) ?? null }))
    .sort((a, b) => a.alumnoNombre.localeCompare(b.alumnoNombre, "es"));
  res.json({ tarea, entregas: filas });
});

tareasRouter.patch("/api/entregas/:id", requireUser, async (req, res) => {
  const entrega = await prisma.entregaTarea.findFirst({ where: { id: req.params.id as string } });
  if (!entrega) return res.status(404).json({ error: "entrega no encontrada" });
  const tarea = await tareaVisible(entrega.tareaId);
  if (!tarea) return res.status(404).json({ error: "tarea no encontrada" });
  if (!(await puedeGestionarAula(usuario(req), tarea.claseId))) return res.status(403).json({ error: "forbidden" });
  const parsed = CorreccionSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "payload inválido", issues: parsed.error.issues });
  if (parsed.data.nota !== null && tarea.puntajeMax != null && parsed.data.nota > tarea.puntajeMax) {
    return res.status(422).json({ error: `la nota no puede superar ${tarea.puntajeMax}` });
  }
  const corregida = await prisma.entregaTarea.update({
    where: { id: entrega.id },
    data: {
      nota: parsed.data.nota,
      devolucion: parsed.data.devolucion ?? null,
      corregidaPor: idDe(usuario(req)),
      corregidaAt: ahora()
    }
  });
  void enviarPush([entrega.alumnoId], {
    titulo: "Virtual Book",
    cuerpo: "Corrigieron una de tus tareas.",
    data: { pantalla: "tareas", tareaId: tarea.id }
  });
  res.json(corregida);
});

// ── Alumno y docente: ver ────────────────────────────────────

tareasRouter.get("/api/aulas/:aulaId/tareas", requireUser, async (req, res) => {
  const aulaId = req.params.aulaId as string;
  const userId = idDe(usuario(req));
  const gestiona = await puedeGestionarAula(usuario(req), aulaId);
  if (!gestiona && !(await esMiembroDeAula(userId, aulaId))) return res.status(403).json({ error: "forbidden" });
  const tareas = await prisma.tareaAula.findMany({
    where: { claseId: aulaId, isDeleted: { not: true } },
    orderBy: [{ vence: "asc" }, { createdAt: "desc" }]
  });
  const mias = userId && !gestiona && tareas.length
    ? await prisma.entregaTarea.findMany({ where: { alumnoId: userId, tareaId: { in: tareas.map((t) => t.id) } } })
    : [];
  const entregaDe = new Map(mias.map((e) => [e.tareaId, e]));
  res.json({ items: tareas.map((t) => ({ ...t, miEntrega: entregaDe.get(t.id) ?? null })), gestiona });
});

tareasRouter.get("/api/tareas/:id", requireUser, async (req, res) => {
  const tarea = await tareaVisible(req.params.id as string);
  if (!tarea) return res.status(404).json({ error: "tarea no encontrada" });
  const userId = idDe(usuario(req));
  const gestiona = await puedeGestionarAula(usuario(req), tarea.claseId);
  if (!gestiona && !(await esMiembroDeAula(userId, tarea.claseId))) return res.status(403).json({ error: "forbidden" });
  const clase = await prisma.clase.findFirst({ where: { id: tarea.claseId }, select: { name: true } });
  const miEntrega = userId ? await prisma.entregaTarea.findFirst({ where: { tareaId: tarea.id, alumnoId: userId } }) : null;
  res.json({ tarea, aulaNombre: clase?.name ?? null, miEntrega, gestiona });
});

// ── Alumno: entregar ─────────────────────────────────────────

tareasRouter.post("/api/tareas/:id/entregas", requireUser, async (req, res) => {
  const tarea = await tareaVisible(req.params.id as string);
  if (!tarea) return res.status(404).json({ error: "tarea no encontrada" });
  const userId = idDe(usuario(req));
  if (!(await esMiembroDeAula(userId, tarea.claseId, "STUDENT"))) {
    return res.status(403).json({ error: "solo entregan los alumnos del aula" });
  }
  if (tarea.estado === "cerrada") return res.status(409).json({ error: "la tarea está cerrada", code: "TAREA_CERRADA" });
  const parsed = EntregaSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "payload inválido", issues: parsed.error.issues });
  const t = ahora();
  const tarde = Boolean(tarea.vence && t > tarea.vence);
  const previa = await prisma.entregaTarea.findFirst({ where: { tareaId: tarea.id, alumnoId: userId! } });
  if (previa?.corregidaAt) {
    return res.status(409).json({ error: "la entrega ya fue corregida", code: "YA_CORREGIDA" });
  }
  const datos = { texto: parsed.data.texto, enlace: parsed.data.enlace ?? null, entregadaAt: t, tarde };
  const entrega = previa
    ? await prisma.entregaTarea.update({ where: { id: previa.id }, data: datos })
    : await prisma.entregaTarea.create({ data: { id: randomUUID(), tareaId: tarea.id, alumnoId: userId!, ...datos } });
  res.status(previa ? 200 : 201).json(entrega);
});

// ── Resumen del alumno (inicio y página Tareas) ──────────────

tareasRouter.get("/api/tareas", requireUser, async (req, res) => {
  const userId = idDe(usuario(req));
  if (!userId) return res.status(401).json({ error: "not authenticated" });
  const aulas = await prisma.claseMiembro.findMany({ where: { usuarioId: userId, rolEnClase: "STUDENT" }, select: { claseId: true } });
  const claseIds = aulas.map((a) => a.claseId);
  if (claseIds.length === 0) return res.json([]);
  const [tareas, clases, entregas] = await Promise.all([
    prisma.tareaAula.findMany({ where: { claseId: { in: claseIds }, isDeleted: { not: true }, estado: "publicada" }, take: 200 }),
    prisma.clase.findMany({ where: { id: { in: claseIds } }, select: { id: true, name: true } }),
    prisma.entregaTarea.findMany({ where: { alumnoId: userId }, select: { tareaId: true } })
  ]);
  const entregadas = new Set(entregas.map((e) => e.tareaId));
  const curso = new Map(clases.map((c) => [c.id, c.name]));
  // Pendientes = sin entregar, las que vencen antes primero (las sin fecha al final).
  const pendientes = tareas
    .filter((t) => !entregadas.has(t.id))
    .sort((a, b) => (a.vence ?? "9999").localeCompare(b.vence ?? "9999"))
    .slice(0, 50)
    .map((t) => ({ id: t.id, titulo: t.titulo, curso: curso.get(t.claseId) ?? "Aula", vence: formatoFecha(t.vence), venceIso: t.vence }));
  res.json(pendientes);
});
