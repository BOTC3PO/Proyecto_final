import { Router } from "express";
import { promises as fs } from "fs";
import path from "path";

export const herramientasRouter = Router();

const DATA_DIR = path.resolve(__dirname, "../herramientas");

herramientasRouter.get("/tabla-periodica", async (_req, res) => {
  try {
    const content = await fs.readFile(path.join(DATA_DIR, "periodic-table.json"), "utf8");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.json(JSON.parse(content));
  } catch {
    res.status(500).json({ error: "internal error" });
  }
});
