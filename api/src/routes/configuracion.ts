import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { ModuleConfigListSchema, ModuleConfigListUpdateSchema } from "../schema/configuracion";

export const configuracion = Router();

const DEFAULT_MATERIAS = [
  "Matemáticas",
  "Lengua y Literatura",
  "Ciencias Naturales",
  "Ciencias Sociales",
  "Historia",
  "Geografía",
  "Física",
  "Química",
  "Biología",
  "Inglés",
  "Informática / TIC",
  "Educación Física",
  "Arte / Plástica",
  "Música",
  "Formación Ética y Ciudadana",
  "Economía",
  "Otro"
];

const DEFAULT_CATEGORIAS = [
  "Aritmética básica",
  "Álgebra",
  "Geometría",
  "Lectura comprensiva",
  "Comprensión de textos",
  "Ciencias naturales generales",
  "Laboratorio",
  "Historia Argentina",
  "Historia Mundial",
  "Historia · Gráficos y datos históricos",
  "Historia · Líneas de tiempo",
  "Historia · Mapas históricos",
  "Historia · Organigramas y mapas conceptuales",
  "Historia · Recursos multimedia e interactivos",
  "Geografía de Argentina",
  "Geografía del Mundo",
  "Gramática",
  "Ortografía",
  "Lógica",
  "Programación",
  "Resolución de problemas",
  "Otro"
];

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const getConfigList = async (id: string, defaults: string[]) => {
  const db = await getDb();
  const stored = await db.collection("config_modulos").findOne({ id });
  if (stored) {
    return ModuleConfigListSchema.parse({
      id,
      items: Array.isArray(stored.items) && stored.items.length > 0 ? stored.items : defaults,
      updatedAt: stored.updatedAt ?? new Date().toISOString()
    });
  }
  const fallback = {
    id,
    items: defaults,
    updatedAt: new Date().toISOString()
  };
  await db.collection("config_modulos").insertOne(fallback);
  return ModuleConfigListSchema.parse(fallback);
};

const updateConfigList = async (id: string, items: string[]) => {
  const db = await getDb();
  const payload = ModuleConfigListSchema.parse({
    id,
    items,
    updatedAt: new Date().toISOString()
  });
  await db
    .collection("config_modulos")
    .updateOne({ id }, { $set: payload }, { upsert: true });
  return payload;
};

configuracion.get("/api/config/materias", async (_req, res) => {
  const config = await getConfigList("materias", DEFAULT_MATERIAS);
  res.json({ items: config.items, updatedAt: config.updatedAt });
});

configuracion.get("/api/config/categorias", async (_req, res) => {
  const config = await getConfigList("categorias", DEFAULT_CATEGORIAS);
  res.json({ items: config.items, updatedAt: config.updatedAt });
});

configuracion.patch("/api/config/materias", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleConfigListUpdateSchema.parse(req.body ?? {});
    const updated = await updateConfigList("materias", parsed.items);
    res.json({ items: updated.items, updatedAt: updated.updatedAt });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

configuracion.patch("/api/config/categorias", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleConfigListUpdateSchema.parse(req.body ?? {});
    const updated = await updateConfigList("categorias", parsed.items);
    res.json({ items: updated.items, updatedAt: updated.updatedAt });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
