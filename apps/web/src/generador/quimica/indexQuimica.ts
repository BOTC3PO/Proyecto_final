// src/generators/quimica/indexQuimica.ts
import { type Exercise, type GeneratorFn, setPrng } from "./generico";
import { parseQuimicaParams } from "./schemas";
import type { GeneratorDescriptor } from "../core/types";
import type { PRNG } from "../core/prng";
import { getCatalogoTemaSync, getTemaByIdSync } from "./catalogoApi";

/* ────────────────────────────────────────────────
   BLOQUE 1 — ESTEQUIOMETRÍA (1–12)
────────────────────────────────────────────────── */
import { generarBalanceo } from "./01_balanceo";
import { generarCalculoMoles } from "./02_calculo_moles";
import { generarCalculoMasa } from "./03_calculo_masa";
import { generarNumeroParticulas } from "./04_numero_particulas";
import { generarRelacionesMolares } from "./05_relaciones_molares";
import { generarReactivoLimitante } from "./06_reactivo_limitante";
import { generarReactivoEnExceso } from "./07_reactivo_en_exceso";
import { generarRendimientoTeorico } from "./08_rendimiento_teorico";
import { generarPorcentajeRendimiento } from "./09_porcentaje_rendimiento";
import { generarPurezaReactivos } from "./10_pureza_reactivos";
import { generarLeyProporcionesMultiples } from "./11_ley_proporciones_multiples";
import { generarLeyProporcionesDefinidas } from "./12_ley_proporciones_definidas";

/* ────────────────────────────────────────────────
   BLOQUE 2 — SOLUCIONES (13–21)
────────────────────────────────────────────────── */
import { generarPorcentajeMasaMasa } from "./13_porcentaje_masa_masa";
import { generarPorcentajeMasaVolumen } from "./14_porcentaje_masa_volumen";
import { generarPorcentajeVolumenVolumen } from "./15_porcentaje_volumen_volumen";
import { generarMolaridad } from "./16_molaridad";
import { generarMolalidad } from "./17_molalidad";
import { generarNormalidad } from "./18_normalidad";
import { generarFraccionMolar } from "./19_fraccion_molar";
import { generarDiluciones } from "./20_diluciones";
import { generarPreparacionSoluciones } from "./21_preparacion_soluciones";

/* ────────────────────────────────────────────────
   BLOQUE 3 — GASES (22–28)
────────────────────────────────────────────────── */
import { generarLeyBoyle } from "./22_ley_boyle";
import { generarLeyCharles } from "./23_ley_charles";
import { generarLeyGayLussac } from "./24_ley_gay_lussac";
import { generarLeyCombinadaGases } from "./25_ley_combinada_gases";
import { generarGasIdeal } from "./26_gas_ideal";
import { generarPresionesParciales } from "./27_presiones_parciales";
import { generarMezclaGases } from "./28_mezcla_gases";

/* ────────────────────────────────────────────────
   BLOQUE 4 — TERMOQUÍMICA (29–33)
────────────────────────────────────────────────── */
import { generarCalorQ } from "./29_calor";
import { generarCambioEntalpia } from "./30_cambio_entalpia";
import { generarLeyHess } from "./31_ley_hess";
import { generarEnergiaReaccion } from "./32_energia_reaccion";
import { generarPoderCalorifico } from "./33_poder_calorifico";

/* ────────────────────────────────────────────────
   BLOQUE 5 — ÁCIDOS Y BASES (34–41)
────────────────────────────────────────────────── */
import { generarPH } from "./34_pH";
import { generarPOH } from "./35_pOH";
import { generarKa_pKa } from "./36_Ka_pKa";
import { generarKb_pKb } from "./37_Kb_pKb";
import { generarConcentracionesH_OH } from "./38_concentraciones_H_OH";
import { generarFuerzaAcidosBases } from "./39_fuerza_acidos_bases";
import { generarNeutralizacion } from "./40_neutralizacion";
import { generarTitulacionesSimples } from "./41_titulaciones_simples";

/* ────────────────────────────────────────────────
   BLOQUE 6 — EQUILIBRIO (42–46)
────────────────────────────────────────────────── */
import { generarKc } from "./42_kc";
import { generarKp } from "./43_kp";
import { generarQ_Direccion } from "./44_q_direccion";
import { generarProblemasICE } from "./45_problemas_ice";
import { generarConcentracionesEquilibrio } from "./46_concentraciones_equilibrio";

