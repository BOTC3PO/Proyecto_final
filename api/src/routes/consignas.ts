import { Router } from "express";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const router = Router();
const QUIMICA_ROOT = path.resolve(process.cwd(), "api/src/generadores/quimica");
const MATEMATICAS_ROOT = path.resolve(process.cwd(), "api/src/generadores/matematicas");
const FISICA_ROOT = path.resolve(__dirname, "..", "generadores", "fisica");
const ECONOMIA_ROOT = path.resolve(process.cwd(), "api/src/generadores/economia");
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
const FISICA_TEMAS_PERMITIDOS = new Set([
  "01_mru",
  "02_mruv",
  "03_caida_libre",
  "04_conversion_unidades_cinematica",
  "05_relacion_distancia_tiempo",
  "06_movimiento_vertical",
  "07_movimiento_horizontal",
  "08_suma_fuerzas",
  "09_peso",
  "10_friccion",
  "11_plano_inclinado",
  "12_ley_hooke",
  "13_trabajo_mecanico",
  "14_energia_cinetica",
  "15_energia_potencial",
  "16_conservacion_energia",
  "17_potencia_mecanica",
  "18_calor",
  "19_conversion_temperatura",
  "20_cambios_estado",
  "21_dilatacion_termica",
  "22_ley_ohm",
  "23_potencia_electrica",
  "24_resistencia_serie",
  "25_resistencia_paralelo",
  "26_consumo_electrico",
  "27_frecuencia_periodo",
  "28_velocidad_ondas",
  "29_longitud_onda",
  "30_indice_refraccion",
  "31_ecuacion_lentes",
  "32_optica_geometrica",
  "33_densidad",
  "34_presion",
  "35_presion_hidrostatica",
  "36_caudal",
  "37_bernoulli",
  "38_principio_arquimedes",
]);
const ECONOMIA_TEMAS_PERMITIDOS = new Set([
  "01_contab_clasificacionCuentas",
  "02_contab_naturalezaCuentas",
  "03_contab_saldoNormal",
  "04_contab_ubicacionEstados",
  "05_contab_hechosPatrimonio",
  "06_contab_bienesDerechosObligaciones",
  "07_contab_aportesContribuciones",
  "08_contab_variacionesPatrimoniales",
  "09_finanzas_presupuestoFamiliar",
  "10_finanzas_gastosFijosEsenciales",
  "11_finanzas_gastosEsencialesNoEsenciales",
  "12_finanzas_ahorroVsConsumoResponsable",
  "13_finanzas_deudaBuenaMala",
  "14_finanzas_cftVsInteres",
  "15_finanzas_interesSimple",
  "16_finanzas_interesCompuesto",
  "17_finanzas_liquidezPersonal",
  "18_finanzas_ingresosActivosPasivos",
  "19_finanzas_publicidadEnganosa",
  "20_finanzas_comparacionInversiones",
  "21_economia_ar_reciboBasico",
  "21_finanzas_segurosFamilia",
  "22_economia_ar_descuentosObligatorios",
  "23_economia_ar_aportes17",
  "24_economia_ar_netoDesdeBruto",
  "25_economia_ar_iva",
  "26_economia_ar_ivaCalculo",
  "27_economia_ar_jurisdiccionImpuestos",
  "28_economia_ar_formalInformal",
  "29_economia_ar_monotributo",
  "30_economia_ar_tasaDesempleo",
  "31_economia_politicaFiscalMonetaria",
  "32_economia_gananciaPerdida",
  "33_economia_resultadoBruto",
  "34_economia_resultadoNeto",
  "35_economia_margenBruto",
  "36_economia_margenNeto",
  "37_economia_capitalTrabajo",
  "38_economia_puntoEquilibrio",
  "39_economia_productividad",
  "40_economia_porcentajesSimples",
  "41_economia_clasificacionBienes",
  "42_economia_agentesEconomicos",
  "43_economia_estructurasMercado",
  "44_economia_gastosFijosVariables",
  "45_economia_simpleVsCompuesto",
  "46_economia_cftMayorInteres",
  "47_economia_gananciaVsEquilibrio",
  "48_economia_aportesContribuciones_quiz",
  "49_economia_deudaBuenaMala_quiz",
  "50_economia_publicidadEnganosa_quiz",
  "51_economia_gastosEsenciales_quiz",
  "52_economia_liquidezConcepto_quiz",
  "53_economia_interesSimpleCompuesto_quiz",
  "54_economia_cftMayorInteres_quiz",
  "55_economia_gananciaVsEquilibrio_quiz",
]);

