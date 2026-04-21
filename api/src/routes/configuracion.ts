import express, { Router } from "express";
import { prisma } from "../lib/prisma";
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
  const stored = await prisma.configModulo.findFirst({ where: { id } });
  if (stored) {
    let parsedItems: string[] = defaults;
    try {
      const parsed = JSON.parse(stored.items);
      if (Array.isArray(parsed) && parsed.length > 0) parsedItems = parsed;
    } catch { /* use defaults */ }
    return ModuleConfigListSchema.parse({
      id,
      items: parsedItems,
      updatedAt: stored.updatedAt ?? new Date().toISOString()
    });
  }
  const fallback = {
    id,
    items: defaults,
    updatedAt: new Date().toISOString()
  };
  await prisma.configModulo.create({
    data: { id, items: JSON.stringify(defaults), updatedAt: fallback.updatedAt }
  });
  return ModuleConfigListSchema.parse(fallback);
};

const updateConfigList = async (id: string, items: string[]) => {
  const payload = ModuleConfigListSchema.parse({
    id,
    items,
    updatedAt: new Date().toISOString()
  });
  await prisma.configModulo.upsert({
    where: { id },
    update: { items: JSON.stringify(payload.items), updatedAt: payload.updatedAt },
    create: { id, items: JSON.stringify(payload.items), updatedAt: payload.updatedAt }
  });
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