/* ────────────────────────────────────────────────
   BLOQUE 7 — ELECTROQUÍMICA (47–52)
────────────────────────────────────────────────── */
import { generarPotencialesEstandar } from "./47_potenciales_estandar";
import { generarEcelda } from "./48_electroquimica_Ecelda";
import { generarAnodoCatodo } from "./49_anodo_catodo";
import { generarDeltaG } from "./50_deltaG";
import { generarLeyesFaraday } from "./51_leyes_faraday";
import { generarMasaElectrolisis } from "./52_masa_electrolisis";

/* ────────────────────────────────────────────────
   BLOQUE 8 — CINÉTICA (53–57)
────────────────────────────────────────────────── */
import { generarLeyVelocidad } from "./53_ley_velocidad";
import { generarOrdenReaccion } from "./54_orden_reaccion";
import { generarConstanteK } from "./55_constante_k";
import { generarSemivida } from "./56_semivida";
import { generarGraficosCinetica } from "./57_graficos_cinetica";

/* ────────────────────────────────────────────────
   BLOQUE 9 — SOLUBILIDAD (58–61)
────────────────────────────────────────────────── */
import { generarKsp } from "./58_ksp";
import { generarSolubilidadMolar } from "./59_solubilidad_molar";
import { generarPrecipitacion } from "./60_precipitacion";
import { generarConcentracionMaximaAntesPrecipitar } from "./61_concentracion_maxima";

/* ────────────────────────────────────────────────
   BLOQUE 10 — COLIGATIVAS (62–65)
────────────────────────────────────────────────── */
import { generarDescensoPuntoCongelacion } from "./62_descenso_punto_congelacion";
import { generarElevacionPuntoEbullicion } from "./63_elevacion_punto_ebullicion";
import { generarPresionOsmotica } from "./64_presion_osmotica";
import { generarFactorVantHoff } from "./65_factor_vant_hoff";

/* ────────────────────────────────────────────────
   BLOQUE 11 — TABLA PERIÓDICA QUIZ (66–71)
────────────────────────────────────────────────── */
import { generarClasificacionTablaPeriodica } from "./66_tabla_periodica_clasificacion";
import { generarNumeroAtomico } from "./67_tabla_periodica_numero_atomico";
import { generarTendenciasPeriodicas } from "./68_tendencias_periodicas_conceptual";
import { generarElectronegatividadComparacion } from "./69_electronegatividad_comparacion";
import { generarRadioAtomicoComparacion } from "./70_radio_atomico_comparacion";
import { generarValenciaTipica } from "./71_valencia_tipica";

/* ────────────────────────────────────────────────
   BLOQUE 12 — ESTRUCTURA ATÓMICA QUIZ (72–76)
────────────────────────────────────────────────── */
import { generarParticulasSubatomicas } from "./72_particulas_subatomicas";
import { generarIonesCationesAniones } from "./73_iones_cationes_aniones";
import { generarConfiguracionElectronica } from "./74_configuracion_electronica";
import { generarNivelesSubnivelesEnergia } from "./75_niveles_y_subniveles";
import { generarOrbitalesSPDF } from "./76_orbitales_spdf";

/* ────────────────────────────────────────────────
   BLOQUE 13 — ENLACES QUIZ (77–81)
────────────────────────────────────────────────── */
import { generarEnlaceIonico } from "./77_enlace_ionico";
import { generarEnlaceCovalente } from "./78_enlace_covalente";
import { generarEnlaceMetalico } from "./79_enlace_metalico";
import { generarPolaridadEnlaces } from "./80_polaridad_enlaces";
import { generarGeometriaMolecularVSEPR } from "./81_geometria_molecular_vsepr";

/* ────────────────────────────────────────────────
   BLOQUE 14 — MEZCLAS Y MATERIALES QUIZ (82–85)
────────────────────────────────────────────────── */
import { generarSustanciaPuraVsMezcla } from "./82_sustancia_pura_vs_mezcla";
import { generarMezclaHomogeneaHeterogenea } from "./83_mezcla_homogenea_heterogenea";
import { generarMetodosSeparacion } from "./84_metodos_separacion";
import { generarPropiedadesFisicasVsQuimicas } from "./85_propiedades_fisicas_vs_quimicas";

