import { Router } from "express";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const router = Router();
const QUIMICA_ROOT = path.resolve(process.cwd(), "api/src/generadores/quimica");
const MATEMATICAS_ROOT = path.resolve(process.cwd(), "api/src/generadores/matematicas");
const TEMA_REGEX = /^\d{2}_[A-Za-z0-9_]+$/;
const MATEMATICAS_TEMAS_PERMITIDOS = new Set([
  "01_operaciones_basicas",
  "02_operaciones_combinadas",
  "03_potencias_y_raices",
  "04_fracciones",
  "05_decimales_y_porcentajes",
  "06_proporcionalidad",
  "07_ecuaciones_lineales",
  "08_sistemas_de_ecuaciones",
  "09_factorizacion",
  "10_funciones_lineales",
  "11_geometria_plana",
  "12_areas_y_volumenes",
  "13_ratios_y_tasas",
  "14_progresiones",
  "15_limites",
  "31_funciones_exponenciales",
  "32_funciones_logaritmicas",
  "33_ecuaciones_exponenciales",
  "34_ecuaciones_logaritmicas",
  "35_trigonometria_avanzada",
  "36_identidades_trigonometricas",
  "37_ecuaciones_trigonometricas",
  "38_geometria_del_espacio",
  "39_vectores_avanzado",
  "40_producto_escalar_y_vectorial",
  "41_matrices_avanzado",
  "42_determinantes_avanzado",
  "43_sistemas_lineales_matrices",
  "44_transformaciones_geometricas",
  "45_numeros_complejos",
]);

router.get("/api/consignas/quimica", async (_req, res) => {
  try {
    const entries = await readdir(QUIMICA_ROOT, { withFileTypes: true });
    const temas = entries
      .filter((entry) => entry.isDirectory() && TEMA_REGEX.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    return res.json(temas.map((id) => ({ id })));
  } catch {
    return res.status(500).json({ error: "no se pudo listar consignas de quimica" });
  }
});

router.get("/api/consignas/quimica/:tema", async (req, res) => {
  const tema = String(req.params.tema ?? "");
  if (!TEMA_REGEX.test(tema)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const temaPath = path.resolve(QUIMICA_ROOT, tema);
  if (!temaPath.startsWith(`${QUIMICA_ROOT}${path.sep}`)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const catalogPath = path.resolve(temaPath, "enunciado.json");

  try {
    await access(catalogPath);
  } catch {
    return res.status(404).json({ error: "enunciados no encontrados" });
  }

  try {
    const raw = await readFile(catalogPath, "utf8");
    return res.json(JSON.parse(raw));
  } catch {
    return res.status(500).json({ error: "no se pudo leer consigna" });
  }
});

router.get("/api/consignas/matematicas", async (_req, res) => {
  try {
    const entries = await readdir(MATEMATICAS_ROOT, { withFileTypes: true });
    const temas = entries
      .filter(
        (entry) =>
          entry.isDirectory() &&
          TEMA_REGEX.test(entry.name) &&
          MATEMATICAS_TEMAS_PERMITIDOS.has(entry.name)
      )
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    return res.json(temas.map((id) => ({ id })));
  } catch {
    return res.status(500).json({ error: "no se pudo listar consignas de matematicas" });
  }
});

router.get("/api/consignas/matematicas/:tema", async (req, res) => {
  const tema = String(req.params.tema ?? "");
  if (!TEMA_REGEX.test(tema) || !MATEMATICAS_TEMAS_PERMITIDOS.has(tema)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const temaPath = path.resolve(MATEMATICAS_ROOT, tema);
  if (!temaPath.startsWith(`${MATEMATICAS_ROOT}${path.sep}`)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const limitsPath = path.resolve(temaPath, "limits.json");

  try {
    await access(limitsPath);
  } catch {
    return res.status(404).json({ error: "limites no encontrados" });
  }

  try {
    const raw = await readFile(limitsPath, "utf8");
    return res.json(JSON.parse(raw));
  } catch {
    return res.status(500).json({ error: "no se pudo leer limites" });
  }
});

export const consignas = router;
