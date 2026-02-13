import { Router } from "express";
import { promises as fs } from "fs";
import path from "path";

const visualizadoresRouter = Router();
const EJEMPLOS_DIR = path.resolve(__dirname, "../visualizadores/ejemplos");
const SAFE_ID_REGEX = /^[a-z0-9\-]+$/i;

type VisualizadorPayload = {
  id: string;
  title: string;
  description: string;
  spec: {
    kind?: unknown;
  };
};

const isSafePath = (targetPath: string): boolean => {
  const normalizedRoot = `${EJEMPLOS_DIR}${path.sep}`;
  return targetPath.startsWith(normalizedRoot);
};

const readVisualizadorFile = async (id: string): Promise<VisualizadorPayload | null> => {
  if (!SAFE_ID_REGEX.test(id)) return null;

  const resolvedPath = path.resolve(EJEMPLOS_DIR, `${id}.json`);
  if (!isSafePath(resolvedPath)) return null;

  try {
    const content = await fs.readFile(resolvedPath, "utf8");
    return JSON.parse(content) as VisualizadorPayload;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    if (error instanceof SyntaxError) {
      throw new Error("invalid spec json");
    }
    throw error;
  }
};

visualizadoresRouter.get("/", async (_req, res) => {
  try {
    const entries = await fs.readdir(EJEMPLOS_DIR, { withFileTypes: true });
    const ids = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map((entry) => entry.name.slice(0, -5))
      .filter((id) => SAFE_ID_REGEX.test(id));

    const items = await Promise.all(
      ids.map(async (id) => {
        const visualizador = await readVisualizadorFile(id);
        if (!visualizador) return null;

        return {
          id: visualizador.id,
          title: visualizador.title,
          description: visualizador.description,
          kind:
            typeof visualizador.spec?.kind === "string"
              ? visualizador.spec.kind
              : null,
        };
      })
    );

    res.json(items.filter((item): item is NonNullable<typeof item> => Boolean(item)));
  } catch (error) {
    if (error instanceof Error && error.message === "invalid spec json") {
      return res.status(500).json({ error: "invalid spec json" });
    }
    return res.status(500).json({ error: "internal error" });
  }
});

visualizadoresRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!SAFE_ID_REGEX.test(id)) {
    return res.status(404).json({ error: "not found" });
  }

  try {
    const visualizador = await readVisualizadorFile(id);
    if (!visualizador) {
      return res.status(404).json({ error: "not found" });
    }
    return res.json(visualizador);
  } catch (error) {
    if (error instanceof Error && error.message === "invalid spec json") {
      return res.status(500).json({ error: "invalid spec json" });
    }
    return res.status(500).json({ error: "internal error" });
  }
});

export { visualizadoresRouter };