/* ────────────────────────────────────────────────
   BLOQUE 15 — TIPOS DE REACCIONES QUIZ (86–91)
────────────────────────────────────────────────── */
import { generarReaccionSintesis } from "./86_sintesis";
import { generarReaccionDescomposicion } from "./87_descomposicion";
import { generarDesplazamientoSimpleDoble } from "./88_desplazamiento_simple_doble";
import { generarReaccionCombustion } from "./89_combustion";
import { generarNeutralizacionAcidoBase } from "./90_neutralizacion";
import { generarReaccionPrecipitacion } from "./91_precipitacion";

/* ────────────────────────────────────────────────
   BLOQUE 16 — SEGURIDAD QUÍMICA QUIZ (92–95)
────────────────────────────────────────────────── */
import { generarPictogramasGHS } from "./92_pictogramas_ghs";
import { generarMaterialesInflamables } from "./93_materiales_inflamables";
import { generarRiesgosToxicos } from "./94_riesgos_toxicos";
import { generarEquiposProteccionQuimica } from "./95_equipos_proteccion";

/* ────────────────────────────────────────────────
   MAPA FINAL DE GENERADORES POR ID (1–95)
────────────────────────────────────────────────── */



type DificultadCore = "basico" | "intermedio" | "avanzado";

interface ConsignaCatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data?: Record<string, unknown>;
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];

const getNivelCore = (nivel: string): DificultadCore => {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  return "avanzado";
};

const renderEnunciado = (base: string, values: Record<string, unknown>): string =>
  base.replaceAll(/\{\{(\w+)\}\}|\{(\w+)\}/g, (_m, k1?: string, k2?: string) => {
    const key = k1 ?? k2 ?? "";
    const value = values[key];
    return value === undefined || value === null ? "" : String(value);
  });

const applyConsignaDesdeApi = (exercise: Exercise, dificultad: string | undefined, prng: PRNG): Exercise => {
  const tema = getTemaByIdSync(exercise.idTema);
  if (!tema) {
    throw new Error(`No se pudo resolver tema de consignas para química ${String(exercise.idTema).padStart(2, "0")}.`);
  }

  const catalogo = getCatalogoTemaSync(tema);
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    throw new Error(`No hay consignas precargadas para ${tema}.`);
  }

  const items = catalogo as ConsignaCatalogItem[];
  const nivelCore = getNivelCore(dificultad ?? "media");
  const maxLevel = DIFICULTAD_ORDEN.indexOf(nivelCore);
  const pool = items.filter((item) =>
    item?.activo === true &&
    typeof item.enunciadoBase === "string" &&
    DIFICULTAD_ORDEN.includes(item.difficulty) &&
    DIFICULTAD_ORDEN.indexOf(item.difficulty) <= maxLevel
  );

  if (pool.length === 0) {
    throw new Error(`No hay consignas activas para ${tema} en nivel ${nivelCore}.`);
  }

  const selected = pool[prng.int(0, pool.length - 1)];
  const data = selected.data && typeof selected.data === "object" ? selected.data : {};
  const enunciado = renderEnunciado(selected.enunciadoBase, data);

  if (!enunciado || enunciado.trim().length === 0) {
    throw new Error(`La consigna de ${tema} es inválida o vacía.`);
  }

  return { ...exercise, enunciado };
};

const wrapWithPrng =
  (generator: GeneratorFn): GeneratorFn =>
  (dificultad, prng) => {
    parseQuimicaParams(dificultad);
    if (!prng) {
      throw new Error("Se requiere un PRNG inicializado para generar ejercicios.");
    }
    setPrng(prng);
    const exercise = generator(dificultad, prng);
    return applyConsignaDesdeApi(exercise, dificultad, prng);
  };

