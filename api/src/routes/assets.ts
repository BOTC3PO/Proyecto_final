import { Router } from "express";
import { promises as fs } from "fs";
import path from "path";

export const assetsRouter = Router();

const ASSETS_ROOT = path.resolve(__dirname, "../assets");

const SAFE_REGEX = /^[a-zA-Z0-9_\-]+$/;

const isSafePath = (target: string): boolean => {
  const normalized = path.resolve(ASSETS_ROOT, target);
  return normalized.startsWith(ASSETS_ROOT + path.sep);
};

const MIME: Record<string, string> = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

assetsRouter.get("/:categoria/:archivo", async (req, res) => {
  const { categoria, archivo } = req.params;
  if (!SAFE_REGEX.test(categoria) || !SAFE_REGEX.test(archivo.replace(/\.[a-z]+$/, ""))) {
    return res.status(400).json({ error: "invalid path" });
  }
  const relative = path.join(categoria, archivo);
  if (!isSafePath(relative)) {
    return res.status(400).json({ error: "invalid path" });
  }
  const fullPath = path.resolve(ASSETS_ROOT, relative);
  const ext = path.extname(archivo).toLowerCase();
  const mime = MIME[ext];
  if (!mime) return res.status(400).json({ error: "unsupported file type" });
  try {
    const content = await fs.readFile(fullPath);
    res.setHeader("Content-Type", mime);
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(content);
  } catch {
    res.status(404).json({ error: "not found" });
  }
});
