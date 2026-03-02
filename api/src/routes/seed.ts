import { Router } from "express";
import { requireAdmin } from "../lib/admin-auth";
import { getDb } from "../lib/db";

export const seed = Router();

seed.post("/api/seed/modulos", requireAdmin, async (_req, res) => {
  const db = await getDb();
  const now = new Date().toISOString();
  const modulosBase = [
    {
      id: "mod-001",
      title: "Sumas básicas",
      description: "Resolver sumas simples con apoyo visual.",
      subject: "Matemáticas",
      category: "Aritmética",
      level: "Básico",
      durationMinutes: 15,
      visibility: "publico",
      dependencies: [],
      generatorRef: { id: "matematicas:1", config: { dificultad: "basico" } },
      resources: [],
      createdBy: "seed",
      updatedAt: now
    },
    {
      id: "mod-002",
      title: "Sumas avanzadas",
      description: "Sumas con llevadas y números de dos cifras.",
      subject: "Matemáticas",
      category: "Aritmética",
      level: "Intermedio",
      durationMinutes: 25,
      visibility: "publico",
      dependencies: [{ id: "mod-001", type: "required" }],
      generatorRef: { id: "matematicas:2", config: { dificultad: "intermedio" } },
      resources: [],
      createdBy: "seed",
      updatedAt: now
    },
    {
      id: "mod-003",
      title: "Multiplicación",
      description: "Tablas y problemas aplicados en contexto.",
      subject: "Matemáticas",
      category: "Aritmética",
      level: "Intermedio",
      durationMinutes: 30,
      visibility: "publico",
      dependencies: [{ id: "mod-002", type: "required" }],
      generatorRef: { id: "matematicas:3", config: { dificultad: "intermedio" } },
      resources: [],
      createdBy: "seed",
      updatedAt: now
    }
  ];

  const operations = modulosBase.map((modulo) => ({
    updateOne: {
      filter: { id: modulo.id },
      update: { $set: modulo },
      upsert: true
    }
  }));

  const result = await db.collection("modulos").bulkWrite(operations);
  res.status(201).json({ ok: true, upserted: result.upsertedCount, matched: result.modifiedCount });
});

