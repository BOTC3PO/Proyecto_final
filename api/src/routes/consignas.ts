import { Router } from "express";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { getDb } from "../lib/db";

const router = Router();

const SUBJECT_ROOTS = {
  matematicas: path.resolve(process.cwd(), "api/src/generadores/matematicas"),
  fisica: path.resolve(process.cwd(), "api/src/generadores/fisica"),
  quimica: path.resolve(process.cwd(), "api/src/generadores/quimica"),
  economia: path.resolve(process.cwd(), "api/src/generadores/economia"),
} as const;

type Subject = keyof typeof SUBJECT_ROOTS;

export const SUBJECTS = Object.keys(SUBJECT_ROOTS) as Subject[];

type ConsignaWrapper = {
  topic: string;
  subject: Subject;
  limits: unknown | null;
  enunciado: unknown | null;
  meta: Record<string, unknown> | null;
};

type GeneradorAdminOverride = {
  subject: Subject;
  topic: string;
  status: "ACTIVE" | "INACTIVE";
  enunciado?: unknown;
  limits?: unknown;
  createdAt?: string;
  updatedAt?: string;
};

const TEMA_REGEX = /^\d{2}_[A-Za-z0-9_]+$/;
const TOPIC_DATA_FILENAMES = ["limits.json", "enunciado.json", "enunciados.json"];

const isTemaSafe = (tema: string): boolean => {
  if (!TEMA_REGEX.test(tema)) return false;
  return !tema.includes("..") && !tema.includes("/") && !tema.includes("\\");
};

const resolveTemaPath = (subject: Subject, tema: string): string | null => {
  if (!isTemaSafe(tema)) return null;
  const root = SUBJECT_ROOTS[subject];
  const temaPath = path.normalize(path.join(root, tema));
  if (!temaPath.startsWith(`${root}${path.sep}`)) return null;
  return temaPath;
};

const readJsonIfExists = async (filePath: string): Promise<unknown | null> => {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const hasKnownDataFile = async (temaPath: string): Promise<boolean> => {
  try {
    const entries = await readdir(temaPath, { withFileTypes: true });
    return entries.some((entry) => entry.isFile() && TOPIC_DATA_FILENAMES.includes(entry.name));
  } catch {
    return false;
  }
};

const sortTopics = (a: string, b: string): number => {
  const aPrefix = Number(a.split("_", 1)[0]);
  const bPrefix = Number(b.split("_", 1)[0]);
  if (Number.isFinite(aPrefix) && Number.isFinite(bPrefix) && aPrefix !== bPrefix) {
    return aPrefix - bPrefix;
  }
  return a.localeCompare(b);
};

const getDbOverridesForSubject = async (subject: Subject): Promise<GeneradorAdminOverride[]> => {
  try {
    const db = await getDb();
    return (await db.collection("generadores_admin").find({ subject }).toArray()) as GeneradorAdminOverride[];
  } catch {
    return [];
  }
};

const getDbOverrideForTopic = async (subject: Subject, topic: string): Promise<GeneradorAdminOverride | null> => {
  try {
    const db = await getDb();
    return (await db.collection("generadores_admin").findOne({ subject, topic })) as GeneradorAdminOverride | null;
  } catch {
    return null;
  }
};

export const listTopicsFromFilesystem = async (subject: Subject): Promise<string[]> => {
  const root = SUBJECT_ROOTS[subject];
  const entries = await readdir(root, { withFileTypes: true });
  const fsTemas: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || !isTemaSafe(entry.name)) continue;
    const temaPath = resolveTemaPath(subject, entry.name);
    if (!temaPath) continue;
    if (await hasKnownDataFile(temaPath)) fsTemas.push(entry.name);
  }

  // Merge with DB overrides
  const overrides = await getDbOverridesForSubject(subject);
  const inactiveTopics = new Set(
    overrides.filter((o) => o.status === "INACTIVE").map((o) => o.topic)
  );
  const dbOnlyTopics = overrides
    .filter((o) => o.status === "ACTIVE" && !fsTemas.includes(o.topic) && isTemaSafe(o.topic))
    .map((o) => o.topic);

  const filteredFilesystem = fsTemas.filter((t) => !inactiveTopics.has(t));
  return [...filteredFilesystem, ...dbOnlyTopics].sort(sortTopics);
};