router.get("/api/consignas/economia", async (_req, res) => {
  try {
    const entries = await readdir(ECONOMIA_ROOT, { withFileTypes: true });
    const temas = entries
      .filter(
        (entry) =>
          entry.isDirectory() && TEMA_REGEX.test(entry.name) && ECONOMIA_TEMAS_PERMITIDOS.has(entry.name)
      )
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    return res.json(temas.map((id) => ({ id })));
  } catch {
    return res.status(500).json({ error: "no se pudo listar consignas de economia" });
  }
});

router.get("/api/consignas/economia/:tema", async (req, res) => {
  const tema = String(req.params.tema ?? "");
  if (!TEMA_REGEX.test(tema) || !ECONOMIA_TEMAS_PERMITIDOS.has(tema)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const temaPath = path.resolve(ECONOMIA_ROOT, tema);
  if (!temaPath.startsWith(`${ECONOMIA_ROOT}${path.sep}`)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const enunciadoPath = path.resolve(temaPath, "enunciado.json");
  const limitsPath = path.resolve(temaPath, "limits.json");

  try {
    await access(enunciadoPath);
  } catch {
    return res.status(404).json({ error: "enunciados no encontrados" });
  }

  try {
    const rawEnunciado = await readFile(enunciadoPath, "utf8");
    let limits: unknown = null;

    try {
      await access(limitsPath);
      const rawLimits = await readFile(limitsPath, "utf8");
      limits = JSON.parse(rawLimits);
    } catch {
      limits = null;
    }

    return res.json({ enunciado: JSON.parse(rawEnunciado), limits });
  } catch {
    return res.status(500).json({ error: "no se pudo leer consigna" });
  }
});

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

router.get("/api/consignas/fisica", async (_req, res) => {
  try {
    const entries = await readdir(FISICA_ROOT, { withFileTypes: true });
    const temas = entries
      .filter(
        (entry) =>
          entry.isDirectory() && TEMA_REGEX.test(entry.name) && FISICA_TEMAS_PERMITIDOS.has(entry.name)
      )
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    return res.json(temas.map((id) => ({ id })));
  } catch {
    return res.status(500).json({ error: "no se pudo listar consignas de fisica" });
  }
});

router.get("/api/consignas/fisica/:tema", async (req, res) => {
  const tema = String(req.params.tema ?? "");
  if (!TEMA_REGEX.test(tema)) {
    return res.status(400).json({ error: "tema invalido" });
  }
  if (!FISICA_TEMAS_PERMITIDOS.has(tema)) {
    return res.status(404).json({ error: "tema no encontrado" });
  }

  const limitsPath = path.join(FISICA_ROOT, tema, "limits.json");
  const enunciadoPath = path.join(FISICA_ROOT, tema, "enunciado.json");
  const resolvedLimitsPath = path.resolve(limitsPath);
  const resolvedEnunciadoPath = path.resolve(enunciadoPath);

  if (!resolvedLimitsPath.startsWith(`${FISICA_ROOT}${path.sep}`)) {
    return res.status(400).json({ error: "tema invalido" });
  }
  if (!resolvedEnunciadoPath.startsWith(`${FISICA_ROOT}${path.sep}`)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  try {
    await access(resolvedLimitsPath);
  } catch {
    return res.status(404).json({ error: "limites no encontrados" });
  }

  try {
    const rawLimits = await readFile(resolvedLimitsPath, "utf8");
    const limits = JSON.parse(rawLimits);

    let enunciado: unknown;
    try {
      await access(resolvedEnunciadoPath);
      const rawEnunciado = await readFile(resolvedEnunciadoPath, "utf8");
      enunciado = JSON.parse(rawEnunciado);
    } catch {
      enunciado = undefined;
    }

    return res.json({ limits, enunciado });
  } catch {
    return res.status(500).json({ error: "no se pudo leer limites" });
  }
});

export const consignas = router;
