import { Router } from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { SUBJECTS, listTopicsFromFilesystem, type Subject } from "./consignas";

export const readonlyRouter = Router();

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

// PLAN-X §5 — antes leía subdirectorios de `diccionarios/` (nunca
// existieron: es un único .sqlite plano) y siempre devolvía []. El
// multi-idioma real ya vive en `sqliteDictionary.languages()` (mismo
// mecanismo que expone `GET /api/dictionary/languages`): consulta la
// columna `lang` del sqlite. Best-effort: si el diccionario está
// deshabilitado o falla, degrada a [] en vez de tirar el catálogo entero.
export const getAvailableLanguages = async (): Promise<string[]> => {
  if (ENV.DB_KIND !== "sqlite") return [];
  try {
    const { getSqliteDictionaryService } = await import("../db/sqliteDictionary");
    return getSqliteDictionaryService().languages();
  } catch {
    return [];
  }
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

// Hallazgo post-PLAN-X §5 — el endpoint agrega 4 fuentes INDEPENDIENTES
// en un solo `Promise.all`: si una falla, `Promise.all` rechaza entero y
// el catch de abajo tira TODO a 500, aunque las otras 3 estuvieran bien.
// En la práctica `generadores` (`listTopicsFromFilesystem`) siempre
// fallaba (apunta a `api/src/generadores/`, que no existe — el contenido
// real vive sin reconciliar en `archive/api/generadores/`, ver PLAN-N) y
// tumbaba el catálogo completo. `safeFetch` aísla cada fuente: una falla
// puntual degrada a `fallback` en vez de tirar las demás.
// ponytail: generadores degrada a [] hasta que PLAN-N reconcilie
// archive/api/generadores/ con el árbol vivo — no repatriar acá.
async function safeFetch<T>(promise: Promise<T>, fallback: T, label: string): Promise<T> {
  try {
    return await promise;
  } catch (error) {
    console.error(`[readonly/catalogo] fuente "${label}" falló, degradando:`, error);
    return fallback;
  }
}

readonlyRouter.get("/api/readonly/catalogo", async (_req, res) => {
  try {
    const [modulosActivos, generadores, visualizadores, idiomasDiccionario] = await Promise.all([
      safeFetch(
        prisma.modulo.findMany({
          where: {
            OR: [{ isDeleted: false }, { isDeleted: false }]
          },
          orderBy: { updatedAt: "desc" }
        }),
        [],
        "modulosActivos"
      ),
      safeFetch(
        Promise.all(
          SUBJECTS.map(async (materia) => ({
            materia,
            temas: await listTopicsFromFilesystem(materia),
          }))
        ),
        [],
        "generadores"
      ),
      safeFetch(readVisualizadoresCatalog(), [], "visualizadores"),
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
