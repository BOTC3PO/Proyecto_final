/**
 * Subida y servicio de imágenes PNG para el add-on visual del editor de
 * plantillas VBLang (WO06).
 *
 * Diseño deliberadamente simple (sin bytea ni object storage, como pide el
 * work order): el archivo se guarda en un directorio de media en disco y se
 * devuelve la URL que llena `StaticImageSpec.src`.
 *
 * - `POST /api/media/upload` (autenticado): recibe los bytes crudos del PNG
 *   con `Content-Type: image/png` (el parser JSON global no toca ese
 *   content-type, así que el límite chico de JSON no aplica). Valida los magic
 *   bytes de PNG y el tamaño, y devuelve `{ url }`.
 * - `GET /api/media/:archivo` (público): sirve el PNG con protección contra
 *   path traversal, igual que `assets.ts`.
 *
 * El `alt` (obligatorio por WCAG 1.1.1) vive en el DSL de la plantilla, no acá:
 * lo exige el cliente al insertar la imagen.
 */
import express, { Router } from "express";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { requireUser } from "../lib/user-auth";

export const mediaRouter = Router();

/** Directorio de media (fuera de `src`, en la raíz del paquete api). */
const MEDIA_ROOT = path.resolve(__dirname, "../../media");

/** Sólo nombres generados por nosotros: 32 hex + .png. */
const FILE_RE = /^[a-f0-9]{32}\.png$/;

/** Firma de un PNG válido (8 bytes). */
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

export type PngInspection =
  | { ok: true }
  | { ok: false; status: number; error: string };

/**
 * Valida que `buf` sea un PNG aceptable para subir. Pura (sin I/O) para poder
 * testearla sin servidor ni DB.
 */
export function inspectPngUpload(buf: unknown): PngInspection {
  if (!Buffer.isBuffer(buf) || buf.length === 0) {
    return {
      ok: false,
      status: 400,
      error: "se esperan los bytes del PNG con Content-Type: image/png",
    };
  }
  if (buf.length > MAX_BYTES) {
    return { ok: false, status: 413, error: "el archivo supera el máximo de 5 MB" };
  }
  if (buf.length < 8 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
    return { ok: false, status: 400, error: "el archivo no es un PNG válido" };
  }
  return { ok: true };
}

/** True si `archivo` es un nombre de media generado por nosotros. */
export function isValidMediaName(archivo: string): boolean {
  return FILE_RE.test(archivo);
}

mediaRouter.get("/:archivo", async (req, res) => {
  const { archivo } = req.params;
  if (!isValidMediaName(archivo)) {
    return res.status(400).json({ error: "invalid path" });
  }
  const full = path.resolve(MEDIA_ROOT, archivo);
  if (!full.startsWith(MEDIA_ROOT + path.sep)) {
    return res.status(400).json({ error: "invalid path" });
  }
  try {
    const content = await fs.readFile(full);
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(content);
  } catch {
    res.status(404).json({ error: "not found" });
  }
});

mediaRouter.post(
  "/upload",
  requireUser,
  express.raw({ type: "image/png", limit: "8mb" }),
  async (req, res) => {
    const buf = req.body;
    const check = inspectPngUpload(buf);
    if (!check.ok) {
      return res.status(check.status).json({ error: check.error });
    }
    const name = `${crypto.randomBytes(16).toString("hex")}.png`;
    try {
      await fs.mkdir(MEDIA_ROOT, { recursive: true });
      await fs.writeFile(path.resolve(MEDIA_ROOT, name), buf);
    } catch {
      return res.status(500).json({ error: "no se pudo guardar el archivo" });
    }
    return res.status(201).json({ url: `/api/media/${name}` });
  },
);
