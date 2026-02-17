import { Router } from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import { getDb } from "../lib/db";
import { SUBJECTS, listTopicsFromFilesystem, type Subject } from "./consignas";

export const readonlyRouter = Router();

const DICCIONARIOS_ROOT = path.resolve(__dirname, "..", "diccionarios");
const TOOLING_FOLDER = "herramientas";
const EJEMPLOS_DIR = path.resolve(__dirname, "../visualizadores/ejemplos");
const SAFE_VISUALIZER_ID_REGEX = /^[a-z0-9\-]+$/i;

type ReadonlyCatalogResponse = {
  modulosActivos: unknown[];
  generadores: Array<{
    materia: Subject;
    temas: string[];
  }>;
  mapasYDiccionarios: {
    visualizadores: Array<{
      id: string;
      title: string;
      description: string;
      kind: string | null;
    }>;
    idiomasDiccionario: string[];
  };
};

const getAvailableLanguages = async (): Promise<string[]> => {
  const entries = await fsPromises.readdir(DICCIONARIOS_ROOT, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith(".") && name !== TOOLING_FOLDER)
    .sort();
};

const readVisualizadoresCatalog = async (): Promise<ReadonlyCatalogResponse["mapasYDiccionarios"]["visualizadores"]> => {
  const entries = await fsPromises.readdir(EJEMPLOS_DIR, { withFileTypes: true });
  const ids = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name.slice(0, -5))
    .filter((id) => SAFE_VISUALIZER_ID_REGEX.test(id));

  const items = await Promise.all(
    ids.map(async (id) => {
      try {
        const filePath = path.resolve(EJEMPLOS_DIR, `${id}.json`);
        const content = await fsPromises.readFile(filePath, "utf8");
        const payload = JSON.parse(content) as {
          id?: unknown;
          title?: unknown;
          description?: unknown;
          spec?: { kind?: unknown };
        };

        if (
          typeof payload.id !== "string" ||
          typeof payload.title !== "string" ||
          typeof payload.description !== "string"
        ) {
          return null;
        }

        return {
          id: payload.id,
          title: payload.title,
          description: payload.description,
          kind: typeof payload.spec?.kind === "string" ? payload.spec.kind : null,
        };
      } catch {
        return null;
      }
    })
  );

  return items.filter((item): item is NonNullable<typeof item> => Boolean(item));
};

readonlyRouter.get("/api/readonly/catalogo", async (_req, res) => {
  try {
    const db = await getDb();

    const [modulosActivos, generadores, visualizadores, idiomasDiccionario] = await Promise.all([
      db.collection("modulos").find({}).sort({ updatedAt: -1 }).toArray(),
      Promise.all(
        SUBJECTS.map(async (materia) => ({
          materia,
          temas: await listTopicsFromFilesystem(materia),
        }))
      ),
      readVisualizadoresCatalog(),
      getAvailableLanguages(),
    ]);

    const response: ReadonlyCatalogResponse = {
      modulosActivos,
      generadores,
      mapasYDiccionarios: {
        visualizadores,
        idiomasDiccionario,
      },
    };

    return res.json(response);
  } catch (error) {
    console.error("No se pudo construir catalogo readonly:", error);
    return res.status(500).json({ error: "no se pudo construir el catalogo" });
  }
});
