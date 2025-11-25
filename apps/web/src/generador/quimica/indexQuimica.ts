// src/generators/quimica/indexQuimica.ts
import { GeneratorFn } from "./generico";

/* ────────────────────────────────────────────────
   BLOQUE 1 — ESTEQUIOMETRÍA (1–12)
────────────────────────────────────────────────── */
import { generarBalanceoEcuaciones } from "./1_balanceo";
import { generarCalculoMoles } from "./2_moles";
import { generarCalculoMasa } from "./3_masa";
import { generarNumeroParticulas } from "./4_numero_particulas";
import { generarRelacionesMolares } from "./5_relaciones_molares";
import { generarReactivoLimitante } from "./6_reactivo_limitante";
import { generarReactivoExceso } from "./7_reactivo_exceso";
import { generarRendimientoTeorico } from "./8_rendimiento_teorico";
import { generarPorcentajeRendimiento } from "./9_porcentaje_rendimiento";
import { generarPurezaReactivos } from "./10_pureza";
import { generarLeyProporcionesMultiples } from "./11_ley_proporciones_multiples";
import { generarLeyProporcionesDefinidas } from "./12_ley_proporciones_definidas";

/* ────────────────────────────────────────────────
   BLOQUE 2 — SOLUCIONES (13–21)
────────────────────────────────────────────────── */
import { generarPorcentajeMasaMasa } from "./13_mm";
import { generarPorcentajeMasaVolumen } from "./14_mv";
import { generarPorcentajeVolumenVolumen } from "./15_vv";
import { generarMolaridad } from "./16_molaridad";
import { generarMolalidad } from "./17_molalidad";
import { generarNormalidad } from "./18_normalidad";
import { generarFraccionMolar } from "./19_fraccion_molar";
import { generarDiluciones } from "./20_diluciones";
import { generarPreparacionSoluciones } from "./21_preparacion_soluciones";

/* ────────────────────────────────────────────────
   BLOQUE 3 — GASES (22–28)
────────────────────────────────────────────────── */
import { generarLeyBoyle } from "./22_boyle";
import { generarLeyCharles } from "./23_charles";
import { generarLeyGayLussac } from "./24_gay_lussac";
import { generarLeyCombinada } from "./25_ley_combinada";
import { generarGasIdeal } from "./26_gas_ideal";
import { generarPresionesParciales } from "./27_presiones_parciales";
import { generarMezclaGases } from "./28_mezcla_gases";

/* ────────────────────────────────────────────────
   BLOQUE 4 — TERMOQUÍMICA (29–33)
────────────────────────────────────────────────── */
import { generarCalor } from "./29_calor";
import { generarCambioEntalpia } from "./30_entalpia";
import { generarLeyHess } from "./31_ley_hess";
import { generarEnergiaReaccion } from "./32_energia";
import { generarPoderCalorifico } from "./33_poder_calorifico";

/* ────────────────────────────────────────────────
   BLOQUE 5 — ÁCIDOS Y BASES (34–41)
────────────────────────────────────────────────── */
import { generarPH } from "./34_ph";
import { generarPOH } from "./35_poh";
import { generarKa_pKa } from "./36_ka_pka";
import { generarKb_pKb } from "./37_kb_pkb";
import { generarConcentracionesHydrox } from "./38_concentraciones";
import { generarFuerzaAcidosBases } from "./39_fuerza";
import { generarNeutralizacion } from "./40_neutralizacion";
import { generarTitulacionesSimples } from "./41_titulaciones";

/* ────────────────────────────────────────────────
   BLOQUE 6 — EQUILIBRIO (42–46)
────────────────────────────────────────────────── */
import { generarConstanteKc } from "./42_kc";
import { generarConstanteKp } from "./43_kp";
import { generarQ_Direccion } from "./44_q";
import { generarTablaICE } from "./45_ice";
import { generarEquilibrioEstimacion } from "./46_estimacion";

/* ────────────────────────────────────────────────
   BLOQUE 7 — ELECTROQUÍMICA (47–52)
────────────────────────────────────────────────── */
import { generarPotencialesEstandar } from "./47_e0";
import { generarEcuacionCelda } from "./48_e_celda";
import { generarAnodoCatodo } from "./49_anodo_catodo";
import { generarDeltaG } from "./50_delta_g";
import { generarLeyesFaraday } from "./51_faraday";
import { generarMasaElectrolisis } from "./52_electrolisis";

/* ────────────────────────────────────────────────
   BLOQUE 8 — CINÉTICA (53–57)
────────────────────────────────────────────────── */
import { generarLeyVelocidad } from "./53_ley_velocidad";
import { generarOrdenReaccion } from "./54_orden";
import { generarConstanteK } from "./55_k";
import { generarSemireaccion } from "./56_semireaccion";
import { generarGraficosCinética } from "./57_graficos";

/* ────────────────────────────────────────────────
   BLOQUE 9 — SOLUBILIDAD (58–61)
────────────────────────────────────────────────── */
import { generarKsp } from "./58_ksp";
import { generarSolubilidadMolar } from "./59_solubilidad";
import { generarPrecipitacionQKsp } from "./60_q_ksp";
import { generarConcentracionMaximaPrecipitar } from "./61_concentracion_max";

/* ────────────────────────────────────────────────
   BLOQUE 10 — COLIGATIVAS (62–65)
────────────────────────────────────────────────── */
import { generarDescensoPuntoCongelacion } from "./62_congelacion";
import { generarElevacionPuntoEbullicion } from "./63_ebullicion";
import { generarPresionOsmotica } from "./64_osmotica";
import { generarFactorVanthoff } from "./65_vanthoff";