const buildWrapper = async (subject: Subject, tema: string): Promise<ConsignaWrapper | null> => {
  // Check DB override first
  const override = await getDbOverrideForTopic(subject, tema);

  if (override) {
    // If deactivated, treat as not found
    if (override.status === "INACTIVE") return null;

    // If DB has content override, use it (falling back to filesystem for missing parts)
    if (override.enunciado !== undefined || override.limits !== undefined) {
      const temaPath = resolveTemaPath(subject, tema);
      const fsEnunciado = temaPath
        ? (await readJsonIfExists(path.join(temaPath, "enunciado.json"))) ??
          (await readJsonIfExists(path.join(temaPath, "enunciados.json")))
        : null;
      const fsLimits = temaPath ? await readJsonIfExists(path.join(temaPath, "limits.json")) : null;

      return {
        topic: tema,
        subject,
        limits: override.limits !== undefined ? override.limits : fsLimits,
        enunciado: override.enunciado !== undefined ? override.enunciado : fsEnunciado,
        meta: null,
      };
    }
  }

  // Fall back to filesystem
  const temaPath = resolveTemaPath(subject, tema);
  if (!temaPath) return null;
  if (!(await hasKnownDataFile(temaPath))) return null;

  const limits = await readJsonIfExists(path.join(temaPath, "limits.json"));
  const enunciado =
    (await readJsonIfExists(path.join(temaPath, "enunciado.json"))) ??
    (await readJsonIfExists(path.join(temaPath, "enunciados.json")));

  return {
    topic: tema,
    subject,
    limits,
    enunciado,
    meta: null,
  };
};

const parseTopicListForLegacy = (wrapper: ConsignaWrapper): unknown => {
  if (wrapper.subject === "quimica") {
    return Array.isArray(wrapper.enunciado) ? wrapper.enunciado : [];
  }

  return {
    limits: wrapper.limits,
    enunciado: wrapper.enunciado,
    consigna: wrapper,
  };
};

const registerSubjectRoutes = (subject: Subject) => {
  router.get(`/api/consignas/${subject}`, async (_req, res) => {
    try {
      const temas = await listTopicsFromFilesystem(subject);
      return res.json(temas);
    } catch {
      return res.status(500).json({ error: `no se pudo listar consignas de ${subject}` });
    }
  });

  router.get(`/api/consignas/${subject}/:tema`, async (req, res) => {
    const tema = String(req.params.tema ?? "");
    if (!isTemaSafe(tema)) {
      return res.status(400).json({ error: "tema invalido" });
    }

    try {
      const wrapper = await buildWrapper(subject, tema);
      if (!wrapper) {
        return res.status(404).json({ error: "enunciados no encontrados" });
      }

      return res.json(parseTopicListForLegacy(wrapper));
    } catch {
      return res.status(500).json({ error: "no se pudo leer consigna" });
    }
  });

  router.get(`/api/consignas/${subject}/:tema/v2`, async (req, res) => {
    const tema = String(req.params.tema ?? "");
    if (!isTemaSafe(tema)) {
      return res.status(400).json({ error: "tema invalido" });
    }

    try {
      const wrapper = await buildWrapper(subject, tema);
      if (!wrapper) {
        return res.status(404).json({ error: "enunciados no encontrados" });
      }

      return res.json(wrapper);
    } catch {
      return res.status(500).json({ error: "no se pudo leer consigna" });
    }
  });
};

registerSubjectRoutes("economia");
registerSubjectRoutes("quimica");
registerSubjectRoutes("matematicas");
registerSubjectRoutes("fisica");

export const consignas = router;

export type { Subject };