const GENERADORES_QUIMICA_BASE: Record<number, GeneratorFn> = {
  /* Estequiometría */
  1: generarBalanceo,
  2: generarCalculoMoles,
  3: generarCalculoMasa,
  4: generarNumeroParticulas,
  5: generarRelacionesMolares,
  6: generarReactivoLimitante,
  7: generarReactivoEnExceso,
  8: generarRendimientoTeorico,
  9: generarPorcentajeRendimiento,
  10: generarPurezaReactivos,
  11: generarLeyProporcionesMultiples,
  12: generarLeyProporcionesDefinidas,

  /* Soluciones */
  13: generarPorcentajeMasaMasa,
  14: generarPorcentajeMasaVolumen,
  15: generarPorcentajeVolumenVolumen,
  16: generarMolaridad,
  17: generarMolalidad,
  18: generarNormalidad,
  19: generarFraccionMolar,
  20: generarDiluciones,
  21: generarPreparacionSoluciones,

  /* Gases */
  22: generarLeyBoyle,
  23: generarLeyCharles,
  24: generarLeyGayLussac,
  25: generarLeyCombinadaGases,
  26: generarGasIdeal,
  27: generarPresionesParciales,
  28: generarMezclaGases,

  /* Termoquímica */
  29: generarCalorQ,
  30: generarCambioEntalpia,
  31: generarLeyHess,
  32: generarEnergiaReaccion,
  33: generarPoderCalorifico,

  /* Ácidos y bases */
  34: generarPH,
  35: generarPOH,
  36: generarKa_pKa,
  37: generarKb_pKb,
  38: generarConcentracionesH_OH,
  39: generarFuerzaAcidosBases,
  40: generarNeutralizacion,
  41: generarTitulacionesSimples,

  /* Equilibrio */
  42: generarKc,
  43: generarKp,
  44: generarQ_Direccion,
  45: generarProblemasICE,
  46: generarConcentracionesEquilibrio,

  /* Electroquímica */
  47: generarPotencialesEstandar,
  48: generarEcelda,
  49: generarAnodoCatodo,
  50: generarDeltaG,
  51: generarLeyesFaraday,
  52: generarMasaElectrolisis,

  /* Cinética */
  53: generarLeyVelocidad,
  54: generarOrdenReaccion,
  55: generarConstanteK,
  56: generarSemivida,
  57: generarGraficosCinetica,

  /* Solubilidad */
  58: generarKsp,
  59: generarSolubilidadMolar,
  60: generarPrecipitacion,
  61: generarConcentracionMaximaAntesPrecipitar,

  /* Coligativas */
  62: generarDescensoPuntoCongelacion,
  63: generarElevacionPuntoEbullicion,
  64: generarPresionOsmotica,
  65: generarFactorVantHoff,

  /* Tabla periódica */
  66: generarClasificacionTablaPeriodica,
  67: generarNumeroAtomico,
  68: generarTendenciasPeriodicas,
  69: generarElectronegatividadComparacion,
  70: generarRadioAtomicoComparacion,
  71: generarValenciaTipica,

  /* Estructura atómica */
  72: generarParticulasSubatomicas,
  73: generarIonesCationesAniones,
  74: generarConfiguracionElectronica,
  75: generarNivelesSubnivelesEnergia,
  76: generarOrbitalesSPDF,

  /* Enlaces */
  77: generarEnlaceIonico,
  78: generarEnlaceCovalente,
  79: generarEnlaceMetalico,
  80: generarPolaridadEnlaces,
  81: generarGeometriaMolecularVSEPR,

  /* Mezclas y materiales */
  82: generarSustanciaPuraVsMezcla,
  83: generarMezclaHomogeneaHeterogenea,
  84: generarMetodosSeparacion,
  85: generarPropiedadesFisicasVsQuimicas,

  /* Tipos de reacciones */
  86: generarReaccionSintesis,
  87: generarReaccionDescomposicion,
  88: generarDesplazamientoSimpleDoble,
  89: generarReaccionCombustion,
  90: generarNeutralizacionAcidoBase,
  91: generarReaccionPrecipitacion,

  /* Seguridad química */
  92: generarPictogramasGHS,
  93: generarMaterialesInflamables,
  94: generarRiesgosToxicos,
  95: generarEquiposProteccionQuimica,
};

export const GENERADORES_QUIMICA: Record<number, GeneratorFn> = Object.fromEntries(
  Object.entries(GENERADORES_QUIMICA_BASE).map(([id, generator]) => [
    Number(id),
    wrapWithPrng(generator),
  ])
) as Record<number, GeneratorFn>;

const QUIMICA_GENERATOR_VERSION = 1;

export const GENERADORES_QUIMICA_DESCRIPTORES: Record<
  number,
  GeneratorDescriptor<Exercise, Parameters<GeneratorFn>>
> = Object.fromEntries(
  Object.entries(GENERADORES_QUIMICA).map(([id, generator]) => {
    const idTema = Number(id);
    const generatorId = `quimica:${idTema}`;
    return [
      idTema,
      {
        id: generatorId,
        version: QUIMICA_GENERATOR_VERSION,
        generate: (...args) => ({
          ...generator(...args),
          generatorId,
          generatorVersion: QUIMICA_GENERATOR_VERSION,
        }),
      },
    ];
  })
) as Record<number, GeneratorDescriptor<Exercise, Parameters<GeneratorFn>>>;