/* ────────────────────────────────────────────────
   BLOQUE 11 — TABLA PERIÓDICA QUIZ (66–71)
────────────────────────────────────────────────── */
import { generarClasificacionTablaPeriodica } from "./66_clasificacion";
import { generarNumeroAtomico } from "./67_numero_atomico";
import { generarTendenciasPeriodicas } from "./68_tendencias";
import { generarElectronegatividadComparacion } from "./69_electronegatividad";
import { generarRadioAtomicoComparacion } from "./70_radio_atomico";
import { generarValenciaTipica } from "./71_valencia";

/* ────────────────────────────────────────────────
   BLOQUE 12 — ESTRUCTURA ATÓMICA QUIZ (72–76)
────────────────────────────────────────────────── */
import { generarParticulasSubatomicas } from "./72_subatomicas";
import { generarIonesCationesAniones } from "./73_iones";
import { generarConfiguracionElectronica } from "./74_configuracion";
import { generarNivelesSubnivelesEnergia } from "./75_niveles";
import { generarOrbitalesSPDF } from "./76_orbitales";

/* ────────────────────────────────────────────────
   BLOQUE 13 — ENLACES QUIZ (77–81)
────────────────────────────────────────────────── */
import { generarEnlaceIonico } from "./77_ionico";
import { generarEnlaceCovalente } from "./78_covalente";
import { generarEnlaceMetalico } from "./79_metalico";
import { generarPolaridadEnlaces } from "./80_polaridad";
import { generarGeometriaMolecularVSEPR } from "./81_vsepr";

/* ────────────────────────────────────────────────
   BLOQUE 14 — MEZCLAS Y MATERIALES QUIZ (82–85)
────────────────────────────────────────────────── */
import { generarSustanciaPuraVsMezcla } from "./82_sustancia_mezcla";
import { generarMezclaHomogeneaHeterogenea } from "./83_mezclas";
import { generarMetodosSeparacion } from "./84_separacion";
import { generarPropiedadesFisicasVsQuimicas } from "./85_propiedades";

/* ────────────────────────────────────────────────
   BLOQUE 15 — TIPOS DE REACCIONES QUIZ (86–91)
────────────────────────────────────────────────── */
import { generarReaccionSintesis } from "./86_sintesis";
import { generarReaccionDescomposicion } from "./87_descomposicion";
import { generarDesplazamientoSimpleDoble } from "./88_desplazamientos";
import { generarReaccionCombustion } from "./89_combustion";
import { generarNeutralizacionAcidoBase } from "./90_neutralizacion_quiz";
import { generarReaccionPrecipitacion } from "./91_precipitacion";

/* ────────────────────────────────────────────────
   BLOQUE 16 — SEGURIDAD QUÍMICA QUIZ (92–95)
────────────────────────────────────────────────── */
import { generarPictogramasGHS } from "./92_ghs";
import { generarMaterialesInflamables } from "./93_inflamables";
import { generarRiesgosToxicos } from "./94_toxicos";
import { generarEquiposProteccionQuimica } from "./95_epp";

/* ────────────────────────────────────────────────
   MAPA FINAL DE GENERADORES POR ID (1–95)
────────────────────────────────────────────────── */

export const GENERADORES_QUIMICA: Record<number, GeneratorFn> = {
  /* Estequiometría */
  1: generarBalanceoEcuaciones,
  2: generarCalculoMoles,
  3: generarCalculoMasa,
  4: generarNumeroParticulas,
  5: generarRelacionesMolares,
  6: generarReactivoLimitante,
  7: generarReactivoExceso,
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
  25: generarLeyCombinada,
  26: generarGasIdeal,
  27: generarPresionesParciales,
  28: generarMezclaGases,

  /* Termoquímica */
  29: generarCalor,
  30: generarCambioEntalpia,
  31: generarLeyHess,
  32: generarEnergiaReaccion,
  33: generarPoderCalorifico,

  /* Ácidos y bases */
  34: generarPH,
  35: generarPOH,
  36: generarKa_pKa,
  37: generarKb_pKb,
  38: generarConcentracionesHydrox,
  39: generarFuerzaAcidosBases,
  40: generarNeutralizacion,
  41: generarTitulacionesSimples,

  /* Equilibrio */
  42: generarConstanteKc,
  43: generarConstanteKp,
  44: generarQ_Direccion,
  45: generarTablaICE,
  46: generarEquilibrioEstimacion,

  /* Electroquímica */
  47: generarPotencialesEstandar,
  48: generarEcuacionCelda,
  49: generarAnodoCatodo,
  50: generarDeltaG,
  51: generarLeyesFaraday,
  52: generarMasaElectrolisis,

  /* Cinética */
  53: generarLeyVelocidad,
  54: generarOrdenReaccion,
  55: generarConstanteK,
  56: generarSemireaccion,
  57: generarGraficosCinética,

  /* Solubilidad */
  58: generarKsp,
  59: generarSolubilidadMolar,
  60: generarPrecipitacionQKsp,
  61: generarConcentracionMaximaPrecipitar,

  /* Coligativas */
  62: generarDescensoPuntoCongelacion,
  63: generarElevacionPuntoEbullicion,
  64: generarPresionOsmotica,
  65: generarFactorVanthoff,

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