const ECONOMIA_PROMPTS: Array<{ id: string; generatorId: string; label: string }> = [
  { id: "seed-economia-contabilidad-1", generatorId: "contabilidad/1", label: "Clasificación de Cuentas" },
  { id: "seed-economia-contabilidad-2", generatorId: "contabilidad/2", label: "Naturaleza de Cuentas" },
  { id: "seed-economia-contabilidad-3", generatorId: "contabilidad/3", label: "Saldo Normal" },
  { id: "seed-economia-contabilidad-4", generatorId: "contabilidad/4", label: "Ubicación en Estados Financieros" },
  { id: "seed-economia-contabilidad-5", generatorId: "contabilidad/5", label: "Hechos Patrimoniales" },
  { id: "seed-economia-contabilidad-6", generatorId: "contabilidad/6", label: "Bienes, Derechos y Obligaciones" },
  { id: "seed-economia-contabilidad-7", generatorId: "contabilidad/7", label: "Aportes y Contribuciones (Contabilidad)" },
  { id: "seed-economia-contabilidad-8", generatorId: "contabilidad/8", label: "Variaciones Patrimoniales" },
  { id: "seed-economia-finanzas-9",  generatorId: "finanzas/9",  label: "Presupuesto Familiar" },
  { id: "seed-economia-finanzas-10", generatorId: "finanzas/10", label: "Gastos Fijos Esenciales" },
  { id: "seed-economia-finanzas-11", generatorId: "finanzas/11", label: "Gastos Esenciales vs No Esenciales" },
  { id: "seed-economia-finanzas-12", generatorId: "finanzas/12", label: "Ahorro vs Consumo Responsable" },
  { id: "seed-economia-finanzas-13", generatorId: "finanzas/13", label: "Deuda Buena y Mala" },
  { id: "seed-economia-finanzas-14", generatorId: "finanzas/14", label: "CFT vs Interés" },
  { id: "seed-economia-finanzas-15", generatorId: "finanzas/15", label: "Interés Simple" },
  { id: "seed-economia-finanzas-16", generatorId: "finanzas/16", label: "Interés Compuesto" },
  { id: "seed-economia-finanzas-17", generatorId: "finanzas/17", label: "Liquidez Personal" },
  { id: "seed-economia-finanzas-18", generatorId: "finanzas/18", label: "Ingresos Activos y Pasivos" },
  { id: "seed-economia-finanzas-19", generatorId: "finanzas/19", label: "Publicidad Engañosa" },
  { id: "seed-economia-finanzas-20", generatorId: "finanzas/20", label: "Comparación de Inversiones" },
  { id: "seed-economia-finanzas-21", generatorId: "finanzas/21", label: "Seguros para la Familia" },
  { id: "seed-economia-ar-21", generatorId: "economia_ar/21", label: "Recibo Básico" },
  { id: "seed-economia-ar-22", generatorId: "economia_ar/22", label: "Descuentos Obligatorios" },
  { id: "seed-economia-ar-23", generatorId: "economia_ar/23", label: "Aportes 17%" },
  { id: "seed-economia-ar-24", generatorId: "economia_ar/24", label: "Neto desde Bruto" },
  { id: "seed-economia-ar-25", generatorId: "economia_ar/25", label: "IVA Concepto" },
  { id: "seed-economia-ar-26", generatorId: "economia_ar/26", label: "Cálculo de IVA" },
  { id: "seed-economia-ar-27", generatorId: "economia_ar/27", label: "Jurisdicción de Impuestos" },
  { id: "seed-economia-ar-28", generatorId: "economia_ar/28", label: "Sector Formal e Informal" },
  { id: "seed-economia-ar-29", generatorId: "economia_ar/29", label: "Monotributo" },
  { id: "seed-economia-ar-30", generatorId: "economia_ar/30", label: "Tasa de Desempleo" },
  { id: "seed-economia-31", generatorId: "economia/31", label: "Política Fiscal y Monetaria" },
  { id: "seed-economia-32", generatorId: "economia/32", label: "Ganancia y Pérdida" },
  { id: "seed-economia-33", generatorId: "economia/33", label: "Resultado Bruto" },
  { id: "seed-economia-34", generatorId: "economia/34", label: "Resultado Neto" },
  { id: "seed-economia-35", generatorId: "economia/35", label: "Margen Bruto" },
  { id: "seed-economia-36", generatorId: "economia/36", label: "Margen Neto" },
  { id: "seed-economia-37", generatorId: "economia/37", label: "Capital de Trabajo" },
  { id: "seed-economia-38", generatorId: "economia/38", label: "Punto de Equilibrio" },
  { id: "seed-economia-39", generatorId: "economia/39", label: "Productividad" },
  { id: "seed-economia-40", generatorId: "economia/40", label: "Porcentajes Simples" },
  { id: "seed-economia-41", generatorId: "economia/41", label: "Clasificación de Bienes" },
  { id: "seed-economia-42", generatorId: "economia/42", label: "Agentes Económicos" },
  { id: "seed-economia-43", generatorId: "economia/43", label: "Estructuras de Mercado" },
  { id: "seed-economia-44", generatorId: "economia/44", label: "Gastos Fijos y Variables" },
  { id: "seed-economia-45", generatorId: "economia/45", label: "Interés Simple vs Compuesto (Concepto)" },
  { id: "seed-economia-46", generatorId: "economia/46", label: "CFT Mayor Interés" },
  { id: "seed-economia-47", generatorId: "economia/47", label: "Ganancia vs Equilibrio" },
  { id: "seed-economia-48", generatorId: "economia/48", label: "Quiz: Aportes y Contribuciones" },
  { id: "seed-economia-49", generatorId: "economia/49", label: "Quiz: Deuda Buena y Mala" },
  { id: "seed-economia-50", generatorId: "economia/50", label: "Quiz: Publicidad Engañosa" },
  { id: "seed-economia-51", generatorId: "economia/51", label: "Quiz: Gastos Esenciales" },
  { id: "seed-economia-52", generatorId: "economia/52", label: "Quiz: Liquidez (Concepto)" },
  { id: "seed-economia-53", generatorId: "economia/53", label: "Quiz: Interés Simple y Compuesto" },
  { id: "seed-economia-54", generatorId: "economia/54", label: "Quiz: CFT Mayor Interés" },
  { id: "seed-economia-55", generatorId: "economia/55", label: "Quiz: Ganancia vs Equilibrio" },
];

seed.post("/api/seed/prompts-generadores", requireAdmin, async (_req, res) => {
  const db = await getDb();
  const now = new Date().toISOString();

  const operations = ECONOMIA_PROMPTS.map(({ id, generatorId, label }) => ({
    updateOne: {
      filter: { id },
      update: {
        $set: {
          id,
          targetType: "exercise_generator",
          targetId: "generadores:economia",
          kind: "QUESTION",
          title: label,
          bodyText: label,
          paramsSchema: {
            templateKind: "TEXT",
            generatorId,
            label,
          },
          status: "ACTIVE",
          createdBy: "seed",
          createdAt: now,
          source: "seed",
        },
      },
      upsert: true,
    },
  }));

  const result = await db.collection("prompts").bulkWrite(operations);
  res.status(201).json({
    ok: true,
    upserted: result.upsertedCount,
    matched: result.modifiedCount,
    total: ECONOMIA_PROMPTS.length,
  });
});
